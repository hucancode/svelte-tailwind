<script>
	import WavingHand from '@components/waving-hand.svelte';
</script>

<div
	class="flex flex-col justify-center items-center gap-7
    w-screen h-screen">
	<WavingHand class="text-5xl" />
	<div>
		<h1 class="text-4xl font-bold text-gray-800">
			Welcome to <span class="font-logo-cursive">Sveltekit</span>
		</h1>
		<p class="text-lg font-thin text-black">
			Visit <a class="hover:text-blue-500" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
			documentation
		</p>
	</div>
</div>
