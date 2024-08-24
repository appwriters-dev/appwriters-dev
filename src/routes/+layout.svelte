<script lang="ts" context="module">
	export type Theme = 'dark' | 'light' | 'system';
	export const currentTheme = (function () {
		const store = writable<Theme>(getPreferredTheme());

		const set: typeof store.set = (value) => {
			store.set(value);
			if (browser) {
				localStorage.setItem('theme', value);
				document.documentElement.style.setProperty('color-scheme', value);
			}
		};

		return { ...store, set };
	})();

	export const themeInUse = derived(currentTheme, (theme) => {
		return theme === 'system' ? getSystemTheme() : theme;
	});

	function isTheme(theme: unknown): theme is Theme {
		return ['dark', 'light', 'system'].includes(theme as Theme);
	}

	function getSystemTheme(): Theme {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	function getPreferredTheme() {
		if (!browser) {
			return 'dark';
		}

		const theme = localStorage.getItem('theme');

		if (!isTheme(theme)) {
			return 'dark';
		}

		return theme;
	}
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { derived, writable } from 'svelte/store';
	import { navigating, page, updated } from '$app/stores';
	import '$lib/assets/scss/global.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import Analytics from '$lib/components/Analytics.svelte';
	export let data;

	function applyTheme(theme: Theme) {
		const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
		const className = `theme-${resolvedTheme}`;
		document.body.classList.remove('theme-dark', 'theme-light');
		document.body.classList.add(className);
	}

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path);

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/

	onMount(() => {
		const initialTheme = $page.route.id?.startsWith('/docs') ? getPreferredTheme() : 'dark';
		applyTheme(initialTheme);
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});

	$: if (browser) currentTheme.subscribe((theme) => applyTheme(theme));
</script>

<Analytics />

<div class="layout" class:open={$isMenuOpen}>
	<Header />
	{#key data.path}
		<slot />
	{/key}
	<Footer />
</div>
