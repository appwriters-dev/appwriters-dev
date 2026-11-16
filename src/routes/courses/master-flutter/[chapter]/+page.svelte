<script>
	import CourseHero from '#lib/components/CourseHero.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<CourseHero
	back={{ href: '/courses/master-flutter', label: 'Master Flutter course' }}
	kicker="Chapter {data.chapter.number}"
	title={data.chapter.title}
	subtitle={data.chapter.description}
/>

<main id="main" tabindex="-1">
	<section class="post">
		{@html data.chapter.content}
	</section>

	<section class="lessons" aria-labelledby="lessons">
		<h2 id="lessons">Lessons in this chapter</h2>
		<ol>
			{#each data.chapter.lessons as lesson (lesson.id)}
				<li class="card card--link">
					<span class="number">{lesson.number}</span>
					<h3><a class="card__link" href={lesson.url}>{lesson.title}</a></h3>
					{#if lesson.description}<p>{lesson.description}</p>{/if}
				</li>
			{/each}
		</ol>
	</section>

	<nav class="end-nav" aria-label="Chapters">
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
</main>

<style lang="scss">
	.lessons {
		margin-top: 3rem;

		ol {
			list-style: none;
			padding: 0;
			margin: 0;
			display: grid;
			gap: 1rem;
		}

		li {
			margin: 0;
			gap: 0.35rem;
		}

		h3 {
			margin: 0;
			font-size: 1.15rem;
		}

		p {
			margin: 0;
			color: var(--muted);
			display: -webkit-box;
			-webkit-line-clamp: 3;
			line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}

	.number {
		font-family: var(--headingFont);
		font-weight: 800;
		color: var(--brand);
		font-size: 0.9rem;
	}
</style>
