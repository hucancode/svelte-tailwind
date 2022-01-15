import { register, init as initI18n, getLocaleFromQueryString, waitLocale } from 'svelte-i18n';

export default async function init() {
	register('en', () => import('@locales/en.json'));
	register('jp', () => import('@locales/jp.json'));
	await initI18n({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromQueryString('lang')
	});
	await waitLocale();
}
