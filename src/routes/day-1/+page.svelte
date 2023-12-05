<script lang="ts">
	let { data } = $props();

	let children = $state(data.children);

	function getSortedChildren(predicate: (child: Child) => boolean) {
		return children.filter(predicate).sort((a, b) => b.tally - a.tally);
	}

	let goodChildren = $derived(getSortedChildren((child) => child.tally >= 0));
	let badChildren = $derived(getSortedChildren((child) => child.tally < 0));

	let inputs = $state({ name: '', tally: 0 });

	function handleSubmit() {
		if (!inputs.name) return;

		const child = children.find((child) => child.name.toLowerCase() === inputs.name.toLowerCase());

		if (child) {
			child.tally += inputs.tally;
		} else {
			children.push({ ...inputs });
		}

		inputs = { name: '', tally: 0 };
	}
</script>

<div class="container">
	<div class="header">
		<p>Good: {goodChildren.length}</p>
		<p>Bad: {badChildren.length}</p>
	</div>
	<div class="inputs">
		<input bind:value={inputs.name} type="text" />
		<input bind:value={inputs.tally} type="number" />
		<button onclick={handleSubmit}>Add to Tally</button>
	</div>
	<div class="children">
		<ul class="good">
			{#each goodChildren as child}
				<li class="child">
					<p>{child.name}</p>
					<p>{child.tally}</p>
				</li>
			{/each}
		</ul>
		<ul class="bad">
			{#each badChildren as child}
				<li class="child">
					<p>{child.name}</p>
					<p>{child.tally}</p>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.container {
		display: flex;
		height: 100%;
		flex-direction: column;
		overflow: hidden;
	}

	.header {
		display: flex;
		column-gap: 1rem;
		padding-inline: 1rem;
	}

	.inputs {
		padding-inline: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid black;
	}

	input {
		padding: 0.25rem 1rem;
		width: 10rem;
	}

	input[type='number'] {
		width: 5rem;
	}

	button {
		padding: 0.25rem 1rem;
	}

	.children {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 2rem;
		padding: 1rem 1rem;
		overflow: auto;
	}

	ul {
		display: flex;
		flex-direction: column;
		row-gap: 0.25rem;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
		display: flex;
		padding: 0.25rem 1rem;
		border: 1px solid lightslategray;
		justify-content: space-between;
	}

	li p {
		margin: 0;
	}
</style>
