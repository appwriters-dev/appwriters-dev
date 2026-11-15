<script>
	/** @type {{title: string, subtitle: string, isMain?: boolean}} */
	let { title, subtitle, isMain = false } = $props();
</script>

<div class="course-hero" class:main={isMain}>
	<div class="wrap" class:narrow={!isMain}>
		{#if isMain}
			<span class="eyebrow">Free course · Flutter + Appwrite</span>
		{:else}
			<a class="back" href="/courses/flutter-appwrite">← Flutter &amp; Appwrite course</a>
		{/if}
		<h1>{title}</h1>
		<p class="lead">{@html subtitle}</p>
	</div>
</div>

<style lang="scss">
	.course-hero {
		padding-block: clamp(2.5rem, 6vw, 4.5rem) 2rem;

		&.main {
			padding-bottom: clamp(2.5rem, 6vw, 4rem);
			border-bottom: 1px solid var(--border);
			background:
				radial-gradient(60rem 20rem at 85% -10%, var(--brand-soft), transparent 70%),
				var(--bg);

			h1 {
				max-width: 22ch;
			}
		}

		h1 {
			margin-bottom: 1rem;
		}

		.lead {
			margin: 0;
		}
	}

	.back {
		display: inline-block;
		margin-bottom: 1.25rem;
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--muted);
	}
</style>
