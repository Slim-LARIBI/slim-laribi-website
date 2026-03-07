import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ArticleJsonLd } from '@/components/seo/ArticleJsonLd'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import {
  ArrowLeft,
  Clock,
  ArrowRight,
  Download,
  List,
  GraduationCap,
  BookOpen,
  Sparkles,
  User2,
} from 'lucide-react'

interface Props {
  params: { slug: string; locale: string }
}

const siteUrl = 'https://laribislim.com'
const locales = ['fr', 'en'] as const

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function extractHeadings(content: string) {
  const lines = content.split('\n')
  const headings: { level: 2 | 3; text: string; id: string }[] = []

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.*)$/)
    const h3 = line.match(/^###\s+(.*)$/)

    if (h3 && h3[1]) {
      const text = h3[1].trim()
      headings.push({ level: 3, text, id: slugify(text) })
    } else if (h2 && h2[1]) {
      const text = h2[1].trim()
      headings.push({ level: 2, text, id: slugify(text) })
    }
  }

  return headings
}

function injectHeadingIds(content: string) {
  return content
    .replace(/^###\s+(.*)$/gm, (_, title: string) => {
      const clean = title.trim()
      return `<h3 id="${slugify(clean)}">${clean}</h3>`
    })
    .replace(/^##\s+(.*)$/gm, (_, title: string) => {
      const clean = title.trim()
      return `<h2 id="${slugify(clean)}">${clean}</h2>`
    })
}

function getPillar(locale: string, post: { category: string; tags: string[]; title: string }) {
  const text = `${post.category} ${post.tags.join(' ')} ${post.title}`.toLowerCase()

  if (
    text.includes('seo') ||
    text.includes('indexation') ||
    text.includes('http') ||
    text.includes('canonique') ||
    text.includes('core web vitals') ||
    text.includes('regex')
  ) {
    return {
      href: `/${locale}/seo-acquisition`,
      label: locale === 'en' ? 'SEO Acquisition' : 'SEO Acquisition',
    }
  }

  if (
    text.includes('automation') ||
    text.includes('n8n') ||
    text.includes('workflow') ||
    text.includes('crm')
  ) {
    return {
      href: `/${locale}/marketing-automation`,
      label: locale === 'en' ? 'Marketing Automation' : 'Marketing Automation',
    }
  }

  if (
    text.includes('customer intelligence') ||
    text.includes('profile completion') ||
    text.includes('segmentation') ||
    text.includes('lifecycle')
  ) {
    return {
      href: `/${locale}/customer-intelligence`,
      label: locale === 'en' ? 'Customer Intelligence' : 'Customer Intelligence',
    }
  }

  if (
    text.includes('ga4') ||
    text.includes('gtm') ||
    text.includes('tracking') ||
    text.includes('pixel') ||
    text.includes('capi') ||
    text.includes('utm') ||
    text.includes('datafeed')
  ) {
    return {
      href: `/${locale}/data-tracking`,
      label: locale === 'en' ? 'Data Tracking' : 'Data Tracking',
    }
  }

  return {
    href: `/${locale}/performance-marketing`,
    label: locale === 'en' ? 'Performance Marketing' : 'Performance Marketing',
  }
}

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
    .slice(0, 3)

  const headings = extractHeadings(post.content)
  const contentWithIds = injectHeadingIds(post.content)
  const pillar = getPillar(locale, post)

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

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-brand-border bg-[linear-gradient(180deg,#0b0d14_0%,#0f1220_48%,#11131a_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(124,58,237,0.16),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.10),transparent_22%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#11131a]" />

        <Container size="md" className="relative z-10 py-16 md:py-20">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-text-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            <Badge variant="accent">{post.category}</Badge>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-6 max-w-3xl">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/55 mb-5">
            <span className="font-medium text-white/80">{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readingTime} min</span>
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="inline-flex">
            <Link
              href={pillar.href}
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 hover:bg-violet-500/15 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              {locale === 'en' ? 'Related pillar:' : 'Page pilier liée :'} {pillar.label}
            </Link>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="bg-[#f4f6fb] text-slate-900">
        <Container size="lg" className="py-14 md:py-16">
          <div className="grid lg:grid-cols-[260px_minmax(0,720px)] gap-10 lg:gap-14 justify-center">
            {/* TOC + sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                {headings.length > 0 && (
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <List className="h-4 w-4 text-violet-600" />
                      <p className="text-sm font-semibold text-slate-900">Sommaire</p>
                    </div>

                    <nav>
                      <ul className="space-y-2.5">
                        {headings.map((heading) => (
                          <li key={heading.id}>
                            <a
                              href={`#${heading.id}`}
                              className={`block text-sm leading-relaxed hover:text-violet-700 transition-colors ${
                                heading.level === 3
                                  ? 'pl-4 text-slate-500'
                                  : 'text-slate-700'
                              }`}
                            >
                              {heading.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}

                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-sm">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Formation 90h</p>
                      <p className="text-sm text-slate-500">
                        Tracking · Data · CRM · Acquisition
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {locale === 'en'
                      ? 'A hands-on program to master tracking, data marketing and customer intelligence.'
                      : 'Un programme concret pour maîtriser tracking, data marketing et customer intelligence.'}
                  </p>

                  <Link href={`/${locale}/formation`} className="block">
                    <Button variant="gold" size="sm" className="w-full">
                      {locale === 'en' ? 'View the program' : 'Voir le programme'}
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>

            {/* MAIN */}
            <main>
              {headings.length > 0 && (
                <div className="lg:hidden mb-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <List className="h-4 w-4 text-violet-600" />
                    <p className="text-sm font-semibold text-slate-900">Sommaire</p>
                  </div>
                  <ul className="space-y-2.5">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className={`block text-sm leading-relaxed hover:text-violet-700 transition-colors ${
                            heading.level === 3
                              ? 'pl-4 text-slate-500'
                              : 'text-slate-700'
                          }`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <article className="rounded-[2rem] border border-slate-200 bg-[#fcfcfe] px-6 py-8 md:px-10 md:py-10 shadow-sm">
                    <div className="prose max-w-none
[&_h2]:text-slate-950
[&_h3]:text-slate-900
[&_strong]:text-slate-950
[&_strong]:font-semibold
prose-headings:font-display
prose-headings:tracking-tight
prose-h2:text-[2rem]
prose-h2:leading-tight
prose-h2:mb-5
prose-h2:mt-12
prose-h3:text-[1.35rem]
prose-h3:leading-snug
prose-h3:mt-8
prose-h3:mb-4
prose-p:text-slate-700
prose-p:leading-8
prose-p:text-[1.05rem]
prose-li:text-slate-700
prose-li:leading-8
prose-a:text-violet-700
hover:prose-a:text-violet-800
prose-code:text-violet-700
prose-pre:rounded-2xl
prose-pre:border
prose-pre:border-slate-200
prose-pre:bg-slate-950
prose-blockquote:border-violet-500
prose-blockquote:text-slate-700">            <MDXRemote source={contentWithIds} />
                </div>
              </article>

              {/* Lead magnet */}
              <div className="mt-10 rounded-[2rem] border border-violet-200 bg-[linear-gradient(135deg,#ffffff_0%,#f7f3ff_55%,#eef4ff_100%)] p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-violet-700">
                  <Sparkles className="h-4 w-4" />
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase">
                    Ressource gratuite
                  </p>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-black text-slate-950 mb-3 tracking-tight">
                  Tracking Audit Checklist
                </h3>

                <p className="text-slate-600 mb-6 max-w-2xl leading-relaxed">
                  Télécharge la checklist utilisée pour vérifier GA4, Google Tag Manager,
                  Meta Pixel, Conversions API, Google Ads et la structure dataLayer.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href={`/${locale}/tracking-audit-checklist`}>
                    <Button
                      variant="primary"
                      size="lg"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      Voir la checklist
                    </Button>
                  </Link>

                  <a href="/tracking-audit-checklist.pdf" download>
                    <Button
                      variant="secondary"
                      size="lg"
                      icon={<Download className="h-4 w-4" />}
                    >
                      Télécharger le PDF
                    </Button>
                  </a>
                </div>
              </div>

              {/* Author block bottom */}
              <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-sm">
                    <User2 className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-bold text-slate-950 mb-1">
                      Slim Laribi
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      Consultant en Marketing Data, Tracking, Performance Marketing et
                      architecture MarTech.
                    </p>
                    <Link
                      href={`/${locale}/about`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 hover:text-violet-800 transition-colors"
                    >
                      En savoir plus
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-white">
          <Container className="py-14 md:py-16">
            <h3 className="font-display text-2xl md:text-3xl font-black text-slate-950 mb-8 tracking-tight">
              Articles similaires
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/${locale}/blog/${rel.slug}`} className="group block">
                  <div className="h-full rounded-[1.75rem] border border-slate-200 bg-[#fafafe] p-6 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-sm hover:-translate-y-0.5">
                    <Badge variant="accent" size="sm" className="mb-3">
                      {rel.category}
                    </Badge>

                    <h4 className="font-display font-bold text-slate-950 mb-2 group-hover:text-violet-700 transition-colors leading-tight">
                      {rel.title}
                    </h4>

                    <p className="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {rel.excerpt}
                    </p>

                    <div className="flex items-center gap-1.5 text-violet-700 text-sm font-medium">
                      <span>Lire</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}