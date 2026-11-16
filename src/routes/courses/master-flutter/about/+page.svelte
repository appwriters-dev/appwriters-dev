<script>
	import CourseHero from '#lib/components/CourseHero.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<CourseHero
	back={{ href: '/courses/master-flutter', label: 'Master Flutter course' }}
	title="About Master Flutter"
/>

<main id="main" tabindex="-1">
	<!-- The Markdown starts with its own "# About Master Flutter"; the hero above already says it. -->
	<section class="post about">
		{@html data.content}
	</section>
</main>

<style>
	.about :global(h1:first-child) {
		display: none;
	}
</style>
