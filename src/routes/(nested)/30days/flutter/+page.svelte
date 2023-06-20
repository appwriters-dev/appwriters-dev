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

				<p>
					<a href="/30days/flutter/before-you-begin" class="button inverse">Before you begin <i class="icon-arrow-right"></i></a>
				</p>
			</div>
			<div class="image">
				<img alt="Master Flutter" src="/images/30days/flutter_header_bg.svg" />
			</div>
		</div>
	</div>

	<section class="tip">
		<div class="container">
			<div class="content">
				<i class="icon-share" /> We want to see how you are doing. Share your progress with
				<b>#30DaysMasterFlutter</b> in our Discord and your social medias.
			</div>
		</div>
	</section>

	<div class="content">
		<Grid resources={data.resources} />
	</div>

	<Testimonials />

	<AdditionalResources />
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
		.content {
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
		padding: 2rem;
		box-sizing: border-box;
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
