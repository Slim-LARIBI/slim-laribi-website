import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { ArticleJsonLd } from '@/components/seo/ArticleJsonLd'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'

interface Props {
  params: { slug: string; locale: string }
}

const siteUrl = 'https://laribislim.com'
const locales = ['fr', 'en'] as const

export async function generateStaticParams() {
  const slugs = getAllSlugs()

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  const locale = params.locale || 'fr'
  const canonical = `${siteUrl}/${locale}/blog/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical,
      languages: {
        'fr-FR': `${siteUrl}/fr/blog/${post.slug}`,
        'en-US': `${siteUrl}/en/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: canonical,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.coverImage?.startsWith('http')
            ? post.coverImage
            : `${siteUrl}${post.coverImage || '/og-image.jpg'}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [
        post.coverImage?.startsWith('http')
          ? post.coverImage
          : `${siteUrl}${post.coverImage || '/og-image.jpg'}`,
      ],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const locale = params.locale || 'fr'
  const postUrl = `${siteUrl}/${locale}/blog/${post.slug}`

  const breadcrumbItems = [
    { name: locale === 'en' ? 'Home' : 'Accueil', url: `${siteUrl}/${locale}` },
    { name: 'Blog', url: `${siteUrl}/${locale}/blog` },
    { name: post.title, url: postUrl },
  ]

  const allPosts = getAllPosts()
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2)

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={postUrl}
        image={
          post.coverImage?.startsWith('http')
            ? post.coverImage
            : `${siteUrl}${post.coverImage || '/og-image.jpg'}`
        }
        datePublished={post.date}
        dateModified={post.date}
        authorName={post.author}
      />

      <BreadcrumbJsonLd items={breadcrumbItems} />

      <Section py="xl" className="hero-bg border-b border-brand-border">
        <Container size="md">
          <Reveal>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Blog
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <Badge variant="accent" className="mb-4">
              {post.category}
            </Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-text-primary tracking-tight mb-5 leading-tight">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-xl text-brand-text-secondary leading-relaxed mb-6">
              {post.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-brand-text-muted">
              <span className="font-medium text-brand-text-secondary">{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readingTime} min de lecture</span>
              </div>
            </div>
          </Reveal>

          {post.tags.length > 0 && (
            <Reveal delay={0.16}>
              <div className="flex flex-wrap gap-2 mt-5">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Reveal>
          )}
        </Container>
      </Section>

      <Section py="xl">
        <Container size="md">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <Reveal>
                <div className="prose">
                  <MDXRemote source={post.content} />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-16 p-7 rounded-2xl glass border border-brand-border text-center">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-2">
                    Vous voulez aller plus loin ?
                  </p>
                  <h3 className="font-display text-2xl font-bold text-brand-text-primary mb-3">
                    Auditez votre tracking maintenant.
                  </h3>
                  <p className="text-brand-text-secondary text-sm mb-5">
                    Diagnostic gratuit · 30 minutes · Plan d'action concret
                  </p>
                  <Link href={`/${locale}/contact`}>
                    <Button
                      variant="primary"
                      size="lg"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      Réserver un appel
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <div className="glass rounded-2xl p-5 border border-brand-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center text-sm font-black text-white">
                      SL
                    </div>
                    <div>
                      <p className="font-semibold text-brand-text-primary text-sm">
                        {post.author}
                      </p>
                      <p className="text-xs text-brand-text-muted">
                        Expert Marketing & Tracking
                      </p>
                    </div>
                  </div>
                  <Link href={`/${locale}/about`}>
                    <Button variant="ghost" size="sm" className="w-full">
                      À propos
                    </Button>
                  </Link>
                </div>

                {post.tags.length > 0 && (
                  <div className="glass rounded-2xl p-5 border border-brand-border">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted mb-3">
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="glass rounded-2xl p-5 border border-brand-border text-center">
                  <p className="text-sm font-medium text-brand-text-primary mb-2">
                    Formation 90h
                  </p>
                  <p className="text-xs text-brand-text-muted mb-3">
                    Marketing · Tracking · CRM
                  </p>
                  <Link href={`/${locale}/formation`}>
                    <Button variant="gold" size="sm" className="w-full">
                      Voir le programme
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section py="xl" className="border-t border-brand-border">
          <Container>
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-brand-text-primary mb-8">
                Articles similaires
              </h3>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {related.map((rel, i) => (
                <Reveal key={rel.slug} delay={i * 0.08}>
                  <Link href={`/${locale}/blog/${rel.slug}`} className="group block">
                    <div className="glass rounded-2xl p-6 border border-brand-border hover:border-brand-border-strong hover:-translate-y-0.5 transition-all duration-300">
                      <Badge variant="accent" size="sm" className="mb-3">
                        {rel.category}
                      </Badge>
                      <h4 className="font-display font-bold text-brand-text-primary mb-2 group-hover:text-white transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-sm text-brand-text-secondary line-clamp-2 mb-3">
                        {rel.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 text-brand-accent text-sm">
                        <span>Lire</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}