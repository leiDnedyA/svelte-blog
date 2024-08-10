<script>
	import snarkdown from 'snarkdown';
	import { onMount } from 'svelte';

	let html = '';

	onMount(async () => {
		const response = await fetch('/home.md');
		const md = await response.text();
console.log(md);
		html = snarkdown(md);
	});

</script>

{@html html}
<link rel="stylesheet" href="/neat.css" />
