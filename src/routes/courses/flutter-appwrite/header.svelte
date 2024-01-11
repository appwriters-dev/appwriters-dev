<script>
	/**
	 * @type {string}
	 */
	export let title;
	/**
      * @type {string}
      
      */
	export let subtitle;
</script>

<div class="hero">
	<h1>{title}</h1>
	<p>{subtitle}</p>
</div>

<style lang="scss">
	.hero {
		text-align: center;
		width: 100%;
		padding: 4rem;
		background-color: var(--accent);
		color: var(--paper);
		h1 {
			max-width: 64rem;
			color: var(--paper);
			padding: 0;
			margin: 0 auto;
			&::after {
				content: none;
			}
		}
		p {
			max-width: 64rem;
			margin: 1rem auto;
		}
	}
</style>
