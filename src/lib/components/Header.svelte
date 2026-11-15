<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '#lib/config.js';
	import { isMenuOpen } from '#lib/assets/js/store.js';
	import { currentTheme, themeInUse } from '../../routes/+layout.svelte';

	/** @param {MouseEvent} event */
	const focusMain = (event) => {
		event.preventDefault();
		const main = document.querySelector('main');
		main?.focus();
		main?.scrollIntoView();
	};
	const toggleTheme = () => {
		currentTheme.set($themeInUse === 'dark' ? 'light' : 'dark');
	};

	// While the phone menu is open, the page behind it does not scroll, and Escape closes it.
	$effect(() => {
		document.body.style.overflow = $isMenuOpen ? 'hidden' : '';
	});
	/** @param {KeyboardEvent} event */
	const onKeydown = (event) => {
		if (event.key === 'Escape' && $isMenuOpen) isMenuOpen.set(false);
	};
</script>

<svelte:window onkeydown={onKeydown} />

<a onclick={focusMain} class="skip-to-content-link" href="#main">Skip to main content</a>

<header class="main-header">
	<div class="wrap inner">
		<a href="/" class="site-title">
			<img class="site-logo" src="/logo-512.svg" alt="" width="30" height="30" />
			{siteTitle}
		</a>
		<div class="actions">
			<MainNav />
			<button
				class="icon-button"
				onclick={toggleTheme}
				aria-label={$themeInUse === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
			>
				<i class={$themeInUse === 'dark' ? 'icon-sun' : 'icon-moon'} aria-hidden="true"></i>
			</button>
			<HamburgerMenuButton />
		</div>
	</div>
</header>
