<script>
	/** @type {{url: string, message?: string}} */
	let { url, message = '' } = $props();
	let copied = $state(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(url);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			// Clipboard access can be refused; the share links still work.
		}
	}
</script>

<div class="share">
	<a
		href="https://www.facebook.com/sharer.php?u={encodeURIComponent(url)}"
		target="_blank"
		rel="noreferrer"
		aria-label="Share on Facebook"><i class="icon-facebook" aria-hidden="true"></i></a
	>
	<a
		href="https://twitter.com/intent/tweet?url={encodeURIComponent(url)}&text={encodeURIComponent(message)}"
		target="_blank"
		rel="noreferrer"
		aria-label="Share on X (Twitter)"><i class="icon-twitter" aria-hidden="true"></i></a
	>
	<a
		href="https://reddit.com/submit?url={encodeURIComponent(url)}&title={encodeURIComponent(message)}"
		target="_blank"
		rel="noreferrer"
		aria-label="Share on Reddit"><i class="icon-reddit" aria-hidden="true"></i></a
	>
	<button type="button" onclick={copy} aria-label={copied ? 'Link copied' : 'Copy link'}>
		<i class={copied ? 'icon-check' : 'icon-link'} aria-hidden="true"></i>
	</button>
</div>

<style>
	.share {
		display: inline-flex;
		gap: 0.4rem;
		vertical-align: middle;
	}
	a,
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		margin: 0;
		padding: 0;
		border-radius: 50%;
		border: 1px solid var(--border-strong);
		background: transparent;
		color: var(--text);
		font-size: 1.1rem;
		text-decoration: none;
		cursor: pointer;
	}
	a:hover,
	button:hover {
		border-color: var(--brand);
		color: var(--brand);
	}
</style>
