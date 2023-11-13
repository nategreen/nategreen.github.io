<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import { theme } from '../stores/theme';
  import { browser } from '$app/environment';
  import Particles from 'svelte-particles';

  theme.subscribe((value) => {
    if (browser) {
      document.body.classList.remove('theme-dark', 'theme-light', 'theme-auto');
      document.body.classList.add(`theme-${value}`);
    }
  });

  import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

  let particlesConfig = {
    particles: {
      size: { value: 2 },
      color: {
        value: '#26D97F'
      },
      links: {
        enable: true,
        color: '#26D97FAA',
        distance: 150
      },
      move: {
        enable: true,
        speed: 0.5
      },
      number: {
        density: {
          enable: true,
        },
        value: 150,
      },
      detectRetina: true
    },
    responsive: [
      {
        maxWidth: 640,
        options: {
          number: { value: 25 },
          links: { distance: 50 }
        }
      },
    ],
    fullScreen: false,
  };

  let particlesInit = async (engine) => {
    await loadSlim(engine);
  };
</script>

<svelte:head>
  <title>Work | Nate Green | UX Designer</title>
  <!-- Hotjar Tracking Code for https://nategreen.work -->
  <!-- Hotjar Tracking Code for https://nategreen.work -->
  <!-- Hotjar Tracking Code for https://nategreen.work -->
  <!-- Hotjar Tracking Code for https://nategreen.work -->
  <script>
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 3714633, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  </script>
</svelte:head>

<div class="wrapper">
  <div class="content">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
  <Particles options={particlesConfig} id="particle-bg" class="bg" {particlesInit} />
</div>

<style global lang="scss">
  @use 'src/scss/global' as *;
  @use 'src/scss/tokens' as token;

  :root {
    --page-margins: calc(0.5rem + 5vmin);

    @media (min-width: 60rem) {
      --page-margins: calc(1rem + 10vmin);
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .content {
    contain: paint;
    flex-grow: 1;
    container-type: inline-size;
    z-index: 1;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .bg {
    position: fixed;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    z-index: 0;
    opacity: 0.25;

    @media (prefers-reduced-motion) {
      display: none;
    }

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 1;
      background: linear-gradient(to top, transparent, var(--bg));
    }
  }
</style>
