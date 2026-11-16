<script>
	/**
	 * The heading band at the top of a course page. On the course's main page (`isMain`) it shows
	 * an eyebrow and a soft gradient; on chapter and lesson pages a link back to `back.href`.
	 * @type {{
	 *   title: string,
	 *   subtitle?: string,
	 *   isMain?: boolean,
	 *   eyebrow?: string,
	 *   back?: { href: string, label: string },
	 *   kicker?: string
	 * }}
	 */
	let { title, subtitle = '', isMain = false, eyebrow = '', back, kicker = '' } = $props();
</script>

<div class="course-hero" class:main={isMain}>
	<div class="wrap" class:narrow={!isMain}>
		{#if isMain}
			{#if eyebrow}<span class="eyebrow">{eyebrow}</span>{/if}
		{:else if back}
			<a class="back" href={back.href}>← {back.label}</a>
		{/if}
		{#if kicker}<span class="kicker">{kicker}</span>{/if}
		<h1>{title}</h1>
		{#if subtitle}<p class="lead">{@html subtitle}</p>{/if}
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

	.kicker {
		display: block;
		margin-bottom: 0.5rem;
		font-family: var(--headingFont);
		font-weight: 800;
		color: var(--brand);
	}
</style>
