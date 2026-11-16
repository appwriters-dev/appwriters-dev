<script>
	import { page } from '$app/state';
	import { siteLink, siteTitle } from '#lib/config.js';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	/** Each page's load returns `seo: { title, description, path, markdown?, jsonLd? }`. */
	const seo = $derived(page.data.seo ?? {});
	const url = $derived(siteLink + (seo.path ?? page.url.pathname));
</script>

<svelte:head>
	<title>{seo.title} | {siteTitle}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={page.data.keywords} />
	<meta name="author" content="Damodar Lohani, Ambika Dulal" />
	<link rel="canonical" href={url} />
	{#if seo.markdown}
		<link rel="alternate" type="text/markdown" title="This page as Markdown" href={seo.markdown} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={url} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	{#if seo.jsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c')}</script>`}
	{/if}
</svelte:head>

{@render children?.()}
