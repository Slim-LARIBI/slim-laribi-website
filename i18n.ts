import { getRequestConfig } from 'next-intl/server'

const SUPPORTED = ['fr', 'en'] as const
type Locale = (typeof SUPPORTED)[number]

const loaders: Record<Locale, () => Promise<{ default: any }>> = {
  fr: () => import('./messages/fr.json'),
  en: () => import('./messages/en.json'),
}

export default getRequestConfig(async ({ locale }) => {
  const safeLocale: Locale = SUPPORTED.includes(locale as Locale) ? (locale as Locale) : 'fr'

  return {
    locale: safeLocale,
    messages: (await loaders[safeLocale]()).default,
  }
})