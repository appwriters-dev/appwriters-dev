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

<div class="hero {isMain ? 'main' : ''}">
	<h1>{title}</h1>
	<p>{@html subtitle}</p>
</div>

<style lang="scss">
	.hero {
		width: 100%;
		padding: 4rem;
		color: var(--ink);
		&.main {
			text-align: center;
			background-color: var(--accent);
			color: var(--white);

			h1 {
				color: var(--white);
				max-width: 64rem;
			}
			p {
				max-width: 64rem;
			}
		}
		h1 {
			color: var(--ink);
			padding: 0;
			margin: 0 auto;
			max-width: 42rem;
			&::after {
				content: none;
			}
		}
		p {
			max-width: 42rem;
			margin: 1rem auto;
		}
	}
</style>
