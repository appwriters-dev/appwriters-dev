<script>
	import Header from '../../header.svelte';
	import Footer from '../footer.svelte';
	import Post from './post.md';

	const description =
		'Dive into our Week 1 review of #30DaysofMasterFlutter as we explore Dart programming fundamentals, including setting up the environment, Dart functions, asynchronous programming, and OOP. Join us on our journey to master Flutter!';

	const title = 'Fluttering Through Week 1: Mastering the Basics - #30DaysofMasterFlutter';
	const keywords =
		'Flutter, Dart, #30DaysofMasterFlutter, programming, mobile app development, environment setup, Dart functions, asynchronous programming, object-oriented programming, error handling, review, tutorial';

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
	<meta property="og:url" content="https://appwriters.dev/30days/flutter/week1" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content="https://appwriters.dev/30days/flutter/week1" />
</svelte-head>

<Header title="#30DaysMasterFlutter" subtitle="WEEK 1" />

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
