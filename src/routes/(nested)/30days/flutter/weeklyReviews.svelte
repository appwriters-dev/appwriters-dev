<script>
    export let weeks;
</script>
<div class="wrapper">
    <div class="content">
        <h2>👀 Look Back</h2>
        <ul>
            {#if weeks > 0}
            <li>
                <a href="/30days/flutter/week1"> Fluttering Through Week 1: Mastering the Basics</a>
            </li>
            {/if}
        </ul>
    </div>
</div>

<style lang="scss">
    .wrapper {
		background-color: var(--accent);
		padding: 2rem;
        color: var(--white);
        a,h2 {
            color: var(--white);
        }
        
	}
    .content {
        ul ::marker {
            color: var(--white);
        }
		max-width: 80rem;
		margin: 0 auto;
	}
</style>