<script lang="ts">
	import { base } from '$app/paths';
	const modules = import.meta.glob('../routes/posts/**');

	function formatISODate(isoDateString: string): string {
		// Define month names
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		// Split the ISO date string into components
		const [year, month, day] = isoDateString.split('-');

		// Convert month number to month name (1-indexed, so subtract 1)
		const monthName = monthNames[parseInt(month, 10) - 1];

		// Format the date as "Month Day, Year"
		return `${monthName} ${parseInt(day, 10)}, ${year}`;
	}

	type Post = {
		path: string;
		label: string;
		date: string;
	};

	const postRoutes = Object.keys(modules)
		.filter((path) => !path.includes('../routes/posts/+page.'))
		.map((path): Post => {
			const fileName = path.split('/')[3]; // 2024-06-95_name-of-article
			const [rawDate, name] = fileName.split('_');
			return {
				path: `${base}/posts/${fileName}`,
				label: name[0].toUpperCase() + name.slice(1).replaceAll('-', ' '),
				date: formatISODate(rawDate)
			};
		})
		.sort((a, b) => {
			const result = new Date(a.date).getTime() < new Date(b.date).getTime();
			return result ? 1 : -1;
		});
</script>

<slot />

<div class="post-link-container">
	{#each postRoutes as route}
		<a href={route.path}><p class="post-link"><strong>{route.label}</strong> - {route.date}</p></a>
	{/each}
</div>

<style>
	a {
		text-decoration: none;
	}

	.post-link {
		font-size: 1.1em;
		color: rgba(255, 255, 255, 0.5);
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 1em;
		padding-top: 1em;
		padding-left: 2em;
		margin: 0;
		font-weight: bold;
		transition: background-color 200ms;
		cursor: pointer;
		border-radius: 5px;
	}

	.post-link:last-child {
		border-bottom: none;
	}

	.post-link:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}

	.post-link > strong {
		color: white;
	}
</style>
