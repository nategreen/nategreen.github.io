<script>
	import { page } from '$app/stores';
	import ThemePicker from './ThemePicker.svelte';

	let menuItems = [
		{
			text: 'Work',
			url: '/',
			section: 'work'
		},
		{
			text: 'About',
			url: '/about',
			section: 'about'
		},
		{
			text: 'Résumé',
			url: '/Nate-Green-Resume.pdf',
			section: 'resume'
		}
	];
</script>

<header>
	<a href="/" class="home-link">
		<h1 class="name">Nate Green</h1>
		<span class="title">UX Designer</span>
	</a>
	<nav>
		<ul>
			{#each menuItems as item}
				<li>
					<a href={item.url}>{item.text}</a>
					{#if item.url === $page.url.pathname}
						<hr class="active-bar" />
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
	<div class="theme-picker">
		<ThemePicker />
	</div>
</header>

<style lang="scss">
	@use 'src/scss/tokens' as token;
	@use 'src/scss/reset' as reset;

	$bp: 40rem;

	header {
		display: grid;
		position: relative;
		margin-inline: var(--page-margins);
		grid-column-gap: 8px;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: 8px 32px auto auto auto;
		height: auto;

		@media (min-width: 20rem) {
			grid-template-columns: auto 1fr auto;
		}

		@media (min-width: $bp) {
			grid-column-gap: 24px;
			grid-template-columns: auto 1fr auto auto;
			grid-template-rows: 8px 32px auto auto auto;
		}
	}

	.home-link {
		@include reset.link;
		display: contents;

		.name {
			@include reset.heading;
			font-weight: 700;
			font-size: 1.5rem;
			line-height: 1;
			grid-row: 3;
			grid-column: 1;

			@media (min-width: $bp) {
				font-size: 2rem;
			}
		}

		.title {
			font-size: 1.25rem;
			font-feature-settings: 'smcp';
			font-variant-caps: all-small-caps;
			line-height: 1.25;
			letter-spacing: 1px;
			grid-row: 4;
			grid-column: 1;

			@media (min-width: $bp) {
				font-size: 1.5rem;
			}
		}

		&::before {
			content: '';
			position: sticky;
			top: 0;
			grid-column: 1;
			grid-row: 1;
			display: flex;
			height: 100%;
			width: 100%;
			background: token.$line-bright;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		grid-row: 3;
		grid-column: 3;
		justify-self: end;
		align-self: center;

		@media (min-width: $bp) {
			// large viewports
			flex-direction: row;
			align-items: center;
			gap: 16px;
			margin-block-start: unset;
			gap: 24px;
		}
	}

	ul {
		@include reset.list;
		display: flex;
		align-self: start;
		align-items: flex-start;
		order: 2;
		gap: 8px;

		@media (min-width: $bp) {
			gap: 16px;
		}

		li {
			display: flex;
			flex-direction: column;
			padding: 0;
			margin: 0;
			height: auto;
			text-align: center;
		}

		a {
			@include reset.link;
			font-size: 1.125rem;
			line-height: 1.25;
			text-align: center;
			transition: color 0.25s ease-in-out;

			&:hover {
				color: token.$link-hover;
			}

			&:active {
				color: token.$link-active;
			}

			@media (min-width: $bp) {
				font-size: 1.5rem;
			}
		}

		.active-bar {
			@include reset.hr;
			width: 100%;
			border-width: 0;
			border-bottom-style: solid;
			border-bottom-width: 2px;
			border-bottom-color: token.$line-active;
		}
	}

	.theme-picker {
		display: flex;
		grid-column: 3;
		grid-row: 1 / 3;
		justify-self: end;
		align-self: start;

		@media (min-width: $bp) {
			grid-column: 4;
			grid-row: 3;
		}
	}
</style>
