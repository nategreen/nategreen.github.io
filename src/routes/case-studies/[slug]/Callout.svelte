<script>
  import SvelteMarkdown from 'svelte-markdown';
  import Lightbulb from 'virtual:icons/ph/lightbulb';
  import Confetti from 'virtual:icons/ph/confetti';
  import Warning from 'virtual:icons/ph/warning';
  let { type, title, content } = $props();
</script>

<aside
  class:fun-fact={type === 'funFact'}
  class:warning={type === 'warning'}>
  <div class="icon-section">
    <div class="icon">
      {#if type === 'funFact'}
        <Confetti style="width:100%;height:100%;flex-shrink:0;" />
      {:else if type === 'warning'}
        <Warning style="width:100%;height:100%;flex-shrink:0;" />
      {:else}
        <Lightbulb style="width:100%;height:100%;flex-shrink:0;" />
      {/if}
    </div>
  </div>
  <h1 class="title">{title}</h1>
  <div class="content">
    <SvelteMarkdown source={content}/>
  </div>
</aside>

<style lang="scss">
  @use 'src/scss/tokens' as token;
  @use 'src/scss/reset' as reset;
  @use 'src/scss/mixins' as mixin;

  aside {
    display: grid;
    grid-template:
      'icon title' auto
      'icon content' 1fr
      / auto 1fr;
    align-content: center;
    justify-content: center;
    gap: 0.5rem 1rem;
    font-size: 1rem;
    padding-inline: var(--page-margins);
    padding-block: 1rem;
    background: token.$bg-alt;
    @include mixin.frosted;
    margin-block-end: 1rem;
    clear: both;

    &.fun-fact {
      background: color-mix(in oklab, #{token.$green} 25%, transparent);
    }

    &.warning {
      background: color-mix(in oklab, #{token.$emphasis} 25%, transparent);

      .icon-section::before, .icon-section::after {
        border-color: token.$emphasis;
      }

      .icon {
        color: token.$emphasis;
      }
    }
  }

  .icon-section {
    grid-area: icon;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    align-self: stretch;
    &::before,
    &::after {
      content: '';
      display: flex;
      width: 0;
      border-inline: 1px solid token.$line-bright;
      border-radius: 2px;
      flex-grow: 1;
    }
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: token.$line-bright;
    aspect-ratio: 1;
  }

  .title {
    @include reset.heading;

    font-size: 1.25rem;
    line-height: 1.25;
    grid-area: title;
    font-weight: bold;
    font-style: italic;
  }

  .content {
    grid-area: content;
    font-size: 1.125rem;
    line-height: 1.25;
  }
</style>
