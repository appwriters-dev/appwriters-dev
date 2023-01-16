<script>
	import { defaultCoverImage } from '$lib/config';

	export let posts = [];
</script>

<ul>
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					{#if post.coverImage}
						<img
							src={post.coverImage}
							alt=""
							width={post.coverWidth}
							height={post.coverHeight}
							style="ratio: {post.coverWidth} / {post.coverHeight}"
						/>
					{:else}
						<img alt="" src={defaultCoverImage} width="16" height="9" style="ratio: 16 / 9" />
					{/if}
					<h3>
						{post.title}
					</h3>
				</a>
			</article>

			<p>{post.excerpt}</p>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: grid;
		list-style: none;
		grid-template-columns: auto auto auto;
		gap: 20px;
	}
	img {
		height: 250px;
		object-fit: cover;
	}
</style>
