<script>
	export let day = 0;
	export let nextReleased = true;
</script>

<div class="header">
	<a href="/30days/flutter">Index</a>
	<p>Day {day}</p>
</div>

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
