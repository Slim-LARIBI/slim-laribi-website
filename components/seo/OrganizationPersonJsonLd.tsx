// components/seo/OrganizationPersonJsonLd.tsx
export function OrganizationPersonJsonLd({
  locale = 'fr',
}: {
  locale?: 'fr' | 'en'
}) {
  const siteUrl = 'https://laribislim.com'

  const isFr = locale === 'fr'

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      // ✅ Organization
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Slim Laribi',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/og-image.jpg`,
        },
        sameAs: [
          'https://www.linkedin.com/in/slim-laribi/',
        ],
      },

      // ✅ Person (Knowledge Graph)
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Slim Laribi',
        url: siteUrl,
        image: `${siteUrl}/og-image.jpg`,
        jobTitle: isFr ? 'Consultant Marketing & Tracking' : 'Marketing & Tracking Consultant',
        worksFor: { '@id': `${siteUrl}/#organization` },
        sameAs: [
          'https://www.linkedin.com/in/slim-laribi/',
        ],
      },

      // ✅ Website entity
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'laribislim.com',
        inLanguage: isFr ? 'fr-FR' : 'en-US',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}