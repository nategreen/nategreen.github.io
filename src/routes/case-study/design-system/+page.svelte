<script>
  import CaseStudyHeader from '../../../lib/CaseStudyHeader.svelte';

  let details = {
    client: 'MRI Software',
    startDate: '2021',
    endDate: '2022',
    title: 'Design system expansion'
  };
</script>

<CaseStudyHeader {...details} />

<p>
  As our design system grew, some patterns were becoming restrictive and created friction in the
  design process. I worked with design leadership to craft an updated design system, which would
  give designers freedom to be creative without sacrificing consistency.
</p>

<figure class="hero bleed">
  <picture>
    <source srcset="design-system-hero@2x.png" media="(min-width: 800px)" />
    <source srcset="design-system-hero@3x.png" media="(min-width: 1200px)" />
    <img src="design-system-hero.png" alt="Diagram of design system patterns" />
  </picture>
</figure>

<h2>Team explorations</h2>

<p>
  At the start of the project, a global task force of designers was assembled to discuss their
  experiences with the design system and crowdsource ideas for a visual direction.
</p>

<div class="figure-grid three-up">
  <figure class="bleed">
    <picture>
      <source srcset="design-system-teamwork-1@2x.png" media="(min-width: 800px)" />
      <source srcset="design-system-teamwork-1@3x.png" media="(min-width: 1200px)" />
      <img
        src="design-system-teamwork-1.png"
        alt="Illustration of teammates collaborating in Figma"
      />
    </picture>
  </figure>
  <figure class="bleed">
    <picture>
      <source srcset="design-system-teamwork-2@2x.png" media="(min-width: 800px)" />
      <source srcset="design-system-teamwork-2@3x.png" media="(min-width: 1200px)" />
      <img
        src="design-system-teamwork-2.png"
        alt="Illustration of teammates collaborating in Figma"
      />
    </picture>
  </figure>
  <figure class="bleed">
    <picture>
      <source srcset="design-system-teamwork-3@2x.png" media="(min-width: 800px)" />
      <source srcset="design-system-teamwork-3@3x.png" media="(min-width: 1200px)" />
      <img
        src="design-system-teamwork-3.png"
        alt="Illustration of teammates collaborating in Figma"
      />
    </picture>
  </figure>
</div>

<p>
  When high-level patterns didn’t fit, designers had a hard time using the basic building blocks of
  the design system in a cohesive, creative way, so they tended to want to create things from
  scratch.
</p>

<h2>Goals</h2>

<p>
  Among other team goals, we identified two key improvements for our design system and Figma
  resources:
</p>

<ul class="blurb-list">
  <li class="blurb-list-item">
    <h3>Refresh the look</h3>
    <p>
      Our design system had grown out of sync with company branding and UI design trends.
      Consistency was important but sometimes meant sacrificing a fresh design for a more subdued
      one.
    </p>
  </li>
  <li class="blurb-list-item">
    <h3>Make atoms easier to use</h3>
    <p>
      When high-level patterns didn’t fit, designers had a hard time using the basic building blocks
      of the design system in a cohesive, creative way, so they tended to want to create things from
      scratch.
    </p>
  </li>
</ul>

<h2>Design direction</h2>

<p>
  Inspiration was drawn from team conversations, examples from the internet, and the company’s
  marketing collateral. After weeks of experimentation and critiques, the visual identity and design
  strategy started to take shape.
</p>

<div class="figure-with-text">
  <div class="text">
    <h3>Thoughtful use of color</h3>
    <p>
      Saturating the core colors made the palettes more useful at the lightest and darkest ends. UI
      examples relied on neutral colors to define the structure, and used brighter colors to direct
      users’ attention, give the UI more personality or color-code information.
    </p>
  </div>
  <figure class="bleed">
    <picture>
      <source srcset="design-system-use-of-color@2x.png" media="(min-width: 800px)" />
      <source srcset="design-system-use-of-color@3x.png" media="(min-width: 1200px)" />
      <img src="design-system-use-of-color.png" alt="Screenshot of a design showing use of design system colors" />
    </picture>
  </figure>
</div>

<div class="figure-with-text reverse">
  <div class="text">
    <h3>Focus on content</h3>
    <p>
      Enterprise UI design can be pretty complex. Cutting down on extra borders and sectioning
      elements solved some common layout challenges and made dense content easier to comprehend.
    </p>
  </div>
  <figure class="bleed">
    <picture>
      <source srcset="design-system-focus-on-content@2x.png" media="(min-width: 800px)" />
      <source srcset="design-system-focus-on-content@3x.png" media="(min-width: 1200px)" />
      <img src="design-system-focus-on-content@2x.png" alt="Screenshot of a design where content is the focal point" />
    </picture>
  </figure>
</div>

<div class="figure-with-text">
  <div class="text">
    <h3>Space to breathe</h3>
    <p>
      Complex layouts were refactored using patterns like progressive disclosure rather than trying
      to fit all the UI on the screen at once. This approach also works better for mobile-first
      design, which some projects struggled with.
    </p>
  </div>
  <figure class="bleed">
    <picture>
      <source srcset="design-system-space-to-breathe@2x.png" media="(min-width: 800px)" />
      <source srcset="design-system-space-to-breathe@3x.png" media="(min-width: 1200px)" />
      <img src="design-system-space-to-breathe@2x.png" alt="Screenshot of a design with white space and balance" />
    </picture>
  </figure>
</div>

<div class="figure-with-text reverse">
  <div class="text">
    <h3>Added UI patterns</h3>
    <p>
      Filling out the library with modern components or patterns for UI gives designers more options
      and helps interfaces feel more familiar to users.
    </p>
  </div>
  <figure class="bleed">
    <picture>
      <source srcset="design-system-added-patterns@2x.png" media="(min-width: 800px)" />
      <source srcset="design-system-added-patterns@3x.png" media="(min-width: 1200px)" />
      <img src="design-system-added-patterns@2x.png" alt="Screenshots of mobile designs representing new UI patterns covered by the design system" />
    </picture>
  </figure>
</div>

<h2>Testing the system</h2>

<p>
  I conducted research with teammates, giving them an exercise to complete while they thought aloud.
</p>

<div class="figure-grid">
  <figure class="bleed">
    <picture>
      <source srcset="design-system-testing-1@2x.png" media="(min-width: 800px)" />
      <source srcset="design-system-testing-1@3x.png" media="(min-width: 1200px)" />
      <img
        src="design-system-testing-1.png"
        alt="Illustration of a teammate and I collaborating in Figma"
      />
    </picture>
  </figure>
  <figure class="bleed">
    <picture>
      <source srcset="design-system-testing-2@2x.png" media="(min-width: 800px)" />
      <source srcset="design-system-testing-2@3x.png" media="(min-width: 1200px)" />
      <img
        src="design-system-testing-2.png"
        alt="Illustration of a teammate and I collaborating in Figma"
      />
    </picture>
  </figure>
</div>

<p>
  In just a couple of hours, designers improved the clarity and feel of their designs, with minimal
  coaching. We also uncovered some Figma friction points we could use to further refine and expand
  the system.
</p>

<style lang="scss">
  @use '../../../scss/content' as *;
</style>
