import { writable } from "svelte/store";
import { browser } from "$app/environment";

let stored = browser ? localStorage.theme : "auto";

export const theme = writable(stored);

if (browser) {
  theme.subscribe((value) => localStorage.theme = value)
}
