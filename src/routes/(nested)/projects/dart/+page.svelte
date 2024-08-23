<script>
	import Grid from './grid.svelte';
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
		<h1>#DartProjects</h1>
		<p><b>Dart</b> Coding Challenges</p>
		<p>Learn <b>Dart</b> step-by-step by building <b>projects</b></p>
	</div>
	<div class="intro">
		<div class="container">
			<div class="content">
				<p>Build projects to learn and brush up your Dart skills.</p>
			</div>
		</div>
	</div>

	<div class="content">
		<Grid resources={data.resources} />
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
			color: var(--white);
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
		color: var(--white);

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
	.content {
		max-width: 80rem;
		margin: 0 auto;
	}
</style>
