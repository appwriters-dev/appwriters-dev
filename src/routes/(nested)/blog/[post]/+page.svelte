<script>
	import { page } from '$app/stores';
	import Share from '$lib/components/Share.svelte';
	import { siteAuthor, siteLink, siteTitle } from '$lib/config';

	export let data;

	const {
		title,
		excerpt,
		date,
		updated,
		coverImage,
		coverWidth,
		coverHeight,
		categories,
		slug,
		keywords
	} = data.meta;
</script>

<svelte:head>
	<title>{title} | {siteTitle}</title>

	<meta data-key="description" name="description" content={excerpt} />
	<meta name="author" property="og:author" content={siteAuthor} />
	<meta name="image" property="og:image" content="{siteLink}{coverImage}" />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<meta property="og:url" content="{siteLink}/blog/{slug}" />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={excerpt} />
	<meta name="twitter:image" content="{siteLink}{coverImage}" />
</svelte:head>

<article class="post">
	{#if coverImage}
	<img
		class="cover-image"
		src={coverImage}
		alt="{title}"
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>
	{/if}

	<h1>{title}</h1>

	{#if categories}
		<aside class="post-footer">
			<ul>
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}/">
							#{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}

	{#if date}
		<div class="meta">
			<b>Published:</b>
			{new Date(date).toDateString()}

			{#if updated}
				<br />
				<b>Updated:</b>
				{updated}
			{/if}
		</div>
	{/if}

	{@html data.postContent}
	
	<p> <b>Enjoyed? Tell your friends.</b> <Share url="{siteLink}/blog/{$page.params.post}" message={excerpt} /> </p>
</article>

<style lang="scss">
	:global(.player) {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%;
		margin-bottom: var(--ifm-paragraph-margin-bottom);
	}

	:global(.player > iframe) {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
	}
</style>
