<script>
	export let data;
</script>

<main id="main">
	<section>
		{@html data.content}
	</section>
	<nav class="end-nav">
		{#if data.previous}
			<a href="/courses/flutter-appwrite/{data.previous?.id}"><i class="icon-arrow-left" /> {data.previous.title}</a>
		{:else}
			<div />
		{/if}
		{#if data.next}
			<a href="/courses/flutter-appwrite/{data.next?.id}">{data.next.title} <i class="icon-arrow-right" /> </a>
		{:else}
			<div />
		{/if}
	</nav>
</main>

<footer class="lesson-footer">
	<div class="content">
		<p>You are currently learning Flutter & Appwrite. An ultimate course to build cross-platform applications using Flutter - the cross-platform application development framework by Google and Appwrite - the open source backend as a service.</p>
		<p><a href="/courses/flutter-appwrite">Curriculum</a></p>
	</div>
</footer>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		a {
			padding: 0.5rem 1rem;
			border-radius: 4px;
			max-width: 18rem;
			&:hover {
				text-decoration: none;
			}
		}
	}
	footer {
		display: flex;
		padding: 2rem;
		background: var(--slate);
		width: 100%;
		color: var(--white);
		.content {
			max-width: 42rem;
			margin: 0 auto;
			text-align: center;
		}
		p {
			font-size: 1.2rem;
		}
		a {
			color: var(--primary);
			&:hover {
				text-decoration: none;
				color: var(--primaryDark);
			}
		}
	}
</style>
