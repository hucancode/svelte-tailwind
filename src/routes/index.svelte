<script context="module">
	export const prerender = true;
</script>
<script>
	import WavingHand from '@components/waving-hand.svelte';
	import { _ } from 'svelte-i18n';
</script>
<div class="flex-center gap-7 
	w-screen h-screen bg-gray-100 dark:bg-gray-800
	text-black dark:text-white">
	<WavingHand class="text-5xl" />
	<div class="flex-col-center text-center">
		<h1 class="welcome">
			{@html $_('welcome')}
		</h1>
		<p class="help-text">
			{@html $_('help-text')}
		</p>
	</div>
</div>
