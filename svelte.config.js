import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const production = process.env.NODE_ENV === 'production';
const config = {
	kit: {
		paths: {
			base: production ? '/svelte-tailwind' : ''
		},
		appDir: 'app',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: 'body',
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
