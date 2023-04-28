<script>
	import DayContent from '../../dayContent.svelte';
	import Footer from '../footer.svelte';
	export let data;
</script>

<DayContent day={data.day} nextReleased={data.nextReleased}>
	<slot />
</DayContent>
<Footer />
