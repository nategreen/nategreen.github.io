<script>
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {any} label
	 * @property {any} [url]
	 * @property {any} [icon]
	 * @property {string} [variant]
	 * @property {boolean} [disabled]
	 */

	/** @type {Props} */
	let {
		label,
		url = null,
		icon = null,
		variant = "solid",
		disabled = false
	} = $props();
	let element = $state();
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
	<button {disabled} onclick={bubble('click')} bind:this={element} class="variant-{variant}">
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
    line-height: 1.25;
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

		@media (prefers-reduced-motion) {
			transition: none;
		}

    &.variant-text {
      background: transparent;
      color: token.$text;
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
			will-change: background, left;

			@media (prefers-reduced-motion) {
				opacity: 0;
				transition: none;
			}
		}

		&:hover {
			color: token.$black;

			&::before {
				left: -50%;

				@media (prefers-reduced-motion) {
					opacity: 1;
				}
			}
		}

		&:active::before {
			background: token.$dark-green;
		}
	}
</style>
