<script>
  import CaseStudyHeader from '../../../lib/CaseStudyHeader.svelte';

  let details = {
    client: 'MRI Software',
    title: 'Rent payment for home and business'
  };
</script>

<CaseStudyHeader {...details} />

<p>I led the first rounds of design for B2B2C rent payment portals—one for residential properties and one for commercial.</p>

<figure class="hero bleed">
  <picture>
    <source srcset="rent-payment-hero@2x.png" media="(min-width: 800px)" />
    <source srcset="rent-payment-hero@3x.png" media="(min-width: 1200px)" />
    <img src="rent-payment-hero.png" alt="Screenshots of screens from the rent payment platform" />
  </picture>
</figure>

<h2>Mobile-first payment flow</h2>

<p>During the initial sprints, we focused on making a single residential rent payment. I designed the flow mobile-first, with a modular UI architecture that would be easy to extend as more features were added.</p>

<figure>
  <picture>
    <source srcset="rent-payment-mobile-screens@2x.png" media="(min-width: 800px)" />
    <source srcset="rent-payment-mobile-screens@3x.png" media="(min-width: 1200px)" />
    <img src="rent-payment-mobile-screens.png" alt="Screenshots of mobile rent payment app" />
  </picture>
</figure>

<p>Components were designed in Figma, where they evolved individually in the context of the larger design.</p>

<div class="figure-grid three-up">
  <figure class="bleed">
    <picture>
      <source srcset="rent-payment-figma-1@2x.png" media="(min-width: 800px)" />
      <source srcset="rent-payment-figma-1@3x.png" media="(min-width: 1200px)" />
      <img
        src="rent-payment-figma-1.png"
        alt="Screenshot of a section of the Figma working file for the rent payment app"
      />
    </picture>
  </figure>
  <figure class="bleed">
    <picture>
      <source srcset="rent-payment-figma-2@2x.png" media="(min-width: 800px)" />
      <source srcset="rent-payment-figma-2@3x.png" media="(min-width: 1200px)" />
      <img
        src="rent-payment-figma-2.png"
        alt="Screenshot of a section of the Figma working file for the rent payment app"
      />
    </picture>
  </figure>
  <figure class="bleed">
    <picture>
      <source srcset="rent-payment-figma-3@2x.png" media="(min-width: 800px)" />
      <source srcset="rent-payment-figma-3@3x.png" media="(min-width: 1200px)" />
      <img
        src="rent-payment-figma-3.png"
        alt="Screenshot of a section of the Figma working file for the rent payment app"
      />
    </picture>
  </figure>
</div>

<h2>Commercial payments</h2>

<p>Payments for commercial renters follow a similar overall flow, but components for granular parts of the process were replaced with business-friendly counterparts—like selecting specific charges to pay.</p>

<div class="figure-grid">
  <figure class="bleed">
    <picture>
      <source srcset="rent-payment-commercial-dashboard@2x.png" media="(min-width: 800px)" />
      <source srcset="rent-payment-commercial-dashboard@3x.png" media="(min-width: 1200px)" />
      <img
        src="rent-payment-commercial-dashboard.png"
        alt="Screenshot of the dashboard of the commercial rent payment portal"
      />
    </picture>
  </figure>
  <figure class="bleed">
    <picture>
      <source srcset="rent-payment-commercial-payment@2x.png" media="(min-width: 800px)" />
      <source srcset="rent-payment-commercial-payment@3x.png" media="(min-width: 1200px)" />
      <img
        src="rent-payment-commercial-payment.png"
        alt="Screenshot of the payment screen of the commercial rent payment portal, showing charges to be paid"
      />
    </picture>
  </figure>
</div>

<style lang="scss">
  @use '../../../scss/content' as *;
</style>
