<script>
	import Share from '#lib/components/Share.svelte';
	import { siteLink } from '#lib/config.js';
	import Header from './header.svelte';

	/**
	 * @type {{
	 *   day?: number,
	 *   nextReleased?: boolean,
	 *   title: any,
	 *   basePath: any,
	 *   project: any,
	 *   dayTitle?: string,
	 *   nextTitle?: string | null,
	 *   deeper?: { title: string, number: string, url: string }[],
	 *   children?: import('svelte').Snippet
	 * }}
	 */
	let {
		day = 0,
		nextReleased = true,
		title,
		basePath,
		project,
		dayTitle = '',
		nextTitle = null,
		deeper = [],
		children
	} = $props();
	const total = 30;
</script>

<Header {title} subtitle="Day {day}{dayTitle ? `: ${dayTitle}` : ''}" />

<div class="container">
	<div class="progress" aria-label="Day {day} of {total}">
		<span>Day {day} of {total}</span>
		<div class="bar" aria-hidden="true"><div style="width: {(day / total) * 100}%"></div></div>
	</div>

	{@render children?.()}

	{#if deeper.length}
		<aside class="deeper" aria-labelledby="deeper">
			<h2 id="deeper">Go deeper in Master Flutter</h2>
			<p>
				Want more practice? These lessons from our free
				<a href="/courses/master-flutter">Master Flutter</a> course cover today's topic with extra projects.
			</p>
			<ul>
				{#each deeper as lesson (lesson.url)}
					<li><a href={lesson.url}>{lesson.number} {lesson.title}</a></li>
				{/each}
			</ul>
		</aside>
	{/if}

	<p class="share">
		<b>Enjoying it? Tell your friends.</b><Share
			message="🎉 I'm having a blast on day {day} of my {project} journey! 🚀 You should definitely start your own journey too! 💪"
			url="{siteLink}/30days/{basePath}/day{day}"
		/>
	</p>
	<nav class="end-nav" aria-label="Days">
		{#if day > 1}
			<a href="/30days/{basePath}/day{day - 1}"><i class="icon-arrow-left" aria-hidden="true"></i> Day {day - 1}</a>
		{:else}
			<a href="/30days/{basePath}/before-you-begin"
				><i class="icon-arrow-left" aria-hidden="true"></i> Before you begin</a
			>
		{/if}
		{#if nextReleased && day < total}
			<a class="next" href="/30days/{basePath}/day{day + 1}"
				>Day {day + 1}{nextTitle ? `: ${nextTitle}` : ''} <i class="icon-arrow-right" aria-hidden="true"></i></a
			>
		{/if}
		{#if day == total}
			<a class="next" href="/30days/{basePath}/whats-next"
				>What's next? <i class="icon-arrow-right" aria-hidden="true"></i></a
			>
		{/if}
	</nav>
</div>

<style lang="scss">
	.container {
		width: 100%;
		max-width: 42rem;
		margin: 1rem auto 3rem;
		padding: 0 1rem;
	}

	.progress {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 2rem;
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--muted);

		span {
			white-space: nowrap;
		}

		.bar {
			flex: 1;
			height: 0.4rem;
			border-radius: var(--radius-pill);
			background: var(--surface-2);
			overflow: hidden;

			div {
				height: 100%;
				border-radius: inherit;
				background: var(--brand);
			}
		}
	}

	.deeper {
		margin: 3rem 0 2rem;
		padding: 1.25rem 1.5rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--surface);

		h2 {
			margin: 0 0 0.5rem;
			font-size: 1.2rem;
		}

		p {
			margin: 0 0 0.75rem;
			color: var(--muted);
		}

		ul {
			margin: 0;
			padding-left: 1.25rem;
		}
	}

	.share {
		margin-top: 2rem;
	}

	.end-nav .next {
		background: var(--brand);
		border-color: var(--brand);
		color: var(--on-brand);

		&:hover {
			background: var(--brand-strong);
		}
	}
</style>
