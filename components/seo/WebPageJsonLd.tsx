// components/seo/WebPageJsonLd.tsx
export function WebPageJsonLd({
  url,
  name,
  description,
  locale = 'fr',
}: {
  url: string
  name: string
  description?: string
  locale?: 'fr' | 'en'
}) {
  const siteUrl = 'https://laribislim.com'
  const inLanguage = locale === 'fr' ? 'fr-FR' : 'en-US'

  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#person` },
    publisher: { '@id': `${siteUrl}/#organization` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}