<script>
	import { testimonials } from './testimonials';
</script>

<div class="container">
	<section class="testimonials">
		{#each testimonials as { name, testimonial, github, image }}
			<div class="testimonial">
				<div class="header">
					<h4>{name}</h4>
					<p>
						<a href={github} target="_blank" rel="noreferrer"
							><i class="icon-github" /> ShankarBirTamang</a
						>
					</p>
				</div>
				<div class="body">
					<p>{testimonial}</p>
				</div>
			</div>
		{/each}
	</section>
</div>

<style lang="scss">
	.container {
		padding: 2rem;
		background-color: var(--white);
		box-sizing: border-box;
		background-color: var(--white);
	}
	.testimonials {
		max-width: 62rem;
		margin: 0 auto;
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 20px;
	}

	.testimonial {
		border-radius: 5px;
		background-color: white;
		// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--backgroundDark);
		border-radius: 5px;
		position: relative;
        .body {
            padding: 1rem 1.5rem;
        }
		.header {
            padding: 1rem 1.5rem;
            background-color: var(--primary);
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            color: var(--paper);
			h4 {
				margin-top: 0;
				margin-bottom: 5px;
			}
            h4, a {

                color: var(--paper);
            }
			p {
				margin: 0;
			}
		}
	}
</style>
