<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteTitle } from '$lib/config';
	import SiteMetas from '$lib/components/SiteMetas.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | {siteTitle}</title>
	<SiteMetas />
</svelte:head>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />
