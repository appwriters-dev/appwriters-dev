<script>
	import MainNav from './MainNav.svelte';
	import { siteAuthor, siteAuthorURL } from '$lib/config';
</script>

<footer>
	<MainNav />

	<nav>
		<ul>
			<li>
				<a href="/api/rss.xml" data-sveltekit-reload>RSS</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

	<p>
		&copy;{new Date().getFullYear()}
		<a href={siteAuthorURL} target="_blank" rel="noreferrer">{siteAuthor}</a>
	</p>
</footer>
