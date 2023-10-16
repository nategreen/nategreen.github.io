import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export var theme;

if (browser) {
  if (localStorage.theme) {
    theme = writable(localStorage.theme);
  } else {
    theme = writable('auto');
  }
} else {
  theme = writable('auto');
}

if (browser) {
  theme.subscribe((value) => {
    localStorage.theme = value;
  });
}
