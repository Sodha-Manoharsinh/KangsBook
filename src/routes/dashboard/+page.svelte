<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Content from '$lib/components/content.svelte';
</script>

<Navbar />

<div class="dashboard container-fluid">
	<Content />
</div>

<style>
	.dashboard {
		min-height: 100vh;
		background: linear-gradient(to right, #e3f2fd, #ffffff);
		padding-top: 1rem;
	}
</style>
