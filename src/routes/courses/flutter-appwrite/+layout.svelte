<script>
	import { page } from '$app/stores';
	import VideoEmbed from '$lib/components/VideoEmbed.svelte';
	import Header from './header.svelte';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.metaDescription} />
	<meta name="keywords" content={$page.data.metaKeywords} />
	<meta name="author" content="Damodar Lohani" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content={$page.data.title} />
	<meta property="og:description" content={$page.data.metaDescription} />
	<meta name="twitter:title" content={$page.data.title} />
	<meta name="twitter:description" content={$page.data.metaDescription} />
</svelte:head>

<Header
	isMain={$page.data.lessonId == null}
	title={$page.data.title}
	subtitle={$page.data.subtitle}
/>

{#if $page.data.videoId}
	<VideoEmbed id={$page.data.videoId} background={$page.data.lessonId == null} />
{/if}

<slot />
