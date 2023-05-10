<script>
	export let url;
	export let message = '';
	function copy() {
		if (navigator) {
			navigator.clipboard
				.writeText(url);
		}
	}
</script>

<div>
	<a href="https://www.facebook.com/sharer.php?u={url}" target="_blank" rel="noreferrer"
		><i class="icon-facebook" /></a
	>
	<a
		href="https://twitter.com/intent/tweet?url={url}&text={encodeURIComponent(message)}"
		target="_blank"
		rel="noreferrer"><i class="icon-twitter" /></a
	>
	<a
		href="https://reddit.com/submit?url={url}&title={encodeURIComponent(message)}"
		target="_blank"
		rel="noreferrer"><i class="icon-reddit" /></a
	>
	<button on:click={copy}><i class="icon-link" /></button>
</div>

<style>
    [class^="icon-"] {
        font-size: 2.5rem;
    }
    button {
        cursor: pointer;
        color: var(--accent);
        background: none;
        border: none;
        display: inline-block;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: var(--accent);
    }
</style>