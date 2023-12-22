<script>
	import Share from '$lib/components/Share.svelte';
	import { siteLink } from '$lib/config';
	import Header from './header.svelte';

	export let day = 0;
	export let nextReleased = true;

	/**
	 * @type {string}
	 */
	 export let title;
	 /** @type {string} */
	export let basePath;
	/** @type {string} */
	export let project;
</script>

<Header {title} subtitle="Project {day}" />

<div class="container">
	<slot />
	<p>
		<b>Enjoying? Tell your friends. </b>
		<Share
			message="🎉 I'm having a blast on Dart challenge, learning by building {project}! 🚀 You should definitely start your own journey too! 💪"
			url="{siteLink}/projects/{basePath}/project{day}"
		/>
	</p>
	<nav class="end-nav">
		{#if day > 1}
			<a href="/projects/{basePath}/project{day - 1}"><i class="icon-arrow-left" /> project {day - 1}</a>
		{:else}
			<div />
		{/if}
		{#if nextReleased && day < 15}
			<a href="/projects/{basePath}/project{day + 1}">project {day + 1} <i class="icon-arrow-right" /> </a>
		{/if}
		<!-- {#if day == 30}
			<a href="/projects/{basePath}/whats-next">What's Next? <i class="icon-arrow-right" /> </a>
		{/if} -->
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
