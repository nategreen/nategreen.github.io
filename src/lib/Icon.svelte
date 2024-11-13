<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<script>
	import { afterUpdate, onMount } from 'svelte';

	export let icon;
	export let weight;
	let iconElement;
	afterUpdate(() => {
		iconElement.classList.add(`ph-${icon}`, weight ? `ph-${weight}` : `ph`);
	});
</script>

<i bind:this={iconElement} />

<style>
  i {
    color: inherit;
  }
</style>