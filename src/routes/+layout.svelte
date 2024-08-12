<script>
	import Navbar from '../components/Navbar.svelte';
	import BackgroundSpotlight from '../components/BackgroundSpotlight.svelte';
</script>

<link rel="stylesheet" href="/neat.css" />
<link rel="stylesheet" href="/custom.css" />

<Navbar />

<h1 class="main-header"><span>💻</span></h1>

<slot />
<BackgroundSpotlight />

<style>
	.main-header {
		display: flex;
		width: 100%;
		justify-content: center;
	}
</style>
