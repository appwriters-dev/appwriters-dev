<script>
	import DayContent from '../../dayContent.svelte';
    export let data; 
</script>

<DayContent day={data.day} nextReleased={data.nextReleased}>
	<slot />
</DayContent>
