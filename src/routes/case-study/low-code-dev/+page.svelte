<script>
  import CaseStudyHeader from '../../../lib/CaseStudyHeader.svelte';

  let details = {
    client: 'MRI Software',
    title: 'Low-code app development tool'
  };
</script>

<CaseStudyHeader {...details} />

<p>
  When a Windows-based page customization app began to show its age, I spearheaded the design of a
  web-based version. User research played a key role from the beginning as we shaped the information
  architecture and design of key features, culminating in an MVP for internal use.
</p>

<figure class="hero bleed">
  <picture>
    <source srcset="low-code-hero@2x.png" media="(min-width: 800px)" />
    <source srcset="low-code-hero@3x.png" media="(min-width: 1200px)" />
    <img
      src="low-code-hero.png"
      alt="Screenshots of screens from the low code development platform"
    />
  </picture>
</figure>

<h2>Formative research</h2>

<p>
  We interviewed users of the legacy tool to identify features they relied on, common pain points,
  and opportunities to add missing features. Then, we distilled the data from the interviews into an
  actionable set of requirements for early design and prototyping efforts.
</p>

<figure>
  <picture>
    <source srcset="low-code-stickies@2x.png" media="(min-width: 800px)" />
    <source srcset="low-code-stickies@3x.png" media="(min-width: 1200px)" />
    <img src="low-code-stickies.png" alt="Photo of sticky notes from a research analysis board" />
  </picture>
</figure>

<h2>Agile design and development</h2>

<p>
  During the initial months of the project, I designed and conducted usability research in 4-week
  cycles, coinciding with the development team’s sprint schedule.
</p>

<div class="figure-grid three-up">
  <figure class="bleed">
    <picture>
      <source srcset="low-code-process-1@2x.png" media="(min-width: 800px)" />
      <source srcset="low-code-process-1@3x.png" media="(min-width: 1200px)" />
      <img src="low-code-process-1.png" alt="Photo of sketch pages from early drafts of designs" />
    </picture>
  </figure>
  <figure class="bleed">
    <picture>
      <source srcset="low-code-process-2@2x.png" media="(min-width: 800px)" />
      <source srcset="low-code-process-2@3x.png" media="(min-width: 1200px)" />
      <img
        src="low-code-process-2.png"
        alt="Screenshot of an early design of the canvas in the low code development tool"
      />
    </picture>
  </figure>
  <figure class="bleed">
    <picture>
      <source srcset="low-code-process-3@2x.png" media="(min-width: 800px)" />
      <source srcset="low-code-process-3@3x.png" media="(min-width: 1200px)" />
      <img
        src="low-code-process-3.png"
        alt="Screenshots of mobile and tablet formatted pages created in the low code development tool"
      />
    </picture>
  </figure>
</div>

<h2>Designed for developers and accountants</h2>

<p>
  Although the development tool required powerful, developer-oriented features, it also had to be
  within reach of users with little development experience. My approach was to design using
  development conventions, but with a pathway (e.g. an alternative simplified interface) for quick,
  limited modifications.
</p>

<div class="figure-grid">
  <figure class="bleed">
    <picture>
      <source srcset="low-code-complex@2x.png" media="(min-width: 800px)" />
      <source srcset="low-code-complex@3x.png" media="(min-width: 1200px)" />
      <img
        src="low-code-complex.png"
        alt="Screenshot of the SQL query editing screen of the low code development tool"
      />
    </picture>
  </figure>
  <figure class="bleed">
    <picture>
      <source srcset="low-code-simplified@2x.png" media="(min-width: 800px)" />
      <source srcset="low-code-simplified@3x.png" media="(min-width: 1200px)" />
      <img
        src="low-code-simplified.png"
        alt="Screenshot of the canvas and properties of a selected element in the low code development tool"
      />
    </picture>
  </figure>
</div>

<style lang="scss">
  @use '../../../scss/content' as *;
</style>
