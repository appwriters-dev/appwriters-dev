<script>
	import { enhance } from '$app/forms';
	/** @type {import('./$types').ActionData} */
	export let form;

	let submitting = false;
	let metaDescription =
		'Join our mentorship program to become a skilled Flutter developer. Gain hands-on experience through real-world projects, receive guidance from an experienced mentor, and learn industry standards. Prerequisites include basic programming concepts, OOP, Git, and command line skills.';
	let keywords =
		' Flutter mentorship program, Flutter course, Flutter learning, hands-on experience, real-world projects, experienced mentor, industry standards';
</script>

<svelte:head>
	<title>Flutter apprenticeship | Appwriters</title>
	<meta name="description" content={metaDescription} />
	<meta name="keywords" content={keywords} />
	<meta property="og:title" content="Flutter apprenticeship | Appwriters" />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:url" content="https://appwriters.dev/flutter-apprenticeship" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://appwriters.dev/images/flutter-apprenticeship.png" />
	<meta property="og:image:alt" content="Flutter apprenticeship" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<div class="hero">
	<h1>Flutter apprenticeship</h1>
	<ul>
		<li><strong>Mode</strong>: Sync (over google meet) + Async (Over chat)</li>
		<li><strong>Duration</strong>: 3 Months</li>
		<li><strong>Price</strong>: NPR. 30000 (Nepal only)</li>
	</ul>
</div>

<div class="content">
	<p><strong>Prerequisites:</strong></p>
	<ul>
		<li>Basic familiarity with the command line interface.</li>
		<li>Understanding of fundamental programming concepts.</li>
		<li>Basic knowledge of Object-Oriented Programming (OOP) principles.</li>
		<li>Familiarity with basic data structures and algorithms.</li>
		<li>Basic knowledge of using Git and GitHub for version control.</li>
	</ul>
	<p>
		<strong>Note:</strong> It's essential to have a good foundation in these areas before enrolling in
		the mentorship program to take the most benefit our of the program. If you need to brush up on any
		of these topics, there are various resources available online to help you gain proficiency.
	</p>

	<p><strong>Who is this program for?</strong></p>

	<p>
		This mentorship program is ideal for individuals who are interested in becoming proficient
		Flutter developers and are willing to learn through practical project-based experience. The
		program is suitable for:
	</p>

	<ol>
		<li>
			<strong>Beginners in Programming</strong>: If you have a basic understanding of programming concepts and are eager
			to dive into Flutter development, this program provides a structured learning path and
			mentorship to help you succeed.
		</li>

		<li>
			<strong>Self-learners</strong>: If you prefer hands-on learning and enjoy working on real-world projects, this
			program offers an opportunity to enhance your skills while receiving guidance and feedback
			from an experienced mentor.
		</li>

		<li>
			<strong>Aspiring mobile app developers</strong>: If you have a passion for mobile app development and
			specifically want to specialize in Flutter, this program provides a focused learning
			experience tailored to Flutter development.
		</li>

		<li>
			<strong>Those seeking practical experience</strong>: If you believe in learning by doing and want to gain
			practical experience in developing Flutter applications, this program offers real-world
			projects to sharpen your skills.
		</li>

		<li>
			<strong>Individuals who value mentorship</strong>: If you appreciate having a mentor to guide you, provide
			support, and offer insights into industry standards and best practices, this program ensures
			you receive personalized guidance throughout your learning journey.
		</li>

		<li>
			<strong>Collaborative learners</strong>: If you enjoy collaborating with peers and benefit from reviewing and
			sharing solutions, this program encourages a collaborative learning environment where you can
			learn from others and contribute your expertise.
		</li>
	</ol>

	<p>
		It's important to note that while this program assumes basic knowledge of programming concepts
		and related technologies, it welcomes individuals with varying levels of experience. The
		mentorship aspect ensures that learners receive support tailored to their specific needs,
		enabling them to progress and succeed as Flutter developers.
	</p>

	<strong>How it works</strong>
	<ul>
		<li>It's a mentorship program designed to help you become a skilled Flutter developer.</li>
		<li>Unlike traditional courses or tutorials, this program offers a practical approach.</li>
		<li>
			Projects will be assigned to you, providing hands-on experience and application of Flutter
			development concepts.
		</li>
		<li>
			You'll be provided with the necessary tools and resources to successfully complete each
			project.
		</li>
		<li>
			You'll actively learn and work on the assigned projects, gaining valuable practical knowledge.
		</li>
		<li>
			If you encounter difficulties or get stuck, I'll be available to provide guidance and support.
		</li>
		<li>
			You'll have the opportunity to review solutions from your peers, fostering a collaborative
			learning environment.
		</li>
		<li>
			Your solutions will be reviewed by me, and I'll offer suggestions and recommendations for
			improvement.
		</li>
		<li>
			In addition to project-specific feedback, I'll provide you with valuable tips, tricks, and
			industry standards.
		</li>
		<li>
			The program emphasizes working on real-world projects, enabling you to develop practical
			skills that align with industry requirements.
		</li>
	</ul>

	{#if form?.success}
		<p class="success">
			Successfully submitted. Thank you for your application. We will get back to you within 4
			business days.
		</p>
	{:else if form?.error}
		<p class="error">Something went wrong. Please try again later.</p>
	{:else}
		<form
			method="POST"
			use:enhance={() => {
				submitting = true;

				return async ({ update }) => {
					await update();
					submitting = false;
				};
			}}
		>
			<h3>Apply now for next session</h3>
			<label for="name">Name</label>
			<input id="name" name="name" type="text" required placeholder="name (required)" />

			<label for="email">Email</label>
			<input id="email" name="email" type="email" required placeholder="email (required)" />

			<label for="phone">Phone</label>
			<input id="phone" name="phone" type="phone" required placeholder="phone (required)" />

			<input type="checkbox" name="agree" required id="agree" />

			<label for="agree">I agree, I'm ready to embark on this Flutter Journey</label>

			<button disabled={submitting} type="submit">{submitting ? 'wait..' : 'submit'}</button>
		</form>
	{/if}
</div>

<style lang="scss">
	.hero {
		text-align: center;
		width: 100%;
		padding: 2rem;
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
	.content {
		padding: 2rem;
		max-width: 48rem;
		margin: 0 auto;
	}
	label {
		margin-top: 16px;
		margin-bottom: 8px;
	}

	input[type='checkbox'] {
		display: inline-block;
		width: 20px;
		height: 20px;
		background-color: #eee;
		border-radius: 50%;
		transition: all 0.3s ease-in-out;
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}

	h3 {
		margin: 0;
	}

	p {
		&.error {
			color: red;
		}

		&.success {
			color: green;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;
	}
</style>
