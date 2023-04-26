<script>
	import Content from './Content.svelte';
	import { config } from '../config';
</script>

<section>
	<h1>30 Days to Master Flutter</h1>
	<p>
		This 30 day challenge to learn Flutter is a unique, project based challenge that will give you
		resources to learn and project to build each day to learn the basics of Dart and Flutter in 30
		days.
	</p>
	
	<Content publishedDate={config.masterFlutter30Published} />

</section>

<style>
	section {
		max-width: 1400px;
		margin: 0 auto;
		padding: 20px;
	}
</style>