<script>
	import Button from './button/Shielded.svelte';
	import SmallTab from './small-tab/Shielded.svelte';
	import LargeTab from './large-tab/Shielded.svelte';
	let small = false;
</script>

<div class="container">
	<Button />

	{#if small}
		<SmallTab />
	{:else}
		<LargeTab />
	{/if}

	<input type="checkbox" bind:checked={small} />
</div>

<style>
	.container {
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
