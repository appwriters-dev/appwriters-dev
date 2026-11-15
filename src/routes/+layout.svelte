<script lang="ts" module>
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
	import { browser } from '$app/env';
	import { derived, writable } from 'svelte/store';
	import { navigating, page, updated } from '$app/state';
	import '#lib/assets/scss/global.scss';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { isMenuOpen } from '#lib/assets/js/store.js';
	import { navItems } from '#lib/config.js';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import Analytics from '#lib/components/Analytics.svelte';
	interface Props {
		data: any;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	function applyTheme(theme: Theme) {
		const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
		// The class lives on <html> so the page background and overscroll match the theme.
		document.documentElement.classList.remove('theme-dark', 'theme-light');
		document.documentElement.classList.add('theme-' + resolvedTheme);
		document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolvedTheme === 'light' ? '#faf9f6' : '#121211');
	}

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/

	onMount(() => {
		// preloadCode takes one internal path at a time; external links (YouTube) are skipped.
		for (const { route } of navItems) {
			if (route.startsWith('/')) preloadCode(route as any).catch(() => {});
		}
	});

	// Re-apply the theme whenever it changes. Runs in the browser only.
	$effect.pre(() => currentTheme.subscribe((theme) => applyTheme(theme)));
</script>

<Analytics />

<div class="layout" class:open={$isMenuOpen}>
	<Header />
	{#key data.path}
		{@render children?.()}
	{/key}
	<Footer />
</div>
