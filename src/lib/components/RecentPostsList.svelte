<script>
	import { defaultCoverImage } from '$lib/config';

	export let posts = [];
</script>

<ul>
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<img
						src={post.coverImage ?? defaultCoverImage}
						alt=""
						width={post.coverWidth ?? 16}
						height={post.coverHeight ?? 9}
						style="ratio: {post.coverWidth ?? 16} / {post.coverHeight ?? 9}"
					/>
					<h3>
						{post.title}
					</h3>
				</a>
				<p>{post.excerpt}</p>
			</article>

		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: flex;
		list-style: none;
		gap: 20px;
		flex-wrap: wrap;
		li {
			flex-basis: 300px;
			display: flex;
			flex-grow: 1;
		}
	}
	img {
		height: 250px;
		object-fit: cover;
	}
</style>
