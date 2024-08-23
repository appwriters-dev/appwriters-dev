<script>
	import Share from '$lib/components/Share.svelte';
	import { siteLink } from '$lib/config';
	import Header from './header.svelte';

	export let day = 0;
	export let nextReleased = true;

	export let title;
	export let basePath;
	export let project;
</script>

<Header {title} subtitle="Day {day}" />

<div class="container">
	<slot />
	<p>
		<b>Enjoying? Tell your friends. </b><Share
			message="🎉 I'm having a blast on day {day} of my {project} journey! 🚀 You should definitely start your own journey too! 💪"
			url="{siteLink}/30days/{basePath}/day{day}"
		/>
	</p>
	<nav class="end-nav">
		{#if day > 1}
			<a href="/30days/{basePath}/day{day - 1}"><i class="icon-arrow-left" /> day {day - 1}</a>
		{:else}
			<div />
		{/if}
		{#if nextReleased && day < 30}
			<a href="/30days/{basePath}/day{day + 1}">day {day + 1} <i class="icon-arrow-right" /> </a>
		{/if}
		{#if day == 30}
			<a href="/30days/{basePath}/whats-next">What's Next? <i class="icon-arrow-right" /> </a>
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
		a {
			background: var(--primary);
			color: var(--white);
			padding: 0.5rem 1rem;
			border-radius: 4px;
			&:hover {
				text-decoration: none;
				background-color: var(--primaryDark);
			}
		}
	}
</style>
