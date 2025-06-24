<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import Navbar from '$lib/components/navbar.svelte';
	import { goto } from '$app/navigation';
</script>

<Navbar />

<section class="hero-section">
	<h1 class="display-4 fw-bold text-primary">Welcome to BookVerse</h1>
	<p class="lead text-secondary mt-3">
		Discover a world of knowledge with our powerful book explorer built on the Google Books API.
		<br />
		Search by title, author, or topic — and instantly access book summaries, ratings, reviews, and previews.
		<br />
		Perfect for readers, researchers, and curious minds alike!
	</p>

	<button class="btn btn-outline-primary hero-btn" on:click={() => goto('/dashboard')}>
		Go to Dashboard
	</button>
</section>

<style>
	.hero-section {
		min-height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(to right, #e0f7fa, #ffffff);
		text-align: center;
		padding: 2rem;
		animation: fadeIn 1s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.hero-btn {
		margin-top: 2rem;
		padding: 0.75rem 2rem;
		font-size: 1.2rem;
		border-radius: 30px;
		transition: all 0.3s ease;
	}

	.hero-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
</style>
