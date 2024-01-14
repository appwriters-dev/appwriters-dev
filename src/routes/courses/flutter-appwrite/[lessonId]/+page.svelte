<script>
	export let data;
</script>

<main id="main">
	<section>
		{@html data.content}
	</section>
	<nav class="end-nav">
		{#if data.previous}
			<a href="/courses/flutter-appwrite/{data.previous?.id}"><i class="icon-arrow-left" /> previous</a>
		{:else}
			<div />
		{/if}
		{#if data.next}
			<a href="/courses/flutter-appwrite/{data.next?.id}">next <i class="icon-arrow-right" /> </a>
		{:else}
			<div />
		{/if}
	</nav>
	<a href="/courses/flutter-appwrite">Back</a>
</main>

<style lang="scss">
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
				background-color: var(--primaryDark);
			}
		}
	}
</style>
