<script>
	import Card from '$lib/components/card.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { favorites } from '$lib/stores/favorites';
	import { fly } from 'svelte/transition';
</script>

<Navbar />

<div class="container favs">
	<h4 class="text-center mb-4">All your favorites are here</h4>

	{#if $favorites.length > 0}
		<div class="d-flex flex-wrap justify-content-center gap-3">
			{#each $favorites as book (book.id)}
				<div in:fly={{ y: 20, duration: 200 }} out:fly={{ y: -20, opacity: 0, duration: 300 }}>
					<Card {book} />
				</div>
			{/each}
		</div>
	{:else}
		<p class="text-center text-muted">No favorites found. Add some ❤️</p>
	{/if}
</div>

<style>
	.favs {
		margin-top: 5rem;
		min-height: 80vh;
	}
</style>
