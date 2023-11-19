<script>
  import { CldImage } from 'svelte-cloudinary';
  import Button from "$lib/Button.svelte";
  import jobs from "./jobs";

  let extraJobs = [];

  function pushJob() {
    if (extraJobs.length != jobs.length) {
      extraJobs = extraJobs.concat(jobs[extraJobs.length])
    }
  }

  function clearExtraJobs() { extraJobs = []; }
</script>

<section class="intro">
  <CldImage class="avatar" style="width: calc(2rem + 5vw); max-width: 200px; object-fit: contain; object-position: top center;" src="avatar_nzw0md"/>
  <div class="bubbles">
    <p class="intro-bubble">Hi, I’m <span class="green">Nate Green</span>. I’m a full-stack UX designer, and I craft high-quality digital products and design systems.</p>
    {#each extraJobs as job}
      <p class="extra-bubble">I also <span class="green">{job}</span>.</p>
    {/each}
    <div class="actions">
      <Button label="What else do I do?" on:click={pushJob}/>
      {#if extraJobs.length > 0 }<Button label="Okay, we get it" variant="text" on:click={clearExtraJobs}/>{/if}
    </div>
  </div>
</section>

<style lang="scss">
	@use 'src/scss/tokens' as token;
  
  .intro {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 0.5rem;
    padding-inline: var(--page-margins);
    padding-block-start: 2rem;
    container-type: inline-size;
    will-change: contents;
    --arrow-size: 3vmin;
    --bubble-radius: 2vmin;
    --intro-text-size: calc(0.5rem + 4vmin);
  }

  .bubbles {
    display: flex;
    flex-direction: column;
    gap: var(--arrow-size);
  }

  p.intro-bubble {
    background: token.$neutral-dark;
    color: token.$neutral-light;
    font-size: var(--intro-text-size);
    line-height: 1.25;
    font-style: italic;
    font-weight: 900;
    padding: 1rem 1.5rem;
    border-radius: var(--bubble-radius);
    margin-inline-start: var(--arrow-size);
    position: relative;

    .green {
      color: token.$green;
      font-size: 1em;
    }

    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: calc((var(--arrow-size) * -1) + 1px);
      top: calc(1rem + 1em - var(--arrow-size));
      border-style: solid;
      border-color: transparent token.$neutral-dark token.$neutral-dark transparent;
      border-width: calc(var(--arrow-size) / 2);
    }
  }

  .extra-bubble {
    background: token.$neutral-dark;
    color: token.$neutral-light;
    padding: 1rem 1.5rem;
    border-radius: var(--bubble-radius);
    margin-inline-start: var(--arrow-size);
    position: relative;
    font-style: italic;
    font-size: calc(var(--intro-text-size) * .75);
    line-height: 1.25;
    animation: fade-in 0.25s ease-out;

    @media (prefers-reduced-motion) {
      animation: none;
    }

    .green {
      display: inline;
      all: unset;
      color: token.$green;
    }

    &::before {
      content: "";
      position: absolute;
      top: calc((var(--arrow-size) * -1));
      background: token.$neutral-dark;
      -webkit-mask-image: url("bubble-connector.svg");
      mask-image: url("bubble-connector.svg");
      -webkit-mask-size: 100%;
      mask-size: 100%;
      -webkit-mask-position: top left;
      mask-position: top left;
      width: var(--arrow-size);
      height: var(--arrow-size);
    }
  }

  .actions {
    display: flex;
    gap: 1rem;
    padding-left: var(--arrow-size);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-1em);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>