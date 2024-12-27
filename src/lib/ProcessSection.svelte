<h2 class="title">Process</h2>

<ol class="steps">
  <li class="step">
    <h3 class="step-title">1. Discovery</h3>
    <p class="step-text">
      Gather information about the problems users face and constraints that will affect the
      solution.
    </p>
  </li>
  <li class="step">
    <h3 class="step-title">2. Design</h3>
    <p class="step-text">
      Use low-fidelity designs (like wireframes, post-its, or flow charts) to collaborate, and
      high-fidelity designs (like mockups and prototypes) to hone the direction and inspire the
      team.
    </p>
  </li>
  <li class="step">
    <h3 class="step-title">3. Evaluation</h3>
    <p class="step-text">
      Get the team’s consensus on designs, and do some research into how the design works for real
      users.
    </p>
  </li>
  <li class="step">
    <h3 class="step-title">4. Implementation</h3>
    <p class="step-text">
      Collaborate with developers and project leaders to produce a sparkling finished product with
      the time and resources allotted.
    </p>
  </li>
</ol>

<style lang="scss">
  @use '../scss/reset' as reset;
  @use '../scss/mixins' as mixin;
  @use '../scss/tokens' as token;

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

  .steps {
    @include reset.list;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 1.5rem;
    justify-content: center;
    margin-inline: var(--page-margins);
    margin-bottom: 3rem;

    @media (max-width: 50rem) {
      grid-template-columns: 1fr;
    }
  }

  .step {
    @include mixin.frosted;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    background: token.$bg-transparent;
    padding: 1.5rem;
    gap: 0.5rem;
    color: token.$text;
  }

  .step-title {
    font-size: 1.5rem;
  }

  .step-text {
    font-size: 1.125rem;
    line-height: 1.5;
  }
</style>
