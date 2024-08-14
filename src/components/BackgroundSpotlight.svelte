<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	// Diagonal length of spotlight rectangle to avoid putting it below page end
	const DIAGONAL_LENGTH = Math.sqrt(Math.pow(200, 2) + Math.pow(200, 2));

	let topPosition = 0;
	let leftPosition = 0;
	let blurHeight = 0;
	let showBlob = false;

	const mouseMoveCallback = (event: MouseEvent) => {
		const PADDED_DIAGONAL_LENGTH = DIAGONAL_LENGTH * 1.4;

		const overflowOccurs = document.body.scrollHeight > window.innerHeight;

		const excedesScrollHeight = event.pageY + PADDED_DIAGONAL_LENGTH >= document.body.scrollHeight;
		const excedesScrollWidth = event.pageX + PADDED_DIAGONAL_LENGTH >= document.body.scrollWidth;

		const excedesWindowWidth = event.pageX + PADDED_DIAGONAL_LENGTH >= window.innerWidth;
		const excedesWindowHeight = event.pageY + PADDED_DIAGONAL_LENGTH >= window.innerHeight;

		if (excedesScrollHeight && overflowOccurs) {
			topPosition = document.body.scrollHeight - PADDED_DIAGONAL_LENGTH;
		} else if (excedesWindowHeight && !overflowOccurs) {
			topPosition = window.innerHeight - PADDED_DIAGONAL_LENGTH;
		} else {
			topPosition = event.pageY;
		}

		if (excedesScrollWidth && document.body.scrollWidth > window.innerWidth) {
			leftPosition = document.body.scrollWidth - PADDED_DIAGONAL_LENGTH;
		} else if (excedesWindowWidth) {
			leftPosition = window.innerWidth - PADDED_DIAGONAL_LENGTH;
		} else {
			leftPosition = event.pageX;
		}
	};

	const updateBlurHeight = () => {
		showBlob = false;
		setTimeout(() => {
			blurHeight =
				window.innerHeight > document.body.scrollHeight
					? window.innerHeight
					: document.body.scrollHeight;
			showBlob = true;
		}, 50);
	};

	onMount(async () => {
		[leftPosition, topPosition] = [window.innerWidth / 2, 0];
		document.addEventListener('mousemove', mouseMoveCallback);

		window.addEventListener('resize', updateBlurHeight);
		updateBlurHeight();
	});
	afterNavigate(updateBlurHeight);
</script>

<!-- TODO: Find a better way to track scroll height than this-->
<div class="blur" style="--blur-height: {blurHeight}px"></div>
{#if showBlob}
	<div
		class="blob"
		style="
  --left: {leftPosition}px;
  --top: {topPosition}px;
  "
	></div>
{/if}

<style>
	:root {
		--indigo: #4f46e5;
		--green: #93e69c;
	}

	.blob {
		width: 200px;
		height: 200px;
		background: linear-gradient(to right, var(--green), var(--indigo));
		animation: rotate ease-in-out 22s infinite;
		position: absolute;
		transition: left 10s ease-in-out;
		transition: right 10s ease-in-out;
		z-index: -2;
		opacity: 1;
		left: var(--left);
		top: var(--top);
	}

	.blur {
		z-index: -1;
		width: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: var(--blur-height);
		backdrop-filter: blur(200px);
	}

	@keyframes rotate {
		from {
			rotate: 0deg;
		}

		50% {
			scale: 1 1.66;
		}

		to {
			rotate: 360deg;
		}
	}

	@media (max-width: 800px) {
		.blob {
			display: none;
		}
		.blur {
			display: none;
		}
	}
</style>
