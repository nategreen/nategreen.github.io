<script>
	import SvelteMarkdown from 'svelte-markdown';
	import CaseStudy from './CaseStudy.svelte';
	import FigmaCommunityResource from './FigmaCommunityResource.svelte';
	export let data;
</script>

<section class="case-studies">
	{#each data.caseStudies as story}
		<CaseStudy {...story} />
	{/each}
</section>
<section class="figma-community">
	<h2 class="title">Figma Community</h2>
	{#each data.figmaCommunityResources as resource}
	<div class="resource">
		<FigmaCommunityResource
			url={resource.url}
			title={resource.title}
			description={resource.description}
			thumbnail={resource.thumbnail.url}
			thumbnailAltText={resource.thumbnail.altText}
		/>
	</div>
	{/each}
</section>

<style lang="scss">
	@use 'src/scss/tokens' as token;
	@use 'src/scss/reset' as reset;

	.case-studies {
		margin-block-start: 32px;
		margin-inline: var(--page-margins);
	}

	.figma-community {
		display: grid;
		grid-column-gap: 16px;
		grid-auto-rows: auto;
		grid-auto-flow: row;
		grid-template-columns: 1fr;
		grid-auto-columns: 1fr;
		align-items: stretch;
		align-content: stretch;
		justify-self: stretch;
		margin-inline: var(--page-margins);
		padding-block: 32px;
		border-block-start: 1px solid token.$line-bright;

		h2 {
			font-size: 1.75rem;
			line-height: 1.25;
			margin-block-end: 16px;
			grid-column: 1 / -1;
		}

		.resource {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			justify-content: stretch;
		}
	}

	@container (min-width: 40rem) {
		.figma-community {
			grid-template-columns: 1fr 1fr;
			grid-auto-flow: row;
		}
	}
</style>
