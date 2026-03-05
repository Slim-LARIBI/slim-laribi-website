'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Hero } from '@/components/home/Hero'
import { FunnelAttributionBlockV2 } from '@/components/hero/FunnelAttributionBlockV2'
import { CredibilityStrip } from '@/components/home/CredibilityStrip'
import { ExpertiseCards } from '@/components/home/ExpertiseCards'
import { TrainingHighlight } from '@/components/home/TrainingHighlight'
import { CaseStudiesPreview } from '@/components/home/CaseStudiesPreview'
import { SaaSPreview } from '@/components/home/SaaSPreview'
import { TestimonialsPreview } from '@/components/home/TestimonialsPreview'
import { FinalCTA } from '@/components/home/FinalCTA'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import {
  ArrowRight,
  Sparkles,
  Workflow,
  BarChart3,
  CheckCircle2,
  CalendarDays,
  Clock,
  Layers,
  GraduationCap,
} from 'lucide-react'

const stack = [
  { name: 'GA4', tag: 'Analytics' },
  { name: 'Google Tag Manager', tag: 'Tracking' },
  { name: 'Server-side / CAPI', tag: 'Data Quality' },
  { name: 'Meta Ads', tag: 'Acquisition' },
  { name: 'Google Ads', tag: 'Acquisition' },
  { name: 'Merchant Center', tag: 'E-commerce' },
  { name: 'WooCommerce', tag: 'E-commerce' },
  { name: 'WordPress (Kadence)', tag: 'Web' },
  { name: 'FluentCRM', tag: 'CRM' },
  { name: 'n8n', tag: 'Automation' },
  { name: 'Next.js', tag: 'Product' },
  { name: 'SEMrush / Screaming Frog', tag: 'SEO' },
]

const methodSteps = [
  {
    icon: BarChart3,
    title: 'Audit & data',
    desc: 'Mesure, tracking, CRM et campagnes. On identifie les fuites et les leviers ROI.',
    points: ['Cartographie funnel', 'Qualité data', 'Priorités quick wins'],
  },
  {
    icon: Workflow,
    title: 'Architecture',
    desc: 'On met une base robuste : événements, conventions, dashboards, automatisations.',
    points: ['GTM/GA4 clean', 'CAPI / S2S', 'Dashboard actionnable'],
  },
  {
    icon: Sparkles,
    title: 'Activation',
    desc: 'On structure l’acquisition (Meta/Google) + SEO + CRM pour générer du revenu.',
    points: ['Structure campagnes', 'Segmentation', 'Séquences CRM'],
  },
  {
    icon: CheckCircle2,
    title: 'Scale & optimisation',
    desc: 'On itère : tests, budget, créas, audiences. Objectif : performance stable.',
    points: ['Roadmap', 'Rituels hebdo', 'Optimisation continue'],
  },
]

const timelineMonths = [
  {
    month: 'Mois 1',
    title: 'Fondations Web & E-commerce',
    subtitle: 'WordPress + WooCommerce + blog SEO-ready',
    bullets: [
      'WordPress 6.3 (Kadence + Elementor)',
      'WooCommerce : produits, variantes, paiement & livraison',
      'Blog optimisé SEO (structure, perf, maillage)',
    ],
    accent: 'brand' as const,
    icon: Layers,
  },
  {
    month: 'Mois 2',
    title: 'Trafic & Acquisition',
    subtitle: 'SEO avancé + Media Buying (Meta/Google)',
    bullets: [
      'SEO on-site / off-site / technique (outils pro)',
      'Meta Ads : Traffic, Conversion, DPA + catalogue',
      'Google Ads : Search, Display, Performance Max',
    ],
    accent: 'gold' as const,
    icon: BarChart3,
  },
  {
    month: 'Mois 3',
    title: 'Tracking & Automation',
    subtitle: 'GTM + GA4 + CRM automatisé',
    bullets: [
      'GTM + GA4 : Enhanced Ecommerce, DataLayer, User ID',
      'CAPI / server-side basics + hygiène UTM',
      'FluentCRM : welcome, panier abandonné, upsell, segmentation',
    ],
    accent: 'brand' as const,
    icon: Workflow,
  },
]

function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-text-muted">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-black tracking-tight text-brand-text-primary">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm md:text-base text-brand-text-secondary leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

function V2IntroStrip() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="accent" dot>
                  Home page V2
                </Badge>
                <span className="text-xs text-white/50">Layout test</span>
              </div>
              <p className="mt-3 text-sm md:text-base text-white/75 leading-relaxed max-w-2xl">
                Cette version met plus de focus sur la{' '}
                <span className="text-white font-medium">formation (timeline 3 mois)</span>, la{' '}
                <span className="text-white font-medium">stack</span>, la{' '}
                <span className="text-white font-medium">méthode</span> et la{' '}
                <span className="text-white font-medium">preuve</span> — pour convertir plus vite.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/formation2">
                <Button variant="secondary" size="md">
                  Voir formation2
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="gold" size="md">
                  Discuter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Timeline90h() {
  const reduce = useReducedMotion()

  return (
    <section className="relative py-14 md:py-18 overflow-hidden border-y border-brand-border">
      <div className="absolute inset-0 bg-brand-surface/35" />

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 left-1/3 h-72 w-72 rounded-full blur-3xl opacity-[0.18]"
          style={{ background: 'radial-gradient(circle, rgba(124,111,247,.55), transparent 65%)' }}
        />
        <div
          className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full blur-3xl opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,.45), transparent 65%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Formation"
          title="Timeline 3 mois · 90h — de zéro à opérationnel"
          subtitle="Un parcours progressif : construire → attirer → mesurer → automatiser. Chaque mois te rapproche d’un système marketing complet."
        />

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[
            { icon: CalendarDays, title: 'Durée', value: '3 mois' },
            { icon: Clock, title: 'Volume', value: '90h intensives' },
            { icon: GraduationCap, title: 'Objectif', value: 'Compétences + livrables' },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
                  <x.icon className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/60">{x.title}</p>
                  <p className="text-base font-semibold text-white">{x.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 relative">
          <div className="hidden md:block pointer-events-none absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <div className="grid gap-4">
            {timelineMonths.map((m, idx) => {
              const Icon = m.icon
              const isGold = m.accent === 'gold'
              const glow = isGold
                ? 'radial-gradient(circle at 30% 30%, rgba(201,168,76,.35), transparent 65%)'
                : 'radial-gradient(circle at 30% 30%, rgba(124,111,247,.35), transparent 65%)'

              return (
                <motion.div
                  key={m.month}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: idx * 0.06 }}
                  className="relative"
                >
                  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
                    <div className="relative p-6 md:p-8 md:pl-16">
                      <div className="pointer-events-none absolute -inset-10 opacity-60 blur-2xl" style={{ background: glow }} />

                      <div className="hidden md:block absolute left-4 top-8">
                        <div className="h-6 w-6 rounded-full border border-white/15 bg-black/30 grid place-items-center">
                          <div className={`h-2.5 w-2.5 rounded-full ${isGold ? 'bg-brand-gold' : 'bg-brand-accent'}`} />
                        </div>
                      </div>

                      <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
                            <Icon className={`h-5 w-5 ${isGold ? 'text-brand-gold' : 'text-brand-accent'}`} />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/60">
                                {m.month}
                              </span>
                              <span className="h-1 w-1 rounded-full bg-white/25" />
                              <span className="text-xs text-white/60">{m.subtitle}</span>
                            </div>
                            <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-white">
                              {m.title}
                            </h3>
                          </div>
                        </div>

                        <div className="inline-flex">
                          <span className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs ${isGold ? 'text-brand-gold' : 'text-white/70'}`}>
                            {isGold ? 'Acquisition & trafic' : idx === 0 ? 'Build & foundations' : 'Tracking & CRM'}
                          </span>
                        </div>
                      </div>

                      <ul className="relative mt-5 grid gap-2 md:grid-cols-2">
                        {m.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-white/75">
                            <span className={`mt-[7px] h-1.5 w-1.5 rounded-full ${isGold ? 'bg-brand-gold' : 'bg-brand-accent'}`} />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="h-px w-full bg-white/10" />
                    <div className="px-6 py-4 md:px-8 flex flex-wrap items-center gap-2 text-xs text-white/60">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Livrables concrets</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Exercices & cas</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Replays illimités</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/formation2">
              <Button variant="secondary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Voir la page formation (test)
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="gold" size="lg">
                Réserver un appel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function StackSection() {
  return (
    <section className="relative py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Stack"
          title="Outils & systèmes que je maîtrise"
          subtitle="Une stack complète pour construire des systèmes marketing mesurables, fiables et scalables."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <div
              key={s.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div
                className="pointer-events-none absolute -inset-8 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(124,111,247,.25), rgba(201,168,76,.12), transparent 60%)',
                }}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">{s.name}</p>
                  <p className="mt-1 text-xs text-white/60">{s.tag}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  Pro
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/expertise">
            <Button variant="secondary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Voir mes services & livrables
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function MethodSectionV2() {
  return (
    <section className="relative py-14 md:py-18 border-y border-brand-border overflow-hidden">
      <div className="absolute inset-0 bg-brand-surface/35" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Méthode"
          title="Une méthode claire, orientée ROI"
          subtitle="Tu sais exactement ce que tu obtiens : mesure → architecture → activation → scale."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {methodSteps.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
                  <s.icon className="h-5 w-5 text-brand-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">{s.desc}</p>

                  <ul className="mt-4 grid gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-white/75">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-gold" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/case-studies">
            <Button variant="secondary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Voir des résultats
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="gold" size="lg">
              Réserver un appel
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function HomePageV2() {
  return (
    <>
      <Hero />
      <FunnelAttributionBlockV2 />
      <CredibilityStrip />

      <V2IntroStrip />

      <Timeline90h />

      <StackSection />
      <MethodSectionV2 />

      <ExpertiseCards />
      <CaseStudiesPreview />
      <TrainingHighlight />
      <SaaSPreview />
      <TestimonialsPreview />
      <FinalCTA />
    </>
  )
}