<script>
	import { page } from '$app/stores';
</script>

<div class="error">
	<p>{$page.status}: {$page.error.message}</p>
	<p>The page you are looking for could not be found.</p>
	<p>Please check the URL and try again, or return to the <a href="/">homepage</a>.</p>
</div>

<style>
	.error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 2rem;
	}

	p {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	a {
		color: blue;
		text-decoration: underline;
	}
</style>
