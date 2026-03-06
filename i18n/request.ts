import {getRequestConfig} from 'next-intl/server';

const SUPPORTED_LOCALES = ['fr', 'en'] as const;
type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export default getRequestConfig(async ({locale}) => {
  // Si Next-Intl n’arrive pas à déduire la locale (undefined), on fallback sur fr
  const resolvedLocale: AppLocale =
    SUPPORTED_LOCALES.includes(locale as AppLocale) ? (locale as AppLocale) : 'fr';

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});