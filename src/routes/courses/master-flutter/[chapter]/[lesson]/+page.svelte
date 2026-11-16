<script>
	import CourseHero from '#lib/components/CourseHero.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<CourseHero
	back={{ href: data.chapter.url, label: `Chapter ${data.chapter.number}: ${data.chapter.title}` }}
	kicker="Lesson {data.lesson.number}"
	title={data.lesson.title}
/>

<main id="main" tabindex="-1">
	<section class="post">
		{@html data.lesson.content}
	</section>

	<nav class="end-nav" aria-label="Lessons">
		{#if data.previous}
			<a href={data.previous.url}
				><i class="icon-arrow-left" aria-hidden="true"></i> {data.previous.title}</a
			>
		{:else}
			<span></span>
		{/if}
		{#if data.next}
			<a href={data.next.url}>{data.next.title} <i class="icon-arrow-right" aria-hidden="true"></i></a>
		{/if}
	</nav>

	<aside class="callout">
		<p>
			You are taking <strong>Master Flutter</strong>, a free, project-based course to learn Dart and
			Flutter. <a href="/courses/master-flutter">See the full curriculum</a>.
		</p>
	</aside>
</main>
