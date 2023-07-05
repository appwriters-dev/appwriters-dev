<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<h1>Flutter apprenticeship</h1>

{#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->
    <p>Successfully submitted. Thank you for your response.</p>
{/if}

<form method="POST">
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

	<button type="submit">Submit</button>
</form>
