<script>
	import { page } from '$app/stores';
	import Header from './header.svelte';
	import Video from './video.svelte';
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

<Header title={$page.data.title} subtitle={$page.data.subtitle} />

{#if $page.data.videoId}
	<Video id={$page.data.videoId} />
{/if}

<slot />
