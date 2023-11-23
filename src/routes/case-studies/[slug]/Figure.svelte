<script>
  import SvelteMarkdown from 'svelte-markdown';
  
  export let asset, assetAltText, assetWidth, assetHeight, bleed, caption, variant;
</script>

{#if variant == 'block'}
  <section class="block">
    <figure class:bleed>
      <img src={asset} width={assetWidth} height={assetHeight} alt={assetAltText} />
      <figcaption>
        <SvelteMarkdown source={caption} />
      </figcaption>
    </figure>
  </section>
{:else if variant == 'float'}
  <figure class="float" class:bleed>
    <img src={asset} width={assetWidth} height={assetHeight} alt={assetAltText} />
    <figcaption>
      <SvelteMarkdown source={caption} />
    </figcaption>
  </figure>
{/if}

<style lang="scss">
  @use 'src/scss/tokens' as token;

  $bleed-max-height: 75vmin;
  $float-max-height: 40vmin;

  section.block {
    display: flex;
    flex-direction: column;
    position: relative;
    background: color-mix(in oklab, #{token.$bg-alt} 50%, transparent);
    -webkit-backdrop-filter: blur(3px) saturate(150%);
    backdrop-filter: blur(3px) saturate(150%);
    padding-block-end: 1rem;
    overflow: hidden;
    clear: both;
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 1rem;
    overflow: hidden;
    contain: layout;

    &:not(.bleed) {
      padding-block-start: 1rem;
      padding-inline: var(--page-margins);
    }
  }

  figure.float {
    float: inline-end;
    margin-inline-end: var(--page-margins);
    margin-inline-start: 1rem;
    border-radius: 1rem;
    background: color-mix(in oklab, #{token.$bg} 25%, transparent);
    -webkit-backdrop-filter: blur(3px) saturate(150%);
    backdrop-filter: blur(3px) saturate(150%);

    &:not(.bleed) {
      padding-inline: 1rem;
    }
  }

  img {
		max-height: $bleed-max-height;
    width: auto;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    z-index: 0;

    figure.bleed & {
      object-fit: cover;
    }

    figure.float & {
      max-height: $float-max-height;
    }
  }

  figcaption {
    color: token.$text-dim;
    font-size: 0.875rem;
    line-height: 1.5;
    text-align: center;
    max-width: 60ch;
    text-wrap: balance;
    text-wrap: pretty;

    figure.bleed & {
      padding-inline: var(--page-margins);
    }

    :global(p) {
      font-size: inherit;
    }
  }
</style>
