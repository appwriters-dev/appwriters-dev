<!-- The shared body of every blog listing page: heading, category links, posts and pagination. -->
<script>
	import PostsList from './PostsList.svelte';
	import Pagination from './Pagination.svelte';

	/** @type {{title: string, subtitle?: string, eyebrow?: string, posts: any[], currentPage?: number, totalPosts?: number, path?: string}} */
	let {
		title,
		subtitle = '',
		eyebrow = 'Blog',
		posts,
		currentPage = 1,
		totalPosts = posts.length,
		path = '/blog/page'
	} = $props();
</script>

<div class="breakout">
	<header class="page-head">
		<span class="eyebrow">{eyebrow}</span>
		<h1>{title}</h1>
		{#if subtitle}<p>{subtitle}</p>{/if}
	</header>

	{#if posts?.length}
		<PostsList {posts} />
		<Pagination {currentPage} {totalPosts} {path} />
	{:else}
		<p>Sorry, there are no posts to show here.</p>
		<p><a href="/blog">Back to the blog</a></p>
	{/if}
</div>
