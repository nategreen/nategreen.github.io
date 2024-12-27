<script>
  import Time from 'svelte-time';
</script>

<footer>
  <div class="get-in-touch">
    <h3>Get in touch</h3>
    <a href="mailto:heynategreen@gmail.com">heynategreen@gmail.com</a>
  </div>
  <p class="fine-print">
    ©<Time format="YYYY" /> Nate Green. <a href="https://github.com/nategreen/nategreen.github.io">Handwritten</a> in <a href="https://svelte.dev">Svelte</a>, using <a href="https://pages.github.com">Github Pages</a> for hosting.
  </p>
</footer>

<style lang="scss">
  @use 'src/scss/tokens' as token;
  @use 'src/scss/reset' as reset;
  @use 'src/scss/mixins' as mixin;

  footer {
    display: flex;
    flex-direction: column;
    padding-inline: var(--page-margins);
    padding-block: 32px;
    background: color-mix(in oklab, token.$bg-alt 50%, transparent);
    color: token.$text-dim;
    @include mixin.frosted;
  }

  a {
    @include reset.link;

    text-decoration: underline;
  }

	p.fine-print {
		font-size: .825rem;
		margin-top: 1rem;

		@media screen and (min-width: 40rem) {
			font-size: 1rem;
		margin-top: 2rem;
	}
	}

  .get-in-touch {
    h3 {
      font-size: 2rem;
      font-weight: 200;
      text-align: left;

      @media screen and (min-width: 40rem) {
        font-size: 3.5rem;
      }
    }

    a {
      font-size: 1.5rem;
      font-weight: 200;
      text-align: left;
      color: token.$text-green;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      @media screen and (min-width: 40rem) {
        font-size: 2rem;
      }
    }
  }
</style>
