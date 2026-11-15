<script>
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<main id="main" tabindex="-1">
	<section class="post">
		{@html data.content}
	</section>
	<nav class="end-nav" aria-label="Lessons">
		{#if data.previous}
			<a href="/courses/flutter-appwrite/{data.previous?.id}"
				><i class="icon-arrow-left" aria-hidden="true"></i> {data.previous.title}</a
			>
		{:else}
			<span></span>
		{/if}
		{#if data.next}
			<a href="/courses/flutter-appwrite/{data.next?.id}"
				>{data.next.title} <i class="icon-arrow-right" aria-hidden="true"></i></a
			>
		{/if}
	</nav>
	<aside class="callout">
		<p>
			You are taking <strong>Flutter &amp; Appwrite</strong>, a free course on building
			cross-platform apps with Flutter and the open-source Appwrite backend.
			<a href="/courses/flutter-appwrite">See the full curriculum</a>.
		</p>
	</aside>
</main>
