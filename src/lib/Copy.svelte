<slot />

<style lang="scss">
	@use 'src/scss/tokens' as token;
	@use 'src/scss/reset' as reset;

  $bp: 40rem;
  
	:global(p) {
    @include reset.p;
		font-family: 'Libertad', sans-serif;
		font-size: 1rem;

    @media (min-width: 40rem) {
      font-size: 1.125rem;
    }
	}

  :global(> *:not(:last-child)) {
    margin-block-end: 1rem;

    @media (min-width: $bp) {
      margin-block-end: 1.5rem;
    }
  }
</style>
