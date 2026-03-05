import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/blog'
import { caseStudies } from '@/lib/case-studies'

const siteUrl = 'https://slimlaribi.com'

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

  const staticEntries = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/formation' ? 0.9 : 0.8,
  })) as MetadataRoute.Sitemap

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${siteUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries, ...caseStudyEntries]
}
