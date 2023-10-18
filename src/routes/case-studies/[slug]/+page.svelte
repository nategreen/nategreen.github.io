<script>
  import SvelteMarkdown from 'svelte-markdown';
  import Time from 'svelte-time';
  import Figure from './Figure.svelte';
  import CaseStudy from '../../CaseStudy.svelte';

  export let data;
</script>

<article>
  <header>
    <h1 class="title">{data.caseStudy.title}</h1>
    <div class="meta">
      <span class="client">{data.caseStudy.client}</span>
      <div class="date-range">
        <Time timestamp={data.caseStudy.startDate} format="YYYY" /> –
        {#if data.caseStudy.endDate}
          <Time timestamp={data.caseStudy.endDate} format="YYYY" />
        {:else}
          <span class="end">Present</span>
        {/if}
      </div>
    </div>
  </header>
  {#each data.caseStudy.content as section}
    {#if section.content}
      <section class="text">
        <SvelteMarkdown source={section.content} />
      </section>
    {:else if section.asset}
      <Figure
        asset={section.asset[0].url}
        assetAltText={section.asset[0].altText}
        assetWidth={section.asset[0].width}
        assetHeight={section.asset[0].height}
        bleed={section.bleed}
        caption={section.caption}
        variant={section.style}
      />
    {/if}
  {/each}
</article>

{#if data.relatedCaseStudy}
  <nav class="related">
    <CaseStudy {...data.relatedCaseStudy} />
  </nav>
{/if}

<style lang="scss">
  @use 'src/scss/reset' as reset;
  @use 'src/scss/tokens' as token;

  article {
    margin-block-end: 2rem;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-inline: var(--page-margins);
    margin-block-start: 2rem;
    padding-block-start: 2rem;
    border-top: 1px solid token.$line-bright;
  }

  section {
    margin-inline: var(--page-margins);
  }

  .text {
    align-self: center;
    margin-block: 1rem;

    :global(p) {
      margin-block: unset;
      margin-block-end: 1rem;
      font-size: 1rem;
      line-height: 1.75;
    }

    :global(h2) {
      font-size: 1.75rem;
      margin-block-end: 1rem;
    }

    :global(h3) {
      font-size: 1.5rem;
      margin-block-end: 1rem;
    }

    :global(h4) {
      font-size: 1.375rem;
      margin-block-end: 1rem;
    }

    :global(h5) {
      font-size: 1.25rem;
      margin-block-end: 1rem;
    }

    :global(h6) {
      font-size: 1.125rem;
      margin-block-end: 1rem;
    }
  }

  h1 {
    font-size: 2rem;
  }

  .meta {
    display: flex;
    font-size: 0.875rem;
    line-height: 1.25;
    color: token.$text-dim;

    > :not(:first-child)::before {
      content: '•';
      display: inline-flex;
      padding-inline: 0.5rem;
    }
  }
</style>
