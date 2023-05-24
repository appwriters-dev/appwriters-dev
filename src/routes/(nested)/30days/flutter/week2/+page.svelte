<script>
	import Header from '../../header.svelte';
	import Footer from '../footer.svelte';
	import Post from './post.md';

	const description =
		'Dive into our exciting recap of Week 2 of #30DaysofMasterFlutter where we explored everything from dependency management to user input forms, networking in Dart, and creating interactive UIs. Join us on this Flutterful journey!';

	const title = 'Week 2 Wrap Up: Fluttering Through Dependencies, Networking, and Interactive UIs - #30DaysofMasterFlutter';
	const keywords =
		'Flutter, Dart, 30 Days of Flutter, Dependency Management, Networking, HTTP Requests, JSON Parsing, Interactive UI, State, StatefulWidget, User Input, Forms, Text Fields, Assets, Images, Fonts, Widgets, User Interface Design.';
</script>

<svelte-head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://appwriters.dev/30days/flutter/week2" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content="https://appwriters.dev/30days/flutter/week2" />
</svelte-head>

<Header title="#30DaysMasterFlutter" subtitle="WEEK 2" />

<div class="post">
	<Post />
</div>
<Footer />

<style>
	.post {
		max-width: 42rem;
		margin: 0 auto;
	}
	:global(h1) {
		font-size: 2rem;
	}
</style>
