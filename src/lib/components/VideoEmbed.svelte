<script>
	/**
	 * @type {string}
	 */
	export let id;

	/**
	 * @type {boolean}
	 */
	export let background = true;
</script>

<div class={background ? 'background' : ''}>
	<div class="player-wrapper">
		<div class="player">
			<iframe
				title="player"
				src="https://www.youtube.com/embed/{id}"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</div>
</div>

<style lang="scss">
	.background {
		background-color: var(--black);
		padding: 4rem;
	}
	.player-wrapper {
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
	}
	:global(.player) {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%;
		margin-bottom: var(--ifm-paragraph-margin-bottom);
	}

	:global(.player > iframe) {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
	}
</style>
