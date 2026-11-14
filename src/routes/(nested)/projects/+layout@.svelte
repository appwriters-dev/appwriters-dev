<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<main id="main" tabindex="-1">
	{@render children?.()}
</main>

<style lang="scss">
	main {
		max-width: 100%;
		width: 100%;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
</style>
