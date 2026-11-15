<script>
	import { defaultCoverImage } from '#lib/config.js';

	/** @type {{post: any, headingLevel?: 'h2' | 'h3'}} */
	let { post, headingLevel = 'h3' } = $props();

	const date = $derived(
		post.date
			? new Date(post.date).toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
					timeZone: 'UTC'
				})
			: ''
	);
</script>

<article class="card card--link post-card">
	<div class="cover">
		<img
			src={post.coverImage ?? defaultCoverImage}
			alt=""
			loading="lazy"
			width={post.coverWidth ?? 16}
			height={post.coverHeight ?? 9}
		/>
	</div>
	<div class="body">
		<div class="meta">
			{#if post.categories?.length}
				<span class="tag">{post.categories[0]}</span>
			{/if}
			{#if date}
				<time datetime={post.date}>{date}</time>
			{/if}
		</div>
		<svelte:element this={headingLevel} class="title">
			<a class="card__link" href="/blog/{post.slug}">{post.title}</a>
		</svelte:element>
		{#if post.excerpt}
			<p>{post.excerpt}</p>
		{/if}
	</div>
</article>

<style>
	.post-card {
		padding: 0;
		overflow: hidden;
		width: 100%;
	}
	.cover {
		background: var(--surface-2);
		border-bottom: 1px solid var(--border);
	}
	img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}
	.body {
		padding: 1.25rem 1.35rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.8rem;
		color: var(--muted);
	}
	.title {
		margin: 0;
		font-size: 1.25rem;
		line-height: 1.25;
	}
	p {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
