import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // ← this enables SPA mode
			precompress: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/KangsBook' : ''
		},
		prerender: {
			entries: [] // ← prevents errors by not trying to pre-render routes
		}
	}
};

export default config;
