<script>
	import { fade } from 'svelte/transition';
	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };
	import {siteTitle, siteDescription, siteAuthor} from '$lib/config';
</script>

<svelte:head>
	<meta name="description" content={siteDescription} />
	<meta
		name="keywords"
		content="Flutter, Dart, svelte, svelte kit, appwrite, github, open-source, 30-day challenge, project-based learning, app development, learn to code, mobile development"
	/>
	<meta name="author" content={siteAuthor} />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
</svelte:head>

<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
	<slot />
</main>
