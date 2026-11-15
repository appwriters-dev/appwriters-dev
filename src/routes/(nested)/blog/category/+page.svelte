<script>
	import SiteMetas from '#lib/components/SiteMetas.svelte';
	import { siteTitle } from '#lib/config.js';

	/** @type {{data: any}} */
	let { data } = $props();
	const { uniqueCategories } = data;
</script>

<svelte:head>
	<title>Blog categories | {siteTitle}</title>
	<SiteMetas />
</svelte:head>

<header class="page-head">
	<span class="eyebrow">Blog</span>
	<h1>Categories</h1>
	<p>Every topic on the blog, with how many posts each has.</p>
</header>

<ul class="categories">
	{#each uniqueCategories as category (category.title)}
		<li>
			<a href="/blog/category/{category.title}">
				<span>{category.title}</span>
				<span class="count">{category.count}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	.categories {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}
	li {
		margin: 0;
	}
	a {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.5rem 0.6rem 0.5rem 1rem;
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-pill);
		color: var(--text);
		font-weight: 700;
		text-decoration: none;
	}
	a:hover {
		border-color: var(--brand);
	}
	.count {
		min-width: 1.75rem;
		padding: 0 0.45rem;
		border-radius: var(--radius-pill);
		background: var(--surface-2);
		color: var(--muted);
		font-size: 0.8rem;
		text-align: center;
	}
</style>
