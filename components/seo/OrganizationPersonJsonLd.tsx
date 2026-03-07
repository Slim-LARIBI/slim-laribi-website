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
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Slim Laribi',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/og-image.jpg`,
        },
        sameAs: ['https://www.linkedin.com/in/slim-laribi/'],
        description: isFr
          ? 'Consulting, formation et projets SaaS en tracking, data marketing et MarTech.'
          : 'Consulting, training and SaaS projects in tracking, data marketing and MarTech.',
        founder: {
          '@id': `${siteUrl}/#person`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Slim Laribi',
        url: siteUrl,
        image: `${siteUrl}/og-image.jpg`,
        jobTitle: isFr
          ? 'Consultant Marketing, Tracking & MarTech'
          : 'Marketing, Tracking & MarTech Consultant',
        description: isFr
          ? 'Slim Laribi accompagne les entreprises sur le tracking, la performance data marketing et l’architecture MarTech.'
          : 'Slim Laribi helps companies improve tracking reliability, data marketing performance and MarTech architecture.',
        worksFor: {
          '@id': `${siteUrl}/#organization`,
        },
        sameAs: ['https://www.linkedin.com/in/slim-laribi/'],
        knowsAbout: [
          'Google Tag Manager',
          'Server-side Tracking',
          'Google Analytics 4',
          'Meta Conversions API',
          'Performance Marketing',
          'Data Marketing',
          'MarTech Architecture',
          'CRM',
          'E-commerce Analytics',
          'n8n',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'laribislim.com',
        inLanguage: isFr ? 'fr-FR' : 'en-US',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
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