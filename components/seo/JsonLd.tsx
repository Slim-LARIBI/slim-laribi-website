interface PersonJsonLdProps {
  name: string
  url: string
  jobTitle: string
  description: string
  sameAs?: string[]
}

export function PersonJsonLd({
  name,
  url,
  jobTitle,
  description,
  sameAs = [],
}: PersonJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    jobTitle,
    description,
    sameAs,
    knowsAbout: [
      'Digital Marketing',
      'Performance Marketing',
      'Tracking',
      'Google Analytics 4',
      'Google Tag Manager',
      'Meta Ads',
      'Google Ads',
      'CRM',
      'E-commerce',
      'Marketing Automation',
      'MarTech',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

interface CourseJsonLdProps {
  name: string
  description: string
  provider: string
  url: string
  duration?: string
  price?: string
  priceCurrency?: string
}

export function CourseJsonLd({
  name,
  description,
  provider,
  url,
  duration,
  price,
  priceCurrency = 'EUR',
}: CourseJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Person',
      name: provider,
      url: 'https://laribislim.com',
    },
    url,
    ...(duration ? { timeRequired: duration } : {}),
    ...(price
      ? {
          offers: {
            '@type': 'Offer',
            price,
            priceCurrency,
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
