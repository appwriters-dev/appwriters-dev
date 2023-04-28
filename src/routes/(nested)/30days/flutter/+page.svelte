<script>
	import Content from './content.svelte';
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
		<p>
			Learn the basics of Flutter and Dart in 30 days! We provide a roadmap, resources, and project
			ideas to help you along your journey.
		</p>
		<p>
			In just 30 days, this Flutter learning challenge will help you learn the basics of Dart and
			Flutter through daily project building and easy-to-follow learning materials. By the end of
			the challenge, you'll have a better understanding of Dart and Flutter and a collection of
			projects to showcase your skills.
		</p>
	</div>
	<div class="content">
		<Content resources={data.resources} publishedDate={config.masterFlutter30Published} />
	</div>
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
		background: linear-gradient(to bottom, #ff5200, #5c001e);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 2rem;
		position: relative;
		&::after {
			content: '';
			background: url('/images/30days/flutter_header_bg.svg') no-repeat center center;
			position: absolute;
			bottom: 0;
			right: 0;
			width: 50%;
			height: 250px; /* adjust this value to fit your design */
			background-size: contain;
		}
		h1 {
			color: var(--paper);
		}
		p {
			color: var(--paper);
			text-transform: uppercase;
			max-width: 60rem;
		}
	}
	.intro {
		box-sizing: border-box;
		padding: 2rem;
		background-color: var(--accent);
		color: var(--paper);
		p {
			margin: 0 auto;
			max-width: 62rem;
		}
	}
	.content {
		max-width: 80rem;
		margin: 0 auto;
	}
</style>
