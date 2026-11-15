<!-- Errors inside the (nested) group render inside its <main>. -->
<script>
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status === 404 ? 'Page not found' : 'Something went wrong'} | Appwriters</title>
</svelte:head>

<div class="error">
	<span class="eyebrow">Error {page.status}</span>
	<h1>{page.status === 404 ? 'This page went missing' : 'Something went wrong'}</h1>
	<p class="lead">
		{page.status === 404
			? 'The address may be mistyped, or the page may have moved.'
			: page.error?.message}
	</p>
	<div class="button-row">
		<a class="button" href="/">Go to the home page</a>
		<a class="button button--ghost" href="/blog">Browse the blog</a>
	</div>
</div>

<style>
	.error {
		text-align: center;
		padding-block: 3rem;
	}
	.lead {
		margin-inline: auto;
	}
	.button-row {
		justify-content: center;
	}
</style>
