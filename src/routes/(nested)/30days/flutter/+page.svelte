<script>
	import Countdown from '$lib/components/Countdown.svelte';
	import { config } from '../config';
	import AdditionalResources from './additionalResources.svelte';
	import Grid from './grid.svelte';
	import Testimonials from './testimonials.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.metaDescription} />
	<meta name="keywords" content={data.metaKeywords} />
	<meta name="author" content="Damodar Lohani" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.metaDescription} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.metaDescription} />
</svelte:head>

<section>
	<div class="hero">
		<h1>#30DaysMasterFlutter</h1>
		<p><b>30</b> Days <b>Dart</b> and <b>Flutter</b> Challenge</p>
		<p>FREE | Easy to Follow | Project Based</p>
	</div>
	<div class="intro">
		<div class="container">
			<div class="content">
				<p>
					Learn the basics of Flutter and Dart in 30 days! We provide a roadmap, resources, and
					project ideas to help you along your journey.
				</p>
				<p>
					In just 30 days, this Flutter learning challenge will help you learn the basics of Dart
					and Flutter through daily project building and easy-to-follow learning materials. By the
					end of the challenge, you'll have a better understanding of Dart and Flutter and a
					collection of projects to showcase your skills.
				</p>
			</div>
			<div class="image">
				<img alt="Master Flutter" src="/images/30days/flutter_header_bg.svg" />
			</div>
		</div>
	</div>
	<div class="what-is">
		<div class="container">
			<div class="content">
				<p><i class="icon-info"></i> Just wanted to let you know that the <b>#30DaysMasterFlutter</b> program doesn't have live sessions. Instead, it's a guide with lots of helpful resources and projects for you to work on at your own pace. I think that teaching yourself, and practicing building projects is the best way to get better at coding. Plus, if you ever have questions or need help, you can ask the community!</p>
			</div>
		</div>
	</div>
	<!-- active day -->
	{#if data.daysReleased <= 30 && data.daysReleased > 0}
		<section class="active-day">
			<article>
				<h3><i class="icon-calendar" /> - {data.resources[data.daysReleased - 1].title}</h3>
				<ul>
					{#each data.resources[data.daysReleased - 1].objectives as objective}
						<li>{objective}</li>
					{/each}
				</ul>
				<a class="button" href={data.resources[data.daysReleased - 1].link}
					>begin <i class="icon-arrow-right" />
				</a>
			</article>
		</section>
	{/if}
	<section class="tip">
		<blockquote>
			<i class="icon-share" /> We want to see how you are doing. Share your progress with
			<b>#30DaysMasterFlutter</b> in our Discord and social medias.
		</blockquote>
	</section>
	{#if data.resources.length > 0}
		<div class="content">
			<Grid resources={data.resources} />
		</div>
	{:else}
		<Countdown targetDate={config.masterFlutter30Published + 24 * 60 * 60 * 1000} />
		<div class="coming-soon">
			<img src="/images/flutter_coming_soon.gif" alt="something is coming" />
		</div>
	{/if}

	<Testimonials />

	{#if data.resources.length >= 30}
		<AdditionalResources />
	{/if}
</section>

<style lang="scss">
	h1 {
		margin-top: 10rem;
		box-sizing: border-box;
		&::after {
			content: none;
		}
	}
	.icon-calendar {
		font-size: 2rem;
	}
	.hero {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: url('/images/30days/flutter_header_bg_sm.jpeg') no-repeat center center;
		background-size: cover;
		position: relative;
		margin-top: -70px;
		padding-top: 70px;
		padding-left: 1rem;
		padding-right: 1rem;

		@media screen and (max-width: vars.$smMax) {
			h1 {
				font-size: 1.8rem;
			}
			p {
				font-size: 0.9rem;
			}
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #111111aa;
			z-index: 0;
		}
		h1 {
			z-index: 100;
		}
		p {
			color: var(--paper);
			z-index: 200;
			text-transform: uppercase;
			max-width: 60rem;
			b {
				color: var(--primary);
			}
		}
	}
	.active-day {
		background-color: var(--white);
		text-align: center;
		ul {
			list-style: none;
		}
		article {
			max-width: 42rem;
			margin: 0 auto;
			padding: 2rem;
		}
	}
	.intro {
		box-sizing: border-box;
		padding: 2rem;
		background-color: var(--accent);
		color: var(--paper);

		.container {
			display: flex;
			align-items: flex-start;
			@media screen and (max-width: 768px) {
				flex-direction: column-reverse;
				align-items: center;
			}
			.content {
				flex: 1;
			}
			.image {
				flex: 1;
			}
			img {
				max-width: 350px;
				align-self: flex-start;
			}
			margin: 0 auto;
			max-width: 62rem;
		}
	}

	.tip {
		blockquote {
			max-width: 42rem;
			margin: 0 auto;
			text-align: center;
			padding: 2rem;
			box-sizing: border-box;
		}
	}
	.content {
		max-width: 80rem;
		margin: 0 auto;
	}
	.what-is .content {
		max-width: 62rem;
	}
	.coming-soon {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: black;
		img {
			max-width: 700px;
		}
	}
</style>
