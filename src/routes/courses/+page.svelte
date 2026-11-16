<script>
	import { siteTitle } from '#lib/config.js';

	/** @type {{data: any}} */
	let { data } = $props();

	const courses = $derived([
		{
			href: '/courses/master-flutter',
			level: 'Beginner',
			title: 'Master Flutter',
			description:
				'Learn Dart and Flutter from zero by building projects: the Dart language, OOP, packages, async code and REST APIs, then Flutter layouts, design, interactivity, assets, navigation and plugins.',
			meta: `${data.masterFlutter.chapters} chapters · ${data.masterFlutter.lessons} lessons`
		},
		{
			href: '/courses/flutter-appwrite',
			level: 'Intermediate',
			title: 'Flutter & Appwrite',
			description:
				'Build a time tracking app with Flutter and the open-source Appwrite backend: setup, authentication, routing, state management and a database.',
			meta: 'Video lessons'
		}
	]);
</script>

<svelte:head>
	<title>Courses | {siteTitle}</title>
	<meta
		name="description"
		content="Free courses to learn Dart, Flutter and Appwrite, from your first line of code to full apps."
	/>
</svelte:head>

<main id="main" tabindex="-1">
	<header class="page-head">
		<h1>Courses</h1>
		<p>Free and self-paced. New to Flutter? Start with Master Flutter.</p>
	</header>

	<ul class="courses">
		{#each courses as course (course.href)}
			<li class="card card--link">
				<span class="tag">{course.level}</span>
				<h2><a class="card__link" href={course.href}>{course.title}</a></h2>
				<p>{course.description}</p>
				<span class="meta">{course.meta}</span>
			</li>
		{/each}
	</ul>
</main>

<style>
	.courses {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 1.25rem;
	}

	li {
		margin: 0;
		gap: 0.6rem;
	}

	.tag {
		align-self: flex-start;
	}

	h2 {
		margin: 0;
		font-size: 1.5rem;
	}

	p {
		margin: 0;
	}

	.meta {
		color: var(--muted);
		font-size: 0.9rem;
	}
</style>
