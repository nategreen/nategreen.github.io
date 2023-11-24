import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: 'svelte',
      autoInstall: true,
    })
  ],
  ssr: {
    noExternal: ['tsparticles', 'tsparticles-slim', 'tsparticles-engine', 'svelte-particles'], // add all tsparticles libraries here, they're not made for SSR, they're client only
  }
});
