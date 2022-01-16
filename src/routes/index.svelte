<script context="module">
	export const prerender = true;
</script>

<script>
	import WavingHand from '@components/waving-hand.svelte';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>SvelteKit</title>
</svelte:head>
<div
	class="flex-col-center gap-7 
	w-screen h-screen bg-gray-100 dark:bg-gray-800
	text-black dark:text-white"
>
	<WavingHand class="text-7xl" />
	<div class="flex-col-center text-center">
		<h1 class="welcome">
			{@html $_('welcome')}
		</h1>
		<p class="help-text">
			{@html $_('help-text')}
		</p>
	</div>
</div>

<style lang="postcss" global>
	.welcome {
		@apply text-4xl font-bold;
		span {
			@apply font-logo-cursive mr-3;
		}
	}
	.help-text {
		@apply font-thin;
		a {
			@apply hover:text-blue-500;
		}
	}
</style>
