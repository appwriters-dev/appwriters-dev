<script>
	import SiteMetas from '#lib/components/SiteMetas.svelte';
	import { githubURL, youtubeURL, siteAuthor, siteAuthorURL } from '#lib/config.js';
</script>

<svelte:head>
	<title>Contact | Appwriters</title>
	<SiteMetas />
</svelte:head>

<header class="page-head">
	<span class="eyebrow">Contact</span>
	<h1>Get in touch</h1>
	<p>Questions about a post, a lesson or the code? These are the best places to reach us.</p>
</header>

<ul class="grid contacts">
	<li class="card card--link">
		<i class="icon-github" aria-hidden="true"></i>
		<h2><a class="card__link" href={githubURL} rel="noreferrer">GitHub</a></h2>
		<p>Open an issue or browse the code behind the courses and projects.</p>
	</li>
	<li class="card card--link">
		<i class="icon-youtube" aria-hidden="true"></i>
		<h2><a class="card__link" href={youtubeURL} rel="noreferrer">YouTube</a></h2>
		<p>Ask in the comments under any video.</p>
	</li>
	<li class="card card--link">
		<i class="icon-user" aria-hidden="true"></i>
		<h2><a class="card__link" href={siteAuthorURL} rel="noreferrer">{siteAuthor}</a></h2>
		<p>The author's own site, with other ways to get in touch.</p>
	</li>
</ul>

<style>
	.contacts {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		margin: 0;
	}
	i {
		font-size: 1.5rem;
		color: var(--brand);
		margin-bottom: 0.75rem;
	}
	h2 {
		margin: 0 0 0.4rem;
		font-size: 1.3rem;
	}
</style>
