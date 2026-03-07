export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = 'Slim Laribi',
}: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  authorName?: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    author: {
      '@type': 'Person',
      name: authorName,
      url: 'https://laribislim.com',
    },
    publisher: {
      '@type': 'Person',
      name: authorName,
      url: 'https://laribislim.com',
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}