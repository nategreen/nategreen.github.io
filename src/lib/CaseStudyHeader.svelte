<script>
  let { title, startDate, endDate, client } = $props();
</script>

<header class="header">
  <div class="meta">
    <span class="client">{client}</span>
    {#if startDate && endDate}
     • <span class="date-range">{startDate}–{endDate}</span>
    {/if}
  </div>
  <h2 class="title">{title}</h2>
</header>

<style lang=scss>
  @use "../scss/tokens" as token;
  @use "../scss/reset" as reset;
  @use "../scss/mixins" as *;

  header {
    margin-inline: var(--page-margins);
    color: token.$text;
  }

  .meta {
    color: token.$text-dim;
  }

  .title {
    @include reset.heading;
    font-size: 2rem;
    font-weight: 200;

    @media screen and (min-width: 40rem) {
      font-size: 3.5rem;
    }
  }
</style>