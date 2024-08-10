<script>
	import {marked } from 'marked';
	import { onMount } from 'svelte';

	let html = '';

	onMount(async () => {
		const response = await fetch('/home.md');
		const md = await response.text();
console.log(md);
		html = await marked.parse(md);
	});

</script>

<h1><span class="tag dark expanded">💻</span></h1>

{@html html}
<link rel="stylesheet" href="/neat.css" />
<link rel="stylesheet" href="/custom.css" />
