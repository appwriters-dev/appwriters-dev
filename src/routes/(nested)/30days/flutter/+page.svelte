<script>
	import Grid from './grid.svelte';
	import { config } from '../config';
	export let data;
</script>

<svelte:head>
	<title>30 Days to Master Flutter | Appwriters</title>
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
	<div class="content">
		<Grid resources={data.resources} publishedDate={config.masterFlutter30Published} />
	</div>

	{#if data.resources.length >= 30}
		<div class="resources">
			<div class="content">
				<h2>📚 Additional Resources</h2>
			</div>
		</div>
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
	.resources {
		background-color: var(--white);
		padding: 2rem;
	}
	.content {
		max-width: 80rem;
		margin: 0 auto;
	}
</style>
