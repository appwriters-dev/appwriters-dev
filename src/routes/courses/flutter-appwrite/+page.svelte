<div class="hero">
	<h1>Cross platform apps with Flutter and Appwrite</h1>
	<p>
		Learn to build cross platform application with Flutter using open source Back-end-as-a-service
		platform Appwrite. An exciting course to learn all about building beautiful and functional
		applications with Flutter using the back-end power of Appwrite.
	</p>
</div>

<div class="player-wrapper">
	<div class="player">
        <!-- TODO change video -->
		<iframe
			title="player"
			src="https://www.youtube.com/embed/5QJU3QIBLIw"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</div>

<main class="main">
	<section class="intro">
		<h2>Start now, it's free</h2>
		<p>
			In this course you will build a time tracking application using Flutter and Appwrite as a
			back-end service to authenticate users and manage all kinds of user data.
		</p>
		<p>
			This course should provide you a foundation to build any kinds of projects using Flutter and
			Appwrite. For effective learning of this course, you should know the basics of Flutter. If you
			have never coded in Dart/Flutter, we recommend you to take our <a href="/30days/flutter"
				>30DaysMasterFlutter</a
			> course first.
		</p>
	</section>
</main>

<style lang="scss">
	.hero {
		text-align: center;
		width: 100%;
		padding: 4rem;
		h1 {
			color: var(--paper);
			padding: 0;
			margin: 0;
			&::after {
				content: none;
			}
		}
		background-color: var(--accent);
		color: var(--paper);
	}
	.player-wrapper {
		width: 100%;
		padding-top: 4rem;
		max-width: 64rem;
		margin: 0 auto;
	}
	:global(.player) {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%;
		margin-bottom: var(--ifm-paragraph-margin-bottom);
	}

	:global(.player > iframe) {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
	}
</style>
