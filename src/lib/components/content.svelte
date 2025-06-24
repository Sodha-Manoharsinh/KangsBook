<script>
	import axios from 'axios';
	import Searchbar from '../components/searchbar.svelte';
	import Card from '../components/card.svelte';
	import { fade, scale } from 'svelte/transition';

	let query = '';
	let books = [];
	let loading = false;

	async function fetchBooks(q) {
		if (!q.trim()) return;
		loading = true;
		try {
			const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`);
			books = res.data.items || [];
			query = '';
		} catch (err) {
			console.error('API error:', err);
		} finally {
			loading = false;
		}
	}
</script>

<main>
	<div class="container text-center">
		<Searchbar bind:query on:search={() => fetchBooks(query)} />
	</div>

	{#if loading}
		<p class="text-center mt-5">🔄 Loading...</p>
	{:else if books.length > 0}
		<div class="container cards-grid">
			{#each books as book (book.id)}
				<div in:fade={{ duration: 300 }} out:fade>
					<Card {book} />
				</div>
			{/each}
		</div>
	{:else}
		<p class="text-center mt-5 text-muted">🔍 No books found.</p>
	{/if}
</main>

<style>
	main {
		padding-top: 4rem;
	}

	.cards-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 2rem;
		padding-bottom: 2rem;
	}
</style>
