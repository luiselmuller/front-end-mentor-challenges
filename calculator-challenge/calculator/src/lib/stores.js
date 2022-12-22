import { writable } from "svelte/store";

export let theme = writable(1);
export let calculation = writable("");