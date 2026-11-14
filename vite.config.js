import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { sveltePreprocess } from 'svelte-preprocess';
import { defineConfig } from 'vite';
import headings from './src/lib/assets/js/getHeadings.js';

export default defineConfig({
	plugins: [
		sveltekit({
			// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
			extensions: ['.svelte', '.md'],

			preprocess: [
				sveltePreprocess({
					// Svelte 5 compiles <script lang="ts"> itself. Transpiling it here would drop
					// imports that only the markup uses (such as stores read with $store).
					typescript: false,
					scss: {
						// Ensures Sass variables are always available inside component <style> blocks as vars.$variableDefinedInFile
						prependData: `@use 'src/lib/assets/scss/vars';`
					}
				}),
				mdsvex({
					// The default mdsvex extension is .svx; this overrides that.
					extensions: ['.md'],

					// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
					remarkPlugins: [headings],
					rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
				})
			],

			adapter: adapter(),
			prerender: {
				// '*' means every static route; paginated and category pages are found by crawling links.
				// (Entries like '/blog/page/*' are not wildcards: they prerendered literal '*' pages,
				// which also cannot be written as files on Windows.)
				entries: ['*'],
				// Three prerenderable routes are not linked from any page (/api/posts/page/[page],
				// /blog/category/page/[page], /blog/category/[category]/page). They were never
				// prerendered with real content; report them instead of failing the build.
				handleUnseenRoutes: 'warn'
			}
		})
	],
	server: {
		fs: {
			allow: ['.']
		}
	}
});
