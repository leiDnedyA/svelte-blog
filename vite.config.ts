import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), MDHmr()]
});

function MDHmr() {
	return {
		name: 'md-hmr',
		enforce: 'post' as const,
		handleHotUpdate({ file, server }: any) {
			if (file.endsWith('.md')) {
				server.ws.send({
					type: 'full-reload',
					path: '*'
				});
			}
		}
	};
}
