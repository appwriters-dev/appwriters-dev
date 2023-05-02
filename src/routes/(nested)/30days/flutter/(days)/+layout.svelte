<script>
	import DayContent from '../../dayContent.svelte';
	import Footer from '../footer.svelte';
	export let data;
</script>
<svelte:head>
	<title>Day {data.day}: {data.resources[data.day-1].title} | #30DaysMasterFlutter</title>
	<meta property="og:title" content="Day {data.day}: {data.resources[data.day-1].title} | #30DaysMasterFlutter" />
	<meta name="twitter:title" content="Day {data.day}: {data.resources[data.day-1].title} | #30DaysMasterFlutter" />
</svelte:head>
<DayContent day={data.day} nextReleased={data.nextReleased}>
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