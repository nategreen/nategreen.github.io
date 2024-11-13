<script>
  import { theme } from '../stores/theme';

  let selectedTheme = $state();
  const setTheme = (value) => theme.set(value);
  theme.subscribe((value) => (selectedTheme = value));
</script>

<form onchange={setTheme(selectedTheme)}>
  <input
    type="radio"
    name="theme"
    id="theme-auto"
    class="theme auto"
    aria-label="Auto theme"
    value="auto"
    bind:group={selectedTheme}
    title="Auto theme"
  />
  <input
    type="radio"
    name="theme"
    id="theme-light"
    class="theme light"
    aria-label="Light theme"
    title="Light theme"
    value="light"
    bind:group={selectedTheme}
  />
  <input
    type="radio"
    name="theme"
    id="theme-dark"
    class="theme dark"
    aria-label="Dark theme"
    title="Dark theme"
    value="dark"
    bind:group={selectedTheme}
  />
</form>

<style lang="scss">
  @use 'src/scss/tokens' as token;

  form {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid token.$line-dim;
    border-radius: 4px;
    padding: 8px;
  }

  input {
    appearance: none;
    margin: 0;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 1rem;
    border: 1px solid token.$line-dim;
    transition: outline-color 0.25s ease-in-out;
    outline-color: transparent;
    outline-width: 2px;
    cursor: pointer;

    &:checked {
      outline: 2px solid token.$blue;
      outline-offset: 2px;
    }
  }

  .theme.auto {
    background: linear-gradient(to top left, white, white 50%, black 50.00001%, black);
  }

  .theme.light {
    background: white;
  }

  .theme.dark {
    background: black;
  }
</style>
