<script>
  import { CldImage } from 'svelte-cloudinary';
  import SvelteMarkdown from 'svelte-markdown';

  export let bleed, caption, variant, cloudinaryAsset;
</script>

{#if variant == 'block'}
  <section class="block">
    <figure class:bleed>
      {#if bleed}
        <CldImage
          class="figure-img"
          src={cloudinaryAsset.public_id}
          {...cloudinaryAsset}
          format="webp"
          style="object-fit:cover;max-height:60vmin;"
        />
      {:else}
        <CldImage
          class="figure-img"
          src={cloudinaryAsset.public_id}
          {...cloudinaryAsset}
          format="webp"
          style="object-fit:contain;max-height:60vmin;"
        />
      {/if}
      <figcaption>
        <SvelteMarkdown source={caption} />
      </figcaption>
    </figure>
  </section>
{:else if variant == 'float'}
  <figure class="float" class:bleed>
    <CldImage
      class="figure-img"
      src={cloudinaryAsset.public_id}
      {...cloudinaryAsset}
      format="webp"
      sizes="100vw"
    />
    <figcaption>
      <SvelteMarkdown source={caption} />
    </figcaption>
  </figure>
{/if}

<style lang="scss">
  @use "src/scss/mixins" as mixin;
  @use 'src/scss/tokens' as token;

  $bleed-max-height: 75vmin;
  $float-max-height: 40vmin;

  section.block {
    display: flex;
    flex-direction: column;
    position: relative;
    background: color-mix(in oklab, #{token.$bg-alt} 25%, transparent);
    @include mixin.frosted;
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
    box-sizing: border-box;
    border-radius: 1rem;
    margin-inline-start: 1rem;
    background: color-mix(in oklab, #{token.$bg} 25%, transparent);
    @include mixin.frosted;

    &:not(.bleed) {
      padding-inline: 1rem;
    }

    @media (min-width: 30rem) {
      float: inline-end;
      margin-inline-end: var(--page-margins);
      max-width: 50%;
    }
  }

  img {
    box-sizing: border-box;
    max-height: $bleed-max-height;
    width: auto;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    z-index: 0;

    figure.bleed & {
      width: 100%;
      height: auto;
      max-height: 60vmin;
      max-width: 100%;
      object-fit: cover;
    }

    figure.float & {
      max-height: $float-max-height;
      object-fit: contain;
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
