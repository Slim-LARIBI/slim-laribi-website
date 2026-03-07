import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { getCaseStudyBySlug, caseStudies } from '@/lib/case-studies'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import {
  TrendingUp,
  Clock,
  Wrench,
  ArrowLeft,
  ArrowRight,
  Target,
  Lightbulb,
} from 'lucide-react'

interface Props {
  params: { slug: string; locale: 'fr' | 'en' }
}

const siteUrl = 'https://laribislim.com'

export async function generateStaticParams() {
  return ['fr', 'en'].flatMap((locale) =>
    caseStudies.map((cs) => ({
      locale,
      slug: cs.slug,
    }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return {}

  const locale = params.locale || 'fr'
  const canonical = `${siteUrl}/${locale}/case-studies/${study.slug}`

  return {
    title: study.title,
    description: study.excerpt,
    alternates: {
      canonical,
      languages: {
        'fr-FR': `${siteUrl}/fr/case-studies/${study.slug}`,
        'en-US': `${siteUrl}/en/case-studies/${study.slug}`,
      },
    },
    openGraph: {
      title: study.title,
      description: study.excerpt,
      type: 'article',
      url: canonical,
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.excerpt,
      images: [`${siteUrl}/og-image.jpg`],
    },
  }
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) notFound()

  const locale = params.locale || 'fr'
  const otherStudies = caseStudies.filter((cs) => cs.slug !== study.slug).slice(0, 2)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: locale === 'fr' ? 'Accueil' : 'Home',
            url: `${siteUrl}/${locale}`,
          },
          {
            name: locale === 'fr' ? 'Cas clients' : 'Case studies',
            url: `${siteUrl}/${locale}/case-studies`,
          },
          {
            name: study.title,
            url: `${siteUrl}/${locale}/case-studies/${study.slug}`,
          },
        ]}
      />

      <Section py="2xl" className="hero-bg">
        <Container size="md">
          <Reveal>
            <Link
              href={`/${locale}/case-studies`}
              className="inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              {locale === 'fr' ? 'Cas clients' : 'Case studies'}
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-5">
              <Badge variant="accent">{study.sector}</Badge>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-brand-text-muted" />
                <span className="text-sm text-brand-text-muted">{study.duration}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-text-primary tracking-tight mb-5 leading-tight">
              {study.title}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-xl text-brand-text-secondary leading-relaxed">
              {study.excerpt}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section py="md">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.results.map((r) => (
                <Card key={r.label} variant="glass" padding="md" className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    <span className="font-display text-2xl font-black text-brand-text-primary">
                      {r.value}
                    </span>
                  </div>
                  <p className="text-xs text-brand-text-muted mb-1">{r.label}</p>
                  {r.delta && <p className="text-xs text-emerald-400 font-medium">{r.delta}</p>}
                </Card>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Reveal>
                <Card variant="glass" padding="xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-9 w-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <Target className="h-4 w-4 text-red-400" />
                    </div>
                    <h2 className="font-display font-bold text-xl text-brand-text-primary">
                      {locale === 'fr' ? 'Le problème' : 'The challenge'}
                    </h2>
                  </div>
                  <p className="text-brand-text-secondary leading-relaxed">{study.challenge}</p>
                </Card>
              </Reveal>

              <Reveal delay={0.05}>
                <Card variant="glass" padding="xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-9 w-9 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                      <Lightbulb className="h-4 w-4 text-brand-accent" />
                    </div>
                    <h2 className="font-display font-bold text-xl text-brand-text-primary">
                      {locale === 'fr' ? 'La solution' : 'The solution'}
                    </h2>
                  </div>
                  <p className="text-brand-text-secondary leading-relaxed">{study.solution}</p>
                </Card>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="aspect-video rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-12 w-12 rounded-xl bg-brand-surface-2 border border-brand-border mx-auto mb-3 flex items-center justify-center">
                      <span className="text-brand-text-muted text-xs font-mono">IMG</span>
                    </div>
                    <p className="text-sm text-brand-text-muted">
                      {locale === 'fr'
                        ? 'Screenshot / Dashboard placeholder'
                        : 'Screenshot / Dashboard placeholder'}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="space-y-4">
              <Reveal direction="left">
                <Card variant="surface" padding="lg">
                  <h3 className="font-display font-bold text-brand-text-primary mb-4 text-sm uppercase tracking-wider">
                    {locale === 'fr' ? 'Stack technique' : 'Tech stack'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool) => (
                      <div key={tool} className="flex items-center gap-1.5">
                        <Wrench className="h-3 w-3 text-brand-gold shrink-0" />
                        <span className="text-sm text-brand-text-secondary">{tool}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>

              <Reveal direction="left" delay={0.05}>
                <Card variant="surface" padding="lg">
                  <h3 className="font-display font-bold text-brand-text-primary mb-4 text-sm uppercase tracking-wider">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>

              <Reveal direction="left" delay={0.1}>
                <Card variant="glow" padding="lg" className="text-center">
                  <p className="text-sm text-brand-text-secondary mb-4">
                    {locale === 'fr'
                      ? 'Un enjeu similaire ? Discutons-en.'
                      : 'A similar challenge? Let’s discuss it.'}
                  </p>
                  <Link href={`/${locale}/contact`}>
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      {locale === 'fr' ? 'Réserver un appel' : 'Book a call'}
                    </Button>
                  </Link>
                </Card>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {otherStudies.length > 0 && (
        <Section py="xl" className="border-t border-brand-border">
          <Container>
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-brand-text-primary mb-8">
                {locale === 'fr' ? 'Autres cas clients' : 'Other case studies'}
              </h3>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {otherStudies.map((other, i) => (
                <Reveal key={other.slug} delay={i * 0.08}>
                  <Link href={`/${locale}/case-studies/${other.slug}`} className="group block">
                    <Card variant="glass" hover padding="lg">
                      <Badge variant="accent" size="sm" className="mb-3">
                        {other.sector}
                      </Badge>
                      <h4 className="font-display font-bold text-brand-text-primary mb-2 group-hover:text-white transition-colors leading-tight">
                        {other.title}
                      </h4>
                      <p className="text-sm text-brand-text-secondary line-clamp-2 mb-3">
                        {other.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 text-brand-accent text-sm">
                        <span>{locale === 'fr' ? 'Lire' : 'Read'}</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Card>
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