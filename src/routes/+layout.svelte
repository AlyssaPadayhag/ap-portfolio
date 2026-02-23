<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from "$lib/components/Header.svelte";

	let { children } = $props();
</script>

<Header />


<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}



<style>
	body {
		background-image: url("src/lib/assets/src/lib/assets/aaron-burden-yzgF-AQt1sQ-unsplash.jpg");
	}
</style>