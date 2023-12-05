<script lang="ts">
	import 'sanitize.css';
	import '@fontsource-variable/fira-code';

	let { children } = $props();

	const currentDay = 5;
</script>

<div class="container">
	<nav>
		<h3>Advent of <br /> Svelte</h3>
		<ul>
			{#each { length: 24 } as _, i}
				<li>
					{#if i < currentDay}
						<a href="/day-{i + 1}">
							Day {i + 1}
						</a>
					{:else}
						Day {i + 1}
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
	<div class="content">
		{@render children()}
	</div>
</div>

<style>
	:global(body, *) {
		font-family: 'Fira Code Variable', sans-serif;
		font-weight: 500;
	}

	.container {
		display: grid;
		grid-template-columns: max-content 1fr;
		height: 100svh;
		width: 100svw;
	}

	.content {
		height: 100%;
		overflow: hidden;
	}

	nav {
		display: flex;
		flex-direction: column;
		row-gap: 0.25rem;
		padding: 2rem 4rem 4rem 2rem;
		border-right: 1px solid black;
	}

	nav ul {
		display: contents;
	}

	nav li {
		opacity: 0.5;
	}

	nav li:has(a) {
		opacity: 1;
	}
</style>
