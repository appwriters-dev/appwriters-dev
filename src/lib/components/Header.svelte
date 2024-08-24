<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';
	import { currentTheme } from '$routes/+layout.svelte';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};
	const toggleTheme = () => {
		currentTheme.set($currentTheme === 'dark' ? 'light' : 'dark');
	};
</script>

<header class="main-header">
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<a href="/" class="site-title">
		<img class="site-logo" src="/logo-512.svg" alt="Logo" />
		{siteTitle.substring(1)}
	</a>
	<div class="index">
		<HamburgerMenuButton />
		<div class="menu">
			<MainNav />
			<button on:click={toggleTheme}>
				<i class="{$currentTheme === 'dark' ? 'icon-sun' : 'icon-moon'}" />
			</button>
		</div>
	</div>
</header>

<style lang="scss">
	.site-title,
	.index {
		z-index: 1000;
	}
	.menu {
		display: flex;

		button {
			background: none;
			border: none;
			cursor: pointer;
			color: var(--primary);
			margin: 0;
			margin-left: 1rem;

			&:hover {
				color: var(--black);
				:global(.theme-dark) & {
					color: var(--white);
				}
			}

		}
	}
</style>
