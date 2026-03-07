import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/animations/Reveal'
import { testimonials } from '@/lib/testimonials'
import { Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}): Promise<Metadata> {
  if (params.locale === 'fr') {
    return {
      title: 'Témoignages Clients | Tracking, Data Marketing & MarTech',
      description:
        'Consultez les témoignages clients et retours d’expérience sur les missions de tracking, performance marketing et architecture MarTech.',
    }
  }

  return {
    title: 'Client Testimonials | Tracking, Data Marketing & MarTech',
    description:
      'Read client testimonials and feedback on tracking, performance marketing and MarTech architecture projects.',
  }
}

const contextLabels = {
  consulting: { label: 'Consulting', variant: 'accent' as const },
  formation: { label: 'Formation', variant: 'gold' as const },
  audit: { label: 'Audit', variant: 'success' as const },
}

export default function TestimonialsPage() {
  const avgRating = testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length

  return (
    <>
      {/* Hero */}
      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">Témoignages clients & apprenants</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              Ce qu'ils en{' '}
              <span className="text-gradient-brand">disent vraiment.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <span className="font-display text-2xl font-bold text-brand-text-primary">
                {avgRating.toFixed(1)}/5
              </span>
              <span className="text-brand-text-muted text-sm">({testimonials.length} avis)</span>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-xl text-brand-text-secondary max-w-lg mx-auto">
              Des retours non filtrés de clients en mission consulting et d'apprenants en formation Customer Intelligence.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Filter chips */}
      <Section py="sm">
        <Container>
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Tous', count: testimonials.length },
                { label: 'Consulting', count: testimonials.filter(t => t.context === 'consulting').length },
                { label: 'Formation', count: testimonials.filter(t => t.context === 'formation').length },
                { label: 'Audit', count: testimonials.filter(t => t.context === 'audit').length },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass border border-brand-border text-sm text-brand-text-secondary">
                  <span>{f.label}</span>
                  <span className="text-brand-text-muted text-xs">({f.count})</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Testimonials grid */}
      <Section py="md">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => {
              const ctx = contextLabels[t.context]
              return (
                <Reveal key={t.id} delay={i * 0.07}>
                  <div className="glass rounded-2xl p-6 border border-brand-border flex flex-col h-full hover:border-brand-border-strong transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-sm">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative mb-5 flex-1">
                      <span className="absolute -top-2 -left-1 text-4xl text-brand-accent/20 font-serif leading-none select-none">"</span>
                      <blockquote className="text-sm text-brand-text-secondary leading-relaxed pl-3 italic">
                        {t.content}
                      </blockquote>
                    </div>

                    {/* Author */}
                    <div className="flex items-end justify-between pt-4 border-t border-brand-border">
                      <div>
                        <p className="font-semibold text-brand-text-primary text-sm">{t.name}</p>
                        <p className="text-xs text-brand-text-muted">{t.role}</p>
                        <p className="text-xs text-brand-text-muted">{t.sector}</p>
                      </div>
                      <Badge variant={ctx.variant} size="sm">{ctx.label}</Badge>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section py="xl" className="border-t border-brand-border text-center">
        <Container size="sm">
          <Reveal>
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
              Devenez le prochain cas de succès.
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Consulting, audit tracking ou formation — démarrons par un appel de 30 minutes.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl" icon={<ArrowRight className="h-5 w-5" />}>
                  Réserver un appel
                </Button>
              </Link>
              <Link href="/formation">
                <Button variant="secondary" size="xl">
                  Voir la formation
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
