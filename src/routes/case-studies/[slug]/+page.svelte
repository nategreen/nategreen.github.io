<script>
  import SvelteMarkdown from 'svelte-markdown';
  import Time from 'svelte-time';
  import Figure from './Figure.svelte';

  export let data;
</script>

<svelte:head>
  <title>{data.caseStudy.title} | Nate Green | UX Designer</title>
</svelte:head>

<article>
  <header>
    <h1 class="title">{data.caseStudy.title}</h1>
    <div class="meta">
      <span class="client">{data.caseStudy.client}</span>
      <div class="date-range">
        <Time timestamp={data.caseStudy.startDate} format="YYYY" />
        {#if !data.caseStudy.endDate}
          – <span class="end">Present</span>
        {:else if data.caseStudy.startDate.slice(0, 4) != data.caseStudy.endDate.slice(0, 4)}
          – <Time timestamp={data.caseStudy.endDate} format="YYYY" />
        {/if}
      </div>
    </div>
  </header>
  {#each data.caseStudy.content as section}
    {#if section.content}
      <section class="text">
        <SvelteMarkdown source={section.content} />
      </section>
    {:else if section.cloudinaryAsset}
      <Figure
        cloudinaryAsset={section.cloudinaryAsset}
        bleed={section.bleed}
        caption={section.caption}
        variant={section.style}
      />
    {/if}
  {/each}
</article>

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
    clear: both;
  }

  :global(h3) {
    font-size: 1.5rem;
    margin-block-end: 1rem;
    clear: both;
  }

  :global(h4) {
    font-size: 1.375rem;
    margin-block-end: 1rem;
    clear: both;
  }

  :global(h5) {
    font-size: 1.25rem;
    margin-block-end: 1rem;
    clear: both;
  }

  :global(h6) {
    font-size: 1.125rem;
    margin-block-end: 1rem;
    clear: both;
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
