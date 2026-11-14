<script>
	import { page } from '$app/state';
	import { PUBLIC_ANALYTICS_ID } from '$app/env/public';

	// Report each client-side navigation as a page view.
	$effect(() => {
		const page_path = page.url.pathname;
		if (typeof gtag !== 'undefined') {
			gtag('config', PUBLIC_ANALYTICS_ID, {
				page_title: document.title,
				page_path
			});
		}
	});
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_ANALYTICS_ID}">
	</script>
	<script id="analytics" data-id={PUBLIC_ANALYTICS_ID}>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', document.currentScript.getAttribute('data-id'));
	</script>
</svelte:head>
