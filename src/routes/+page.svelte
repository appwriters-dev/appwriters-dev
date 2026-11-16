<script>
	import RecentPostsList from '#lib/components/RecentPostsList.svelte';
	import SiteMetas from '#lib/components/SiteMetas.svelte';
	import { siteTitle, siteDescription, siteLink, youtubeURL, githubURL } from '#lib/config.js';

	/** @type {{data: any}} */
	let { data } = $props();

	const paths = [
		{
			href: '/courses/master-flutter',
			label: 'Course · beginner',
			title: 'Master Flutter',
			text: 'Learn Dart and Flutter from zero in 10 chapters. Every lesson explains a topic, points to the best resources and gives you projects to build.',
			icon: 'icon-book-open'
		},
		{
			href: '/courses/flutter-appwrite',
			label: 'Course',
			title: 'Flutter & Appwrite',
			text: 'Build a full-stack time tracking app from scratch: setup, authentication, database and permissions. Free, with a video for every lesson.',
			icon: 'icon-play'
		},
		{
			href: '/30days/flutter',
			label: 'Challenge',
			title: '#30DaysMasterFlutter',
			text: 'Two to three hours a day for 30 days. A roadmap, daily resources and a project each day take you from Dart basics to Flutter apps.',
			icon: 'icon-calendar'
		},
		{
			href: '/projects/dart',
			label: 'Projects',
			title: 'Dart projects',
			text: 'Small command-line projects, from a temperature converter up, each with the full code and a walkthrough. Learn Dart by building.',
			icon: 'icon-code'
		},
		{
			href: '/flutter-templates/flutter-appwrite-starter',
			label: 'Template',
			title: 'Flutter Appwrite starter',
			text: 'A starting point for Flutter apps backed by Appwrite, with authentication and routing already wired up.',
			icon: 'icon-template'
		},
		{
			href: 'https://abcsofappwrite.appwriters.dev',
			label: 'Guide · in progress',
			title: "ABC's of Appwrite",
			text: 'Get started with Appwrite, the open-source backend: authentication, databases, storage and functions.',
			icon: 'icon-database',
			external: true
		}
	];

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: siteTitle,
		url: siteLink,
		description: siteDescription
	});
</script>

<svelte:head>
	<title>{siteTitle}: learn Flutter, Dart and Appwrite</title>
	<SiteMetas />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<main id="main" tabindex="-1" class="home">
	<section class="hero wrap">
		<div class="hero-text">
			<span class="eyebrow">Flutter · Dart · Appwrite</span>
			<h1>Learn to build real apps with Flutter and Appwrite</h1>
			<p class="lead">
				Practical tutorials, a free full-stack course and project-based challenges for building apps
				on mobile, web and desktop.
			</p>
			<div class="button-row">
				<a class="button" href="/courses/flutter-appwrite">Start the free course</a>
				<a class="button button--ghost" href="/blog">Read the blog</a>
			</div>
		</div>
		<figure class="hero-code" aria-hidden="true">
			<div class="dots"><span></span><span></span><span></span></div>
			<pre><code><span class="k">final</span> client = <span class="t">Client</span>()
    .setEndpoint(<span class="s">'https://cloud.appwrite.io/v1'</span>)
    .setProject(<span class="s">'appwriters'</span>);

<span class="k">final</span> account = <span class="t">Account</span>(client);
<span class="k">await</span> account.createEmailPasswordSession(
  email: email,
  password: password,
);
<span class="c">// You're in. Now build something.</span></code></pre>
		</figure>
	</section>

	<section class="section wrap" aria-labelledby="latest">
		<div class="section-head">
			<div>
				<span class="eyebrow">From the blog</span>
				<h2 id="latest">Latest posts</h2>
			</div>
			<a href="/blog">All {data.totalPosts} posts →</a>
		</div>
		<RecentPostsList posts={data.posts} />
	</section>

	<section class="band">
		<div class="wrap stats">
			<div><strong>{data.totalPosts}</strong><span>Blog posts<br />on Flutter, Dart and Appwrite</span></div>
			<div><strong>16</strong><span>Course lessons<br />from setup to database</span></div>
			<div><strong>30</strong><span>Days of Flutter<br />with a project each day</span></div>
			<div><strong>100+</strong><span>Flutter UI designs<br />with source code</span></div>
		</div>
	</section>

	<section class="section wrap" aria-labelledby="paths">
		<div class="section-head">
			<div>
				<span class="eyebrow">Learning paths</span>
				<h2 id="paths">Pick where to start</h2>
			</div>
		</div>
		<ul class="grid paths">
			{#each paths as path (path.href)}
				<li>
					<article class="card card--link">
						<span class="path-icon"><i class={path.icon} aria-hidden="true"></i></span>
						<span class="eyebrow">{path.label}</span>
						<h3>
							<a
								class="card__link"
								href={path.href}
								rel={path.external ? 'noreferrer' : undefined}
							>
								{path.title}{#if path.external}<span class="sr-only"> (external site)</span>{/if}
							</a>
						</h3>
						<p>{path.text}</p>
					</article>
				</li>
			{/each}
		</ul>
	</section>

	<section class="wrap">
		<div class="feature card">
			<div class="feature-text">
				<span class="eyebrow">Free app</span>
				<h2>Flutter UI Challenges</h2>
				<p>
					More than a hundred real-world Flutter UI designs for different industries, each with its
					source code right in the app. Study it, change it, and use it as a starting point for your
					own screens.
				</p>
				<div class="button-row">
					<a
						class="button button--sm"
						href="https://play.google.com/store/apps/details?id=com.popupbits.flutteruichallenges"
						rel="noreferrer"><i class="icon-android" aria-hidden="true"></i> Google Play</a
					>
					<a
						class="button button--ghost button--sm"
						href="https://apps.apple.com/np/app/flutter-ui-challenges/id1473537882"
						rel="noreferrer"><i class="icon-apple" aria-hidden="true"></i> App Store</a
					>
					<a
						class="button button--ghost button--sm"
						href="https://github.com/lohanidamodar/flutter_ui_challenges"
						rel="noreferrer"><i class="icon-github" aria-hidden="true"></i> Source on GitHub</a
					>
				</div>
			</div>
			<div class="feature-shots">
				<img
					src="https://play-lh.googleusercontent.com/6jA0GV_n8YkL3ZnDIJly4za-nsbzWlzbnzNtby9MH8JNsVFWAP-XZx-RO3FyW9k6cxU=w1052-h592-rw"
					alt="Flutter UI Challenges: the app's home screen"
					loading="lazy"
					width="1052"
					height="592"
				/>
			</div>
		</div>
	</section>

	<section class="section wrap cta">
		<h2>Learn along on YouTube</h2>
		<p class="lead">
			Every course lesson has a video, and new tutorials go up on the channel first.
		</p>
		<div class="button-row">
			<a class="button" href={youtubeURL} rel="noreferrer"
				><i class="icon-youtube" aria-hidden="true"></i> Watch on YouTube</a
			>
			<a class="button button--ghost" href={githubURL} rel="noreferrer"
				><i class="icon-github" aria-hidden="true"></i> Code on GitHub</a
			>
		</div>
	</section>
</main>

<style lang="scss">
	.home {
		max-width: none;
		padding: 0;
	}

	.hero {
		display: grid;
		gap: 3rem;
		align-items: center;
		padding-block: clamp(3rem, 8vw, 6.5rem) clamp(2rem, 5vw, 4rem);

		@media (min-width: vars.$mdMin) {
			grid-template-columns: 1.15fr 1fr;
		}

		h1 {
			font-size: clamp(2.4rem, 1.5rem + 3.6vw, 4rem);
			max-width: 14ch;
		}
	}

	.hero-code {
		margin: 0;
		background: var(--code-bg);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		overflow: hidden;
		min-width: 0;

		.dots {
			display: flex;
			gap: 6px;
			padding: 0.85rem 1rem;
			border-bottom: 1px solid var(--border);

			span {
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background: #3a3a36;
			}
		}

		pre {
			margin: 0;
			border: 0;
			border-radius: 0;
			background: transparent;
			font-size: 0.82rem;
			color: #d7d5ce;
		}

		.k {
			color: #ff8a57;
		}
		.t {
			color: #8bd5ca;
		}
		.s {
			color: #e6c07b;
		}
		.c {
			color: #8a8880;
			font-style: italic;
		}
	}

	ul.grid {
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			display: flex;
			margin: 0;
		}

		.card {
			width: 100%;
		}
	}

	.paths .card {
		gap: 0.2rem;

		.eyebrow {
			margin: 0.75rem 0 0.25rem;
		}
	}

	.path-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.6rem;
		height: 2.6rem;
		border-radius: 12px;
		background: var(--brand-soft);
		color: var(--brand);
		font-size: 1.25rem;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem 1.5rem;
		padding-block: 2.75rem;

		@media (min-width: vars.$smMin) {
			grid-template-columns: repeat(4, 1fr);
		}

		strong {
			display: block;
			font-family: var(--headingFont);
			font-size: clamp(2rem, 1.6rem + 1.5vw, 2.6rem);
			line-height: 1;
			color: var(--brand);
			margin-bottom: 0.4rem;
		}

		span {
			font-size: 0.9rem;
			color: var(--muted);
			line-height: 1.4;
		}
	}

	.feature {
		display: grid;
		gap: 2rem;
		align-items: center;
		padding: clamp(1.5rem, 4vw, 3rem);

		@media (min-width: vars.$mdMin) {
			grid-template-columns: 1fr 1fr;
		}

		h2 {
			margin-top: 0;
		}

		p {
			font-size: 1rem;
		}

		img {
			display: block;
			width: 100%;
			border-radius: var(--radius-sm);
			border: 1px solid var(--border);
		}
	}

	.cta {
		text-align: center;

		.lead {
			margin-inline: auto;
		}

		.button-row {
			justify-content: center;
		}
	}
</style>
