<script>
	import { fade } from 'svelte/transition'
	const transitionIn = { delay: 150, duration: 150 }
	const transitionOut = { duration: 100 }
</script>
<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
	<slot />
</main>
