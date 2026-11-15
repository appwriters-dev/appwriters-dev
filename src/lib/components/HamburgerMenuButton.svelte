<script>
	import { isMenuOpen } from '#lib/assets/js/store.js';
	import HamburgerSVG from './svg/HamburgerSVG.svelte';
	import XSVG from './svg/XSVG.svelte';

	/** @type {{closeOnly?: boolean}} */
	let { closeOnly = false } = $props();

	const toggleIsMenuOpen = () => {
		isMenuOpen.set(!$isMenuOpen);
	};
</script>

<button
	onclick={toggleIsMenuOpen}
	aria-expanded={$isMenuOpen}
	aria-label={closeOnly ? 'Close menu' : 'Open menu'}
	class="menu-button icon-button"
	tabindex={$isMenuOpen || !closeOnly ? 0 : -1}
>
	{#if closeOnly}
		<XSVG />
	{:else}
		<HamburgerSVG />
	{/if}
</button>

<style>
	button :global(svg) {
		width: 1.4rem;
		height: 1.4rem;
	}
</style>
