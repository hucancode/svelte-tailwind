<script>
	import WavingHand from '@components/waving-hand.svelte';
	import { _ } from 'svelte-i18n';
</script>
<div
	class="flex flex-col justify-center items-center gap-7
    w-screen h-screen">
	<WavingHand class="text-5xl" />
	<div class="text-center">
		<h1 class="text-4xl font-bold text-gray-800">
			{$_('welcome')} <span class="font-logo-cursive">Sveltekit</span>
		</h1>
		<p class="text-lg font-thin text-black">
			Visit <a class="hover:text-blue-500" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
			documentation
		</p>
	</div>
</div>
