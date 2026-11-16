<script>
	import DayContent from '../../dayContent.svelte';
	import Footer from '../footer.svelte';
	/** @type {{data: any, children?: import('svelte').Snippet}} */
	let { data, children } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.metaDescription} />
	<meta name="keywords" content={data.metaKeywords} />
	<meta name="author" content="Damodar Lohani" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.metaDescription} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.metaDescription} />
	<link rel="alternate" type="text/markdown" title="This day as Markdown" href="/30days/flutter/day{data.day}.md" />
</svelte:head>

<DayContent
	title="#30DaysMasterFlutter"
	basePath="flutter"
	project="#30DaysMasterFlutter"
	day={data.day}
	dayTitle={data.dayTitle}
	nextTitle={data.nextTitle}
	deeper={data.deeper}
	nextReleased={data.nextReleased}
>
	{@render children?.()}
</DayContent>
<Footer />

