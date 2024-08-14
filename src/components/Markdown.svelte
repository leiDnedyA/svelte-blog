<script lang="ts">
  export let src: string;
	import { marked } from 'marked';
	import { onMount } from 'svelte';
  import { base } from '$app/paths';

	let html = '';

	onMount(async () => {
		const response = await fetch(base + src);
		const md = await response.text();
		html = await marked.parse(md);
	});
</script>

{@html html}
