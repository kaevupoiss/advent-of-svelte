<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container">
	<div class="message">
		<h1>{$page.status}</h1>
		<h2>
			{#if $page.status === 404}
				Probably not <br /> completed yet!
			{:else}
				{$page.error?.message}
			{/if}
		</h2>
	</div>
</div>

<style>
	.container {
		height: 100%;
		display: grid;
		place-items: center;
	}

	h1 {
		font-size: 4rem;
	}

	h1,
	h2 {
		margin: 0;
	}
</style>
