<script lang="ts">
	interface Route {
		label: string;
		path: string;
	}
	const routes: Route[] = [
		{
			label: 'Home',
			path: '/'
		},
		{
			label: 'About',
			path: '/about'
		},
		{
			label: 'Blog',
			path: '/blog'
		},
		{
			label: 'Portfolio',
			path: '/portfolio'
		},
		{
			label: 'Contact',
			path: '/contact'
		}
	];
</script>

<div class="navbar-container">
	{#each routes as route}
		<a href={route.path}>{route.label}</a>
	{/each}
</div>

<style>
	.navbar-container {
		display: flex;
		flex-direction: row;
		gap: 8px;
		font-size: 1.2em;
		width: 100%;
		text-align: center;
		margin-top: 2rem;
		margin-bottom: 2rem;
		justify-content: center;
	}

	.navbar-container > a {
		text-decoration: none;
		font-weight: bold;
		transition: color 150ms;
	}

	.navbar-container > a:hover {
		color: orangered;
	}
</style>
