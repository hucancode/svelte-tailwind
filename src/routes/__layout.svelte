<script context="module">
	import init from '@locales/i18n';
	export async function load() {
		await init();
		return {};
	}
</script>

<script>
	import '@styles/app.css';
</script>

<slot />
