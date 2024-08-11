<script lang="ts">
  export let src: string;
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	let html = '';

	onMount(async () => {
		const response = await fetch(src);
		const md = await response.text();
		html = await marked.parse(md);
	});
</script>

{@html html}
