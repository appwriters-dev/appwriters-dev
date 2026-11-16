<script>
	import { siteAuthor, siteAuthorURL, siteTitle, youtubeURL, githubURL } from '#lib/config.js';
</script>

<footer class="site-footer">
	<div class="wrap">
		<div class="columns">
			<div class="brand">
				<a class="name" href="/">
					<img src="/logo-512.svg" alt="" width="26" height="26" />
					{siteTitle}
				</a>
				<p>
					Practical tutorials, courses and project-based challenges for building apps with Flutter,
					Dart and Appwrite.
				</p>
			</div>
			<nav aria-labelledby="footer-learn">
				<h2 id="footer-learn">Learn</h2>
				<ul>
					<li><a href="/courses/master-flutter">Master Flutter course</a></li>
					<li><a href="/courses/flutter-appwrite">Flutter &amp; Appwrite course</a></li>
					<li><a href="/30days/flutter">#30DaysMasterFlutter</a></li>
					<li><a href="/projects/dart">Dart projects</a></li>
					<li><a href="/flutter-templates/flutter-appwrite-starter">Flutter Appwrite starter</a></li>
					<li><a href="/flutter-apprenticeship">Flutter apprenticeship</a></li>
				</ul>
			</nav>
			<nav aria-labelledby="footer-blog">
				<h2 id="footer-blog">Blog</h2>
				<ul>
					<li><a href="/blog">All posts</a></li>
					<li><a href="/blog/category">Categories</a></li>
					<li><a href="/api/rss.xml" data-sveltekit-reload>RSS feed</a></li>
				</ul>
			</nav>
			<nav aria-labelledby="footer-elsewhere">
				<h2 id="footer-elsewhere">Elsewhere</h2>
				<ul>
					<li><a href={youtubeURL} rel="noreferrer">YouTube</a></li>
					<li><a href={githubURL} rel="noreferrer">GitHub</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/llms.txt" data-sveltekit-reload>For AI agents (llms.txt)</a></li>
				</ul>
			</nav>
		</div>
		<div class="bottom">
			<p>
				&copy; {new Date().getFullYear()}
				<a href={siteAuthorURL} rel="noreferrer">{siteAuthor}</a>
			</p>
			<p>Built with SvelteKit.</p>
		</div>
	</div>
</footer>

<style>
	p {
		margin: 0;
	}
</style>
