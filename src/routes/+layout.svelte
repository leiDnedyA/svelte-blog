<script>
	import { base } from '$app/paths';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import BackgroundSpotlight from '../components/BackgroundSpotlight.svelte';
</script>

<link rel="stylesheet" href={`${base}/neat.css`} />
<link rel="stylesheet" href={`${base}/custom.css`} />

<div class="container">
	<div class="inner-container">
		<Navbar />
		<slot />
	</div>
	<Footer />
</div>

<BackgroundSpotlight />

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.inner-container {
		flex: 1 1 auto;
	}
</style>
