<script>
  import CaseStudyHeader from '../../../lib/CaseStudyHeader.svelte';

  let details = {
    client: 'MRI Software',
    startDate: '2017',
    endDate: '2022',
    title: 'Easy reporting automation'
  };
</script>

<CaseStudyHeader {...details} />

<p>
  Common tasks in Report Gateway were time-consuming and manual. Over several months, I worked with
  a team to add <strong>automation</strong> and <strong>sharing</strong> features that exponentially
  improved the product’s efficiency and capability.
</p>

<figure class="hero">
  <picture>
    <source srcset="reporting-automation-hero@2x.png" media="(min-width: 800px)" />
    <source srcset="reporting-automation-hero@3x.png" media="(min-width: 1200px)" />
    <img src="reporting-automation-hero.png" alt="Screens from the reporting automation tool" />
  </picture>
</figure>

<h2>Defining the problem</h2>

<p>
  One of the most challenging tasks in this project was getting consensus on the problems to solve.
  Collaborating with design and product leadership, we nailed down a few distinct problems:
</p>

<ul class="blurb-list">
  <li class="blurb-list-item">
    <h3>Combining documents</h3>
    <p>
      Users would often use third-party tools or complicated reports to combine multiple documents
      into one final deliverable.
    </p>
  </li>
  <li class="blurb-list-item">
    <h3>Iterative reporting</h3>
    <p>
      Part of our clients’ process was to generate and send specific reports for each investor,
      vendor, etc.—which could take days of manual work.
    </p>
  </li>
  <li class="blurb-list-item">
    <h3>Sending reports</h3>
    <p>
      After generating tens or hundreds of reports, users sometimes needed to spend several hours
      sending them to stakeholders or uploading them to a portal.
    </p>
  </li>
</ul>

<h2>What we shipped</h2>

<h3><strong>Sharing</strong> for sending reports</h3>

<p>
  We created a framework for sharing reports. Sharing is an extensible method of a generated
  document in an action, such as sending via email or uploading to a portal.
</p>

<div class="figure-grid">
  <figure>
    <img src="reporting-share-screen.png" alt="Screenshot of the sharing screen" />
  </figure>
  <figure>
    <img
      src="reporting-send-email.png"
      alt="Screenshot of the form for sending a report as an email"
    />
  </figure>
</div>

<h3><strong>Packets</strong> for combining documents</h3>

<p>
  Packets combine several reports or documents into one final output. Packets configure their
  reports dynamically using user-managed parameters.
</p>

<figure>
  <picture>
    <source srcset="reporting-packets@2x.png" media="(min-width: 800px)" />
    <source srcset="reporting-packets@3x.png" media="(min-width: 1200px)" />
    <img src="reporting-packets.png" alt="Screenshot of the packet setup screen" />
  </picture>
</figure>

<h3><strong>Batches</strong> for iterative reporting</h3>

<p>
  Batches allow users to produce a copy of a report or packet for each item in a given list. Each
  copy can then be distributed using pre-configured sharing.
</p>

<figure>
  <picture>
    <source srcset="reporting-batches@2x.png" media="(min-width: 800px)" />
    <source srcset="reporting-batches@3x.png" media="(min-width: 1200px)" />
    <img src="reporting-batches.png" alt="Screenshot of the report batch setup screen" />
  </picture>
</figure>

<h2>Design patterns</h2>

<p>
  Using similar UI throughout the product gives the advanced features a cohesive, simple feel. I
  designed these patterns in parallel with the features themselves.
</p>

<div class="figure-with-text">
  <div class="text">
    <h3>Parameters</h3>
    <p>
      Almost all of these features allow users to configure something by filling in a form. I used a
      common layout and interaction pattern for parameters, so learning to use them once would
      translate throughout the product.
    </p>
  </div>
  <figure>
    <picture>
      <source srcset="reporting-parameters@2x.png" media="(min-width: 800px)" />
      <source srcset="reporting-parameters@3x.png" media="(min-width: 1200px)" />
      <img
        src="reporting-parameters.png"
        alt="Screenshot of parameters in the setup screen for report packets"
      />
    </picture>
  </figure>
</div>

<div class="figure-with-text reverse">
  <div class="text">
    <h3>Variables</h3>
    <p>
      Throughout the UI, parameters can be tied to a dynamic value, such as the current date or a
      value chosen from a list. Even though variables are an advanced technological concept, the
      interaction is simple and guides the user through the process.
    </p>
  </div>
  <figure>
    <picture>
      <source srcset="reporting-variables@2x.png" media="(min-width: 800px)" />
      <source srcset="reporting-variables@3x.png" media="(min-width: 1200px)" />
      <img
        src="reporting-variables.png"
        alt="Screenshot of the popover where variables can be selected"
      />
    </picture>
  </figure>
</div>

<div class="figure-with-text">
  <div class="text">
    <h3>Extensibility</h3>
    <p>
      Packet contents, sharing methods, and batch data sources were designed to be extended, adding
      future integrations to the existing interaction patterns without needing to redesign the UI.
    </p>
  </div>
  <figure>
    <picture>
      <source srcset="reporting-extensibility@2x.png" media="(min-width: 800px)" />
      <source srcset="reporting-extensibility@3x.png" media="(min-width: 1200px)" />
      <img src="reporting-extensibility.png" alt="Diagram of shapes representing extensibility" />
    </picture>
  </figure>
</div>

<style lang="scss">
  @use '../../../scss/content' as *;
</style>
