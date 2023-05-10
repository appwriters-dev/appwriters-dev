<script>
	import Footer from '../footer.svelte';

	let title = "What's Next | #30DaysMasterFlutter";
	let description = "Flutter is an awesome technology, so there's always more to learn and explore. Remember to keep practicing, building and sharing. I also recommend writing blog posts, technical articles and/or making videos to showcase your skill as well as help other developers learn.";
	let keywords = 'Flutter, Dart, Firebae, Appwrite, Learning Flutter, Integrating Appwrite, Flutter animations, Monetization, Internationalization, Flutter CI/CD';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Damodar Lohani" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="container">
	<slot />
</div>

<Footer />

<style lang="scss">
	.container {
		width: 100%;
		max-width: 42rem;
		margin: 1rem auto;
		padding: 0 1rem;
	}
</style>
