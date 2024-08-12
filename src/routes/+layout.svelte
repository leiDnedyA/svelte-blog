<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<link rel="stylesheet" href="/neat.css" />
<link rel="stylesheet" href="/custom.css" />

<Navbar />

<h1 class="main-header"><span class="tag dark expanded">💻</span></h1>

<slot />

<style>
	.main-header {
		display: flex;
		width: 100%;
		justify-content: center;
	}
</style>
