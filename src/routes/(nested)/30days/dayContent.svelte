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
			<a href="/30days/flutter/day{day - 1}">previous</a>
		{:else}
			<div />
		{/if}
		{#if nextReleased && day < 30}
			<a href="/30days/flutter/day{day + 1}">next</a>
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
		h3 {
			color: var(--paper);
		}
		p {
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
	}
</style>
