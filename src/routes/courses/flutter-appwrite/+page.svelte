<script>
	export let data;
</script>

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
			{#each data.curriculum as item}
				<div class="cell">

					<a href="/courses/flutter-appwrite/{item.id}">
						<div class="content">
							<h3><span>{item.number}</span> {item.title}</h3>
							<p>{@html item.description}</p>
						</div>
					</a>
				</div>
			{/each }
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
			> a {
				text-decoration: none;
				color: var(--ink);
				display: block;
				&:hover {
					text-decoration: none;
				}
			}
		}
	}
	
</style>
