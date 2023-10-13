<script>
  import Copy from '$lib/Copy.svelte';
  import Button from '../lib/Button.svelte';
  import SvelteMarkdown from 'svelte-markdown';
  import Time from 'svelte-time';
  export let title;
  export let cta = 'See more';
  export let slug;
  export let cover;
  export let client;
  export let startDate;
  export let endDate;
  export let summary;
  export let content;
  let url = `/case-studies/${slug}`;

  let ctaDisabled = () => {
    if (content != undefined) {
      return false;
    }

    return true;
  };
</script>

<article>
  <div class="row">
    {#if cover.url}
      <div class="image">
        <img src={cover.url} alt={cover.altText} />
      </div>
    {/if}
    <div class="description">
      <Copy>
        <h2 class="title">{title}</h2>
        <div class="meta">
          <span class="client">{client}</span>
          <div class="date-range">
            <Time timestamp={startDate} format="YYYY" /> –
            {#if endDate}
              <Time timestamp={endDate} format="YYYY" />
            {:else}
              <span class="end">Present</span>
            {/if}
          </div>
        </div>
        <div class="summary">
          <SvelteMarkdown source={summary} />
        </div>
      </Copy>
      <div class="cta">
        {#if content.length > 0}
          <Button label={cta} {url} />
        {:else}
          <Button label="Coming soon" disabled={true} />
        {/if}
      </div>
    </div>
  </div>
</article>

<style lang="scss">
  @use 'src/scss/tokens' as token;
  @use 'src/scss/reset' as reset;

  $bp: 40rem;

  article {
    display: flex;
    flex-direction: column;
    border-top: 1px solid token.$line-bright;
    padding-block: 24px;
    row-gap: 16px;

    @media (min-width: $bp) {
      padding-block: 32px;
      row-gap: 24px;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .row {
    display: grid;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-auto-rows: auto;
    column-gap: 24px;
    row-gap: 16px;
  }

  .image {
    @media (min-width: $bp) {
      grid-column: 2;
      grid-row: 1;
      order: -1;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .title {
    @include reset.heading;
    font-size: 1.5rem;
    font-weight: bold;
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

  .cta {
    align-self: start;
    justify-self: start;
  }
</style>
