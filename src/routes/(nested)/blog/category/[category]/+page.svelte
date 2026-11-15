<!-- Renders any page at /blog/category/* -->
<script>
	import BlogListing from '#lib/components/BlogListing.svelte';
	import { siteTitle } from '#lib/config.js';
	import SiteMetas from '#lib/components/SiteMetas.svelte';

	/** @type {{data: any}} */
	let { data } = $props();

	const { page, posts, category, total } = data;
</script>

<svelte:head>
	<title>{category} posts | {siteTitle}</title>
	<SiteMetas />
</svelte:head>

<BlogListing
	eyebrow="Category"
	title={category}
	subtitle="{total} {total === 1 ? 'post' : 'posts'}"
	{posts}
	currentPage={page}
	totalPosts={total}
	path="/blog/category/{category}/page"
/>
