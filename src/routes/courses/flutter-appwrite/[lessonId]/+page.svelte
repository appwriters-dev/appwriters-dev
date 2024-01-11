<script>
    import Header from '../header.svelte';
	import Video from '../video.svelte';
    export let data;
</script>

<Header title={data.title} subtitle={data.subtitle} />

<Video id={data.videoId} />

<main id="main">
    <section>
        {@html data.content}
    </section>
    <a href="/courses/flutter-appwrite">Back</a>
</main>