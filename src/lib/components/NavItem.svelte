<script>
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';

	/** @type {{href: any, children?: import('svelte').Snippet}} */
	let { href, children } = $props();

	let isCurrentPage = $derived(href == '/' ? $currentPage == href : $currentPage.startsWith(href));

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
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
