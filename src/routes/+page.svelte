<script>
  import SvelteMarkdown from 'svelte-markdown';
  import CaseStudy from './CaseStudy.svelte';
  import FigmaCommunityResource from './FigmaCommunityResource.svelte';
  import Intro from './Intro.svelte';
  let { data } = $props();
</script>

<Intro />

<section class="case-studies">
  <h2 class="title">Case Studies</h2>
  {#each data.caseStudies as story}
    <CaseStudy {...story} />
  {/each}
</section>
<section class="figma-community">
  <h2 class="title">Figma Community</h2>
  {#each data.figmaCommunityResources as resource}
    <div class="resource">
      <FigmaCommunityResource
        url={resource.url}
        title={resource.title}
        description={resource.description}
        thumbnail={resource.thumbnail.url}
        thumbnailAltText={resource.thumbnail.altText}
      />
    </div>
  {/each}
</section>
<section class="ux-stack-exchange">
  <h2 class="title">
    Questions and Answers on <a href="https://ux.stackexchange.com/users/59321/nate-green"
      >UX StackExchange</a
    >
  </h2>
  <div class="list answers">
    <h3>Answers</h3>
    <ul>
      {#each data.stackExchangeItems.filter((i) => i.type === 'answer') as item}
        <li class="item answer">
          <a href={item.url}>
            <h4 class="title">{item.title}</h4>
          </a>
          <SvelteMarkdown source={item.description} />
        </li>
      {/each}
    </ul>
  </div>
  <div class="list questions">
    <h3>Questions</h3>
    <ul>
      {#each data.stackExchangeItems.filter((i) => i.type === 'question') as item}
        <li class="item question">
          <a href={item.url}>
            <h4 class="title">{item.title}</h4>
          </a>
          <SvelteMarkdown source={item.description} />
        </li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  @use 'src/scss/tokens' as token;
  @use 'src/scss/reset' as reset;

  .case-studies {
    margin-block-start: 32px;
    margin-inline: var(--page-margins);

		.title {
			margin-block-end: 1.5rem;
		}
  }

  h2.title {
    font-size: 1.5rem;
    line-height: 1.25;
    grid-column: 1 / -1;
    text-transform: uppercase;
  }

  .figma-community,
  .ux-stack-exchange {
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-auto-rows: auto;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    align-items: stretch;
    align-content: stretch;
    justify-self: stretch;
    margin-inline: var(--page-margins);
    padding-block: 32px;
    border-block-start: 1px solid token.$line-bright;

    a {
      @include reset.link;
      cursor: pointer;
      color: token.$link;

      &:hover {
        text-decoration: underline;
      }
    }

    .resource {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
    }
  }

  .ux-stack-exchange {
    .list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    h3 {
      @include reset.heading;
      font-size: 1.5rem;
      font-weight: 700;
    }
    ul {
      @include reset.list;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    li {
      @include reset.list-item;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    h4 {
      @include reset.heading;
      font-size: 1.25rem;
    }
  }

  @container (min-width: 40rem) {
    .figma-community,
    .ux-stack-exchange {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 32px;
      grid-auto-flow: row;
    }
  }
</style>
