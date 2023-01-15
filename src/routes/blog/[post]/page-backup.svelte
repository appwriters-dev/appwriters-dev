<script>
	import { siteTitle } from "$lib/config";
	import { json } from "@sveltejs/kit";


export let data

const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta

const slugify = (title) => title.replace(/\s+/g, '-')
								.replace(/[/\\?%*`,'’:|"<>]/g, '')
								.toLowerCase()
</script>


<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title} | {siteTitle}</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>


<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<img
		class="cover-image"
		src="{coverImage}"
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>

	<h1>{ title }</h1>
	
	{#if date}
	<div class="meta">
		<b>Published:</b> {date}
		
		{#if updated}
		<br>
		<b>Updated:</b> {updated}
		{/if}
	</div>
	{/if}

	{@html data.postContent}

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in: </h2>
			<ul>
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}/">
							{ category }
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article> 

{#if data.meta.headings}
<aside class="toc">
	<nav class="toc">
		{#each data.meta.headings as heading}
			<a href="#{slugify(heading.title)}">{heading.title}</a>
		{/each}
	</nav>
</aside>
{/if}