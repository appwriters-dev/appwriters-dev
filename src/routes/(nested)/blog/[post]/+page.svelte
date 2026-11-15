<script>
	import { page } from '$app/state';
	import Share from '#lib/components/Share.svelte';
	import { siteAuthor, siteAuthorURL, siteLink, siteTitle } from '#lib/config.js';

	/** @type {{data: any}} */
	let { data } = $props();

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

	const url = `${siteLink}/blog/${slug}`;

	/** @param {string | undefined} value */
	const formatDate = (value) =>
		value
			? new Date(value).toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					timeZone: 'UTC'
				})
			: '';

	// About 220 words a minute, counting the text of the rendered post.
	const minutes = Math.max(
		1,
		Math.round(
			String(data.postContent ?? '')
				.replace(/<[^>]+>/g, ' ')
				.split(/\s+/)
				.filter(Boolean).length / 220
		)
	);

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: title,
		description: excerpt,
		datePublished: date,
		...(updated ? { dateModified: updated } : {}),
		...(coverImage ? { image: `${siteLink}${coverImage}` } : {}),
		...(keywords ? { keywords } : {}),
		url,
		mainEntityOfPage: url,
		author: { '@type': 'Person', name: siteAuthor, url: siteAuthorURL },
		publisher: { '@type': 'Organization', name: siteTitle, url: siteLink }
	}).replace(/</g, '\\u003c');
</script>

<svelte:head>
	<title>{title} | {siteTitle}</title>

	<meta data-key="description" name="description" content={excerpt} />
	<meta name="author" content={siteAuthor} />
	<link rel="canonical" href={url} />
	<link rel="alternate" type="text/markdown" title="This post as Markdown" href="/blog/{slug}.md" />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:url" content={url} />
	{#if coverImage}
		<meta property="og:image" content="{siteLink}{coverImage}" />
		<meta name="twitter:image" content="{siteLink}{coverImage}" />
	{/if}
	{#if date}
		<meta property="article:published_time" content={date} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={excerpt} />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<article class="post">
	<a class="back" href="/blog">← All posts</a>

	{#if categories?.length}
		<ul class="tags">
			{#each categories as category (category)}
				<li><a href="/blog/category/{category}/">{category}</a></li>
			{/each}
		</ul>
	{/if}

	<h1>{title}</h1>

	<div class="meta">
		<span>By <a href={siteAuthorURL} rel="author noreferrer">{siteAuthor}</a></span>
		{#if date}
			<span>Published <time datetime={date}>{formatDate(date)}</time></span>
		{/if}
		{#if updated}
			<span>Updated <time datetime={updated}>{formatDate(updated)}</time></span>
		{/if}
		<span>{minutes} min read</span>
		<a class="md-link" href="/blog/{slug}.md" data-sveltekit-reload>View as Markdown</a>
	</div>

	{#if coverImage}
		<img
			class="cover-image"
			src={coverImage}
			alt=""
			style="aspect-ratio: {coverWidth} / {coverHeight};"
			width={coverWidth}
			height={coverHeight}
		/>
	{/if}

	<div class="content">
		{@html data.postContent}
	</div>

	<footer class="post-end">
		<p><strong>Enjoyed this? Pass it on.</strong></p>
		<Share url="{siteLink}/blog/{page.params.post}" message={excerpt} />
	</footer>
</article>

<style lang="scss">
	.back {
		display: inline-block;
		font-size: 0.9rem;
		font-weight: 700;
		margin-bottom: 1.75rem;
		color: var(--muted);

		&:hover {
			color: var(--text);
		}
	}

	.tags {
		margin-bottom: 1rem;
	}

	.md-link {
		margin-left: auto;
		color: var(--muted);
		text-decoration: underline;
	}

	.content {
		:global(img) {
			border: 1px solid var(--border);
		}
	}

	.post-end {
		margin-top: 3.5rem;
		padding: 1.5rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--surface);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		p {
			margin: 0;
		}
	}

	:global(.player) {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%;
		margin-bottom: 1.5rem;
	}

	:global(.player > iframe) {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		border-radius: var(--radius-sm);
	}
</style>
