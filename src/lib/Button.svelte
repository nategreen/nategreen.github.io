<script>
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';

	export let label;
	export let url;
	export let icon;
  export let variant = "solid";
	export let disabled = false;
	let element;
</script>

{#if url}
	<a href={url} aria-disabled={disabled} bind:this={element} class:disabled={disabled} class="variant-{variant}">
		{#if icon}
			<span class="icon">
				<Icon class="icon" {icon} weight="bold" />
			</span>
		{/if}
		<span class="label">{label}</span>
	</a>
{:else}
	<button {disabled} on:click bind:this={element} class="variant-{variant}">
		{#if icon}
			<span class="icon">
				<Icon class="icon" {icon} weight="bold" />
			</span>
		{/if}
		<span class="label">{label}</span>
	</button>
{/if}

<style lang="scss">
	@use 'src/scss/reset' as reset;
	@use 'src/scss/tokens' as token;

	a {
		@include reset.link;
	}

	button {
		@include reset.button;
	}

	.label,
	.icon {
    display: flex;
    align-items: center;
		z-index: 2;
	}

  .label {
    margin-block-end: -.25rem;
  }

	a.disabled,
	button:disabled {
		background: token.$bg-alt;
		color: token.$text-dim;
		cursor: default;

		&:hover {
			background: token.$bg-alt;
			color: token.$text-dim;
		}

		&::before {
			display: none;
		}
	}

	button,
	a {
		contain: layout;
		display: inline-flex;
		align-items: center;
		justify-content: center;
    vertical-align: middle;
		gap: 8px;
		position: relative;
		font-family: 'Libertad', sans-serif;
		font-size: 1rem;
		font-weight: 700;
		border-radius: 4px;
		padding-block: 8px;
		padding-inline: 16px;
		min-height: 40px;
		cursor: pointer;
		user-select: none;
		color: white;
		background: token.$black;
		overflow: hidden;
		transform-style: preserve-3d;
		transition: color 0.25s ease-in-out, background 0.25s ease-in-out;

    &.variant-text {
      background: transparent;
      color: token.$black;
      padding-inline: 0.5rem;
    }

		&::before {
			content: '';
			position: absolute;
			display: block;
			left: calc((200% + 2rem) * -1);
			width: 200%;
			height: 200%;
			transform: skewX(-45deg);
			background: token.$green;
			z-index: 1;
			transition: background 0.125s ease-in-out, left 0.5s ease-in-out;
		}

		&:hover {
			color: token.$black;

			&::before {
				left: -50%;
			}
		}

		&:active::before {
			background: token.$dark-green;
		}
	}
</style>
