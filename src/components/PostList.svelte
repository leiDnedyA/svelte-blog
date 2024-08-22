<script>
  import { base } from '$app/paths';
	const modules = import.meta.glob('../routes/posts/**');

	const postRoutes = Object.keys(modules)
		.filter((path) => !path.includes('../routes/posts/+page.'))
		.map((path) => {
			const name = path.split('/')[3];
			return {
				path: `${base}/posts/${name}`,
				label: name[0].toUpperCase() + name.slice(1).replaceAll('-', ' ')
			};
		});

	console.log(modules, postRoutes);
</script>

<slot />

<ol>
	{#each postRoutes as route}
		<li><a href={route.path}>{route.label}</a></li>
	{/each}
</ol>
