<script>
	import RecentPostsList from '$lib/components/RecentPostsList.svelte';
	import VideoEmbed from '$lib/components/VideoEmbed.svelte';
	import { siteTitle } from '$lib/config';
	import SiteMetas from '../lib/components/SiteMetas.svelte';
	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<SiteMetas />
</svelte:head>

<div class="hero">
	<div class="content">
		<p>
			Welcome to appwriters.dev, your go-to destination for learning modern application development
			for Mobile, Web and desktops using technologies such as Flutter, Dart, Appwrite, Javascript,
			and more!
		</p>
	</div>
</div>

<main id="main">
	<!-- <div class="container">
		<article>
			<p>Whether you're a beginner or an experienced developer, our website offers a wealth of resources to help you stay up-to-date with the latest tools, techniques, and best practices in the industry.</p>
			
			
			<p>At appwriters.dev, we believe that learning should be accessible and fun. That's why our content is designed to be easy to understand, yet challenging enough to help you grow your skills. Whether you're looking to build your first app or take your development career to the next level, we've got you covered.</p>
		</article>
	</div> -->

	<div class="master-flutter-challenge">
		<div class="container">
			<article>
				<h2>Ready to master Dart & Flutter <br /> in just 30 days?</h2>
				<p>
					Join our <b>#30DaysMasterFlutter</b> challenge and gain the skills and experience you need
					to build powerful Flutter apps.
					<br />
					<br />
					Get started now, spend 2-3 hours each day learning the provided resources and building the
					given project. By the end of the challenge, you'll have a better understanding of Dart and
					Flutter and a collection of projects to showcase your skills.
				</p>
				<br />
				<a href="/30days/flutter" class="button"><i class="icon-flutter" /> start now</a>
			</article>
		</div>
	</div>
	<div class="flutter-appwrite-course">
		<div class="container">
			<VideoEmbed background={false} id="cmboLwHvsFU" />
			<article>
				<h2>Flutter Appwrite course</h2>
				<p>
					Only course required to learn Flutter and Appwrite to build a full-stack, cross-platform,
					application from scratch.
					<br />
					<br />
					By the end of this course, you will have a solid understanding of integrating Appwrite with
					Flutter and be able to build any kinds of applications that you want.
				</p>
				<p>
					<a
						class="button button--outline button--primary button--md"
						href="/courses/flutter-appwrite"
					>
						Get Started
					</a>
				</p>
			</article>
		</div>
	</div>
	<!-- 	
	<div class="master-flutter-challenge">
		<div class="container">
			<article>
				<h2>Flutter apprenticeship</h2>
				<p>
					Our program offers hands-on learning, personalized guidance, and real-world projects to
					help you become a skilled Flutter developer. Join us today and gain industry-relevant
					skills in a supportive, collaborative environment.
				</p>

				<p>
					Who can benefit from this program? Beginners, self-learners, aspiring mobile app
					developers, and anyone seeking practical experience and mentorship to excel in Flutter
					development.
				</p>

				<br />
				<a href="/flutter-apprenticeship" class="button"><i class="icon-flutter" /> Apply now</a>
			</article>
		</div>
	</div> -->

	<div class="container white">
		<article class="master-flutter book">
			<h3>Master Flutter</h3>
			<p>
				Master Flutter - Your ultimate guide to learning Dart and Flutter through practical projects
				and comprehensive resources.
			</p>
			<p>
				Start learning Flutter today! Whether you're a beginner or a seasoned developer, our guide
				has everything you need to become proficient in Dart and Flutter. Start now and gain access
				to comprehensive projects and resources tailored specifically for self paced learning.
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
		</article>
	</div>
	<div class="container">
		<article class="abcs-of-appwrite book">
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
		</article>
	</div>

	<div class="container">
		<div class="images">
			<img
				src="https://play-lh.googleusercontent.com/6jA0GV_n8YkL3ZnDIJly4za-nsbzWlzbnzNtby9MH8JNsVFWAP-XZx-RO3FyW9k6cxU=w1052-h592-rw"
				alt="Flutter UI Challenge"
			/>
			<img
				src="https://play-lh.googleusercontent.com/d6SOAfNfHth_-MfIL7vNASAwJpFbola3n6UZp5U8p0bkdvf_gAz3-qt0_EHEWMFCEpM=w1052-h592-rw"
				alt="Flutter UI Challenge"
			/>
			<img
				src="https://play-lh.googleusercontent.com/W0FksxppXjWgNr-ebJn0gTeltuTRk0t9mRrhE9fhCheV34OrBRJFQLPcJmk1S5su4Aw=w1052-h592-rw"
				alt="Flutter UI Challenge"
			/>
		</div>
		<article class="flutter-ui-challenge">
			<h3>
				Flutter UI Challenges - a collection of 100+ real-world Flutter UI designs with source code!
			</h3>

			<p>
				With a wide range of UI designs for different industries and use cases, this app is perfect
				for Flutter developers and enthusiasts who are looking for inspiration or want to learn more
				about building beautiful user interfaces.
			</p>

			<p>
				Each UI design comes with its source code right in the app, making it easy to learn and
				implement. You can study the code, modify it to suit your needs and use it as a starting
				point for your own projects.
			</p>

			<p>
				Download the app now on the Google Play Store and start exploring the world of beautiful
				Flutter UI designs!
			</p>

			<a
				href="https://play.google.com/store/apps/details?id=com.popupbits.flutteruichallenges"
				class="button"
				target="_blank"
				rel="noreferrer"
			>
				<i class="icon icon-android" /> Download</a
			>
			<a
				href="https://apps.apple.com/np/app/flutter-ui-challenges/id1473537882"
				class="button"
				target="_blank"
				rel="noreferrer"
			>
				<i class="icon icon-apple" /> Download</a
			>
			<a
				class="button"
				href="https://github.com/lohanidamodar/flutter_ui_challenges"
				target="_blank"
				rel="noreferrer"
			>
				<i class="icon icon-github" /> Star</a
			>
		</article>
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
	.icon {
		font-size: 1.6rem;
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
	.master-flutter-challenge {
		background-color: var(--white);
		padding: 2rem;
		text-align: center;
	}
	.flutter-appwrite-course {
		padding: 4rem;
	}
	.images {
		display: flex;
		justify-content: center;
		img {
			max-width: 333px;
			width: 33%;
			margin-top: 2rem;
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
		&.white {
			background-color: var(--white);
		}
		> article {
			max-width: 42rem;
			margin: 0 auto;
			width: 100%;

			&.master-flutter {
				padding-bottom: 2rem;
			}

			@media screen and (max-width: 700px) {
				padding: 12px;
			}
		}
		> .posts {
			margin: 0 auto;
			margin-top: 3rem;
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
	.book {
		padding-top: 2.5rem;
	}
</style>
