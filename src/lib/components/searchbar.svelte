<script>
	import { createEventDispatcher } from 'svelte';
	export let query = '';

	const dispatch = createEventDispatcher();

	function handleSubmit() {
		dispatch('search');
	}
</script>

<nav class="navbar my-nav shadow-sm sticky-top bg-white">
	<div class="container-fluid py-2">
		<form class="d-flex w-100 gap-2" role="search" on:submit|preventDefault={handleSubmit}>
			<input
				class="form-control form-control-lg search-input"
				type="search"
				placeholder="🔍 Search books by title, author..."
				bind:value={query}
				aria-label="Search"
			/>
			<button class="btn btn-lg btn-primary px-4" type="submit"> Search </button>
		</form>
	</div>
</nav>

<style>
	.my-nav {
		border-bottom: 1px solid #dee2e6;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
		z-index: 1030;
	}

	.search-input {
		border-radius: 0.5rem;
		transition:
			border-color 0.2s ease-in-out,
			box-shadow 0.2s ease-in-out;
	}

	.search-input:focus {
		border-color: #0d6efd;
		box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
	}

	button[type='submit'] {
		border-radius: 0.5rem;
		transition: background-color 0.3s ease;
	}

	button[type='submit']:hover {
		background-color: #0b5ed7;
	}
</style>
