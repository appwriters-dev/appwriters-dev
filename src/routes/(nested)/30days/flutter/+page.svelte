<script>
	import Content from './Content.svelte';
	import { config } from '../config';
	export let data;
</script>

<section>
	<h1>30 Days to Master Flutter</h1>
	<p>
		In just 30 days, this Flutter learning challenge will help you learn the basics of Dart and Flutter through daily project building and easy-to-follow learning materials. By the end of the challenge, you'll have a better understanding of Dart and Flutter and a collection of projects to showcase your skills.
	</p>
	
	<Content resources={data.resources} publishedDate={config.masterFlutter30Published} />

</section>