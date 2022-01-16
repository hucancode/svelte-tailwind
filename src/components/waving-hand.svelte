<script>
	let className;
	export { className as class };
</script>

<span class={className}>👋</span>

<style lang="postcss">
	span {
		@apply animate-waving-hand inline-block origin-[70%_70%];
	}
</style>
