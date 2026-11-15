<script>
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<main id="main" tabindex="-1" class="course">
	<section class="intro narrow">
		<h2>Start now, it's free</h2>
		<p>
			In this course you will build a time tracking application using Flutter, with Appwrite as the
			back-end service that authenticates users and manages their data.
		</p>
		<p>
			It gives you a foundation for building any kind of project with Flutter and Appwrite. You
			should know the basics of Flutter first. If you have never coded in Dart or Flutter, take our
			<a href="/30days/flutter">#30DaysMasterFlutter</a> challenge first.
		</p>
		<h3>Why Flutter and Appwrite?</h3>
		<p>
			<strong>Flutter</strong> builds applications for every platform out there.
			<strong>Appwrite</strong> is the open-source backend server with first-class support for Flutter.
			Together they are a powerful combination for building whatever you can imagine.
		</p>
	</section>

	<section class="curriculum" aria-labelledby="curriculum">
		<span class="eyebrow">{data.curriculum.length} lessons</span>
		<h2 id="curriculum">The curriculum</h2>
		{#each data.categories as category (category)}
			<h3 class="category">{category}</h3>
			<ol class="grid">
				{#each data.curriculum.filter((/** @type {any} */ item) => item.category === category) as item (item.id)}
					<li class="card" class:card--link={item.published} class:soon={!item.published}>
						<span class="number">{item.number}</span>
						<h4>
							{#if item.published}
								<a class="card__link" href="/courses/flutter-appwrite/{item.id}">{item.title}</a>
							{:else}
								{item.title}
							{/if}
						</h4>
						<p>{@html item.description}</p>
						{#if !item.published}
							<span class="tag">Coming soon</span>
						{/if}
					</li>
				{/each}
			</ol>
		{/each}
	</section>
</main>

<style lang="scss">
	.course {
		max-width: calc(var(--wide) + 2 * var(--gutter));
	}

	.intro {
		max-width: var(--narrow);
		margin-bottom: 3rem;

		h2 {
			margin-top: 0;
		}
	}

	#curriculum {
		margin-top: 0;
	}

	.category {
		margin: 2.5rem 0 1rem;
		font-size: 1.2rem;
		color: var(--muted);
	}

	ol {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin: 0;
		gap: 0.5rem;

		// Links inside the description stay clickable above the card's stretched link.
		p :global(a) {
			position: relative;
			z-index: 1;
		}
	}

	.number {
		font-family: var(--headingFont);
		font-weight: 800;
		color: var(--brand);
		font-size: 0.95rem;
	}

	h4 {
		margin: 0;
		font-size: 1.2rem;
	}

	.soon {
		opacity: 0.7;

		.tag {
			align-self: flex-start;
			margin-top: 0.5rem;
		}
	}
</style>
