<section class="hero">
  <h1 class="title">Connecting the dots between <strong>products</strong> and <strong>people</strong>.</h1>
  <div class="image-container">
    <img class="image landscape" src="homepage-hero@3x.png" alt="sample images from UX projects" />
    <img class="image square" src="homepage-hero-square@3x.png" alt="sample images from UX projects" />
  </div>
  <p class="lede">
    Hi, I’m Nate—a full-stack UX designer who thinks in systems. I help product teams turn chaotic
    experiences into <strong>beautiful</strong> and <strong>orderly</strong> ones.
  </p>
</section>

<style lang="scss">
  @use 'src/scss/tokens' as token;
  @use 'src/scss/reset' as reset;
  @use 'src/scss/mixins' as *;

  .hero {
    display: flex;
    flex-direction: column
  }

  .title {
    @include reset.heading;
    font-size: 2rem;
    padding-inline: var(--page-margins);
    padding-block: 2rem;

    strong {
      font-weight: bold;
      font-style: normal;
      color: token.$text-green;
    }
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    aspect-ratio: 8/3;
    overflow: hidden;
    background: token.$bg-alt;
    background: token.$bg-transparent;
    @include frosted;
  }

  .image {
    height: auto;
    width: 125%;
    object-fit: cover;

    &.square {
      display: none;
    }
  }

  .lede {
    padding-inline: var(--page-margins);
    font-size: 1.5rem;
    padding-block: 2rem;

    strong {
      font-style: normal;
      font-weight: bold;
    }
  }

  @media (orientation: portrait) {
    .image-container {
      aspect-ratio: 1;
    }

    .image {
      width: 150%;
    }

    .image.landscape {
      display: none;
    }

    .image.square {
      display: block;
    }
  }

  // 480
  @media (min-width: 30rem) {
    .title {
      font-size: 3.5rem;
      padding-block: 4rem;
    }

    .lede {
      font-size: 2rem;
      padding-block: 4rem;
    }
  }
</style>
