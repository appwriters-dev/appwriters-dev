<div class="hero">
	<h1>Complete Flutter and Appwrite course</h1>
	<p>
		An exciting course to learn all about building beautiful and functional
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

<main id="main">
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
        <h3>Why Flutter and Appwrite?</h3>
        <p>
            <strong>Flutter</strong> is <strong>the framework</strong> for building applications for any platform out there. <strong>Appwrite</strong> is <strong>the open source backend server</strong> with first class support for Flutter applications. Together, they are a powerful combination to build any kinds of applications that you can imagine.
        </p>
	</section>
	<section class="curriculum">
		<h2>The curriculum</h2>
		<hr />
		<div class="grid">
			<div class="cell">
				<h3><span>01</span> Getting started with Appwrite</h3>
				<p>
					Sign up to Appwrite cloud and create a Appwrite project that will host data for your
					application.
				</p>
			</div>
			<div class="cell">
				<h3><span>02</span> Getting started with Flutter</h3>
				<p>
					Create new Flutter project and push to GitHub. Setup basic GitHub action to help maintain
					code quality.
				</p>
			</div>
			<div class="cell">
				<h3><span>03</span> Flutter and Appwrite integration </h3>
				<p>
					Integrate Flutter and Appwrite projects so that they can communicate with each other.
				</p>
			</div>
			<div class="cell">
				<h3><span>03</span> Dependency injection</h3>
				<p>
					Set up dependency injection in Flutter using <a href="https://pub.dev/packages/get_it">get_it</a>
				</p>
			</div>
            <div class="cell">
                <h3><span>04</span> State management</h3>
                <p>
                    Set up state management in Flutter using <a href="https://pub.dev/packages/flutter_riverpod">riverpod</a>
            </div>
		</div>
	</section>
</main>

<style lang="scss">
	#main {
		max-width: 64rem;
		margin: 0 auto;
		padding: 0 2rem;
	}
	.intro {
		max-width: 42rem;
		margin: 0 auto;
	}
	.hero {
		text-align: center;
		width: 100%;
		padding: 4rem;
        background-color: var(--accent);
        color: var(--paper);
		h1 {
            max-width: 64rem;
			color: var(--paper);
			padding: 0;
			margin: 0 auto;
			&::after {
				content: none;
			}
		}
        p {
            max-width: 64rem;
            margin: 1rem auto;
        }
	}

    hr {
        border-top: 1px solid var(--backgroundDark);
    }

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		grid-gap: 2rem;
		margin: 2rem 0;

		.cell {
			padding: 1rem;
			border-radius: 0.5rem;
			background-color: var(--backgroundDark);
            box-sizing: border-box;
            border: 2px solid transparent;
            &:hover {
                border: 2px solid var(--neutral100);
            }
			h3 {
				margin: 0;
				padding: 0;
				font-size: 1.5rem;
                line-height: 1.7rem;
				margin-bottom: 1rem;
				color: var(--ink);
				span {
                    font-size: 1rem;
					color: var(--paper);
					background-color: var(--ink);
					padding: 0.25rem 0.5rem;
					border-radius: 1rem;
				}
			}
			p {
				margin: 0;
				padding: 0;
			}
		}
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
