<script>
    export let title;
    export let subtitle;
</script>
<header>
	<h3>{title}</h3>
	<p>{subtitle}</p>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: var(--accent);
		color: var(--paper);
		margin-bottom: 2rem;
		padding: 2rem;
		margin-top: -70px;
		padding-top: 70px;
		background: url('/images/30days/flutter_day_header_bg.jpg') no-repeat bottom left;
		background-size: cover;
		position: relative;
		box-sizing: border-box;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			background-color: #111111cc;
			z-index: -0;
		}
		h3 {
			z-index: 100;
			color: var(--paper);
		}
		p {
			z-index: 100;
			text-transform: uppercase;
			font-weight: 500;
		}
	}
</style>