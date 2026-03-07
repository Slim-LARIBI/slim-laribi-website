import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/animations/Reveal'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd'
import { getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { Clock, ArrowRight } from 'lucide-react'

const siteUrl = 'https://laribislim.com'

export async function generateMetadata({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/blog`

  if (locale === 'fr') {
    return {
      title: 'Blog Tracking, Data Marketing & MarTech',
      description:
        "Articles et guides sur le tracking marketing, Google Tag Manager, server-side tracking, data marketing et optimisation de la performance digitale.",
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr/blog`,
          'en-US': `${siteUrl}/en/blog`,
        },
      },
      openGraph: {
        title: 'Blog Tracking, Data Marketing & MarTech',
        description:
          "Articles et guides sur le tracking marketing, Google Tag Manager, server-side tracking, data marketing et optimisation de la performance digitale.",
        url: pageUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: 'Blog — Slim Laribi',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Blog Tracking, Data Marketing & MarTech',
        description:
          "Articles et guides sur le tracking marketing, Google Tag Manager, server-side tracking, data marketing et optimisation de la performance digitale.",
        images: [`${siteUrl}/og-image.jpg`],
      },
    }
  }

  return {
    title: 'Tracking, Data Marketing & MarTech Blog',
    description:
      'Articles and guides about marketing tracking, Google Tag Manager, server-side tracking, data marketing and digital performance optimization.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr/blog`,
        'en-US': `${siteUrl}/en/blog`,
      },
    },
    openGraph: {
      title: 'Tracking, Data Marketing & MarTech Blog',
      description:
        'Articles and guides about marketing tracking, Google Tag Manager, server-side tracking, data marketing and digital performance optimization.',
      url: pageUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Blog — Slim Laribi',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tracking, Data Marketing & MarTech Blog',
      description:
        'Articles and guides about marketing tracking, Google Tag Manager, server-side tracking, data marketing and digital performance optimization.',
      images: [`${siteUrl}/og-image.jpg`],
    },
  }
}

export default function BlogPage({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}) {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/blog`
  const posts = getAllPosts()

  const pageName =
    locale === 'fr'
      ? 'Blog Tracking, Data Marketing & MarTech'
      : 'Tracking, Data Marketing & MarTech Blog'

  const pageDescription =
    locale === 'fr'
      ? "Articles et guides sur le tracking marketing, Google Tag Manager, server-side tracking, data marketing et optimisation de la performance digitale."
      : 'Articles and guides about marketing tracking, Google Tag Manager, server-side tracking, data marketing and digital performance optimization.'

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: locale === 'fr' ? 'Accueil' : 'Home',
            url: `${siteUrl}/${locale}`,
          },
          {
            name: 'Blog',
            url: pageUrl,
          },
        ]}
      />

      <WebPageJsonLd name={pageName} description={pageDescription} url={pageUrl} />

      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              Blog
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              {locale === 'fr' ? (
                <>
                  Insights, méthodes, <span className="text-gradient-brand">pas de bullshit.</span>
                </>
              ) : (
                <>
                  Insights, methods, <span className="text-gradient-brand">no fluff.</span>
                </>
              )}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary max-w-xl mx-auto">
              {locale === 'fr'
                ? "Des articles pratiques sur le tracking, la performance ads, le CRM et l'automatisation. Orientés opérationnel, pas théorique."
                : 'Practical articles on tracking, ad performance, CRM and automation. Operational, not theoretical.'}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-20 text-brand-text-muted">
              <p>
                {locale === 'fr'
                  ? "Aucun article pour l'instant. Revenez bientôt."
                  : 'No articles yet. Check back soon.'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.07}>
                  <Link href={`/${locale}/blog/${post.slug}`} className="group block h-full">
                    <article className="glass rounded-2xl p-6 border border-brand-border h-full transition-all duration-300 group-hover:border-brand-border-strong group-hover:shadow-glow-sm group-hover:-translate-y-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="accent" size="sm">
                          {post.category}
                        </Badge>
                      </div>

                      <h2 className="font-display font-bold text-brand-text-primary text-lg mb-2 leading-tight group-hover:text-white transition-colors flex-1">
                        {post.title}
                      </h2>

                      <p className="text-sm text-brand-text-secondary line-clamp-3 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md text-2xs font-medium bg-white/5 text-brand-text-muted border border-white/8"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-brand-border mt-auto">
                        <div className="flex items-center gap-3 text-xs text-brand-text-muted">
                          <span>{formatDate(post.date)}</span>
                          <span>·</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>
                              {post.readingTime} min {locale === 'fr' ? '' : 'read'}
                            </span>
                          </div>
                        </div>

                        <ArrowRight className="h-4 w-4 text-brand-accent group-hover:translate-x-0.5 transition-transform duration-200" />
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}