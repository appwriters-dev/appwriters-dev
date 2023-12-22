<script>
	import DayContent from '../../dayContent.svelte';
	import Footer from '../footer.svelte';
	export let data;
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
</svelte:head>

<DayContent 
	title="#DartProjects"
	basePath="dart"
	project="#DartProjects"
	day={data.day}  nextReleased={data.nextReleased}>
	<slot />
</DayContent>
<Footer />

<style lang="scss">
	:global(blockquote) {
		background-color: var(--accent);
		padding: 1rem 2rem;
		color: var(--paper);
	}
	:global(blockquote a) {
		color: var(--paper);
		text-decoration: underline;
	}
	:global(blockquote ul ::marker) {
		color: white;
	}
</style>