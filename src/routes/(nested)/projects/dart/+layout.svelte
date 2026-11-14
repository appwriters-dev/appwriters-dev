<script>
	import JoinDiscussion from './joinDiscussion.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

{@render children?.()}

<JoinDiscussion />
