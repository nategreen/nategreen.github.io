<script>
	import Time from 'svelte-time';
</script>

<footer>
	<small>©<Time format="YYYY" /> Nate Green.</small>
	<small><a href="https://github.com/nategreen/nategreen.github.io">Handwritten</a> in <a href="https://svelte.dev">Svelte</a>, with <a href="https://hygraph.com">Hygraph</a> for content and <a href="https://pages.github.com">Github Pages</a> for hosting.</small>
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
		text-align: center;
		background: color-mix(in oklab, token.$bg-alt 50%, transparent);		
		color: token.$text-dim;
		@include mixin.frosted;
	}

	a {
		@include reset.link;

		text-decoration: underline;
	}
</style>
