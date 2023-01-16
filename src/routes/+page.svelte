<script>
	import RecentPostsList from '$lib/components/RecentPostsList.svelte';
	import { siteDescription, siteTitle } from '$lib/config';
	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<div class="hero">
	<div class="content">
		<p>{siteDescription}</p>
	</div>
</div>

<main id="main">
	<div class="container">
		<div class="master-flutter book">
			<h3>Master Flutter</h3>
			<p>
				Learn Effective. Master Dart & Flutter. Become Flutter Developer. A one stop no-nonsense
				guide to learn Dart &amp; Flutter. Project based, self-taught guide.
			</p>
			<p>
				<a
					class="button button--outline button--primary button--md"
					target="_blank"
					rel="noreferrer"
					href="https://masterflutter.appwriters.dev"
				>
					Get Started
				</a>
			</p>
		</div>
	</div>
	<div class="container">
		<div class="abcs-of-appwrite book">
			<h3>ABC's of Appwrite (WIP)</h3>
			<p>
				Use this guide to get started with Appwrite, an open source backend server for web, mobile
				and Flutter developers. It provides a well designed set of REST and realtime APIs that you
				can customize to your applications needs. With services like authentication and user
				management, databases, storage, cloud functions and more, you can build any kind of
				applications that you can imagine.
			</p>
			<p>
				<a
					class="button button--outline button--primary button--md"
					target="_blank"
					rel="noreferrer"
					href="https://abcsofappwrite.appwriters.dev"
				>
					Get Started
				</a>
			</p>
		</div>
	</div>

	<div class="container">
		<div class="posts">
			<div class="header">
				<h2>Recent Posts</h2>
			</div>
			<RecentPostsList posts={data.posts} />
		</div>
	</div>
</main>

<style lang="scss">
	main {
		max-width: 100%;
		padding: 0;
		margin: 0;
	}
	.hero {
		padding: 2rem;
		background-color: var(--accent);
		color: var(--paper);
		margin: 0;
		.content {
			max-width: 42rem;
			margin: 0 auto;
			text-align: center;
		}
	}

	a {
		&.button {
			background: var(--accent);
			color: var(--paper);
			padding: 1rem;
			border-radius: 8px;
			font-weight: 500;
			font-size: 0.8em;

			&:hover {
				background-blend-mode: color-dodge;
			}
		}
	}

	.container {
		> div {
			max-width: 42rem;
			width: 100%;
			margin: 0 auto;
		}
		> .posts {
			max-width: 80%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				overflow: hidden;
				padding-bottom: 1rem;
				position: relative;
				&::after {
					content: '';
					height: 0.1em;
					background: var(--accent);
					width: 100%;
					margin-left: -100%;
					position: absolute;
					bottom: 0;
				}
			}
		}
	}
</style>
