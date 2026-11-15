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
	<link rel="alternate" type="text/markdown" title="This project as Markdown" href="/projects/dart/project{data.day}.md" />
</svelte:head>

<DayContent 
	title="#DartProjects"
	basePath="dart"
	project="#DartProjects"
	day={data.day}  nextReleased={data.nextReleased}>
	{@render children?.()}
</DayContent>
<Footer />

