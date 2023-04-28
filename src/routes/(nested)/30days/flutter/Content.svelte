<script>
	export let resources;
</script>

<svelte:head>
	<title>30 Days of Master Flutter | Appwriters</title>
</svelte:head>
<div class="container">
	<div class="grid">
		{#each resources as resource, index}
			<div class="grid-item">
				<!-- <img src={resource.imageUrl} alt="Day {index + 1}" /> -->
				<h4>Day {index + 1}: {resource.title}</h4>
				<ul>
					{#each resource.objectives as objective}
						<li>{objective}</li>
					{/each}
				</ul>
				<a href={resource.link}>Learn More</a>
			</div>
		{/each}
	</div>
</div>

<style>
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
		background-color: white;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		padding: 20px;
		border-radius: 5px;
	}

	.grid-item img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.grid-item h4 {
		margin-top: 10px;
		margin-bottom: 5px;
	}

	.grid-item ul {
		padding-left: 20px;
		margin-bottom: 10px;
	}

	.grid-item a {
		display: inline-block;
		text-decoration: none;
		color: #2196f3;
		font-weight: bold;
		margin-top: 5px;
	}
</style>
