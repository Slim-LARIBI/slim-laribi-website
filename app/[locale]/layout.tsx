import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'


const SUPPORTED_LOCALES = ['fr', 'en'] as const
type AppLocale = (typeof SUPPORTED_LOCALES)[number]

const siteUrl = 'https://laribislim.com'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as AppLocale
  if (!SUPPORTED_LOCALES.includes(locale)) notFound()

  const canonical = `${siteUrl}/${locale}`

  return {
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
      languages: {
        'fr-FR': `${siteUrl}/fr`,
        'en-US': `${siteUrl}/en`,
      },
    },
    openGraph: {
      url: canonical,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: ['fr_FR', 'en_US'].filter(
        (l) => l !== (locale === 'fr' ? 'fr_FR' : 'en_US')
      ) as string[],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale as AppLocale

  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound()
  }

  const messages =
    locale === 'en'
      ? (await import('../../messages/en.json')).default
      : (await import('../../messages/fr.json')).default

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}