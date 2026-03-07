import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/animations/Reveal'
import { caseStudies } from '@/lib/case-studies'
import { ArrowRight, TrendingUp, Clock } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}): Promise<Metadata> {
  if (params.locale === 'fr') {
    return {
      title: 'Cas Clients Tracking & Data Marketing',
      description:
        'Découvrez des cas réels d’implémentation tracking, optimisation data marketing et architecture MarTech pour entreprises e-commerce et SaaS.',
    }
  }

  return {
    title: 'Tracking & Data Marketing Case Studies',
    description:
      'Discover real case studies in tracking implementation, data marketing optimization and MarTech architecture for e-commerce and SaaS companies.',
  }
}

export default function CaseStudiesPage() {
  return (
    <>
      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">Cas clients</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              Résultats, pas{' '}
              <span className="text-gradient-brand">promesses.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary max-w-xl mx-auto">
              Des projets réels, des KPIs mesurés, des méthodologies reproductibles. Chaque cas illustre une problématique concrète et sa résolution.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.08}>
                <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                  <div className="glass rounded-2xl p-7 border border-brand-border h-full transition-all duration-300 group-hover:border-brand-border-strong group-hover:shadow-glow-sm group-hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="accent" size="sm">{study.sector}</Badge>
                        {study.featured && (
                          <Badge variant="gold" size="sm">Featured</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-text-muted">
                        <Clock className="h-3.5 w-3.5" />
                        <span className="text-xs">{study.duration}</span>
                      </div>
                    </div>

                    <h2 className="font-display text-xl font-bold text-brand-text-primary mb-2 group-hover:text-white transition-colors leading-tight">
                      {study.title}
                    </h2>
                    <p className="text-sm text-brand-text-secondary mb-5 leading-relaxed">
                      {study.excerpt}
                    </p>

                    {/* Key results grid */}
                    <div className="grid grid-cols-2 gap-2.5 mb-5">
                      {study.results.slice(0, 4).map((r) => (
                        <div key={r.label} className="p-3 rounded-xl bg-brand-surface/60 border border-brand-border">
                          <div className="flex items-center gap-1 mb-0.5">
                            <TrendingUp className="h-3 w-3 text-emerald-400" />
                            <span className="font-bold text-brand-text-primary text-sm">{r.value}</span>
                          </div>
                          <p className="text-2xs text-brand-text-muted">{r.label}</p>
                          {r.delta && (
                            <p className="text-2xs text-emerald-400 mt-0.5">{r.delta}</p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {study.tools.slice(0, 4).map((tool) => (
                        <span key={tool} className="px-2 py-0.5 rounded-md text-2xs font-medium bg-white/5 text-brand-text-muted border border-white/8">
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-brand-accent text-sm font-medium">
                      <span>Lire le cas complet</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
