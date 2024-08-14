<script>
	import { base } from '$app/paths';
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer-container">
	<div class="left-section">
		<p>
			<a href={base + '/'}>Home</a>
			{' · '}
			<a href={base + '/blog'}>Blog</a>
			{' · '}
			<a href={base + '/portfolio'}>Portfolio</a>
			{' · '}
			<a href={base + '/about'}>About</a>
			{' · '}
			<a href={base + '/contact'}>Contact Me</a>
		</p>
		<p>Drop me an email: <a href="mailto:aydendiel@gmail.com">aydendiel@gmail.com</a></p>
		<p>
			(C) 2024-{currentYear} Ayden Diel |
			<a href="https://github.com/leiDnedyA/svelte-blog">Source code</a>
		</p>
	</div>
	<div class="right-section">
		<p>Follow me</p>
		<p><a href="https://www.linkedin.com/in/ayden-diel-9b0972191/">Linkedin</a></p>
		<p><a href="https://github.com/leiDnedyA/">GitHub</a></p>
	</div>
</footer>

<style>
	.footer-container {
		border-top: 1px solid var(--dark);
		margin-top: 2rem;
		padding-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
	}
</style>
