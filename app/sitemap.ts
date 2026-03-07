import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/blog'
import { caseStudies } from '@/lib/case-studies'

const siteUrl = 'https://laribislim.com'

const locales = ['fr', 'en']

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllSlugs()
  const caseStudySlugs = caseStudies.map((cs) => cs.slug)

  const staticPages = [
    '',
    '/about',
    '/expertise',
    '/case-studies',
    '/formation',
    '/formation/programme',
    '/saas',
    '/testimonials',
    '/blog',
    '/contact',
  ]

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPages.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : path === '/formation' ? 0.9 : 0.8,
    }))
  )

  const blogEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    blogSlugs.map((slug) => ({
      url: `${siteUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  )

  const caseStudyEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    caseStudySlugs.map((slug) => ({
      url: `${siteUrl}/${locale}/case-studies/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  )

  return [...staticEntries, ...blogEntries, ...caseStudyEntries]
}