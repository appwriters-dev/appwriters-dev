<script>
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';

	export let href;

	$: isCurrentPage = href == '/' ? $currentPage == href : $currentPage.startsWith(href);

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false);
		}
	};
</script>

<li>
	<a
		{href}
		on:click={maybeCloseMenu}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		<slot />
	</a>
</li>
