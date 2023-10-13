<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import { theme } from '../stores/theme';
  import { browser } from '$app/environment';

  theme.subscribe((value) => {
    if (browser) {
      document.body.classList.remove('theme-dark', 'theme-light', 'theme-auto');
      document.body.classList.add(`theme-${value}`);
    }
  });
</script>

<div class="wrapper">
  <div class="content">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
  <div class="bg-circle one" aria-hidden="true" />
  <div class="bg-circle two" aria-hidden="true" />
  <div class="bg-circle three" aria-hidden="true" />
  <div class="bg-circle four" aria-hidden="true" />
</div>

<style global lang="scss">
  @use 'src/scss/global' as *;
  @use 'src/scss/tokens' as token;

  :root {
    --page-margins: calc(.5rem + 5vmin);
		

    @media (min-width: 60rem) {
      --page-margins: calc(1rem + 10vmin);
    }

    // @media (min-width: 100rem) {
    //   --page-margins: 12rem;
    // }
  }

  html,
  body {
    height: 100%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    perspective: 1px;
    height: 100%;
    overflow: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    contain: paint;
    flex-grow: 1;
    container-type: inline-size;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .bg-circle {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vmax;
    aspect-ratio: 1;
    border-radius: 100%;
    transform-style: preserve-3d;
    transform: translate3d(-220vmax, -200vmax, -3px) scale(4);
    border: 1px solid color-mix(in oklab, token.$line-bright 33.333%, transparent);
    z-index: -1;

    &.two {
      transform: translate3d(-200vmax, -110vmax, -2px) scale(3);
    }

    &.three {
      left: unset;
      right: 0;
      transform: translate3d(110vmax, 120vmax, -1px) scale(2);
    }

    &.four {
      left: unset;
      right: 0;
      transform: translate3d(120vmax, 200vmax, -2px) scale(3);
    }
  }
</style>
