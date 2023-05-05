<script>
	export let day = 0;
	export let nextReleased = true;
</script>

<header>
	<h3>#30DaysMasterFlutter</h3>
	<p>Day {day}</p>
</header>

<div class="container">
	<slot />
	<nav class="end-nav">
		{#if day > 1}
			<a href="/30days/flutter/day{day - 1}"><i class="icon-arrow-left" /> day {day -1}</a>
		{:else}
			<div />
		{/if}
		{#if nextReleased && day < 30}
			<a href="/30days/flutter/day{day + 1}">day {day+1} <i class="icon-arrow-right" /> </a>
		{/if}
		{#if day == 30}
			<a href="/30days/flutter/whats-next">What's Next? <i class="icon-arrow-right" /> </a>
		{/if}
	</nav>
</div>

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
			content: "";
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
	.container {
		width: 100%;
		max-width: 42rem;
		margin: 1rem auto;
		padding: 0 1rem;
	}
	nav {
		display: flex;
		justify-content: space-between;
		a {
			background: var(--primary);
			color: var(--paper);
			padding: 0.5rem 1rem;
			border-radius: 4px;
			&:hover {
				text-decoration: none;
				background-color: var(--dark);
			}
		}
	}
</style>
