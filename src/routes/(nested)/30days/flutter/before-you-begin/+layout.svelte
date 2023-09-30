<script>
	import Footer from '../footer.svelte';

	let title = "Before you begin | #30DaysMasterFlutter";
	let description = "#30DaysMasterFlutter is not your ordinary Flutter course; it’s an innovative program designed to empower you in your journey of learning Flutter & Dart. This self-learning experience takes a different approach, providing you with the resources and guidance to explore and discover on your own.";
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
		padding-bottom: 2rem;
	}
</style>
