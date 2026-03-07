export function WebSiteJsonLd({ locale = 'fr' }: { locale?: 'fr' | 'en' }) {
  const siteUrl = 'https://laribislim.com'
  const inLanguage = locale === 'fr' ? 'fr-FR' : 'en-US'

  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Slim Laribi',
    alternateName: 'laribislim.com',
    inLanguage,
    publisher: { '@id': `${siteUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/${locale}/blog?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}