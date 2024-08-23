<script>
	export let resources;
</script>

<div class="container">
	<div class="grid">
		{#each resources as resource, index}
		<a class="grid-item" href="{resource.link}">
			<!-- <div class="grid-item"> -->
					<!-- <img src={resource.imageUrl} alt="Day {index + 1}" /> -->
					<span class="tag primary">{index + 1}</span>
					<h5>{resource.title}</h5>
                    <p>{resource.description}</p>
			</a>
		{/each}
	</div>

	<h3>more projects will be added soon...</h3>
</div>

<style lang="scss">
	.container {
		padding: 2rem;
		box-sizing: border-box;
	}
	.grid {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 20px;
	}

	.grid-item {
		border-radius: 5px;
		padding: 10px;
		background-color: var(--backgroundDark);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		padding: 20px;
		border-radius: 5px;
		position: relative;
		.tag {
			position: absolute;
			top: 0;
			left: 0;
			&.primary {
				background-color: var(--primary);
				color: var(--white);
				padding: 2px 8px;
				border-end-end-radius: 2px;
			}
		}
	}

	.grid-item img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.grid-item h5 {
		margin-top: 20px;
		margin-bottom: 5px;
		color: var(--h2);
	}

	.grid-item ul {
		padding-left: 20px;
		margin-bottom: 10px;
	}

	 a {
		display: inline-block;
		text-decoration: none;
		color: inherit;

		&:hover {
			background-color: var(--background);
		}
	}
</style>
