<script>
	import { page } from '$app/state';
	import VideoEmbed from '#lib/components/VideoEmbed.svelte';
	import CourseHero from '#lib/components/CourseHero.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<title>{page.data.title}</title>
	<meta name="description" content={page.data.metaDescription} />
	<meta name="keywords" content={page.data.metaKeywords} />
	<meta name="author" content="Damodar Lohani" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content={page.data.title} />
	<meta property="og:description" content={page.data.metaDescription} />
	<meta name="twitter:title" content={page.data.title} />
	<meta name="twitter:description" content={page.data.metaDescription} />
	{#if page.data.lessonId}
		<link
			rel="alternate"
			type="text/markdown"
			title="This lesson as Markdown"
			href="/courses/flutter-appwrite/{page.data.lessonId}.md"
		/>
	{/if}
</svelte:head>

<CourseHero
	isMain={page.data.lessonId == null}
	eyebrow="Free course · Flutter + Appwrite"
	back={{ href: '/courses/flutter-appwrite', label: 'Flutter & Appwrite course' }}
	title={page.data.title}
	subtitle={page.data.subtitle}
/>

{#if page.data.videoId}
	<div class="wrap video" class:narrow={page.data.lessonId != null}>
		<VideoEmbed id={page.data.videoId} background={false} />
	</div>
{/if}

{@render children?.()}

<style>
	.video {
		margin-top: 2rem;
	}
</style>
