<script>
	import Footer from "../footer.svelte";
    export let data;
</script>
<section>
    <p>Released</p>
    <ul>
        {#each data.resources as resource}
            <li><a href="{resource.link}">{resource.title}</a></li>
        {/each}
    </ul>
    <span>Coming soon..</span>
</section>
<Footer />

<style lang="scss">
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
        ul {
            margin: 0;
        }
        p {
            font-size: 2rem;
            margin: 0;
        }
        span {
            
            color: var(--primary);
            text-transform: lowercase;
        }
    }
</style>