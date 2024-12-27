<script>
  import { page } from '$app/stores';
    import Logo from './Logo.svelte';

  let menuItems = [
    // {
    //   text: 'Work',
    //   url: '/',
    //   section: 'work'
    // },
    // {
    // 	text: 'About',
    // 	url: '/about',
    // 	section: 'about'
    // },
    // {
    //   text: 'Résumé',
    //   url: '/Nate-Green-Resume.pdf',
    //   section: 'resume'
    // },
    // {
    // 	text: 'Figma',
    // 	url: 'https://www.figma.com/@nategreen'
    // },
    // {
    // 	text: 'Github',
    // 	url: 'https://github.com/nategreen'
    // },
    {
    	text: 'Contact',
    	url: 'mailto:heynategreen@gmail.com'
    },
  ];
</script>

<header>
  <a href="/" class="home-link">
    <!-- TODO: switch logo out with theme -->
    <Logo/>
    <div class="text">
      <h1 class="name">Nate Green</h1>
      <span class="title">UX Designer</span>
    </div>
  </a>
  <nav>
    <ul>
      {#each menuItems as item}
        <li>
          <a href={item.url}>{item.text}</a>
          {#if item.url === $page.url.pathname}
            <hr class="active-bar" />
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  @use 'src/scss/tokens' as token;
  @use 'src/scss/reset' as reset;

  $bp: 40rem;

  header {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
    margin-inline: var(--page-margins);
    height: auto;
    padding-block: 1rem;

    @media screen and (min-width: $bp) {
      padding-block: 1.5rem;
    }
  }

  .home-link {
    @include reset.link;
    display: flex;
    flex-wrap: nowrap;
    gap: 0.5rem;
    align-items: center;
    align-content: center;

    .text {
      display: flex;
      flex-direction: column;
      gap: 0;
      white-space: nowrap;

      @media (min-width: $bp) {
        align-items: center;
        flex-direction: row;
        gap: 0.5rem;
      }
    }

    .name {
      @include reset.heading;
      display: flex;
      font-size: 1rem;
      line-height: 24px;

      @media (min-width: $bp) {
        font-size: 1.5rem;
      }
    }

    .title {
      display: flex;
      font-size: 0.875rem;
      line-height: 1;
      color: token.$text-dim;

      @media (min-width: $bp) {
        font-size: 1.5rem;
      }
    }
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    gap: 1rem;
  }

  ul {
    @include reset.list;
    display: flex;
    align-self: start;
    align-items: flex-start;
    gap: 8px;

    @media (min-width: $bp) {
      gap: 16px;
    }

    @media (min-width: 60rem) {
      gap: 24px;
    }

    li {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      height: auto;
      text-align: center;
    }

    a {
      @include reset.link;
      font-size: 1.125rem;
      line-height: 1.25;
      text-align: center;
      transition: color 0.25s ease-in-out;

      &:hover {
        color: token.$link-hover;
      }

      &:active {
        color: token.$link-active;
      }

      @media (min-width: $bp) {
        font-size: 1.5rem;
      }
    }

    .active-bar {
      @include reset.hr;
      width: 100%;
      border-width: 0;
      border-bottom-style: solid;
      border-bottom-width: 2px;
      border-bottom-color: token.$line-active;
    }
  }

  .theme-picker {
    display: flex;
    justify-self: end;
    align-self: start;
  }
</style>
