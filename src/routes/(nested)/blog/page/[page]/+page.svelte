<!-- This file handles any /blog/page/x route for pagination -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { postsPerPage, siteDescription } from '$lib/config';
	import SiteMetas from '$lib/components/SiteMetas.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
	const { page, totalPosts, posts } = data;

	let lowerBound = $derived(page * postsPerPage - (postsPerPage - 1) || 1);
	let upperBound = $derived(Math.min(page * postsPerPage, totalPosts));
</script>

<svelte:head>
	<title>Blog - page {page}</title>
	<SiteMetas />
</svelte:head>

{#if posts.length}
	<h1>Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
	<Pagination currentPage={page} {totalPosts} />

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} />
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/blog">Back to blog</a>
{/if}
