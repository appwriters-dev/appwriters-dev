<script>
	import SiteMetas from "$lib/components/SiteMetas.svelte";

	/** @type {{data: any}} */
	let { data } = $props();
	const { uniqueCategories } = data;
</script>

<svelte:head>
	<title>Blog | Categories</title>
	<SiteMetas />
</svelte:head>

<div class="compressed-content">
	<h1 class="h2">All blog categories</h1>

	<ul>
		{#each uniqueCategories as category}
			<li>
				<a href="/blog/category/{category.title}">
					{category.title}
				</a>
				({category.count})
			</li>
		{/each}
	</ul>
</div>
