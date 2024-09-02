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
		<p class="post-link"><a href={route.path}>{route.label}</a> - {route.date}</p>
	{/each}
</div>

<style>
	.post-link {
		font-size: 1.1em;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 1em;
		padding-left: 2em;
	}

	.post-link > a {
		text-decoration: none;
		font-weight: bold;
		color: var(white);
		transition: color 150ms;
		cursor: pointer;
	}

	.post-link > a:hover {
		color: var(--link);
	}

	.post-link:last-child {
		border-bottom: none;
		padding-bottom: unset;
	}
</style>
