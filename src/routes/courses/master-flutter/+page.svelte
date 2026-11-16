<script>
	import CourseHero from '#lib/components/CourseHero.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
	const first = $derived(data.chapters[0]);
</script>

<CourseHero
	isMain
	eyebrow="Free course · Dart + Flutter"
	title="Master Flutter"
	subtitle={data.course.subtitle}
/>

<main id="main" tabindex="-1" class="course">
	<section class="intro narrow">
		<div class="button-row">
			<a class="button" href={first.url}>Start with chapter 1</a>
			<a class="button button--ghost" href="#curriculum">See all {data.lessonCount} lessons</a>
		</div>
		<h2>How it works</h2>
		<p>
			Every lesson gives you a short explanation, links to the best resources on the topic, and a
			few <strong>projects</strong> to build. You learn by writing the code yourself, so take your
			time: there is no deadline, and you can repeat any project until it clicks.
		</p>
		<p>
			Start at chapter 1 even if you have programmed before. The first four chapters teach Dart, the
			language Flutter apps are written in. Chapters 5 to 10 build on it with Flutter: layouts,
			design, interactivity, assets, navigation and plugins.
		</p>
		<p class="muted">
			Written by Damodar Lohani and Ambika Dulal. Formerly at flutterforbeginner.com.
			<a href="/courses/master-flutter/about">About and credits</a>.
		</p>
	</section>

	<section aria-labelledby="curriculum">
		<span class="eyebrow">{data.chapters.length} chapters · {data.lessonCount} lessons</span>
		<h2 id="curriculum">The curriculum</h2>
		<ol class="chapters">
			{#each data.chapters as chapter (chapter.id)}
				<li class="card chapter">
					<span class="number">Chapter {chapter.number}</span>
					<h3><a href={chapter.url}>{chapter.title}</a></h3>
					{#if chapter.description}<p>{chapter.description}</p>{/if}
					<ol class="lessons">
						{#each chapter.lessons as lesson (lesson.id)}
							<li>
								<span class="lesson-number">{lesson.number}</span>
								<a href={lesson.url}>{lesson.title}</a>
							</li>
						{/each}
					</ol>
				</li>
			{/each}
		</ol>
	</section>
</main>

<style lang="scss">
	.course {
		max-width: calc(var(--wide) + 2 * var(--gutter));
	}

	.intro {
		max-width: var(--narrow);
		margin-bottom: 3.5rem;
	}

	.button-row {
		margin-bottom: 2.5rem;
	}

	#curriculum {
		margin-top: 0;
	}

	ol {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.chapters {
		display: grid;
		gap: 1.25rem;

		@media (min-width: vars.$smMin) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.chapter {
		margin: 0;
		gap: 0.5rem;

		h3 {
			margin: 0;
			font-size: 1.3rem;

			a {
				color: var(--text);
				text-decoration: none;

				&:hover {
					color: var(--link);
				}
			}
		}

		p {
			margin: 0;
			color: var(--muted);
		}
	}

	.number {
		font-family: var(--headingFont);
		font-weight: 800;
		color: var(--brand);
		font-size: 0.95rem;
	}

	.lessons {
		margin-top: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--border);

		li {
			display: flex;
			gap: 0.6rem;
			margin: 0;
			padding: 0.25rem 0;
		}
	}

	.lesson-number {
		flex: 0 0 2.25rem;
		color: var(--muted);
		font-variant-numeric: tabular-nums;
		font-size: 0.9rem;
		padding-top: 0.1rem;
	}
</style>
