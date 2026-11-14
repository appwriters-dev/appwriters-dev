<script>
	import { page } from '$app/state';
	import { isMenuOpen } from '#lib/assets/js/store.js';

	/** @type {{href: any, children?: import('svelte').Snippet}} */
	let { href, children } = $props();

	let isCurrentPage = $derived(
		href == '/' ? page.url.pathname == href : page.url.pathname.startsWith(href)
	);

	const maybeCloseMenu = () => {
		if (href != page.url.pathname) {
			isMenuOpen.set(false);
		}
	};
</script>

<li>
	<a
		{href}
		onclick={maybeCloseMenu}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		{@render children?.()}
	</a>
</li>
