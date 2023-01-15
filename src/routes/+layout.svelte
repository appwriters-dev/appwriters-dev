<script>
	import '$lib/assets/scss/global.scss'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { currentPage, isMenuOpen } from '$lib/assets/js/store'
	import { navItems } from '$lib/config'
	import { preloadCode } from '$app/navigation'
	import { onMount } from 'svelte'
	export let data

  export const prerender = true
	
	/**
	 * Updates the global store with the current path. (Used for highlighting 
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path)
  
	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 * 
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/

  onMount(() => {
    const navRoutes = navItems.map(item => item.route)
    preloadCode(...navRoutes)
	})
</script>

<div class="layout" class:open={$isMenuOpen}>
	<Header />
	{#key data.path}
    <slot />
	{/key}
	<Footer />
</div>