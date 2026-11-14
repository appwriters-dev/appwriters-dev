<script>
	/** @type {{url: any, message?: string}} */
	let { url, message = '' } = $props();
	function copy() {
		if (navigator) {
			navigator.clipboard
				.writeText(url);
		}
	}
</script>

<div>
	<a
		href="https://www.facebook.com/sharer.php?u={url}"
		target="_blank"
		rel="noreferrer"
		aria-label="Share on Facebook"
		><i class="icon-facebook"></i></a
	>
	<a
		href="https://twitter.com/intent/tweet?url={url}&text={encodeURIComponent(message)}"
		target="_blank"
		rel="noreferrer"
		aria-label="Share on X (Twitter)"><i class="icon-twitter"></i></a
	>
	<a
		href="https://reddit.com/submit?url={url}&title={encodeURIComponent(message)}"
		target="_blank"
		rel="noreferrer"
		aria-label="Share on Reddit"><i class="icon-reddit"></i></a
	>
	<button onclick={copy} aria-label="Copy link"><i class="icon-link"></i></button>
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