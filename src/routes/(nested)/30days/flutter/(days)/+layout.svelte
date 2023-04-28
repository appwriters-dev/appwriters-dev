<script>
	import DayContent from '../../dayContent.svelte';
	import Footer from '../footer.svelte';
	export let data;
</script>
<svelte:head>
	<title>Day {data.day}: {data.resources[data.day-1].title} | #30DaysMasterFlutter</title>
	<meta name="og:title" content="Day {data.day}: {data.resources[data.day-1].title} | #30DaysMasterFlutter" />
</svelte:head>
<DayContent day={data.day} nextReleased={data.nextReleased}>
	<slot />
</DayContent>
<Footer />
