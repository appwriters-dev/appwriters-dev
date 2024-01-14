<script>
	/**
	 * @type {string}
	 */
	export let title;
	/**
      * @type {string}
      
      */
	export let subtitle;

	/**
	 * @type {boolean}
	 */
	export let isMain = false;
</script>

<div class="hero {isMain ? 'main': ''}">
	<h1>{title}</h1>
	<p>{@html subtitle}</p>
</div>

<style lang="scss">
	.hero {
		text-align: center;
		width: 100%;
		padding: 4rem;
		background-color: var(--backgroundDark);
		color: var(--ink);
		&.main {
			background-color: var(--accent);
			color: var(--paper);

			h1 {
				color: var(--paper);
			}
		}
		h1 {
			max-width: 64rem;
			color: var(--ink);
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
