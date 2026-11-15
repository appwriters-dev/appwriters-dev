<script>
	import BlogListing from '#lib/components/BlogListing.svelte';
	import { siteTitle } from '#lib/config.js';
	import SiteMetas from '#lib/components/SiteMetas.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | {siteTitle}</title>
	<SiteMetas />
</svelte:head>

<BlogListing
	title="Notes on building apps"
	subtitle="Tutorials and write-ups on Flutter, Dart and Appwrite. Browse by category or subscribe to the RSS feed."
	posts={data.posts}
	totalPosts={data.total}
/>

<p class="breakout more"><a href="/blog/category">Browse categories</a> · <a href="/api/rss.xml" data-sveltekit-reload>RSS feed</a></p>

<style>
	.more {
		color: var(--muted);
		font-size: 0.95rem;
	}
</style>
