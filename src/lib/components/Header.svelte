<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};
</script>

<header class="main-header">
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<a href="/" class="site-title">
		<img class="site-logo" src="/logo-512.svg" alt="Logo" /> {siteTitle.substring(1)}
	</a>
	<div class="index">
		<HamburgerMenuButton />
		<MainNav />
	</div>
</header>

<style>
	.site-title, .index {
		z-index: 1000;
	}
</style>
