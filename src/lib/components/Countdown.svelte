<script>
	import { onDestroy } from 'svelte';
	export let targetDate;
	let timeLeft;
	let days;
	let hours;
	let minutes;
	let seconds;

	const updateTimeLeft = () => {
		const now = new Date().getTime();
		const distance = targetDate - now;

		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

		timeLeft = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
	};

	updateTimeLeft(); // Initial call to set the countdown display
	const interval = setInterval(updateTimeLeft, 1000); // Update the countdown display every second

	onDestroy(() => clearInterval(interval)); // Cleanup interval when component is destroyed
</script>

<div class="container">
	<div id="countdown">
		<ul>
            {#if days > 0}
			<li><span id="days">{days}</span> days</li>
            {/if}
            {#if hours > 0}
			<li><span id="hours">{hours}</span> Hours</li>
            {/if}
            {#if minutes > 0}
			<li><span id="minutes">{minutes}</span> Minutes</li>
            {/if}
            {#if seconds > 0}
			<li><span id="seconds">{seconds}</span> Seconds</li>
            {/if}
		</ul>
	</div>
</div>

<style lang="scss">
	/* general styling */
	:root {
		--smaller: 0.75;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.container {
		align-items: center;
		background-color: black;
		color: var(--paper);
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		font-weight: normal;
		letter-spacing: 0.125rem;
		text-transform: uppercase;
	}

	li {
		display: inline-block;
		font-size: 1.5em;
		list-style-type: none;
		padding: 1em;
		text-transform: uppercase;
	}

	li span {
		display: block;
		font-size: 4.5rem;
	}

	@media all and (max-width: 768px) {
		h1 {
			font-size: calc(1.5rem * var(--smaller));
		}

		li {
			font-size: calc(1.125rem * var(--smaller));
		}

		li span {
			font-size: calc(3.375rem * var(--smaller));
		}
	}
</style>
