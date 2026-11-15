<script>
	import PostCard from './PostCard.svelte';

	/** @type {{posts?: any[]}} */
	let { posts = [] } = $props();
</script>

<ul class="grid post-grid">
	{#each posts as post (post.slug)}
		<li><PostCard {post} /></li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		margin: 0;
		display: flex;
	}
</style>
