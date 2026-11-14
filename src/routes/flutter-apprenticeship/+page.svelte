<script>
	import Callout from '#lib/components/Callout.svelte';

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
	<meta property="og:image" content="https://appwriters.dev/images/flutter_apprenticeship.png" />
	<meta property="og:image:alt" content="Flutter apprenticeship" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<div class="hero">
	<h1>Flutter apprenticeship</h1>
	<p>Flutter course for everybody</p>
	<ul>
		<li><strong>Mode</strong>: Online</li>
		<li><strong>Duration</strong>: 3 Months</li>
		<li><strong>Price</strong>: NPR. 28,888 (Nepal only)</li>
	</ul>
</div>

<div class="content">
	<p><strong>What will you learn?</strong></p>

	<ul>
		<li>
			<strong>Flutter Mastery</strong>: This course is your gateway to becoming a Flutter expert.
			You'll dive deep into Flutter, covering all the essential topics needed to craft
			production-quality applications. <a href="/30days/flutter">Explore the syllabus here</a>.
		</li>
		<li>
			<strong>Hands-On Project</strong>: Beyond just Flutter, building mobile apps demands
			integration with various tools, data structures, and more. This program guides you in creating
			a comprehensive project from scratch, equipping you with practical skills.
		</li>
		<li>
			<strong>Git Collaboration</strong>: Learn the ropes of seamless collaboration using Git within
			a team setting. Discover industry-standard Git workflows that foster effective teamwork.
		</li>
		<li>
			<strong>Build Your Portfolio</strong>: Alongside the main project, you'll embark on smaller
			projects to showcase your skills. These will be published on your GitHub, helping you
			construct a robust portfolio.
		</li>
		<li>
			<strong>Best Practices</strong>: Gain insights into Flutter's best practices, including file
			and folder organization, state management, and more. These practices will empower you to write
			code that's easy to understand, scalable, and maintainable.
		</li>
		<li>
			<strong>Pair Programming & Code Reviews</strong>: Real-world teamwork often involves code
			reviews and pair programming. This program emphasizes these critical aspects, ensuring you're
			well-prepared for the collaborative nature of professional development.
		</li>
	</ul>

	<p><strong>Who should join?</strong></p>

	<p>
		This mentorship program is ideal for individuals who are interested in becoming proficient
		Flutter developers and are willing to learn through practical project-based experience. The
		program is suitable for:
	</p>

	<ol>
		<li>
			<strong>Beginners in Programming</strong>: If you have a basic understanding of programming
			concepts and are eager to dive into Flutter development, this program provides a structured
			learning path and mentorship to help you succeed.
		</li>

		<li>
			<strong>Self-learners</strong>: If you prefer hands-on learning and enjoy working on
			real-world projects, this program offers an opportunity to enhance your skills while receiving
			guidance and feedback from an experienced mentor.
		</li>

		<li>
			<strong>Aspiring mobile app developers</strong>: If you have a passion for mobile app
			development and specifically want to specialize in Flutter, this program provides a focused
			learning experience tailored to Flutter development.
		</li>

		<li>
			<strong>Those seeking practical experience</strong>: If you believe in learning by doing and
			want to gain practical experience in developing Flutter applications, this program offers
			real-world projects to sharpen your skills.
		</li>

		<li>
			<strong>Individuals who value mentorship</strong>: If you appreciate having a mentor to guide
			you, provide support, and offer insights into industry standards and best practices, this
			program ensures you receive personalized guidance throughout your learning journey.
		</li>

		<li>
			<strong>Collaborative learners</strong>: If you enjoy collaborating with peers and benefit
			from reviewing and sharing solutions, this program encourages a collaborative learning
			environment where you can learn from others and contribute your expertise.
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
		<li>
			It's a mentorship program designed to help you become a skilled Flutter developer, following a
			practical approach.
		</li>
		<li>
			You will learn by working on real-world projects, receiving guidance and feedback from an
			experienced mentor.
		</li>
		<li>
			If you encounter difficulties or get stuck, you'll be supported by an experienced mentor.
		</li>
		<li>
			You'll have the opportunity to review solutions from your peers, fostering a collaborative
			learning environment.
		</li>
		<li>
			Your solutions will be reviewed by an experienced mentor offering suggestions and
			recommendations for improvement.
		</li>
		<li>
			In addition to project-specific feedback, you'll be provided with valuable tips, tricks, and
			industry standards.
		</li>
		<li>
			On-the-job training by building a complete app from scratch, as well as working on multiple
			applications with a team.
		</li>
	</ul>

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
		the mentorship program to take the most benefit out of the program. If you need to brush up on any
		of these topics, there are various resources available online to help you gain proficiency.
	</p>

	<Callout>
		<h3>Applications are closed for now</h3>
		<p>
			We are not taking applications for the Flutter apprenticeship at the moment. To hear when the
			next session opens, follow <a href="https://youtube.com/@appwriters">Appwriters on YouTube</a>
			or <a href="/contact">get in touch</a>.
		</p>
	</Callout>
</div>

<style lang="scss">
	.hero {
		text-align: center;
		width: 100%;
		padding: 2rem;
		h1 {
			color: var(--white);
			padding: 0;
			margin: 0;
			&::after {
				content: none;
			}
		}
		background-color: var(--accent);
		color: var(--white);
	}
	.content {
		padding: 2rem;
		max-width: 48rem;
		margin: 0 auto;
	}
	h3 {
		margin-top: 0;
	}
</style>
