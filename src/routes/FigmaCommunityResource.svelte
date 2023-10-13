<script>
  import SvelteMarkdown from 'svelte-markdown';

  export let title, description, url, thumbnail, thumbnailAltText;
</script>

<article>
  <div class="wrapper">
    <a href={url}>
      <img src={thumbnail} alt={thumbnailAltText} class="thumbnail" />
      <h3 class="title">{title}</h3>
      <div class="description">
        <SvelteMarkdown source={description} />
      </div>
    </a>
  </div>
</article>

<style lang="scss">
  @use 'src/scss/tokens' as token;
  @use 'src/scss/reset' as reset;

  article {
    transition: backdrop-filter 0.25s ease-in-out, transform 0.25s ease-in-out,
      box-shadow 0.25s ease-in-out;
    padding: 16px;
    border-radius: 16px;
    cursor: pointer;
    container-type: inline-size;
    flex-grow: 1;

    &:focus {
      outline: 2px solid token.$line-active;
      outline-offset: 2px;
    }

    &:hover {
      background: color-mix(in oklab, #{token.$bg} 50%, transparent);
      transform: scale(1.05);
      -webkit-backdrop-filter: blur(3px) saturate(150%);
      backdrop-filter: blur(3px) saturate(150%);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.05),
        0 16px 32px rgba(0, 0, 0, 0.05);
    }

    .wrapper {
      display: grid;
      gap: 16px;
    }

    h3 {
      font-size: 1.25rem;
      line-height: 1.25;
    }

    :global(.description) {
      font-size: 1rem;
    }

    :global(.description > *) {
      font-size: inherit;
    }

    img {
      max-height: 40vmin;
      width: 100%;
      object-fit: contain;
      height: auto;
      min-width: 0;
      flex-shrink: 1;
    }

    a {
      @include reset.link;
      display: contents;
    }
  }

  @container (min-width: 30rem) {
    .wrapper {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
    }

    img {
      grid-row: 1 / span all;
    }

    .description {
      grid-column: 2;
    }
  }
</style>
