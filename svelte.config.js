import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@components': path.resolve('./src/components'),
					'@styles': path.resolve('./src/styles'),
					'@locales': path.resolve('./src/locales')
				}
			}
		}
	},

	preprocess: [preprocess({ postcss: true })]
};

export default config;
