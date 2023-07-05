<script>
	import { enhance } from '$app/forms';
	/** @type {import('./$types').ActionData} */
	export let form;

	let submitting = false;
</script>

<h1>Flutter apprenticeship</h1>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->
	<p>Successfully submitted. Thank you for your response.</p>
{/if}

<form
	method="POST"
	use:enhance={() => {
		submitting = true;

		return async ({ update }) => {
			await update();
			submitting = false;
		};
	}}
>
	<label for="name">Name</label>
	<input id="name" name="name" type="text" required placeholder="name" />

	<label for="email">Email</label>
	<input id="email" name="email" type="email" required placeholder="email" />

	<label for="phone">Phone</label>
	<input id="phone" name="phone" type="phone" required placeholder="phone" />

	<label for="interestedLevel">Interested level</label>
	<select id="interestedLevel" name="interestedLevel">
		<option value="Entry">Entry level</option>
		<option value="Intermediate">Intermediate level</option>
		<option value="Advance">Advance level</option>
	</select>

	<input type="checkbox" name="agree" required id="agree" />
	<label for="agree">I agree</label>

	<button disabled={submitting} type="submit">{submitting ? 'wait..' : 'submit'}</button>
</form>

<style>
    label {
        margin-top: 16px;
        margin-bottom: 8px;
    }

    input[type='checkbox'] {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: #eee;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

</style>
