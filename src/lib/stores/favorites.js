import { writable } from 'svelte/store';

const stored = localStorage.getItem('favorites');
const initial = stored ? JSON.parse(stored) : [];

export const favorites = writable(initial);

favorites.subscribe((value) => {
	localStorage.setItem('favorites', JSON.stringify(value));
});
