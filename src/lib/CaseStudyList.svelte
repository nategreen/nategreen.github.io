<h2 class="title">Case studies</h2>

<ul class="list">
  <li class="list-item">
    <a href="case-study/reporting-automation" class="link">
      <img src="case-studies/reporting-automation-thumb@2x.png" alt="Mockup of reporting tool" class="item-image">
      <div class="item-text">
        <h3 class="item-title">Easy reporting automation</h3>
        <p class="item-description">Giving Report Gateway users superpowers to combine and automate reporting</p>
      </div>
    </a>
  </li>
  <li class="list-item">
    <a href="case-study/design-system" class="link">
      <img src="case-studies/design-system-thumb@2x.png" alt="Mockup of reporting tool" class="item-image">
      <div class="item-text">
        <h3 class="item-title">Design system expansion</h3>
        <p class="item-description">Refactoring an established design system to give designers more freedom and power</p>
      </div>
    </a>
  </li>
  <li class="list-item">
    <a href="case-study/rent-payment" class="link">
      <img src="case-studies/rent-payment-thumb@2x.png" alt="Mockup of reporting tool" class="item-image">
      <div class="item-text">
        <h3 class="item-title">Rent payment for home and business</h3>
        <p class="item-description">Designing a B2B2C portal for residential and commercial renters to easily make their payments</p>
      </div>
    </a>
  </li>
  <li class="list-item">
    <a href="case-study/low-code-dev" class="link">
      <img src="case-studies/low-code-dev-thumb@2x.png" alt="Mockup of reporting tool" class="item-image">
      <div class="item-text">
        <h3 class="item-title">Low-code development tool </h3>
        <p class="item-description">Modernizing a user-beloved tool for creating and customizing enterprise web apps</p>
      </div>
    </a>
  </li>
</ul>

<style lang="scss">
  @use 'src/scss/tokens' as token;
  @use 'src/scss/reset' as reset;
  @use 'src/scss/mixins' as mixin;
  
  .title {
    @include reset.heading;
    font-size: 3.5rem;
    font-weight: 200;
    line-height: 1.25;
    margin-inline: var(--page-margins);
    margin-block-end: 3rem;

    @media (max-width: 50rem) {
      font-size: 2.5rem;
      margin-block-end: 2rem;
    }
  }

  .list {
    @include reset.list;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 1.5rem;
    justify-content: center;
    margin-inline: var(--page-margins);
    margin-bottom: 3rem;
    user-select: none;

    @media (max-width: 50rem) {
      grid-template-columns: 1fr;
    }
  }

  .list-item {
    display: contents;
  }

  .link {
    @include reset.link;
    @include mixin.frosted;
    display: grid;
    grid-template-rows: 2fr 1fr;
    aspect-ratio: 4/3;
    position: relative;
    overflow: hidden;
    border-radius: 0.25rem;
    background: token.$bg-transparent;

    @media (max-width: 50rem) {
      grid-template-rows: 1fr auto;
      aspect-ratio: 3/4;
    }
  }

  .item-text {
    @include mixin.frosted;
    display: flex;
    flex-direction: column;
    grid-row: 2;
    grid-column: 1 / span 2;
    margin: .5rem;
    border-radius: 0.25rem;
    background: token.$bg-transparent;
    padding: 1.5rem;
    gap: 0.5rem;
    color: token.$text;
  }

  .item-title {
    @include reset.heading;
    font-size: 1.5em;
    font-weight: 700;
  }

  .item-description {
    @include reset.p;
  }

  .item-image {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
    width: 100%;
    height: 100%;
    transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
    object-fit: cover;
    align-self: center;
    justify-self: center;

    .link:hover & {
      width: 110%;
      height: 110%;
    }
  }
</style>