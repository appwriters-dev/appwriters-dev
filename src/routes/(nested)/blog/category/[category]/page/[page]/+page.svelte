<!-- Renders posts listed by category -->
<script>
	import BlogListing from '#lib/components/BlogListing.svelte';
	import { postsPerPage, siteTitle } from '#lib/config.js';
	import SiteMetas from '#lib/components/SiteMetas.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
	const { page, category, totalPosts, posts } = data;

	let lowerBound = $derived(page * postsPerPage - (postsPerPage - 1) || 1);
	let upperBound = $derived(Math.min(page * postsPerPage, totalPosts));
</script>

<svelte:head>
	<title>{category} posts, page {page} | {siteTitle}</title>
	<SiteMetas />
</svelte:head>

<BlogListing
	eyebrow="Category"
	title={category}
	subtitle="Posts {lowerBound}–{upperBound} of {totalPosts}"
	{posts}
	currentPage={page}
	{totalPosts}
	path="/blog/category/{category}/page"
/>
