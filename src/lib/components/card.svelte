<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { favorites } from '$lib/stores/favorites.js';

	export let book = {};
	const volume = book.volumeInfo;

	$: isFavorite = $favorites.some((f) => f.id === book.id);

	function toggleFavorite() {
		favorites.update((favs) => {
			const exists = favs.find((f) => f.id === book.id);
			if (exists) {
				return favs.filter((f) => f.id !== book.id);
			} else {
				return [...favs, book];
			}
		});
	}
</script>

<div class="book-card card shadow-sm border-0 m-2 rounded-4 position-relative">
	<!-- ❤️ Favorite Button -->
	<button
		class="btn btn-light btn-sm favorite-btn position-absolute"
		on:click={toggleFavorite}
		aria-label="Toggle Favorite"
	>
		{#if isFavorite}
			<span class="text-danger fs-5">❤️</span>
		{:else}
			<span class="text-secondary fs-5">🤍</span>
		{/if}
	</button>

	<!-- Book Image -->
	{#if volume.imageLinks?.thumbnail}
		<img
			class="card-img-top rounded-top-4"
			src={volume.imageLinks.thumbnail}
			alt="Book Cover"
			style="height: 350px; object-fit: cover;"
		/>
	{:else}
		<div
			class="d-flex align-items-center justify-content-center bg-light text-muted rounded-top-4"
			style="height: 350px; font-size: 0.95rem;"
		>
			No Cover Available
		</div>
	{/if}

	<!-- Book Info -->
	<div class="card-body d-flex flex-column px-3 pb-3 pt-2">
		<h5 class="card-title fw-bold text-truncate" title={volume.title}>
			{volume.title}
		</h5>

		{#if volume.authors}
			<p class="text-muted mb-1 line-clamp" title={volume.authors.join(', ')}>
				👤 {volume.authors.join(', ')}
			</p>
		{/if}

		{#if volume.averageRating}
			<p class="mb-1 text-warning">
				⭐ {volume.averageRating} / 5 ({volume.ratingsCount} ratings)
			</p>
		{/if}

		<p class="card-text text-muted small line-clamp" title={volume.description}>
			{volume.description}
		</p>

		<small class="text-muted mt-auto">
			📖 {volume.publisher} | {volume.publishedDate}
		</small>

		<a class="btn btn-sm btn-outline-primary mt-3 w-100" href={volume.previewLink} target="_blank">
			🔗 Preview Book
		</a>
	</div>
</div>

<style>
	.book-card {
		width: 20rem;
		height: 38rem;
		background: #ffffff;
		border: 2px solid #e0e0e0;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease,
			border-color 0.25s ease;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
	}

	.book-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
		border-color: #0d6efd;
	}

	.line-clamp {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.favorite-btn {
		top: 0.5rem;
		left: 0.5rem;
		border-radius: 50%;
		padding: 0.3rem 0.5rem;
		z-index: 10;
		background: white;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
	}
</style>
