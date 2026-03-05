import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { AmbientGlow } from '@/components/animations/ParallaxGlow'
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Expertise — Tracking, Performance Marketing & Automation',
  description:
    'Services de consulting en tracking server-side, performance ads, CRM lifecycle et automatisation. Audit, implémentation, optimisation et formation.',
}

const services = [
  {
    id: 'tracking',
    badge: 'Core expertise',
    badgeVariant: 'gold' as const,
    title: 'Tracking & Data Reliability',
    subtitle: 'GTM Server-side · GA4 · Meta CAPI · BigQuery',
    description:
      'Votre infrastructure de collecte est le fondement de toutes vos décisions. Un tracking défaillant produit des données fausses, des optimisations algorithm mal guidées et des budgets gaspillés.',
    what: [
      'Audit complet de l\'existant (GTM, GA4, pixels, CAPI)',
      'Plan de marquage structuré (événements, paramètres, e-commerce)',
      'Déploiement GTM server-side sur Cloud Run',
      'Implémentation Meta Conversions API avec déduplication',
      'Structuration GA4 : propriétés, conversions, audiences',
      'Dashboard qualité de données (EMQ, coverage rate)',
      'Intégration BigQuery pour l\'analyse avancée',
    ],
    deliverables: ['Rapport d\'audit', 'Container GTM', 'Dashboard Looker Studio', 'Documentation technique'],
    duration: '4–8 semaines',
    color: 'gold',
  },
  {
    id: 'performance',
    badge: 'Performance',
    badgeVariant: 'accent' as const,
    title: 'Performance Marketing',
    subtitle: 'Google Ads · Meta Ads · Attribution data-driven',
    description:
      'Des campagnes performantes reposent sur une structure solide, des signaux d\'audience de qualité et une attribution réelle — pas une attribution qui flatte les algorithmes.',
    what: [
      'Audit de compte Google Ads / Meta Ads',
      'Restructuration de campagnes (Search, Shopping, PMax, Meta)',
      'Segmentation Performance Max avec asset groups & signals',
      'Setup Attribution data-driven (GA4 + import conversions)',
      'Stratégie créatives Meta (UGC, VSL, Dynamic)',
      'A/B testing structuré et règles d\'optimisation',
      'Reporting ROAS réel vs attribution plateforme',
    ],
    deliverables: ['Rapport audit', 'Comptes restructurés', 'Plan d\'audiences', 'Dashboard ROAS'],
    duration: '6–10 semaines',
    color: 'accent',
  },
  {
    id: 'crm',
    badge: 'CRM & Lifecycle',
    badgeVariant: 'accent' as const,
    title: 'CRM & Email Automation',
    subtitle: 'Klaviyo · Lifecycle · Segmentation RFM · PCR',
    description:
      'La base CRM est votre actif le plus précieux — à condition de l\'activer intelligemment. Segmentation comportementale, flows lifecycle, scoring de profils : chaque contact devient un levier.',
    what: [
      'Audit CRM : qualité des données, segmentation, performance',
      'Calcul du PCR (Profile Completion Rate) et plan d\'enrichissement',
      'Modèle de segmentation RFM sur données Shopify/GA4',
      'Déploiement de 8–12 flows automatisés (Klaviyo)',
      'Welcome series, abandon, post-achat, win-back, VIP',
      'A/B testing sujets, contenus, timings d\'envoi',
      'Setup des KPIs CRM : revenue, OR, CTR, unsubscribe rate',
    ],
    deliverables: ['Audit CRM complet', 'Flows Klaviyo', 'Dashboard KPIs', 'Rapport monthly'],
    duration: '6–8 semaines',
    color: 'accent',
  },
  {
    id: 'automation',
    badge: 'Automation',
    badgeVariant: 'gold' as const,
    title: 'Automation & SaaS Builder',
    subtitle: 'n8n · Workflows · Dashboards · Outils internes',
    description:
      'Les tâches répétitives tuent la productivité. Je conçois et déploie des systèmes d\'automatisation opérationnelle qui libèrent du temps et éliminent les erreurs humaines.',
    what: [
      'Cartographie et audit des processus opérationnels',
      'Déploiement n8n self-hosted (Docker / Cloud)',
      'Workflows : rapports automatisés, alertes, synchronisations',
      'Intégrations Shopify / Klaviyo / Slack / Google Sheets',
      'Dashboards Looker Studio auto-actualisés',
      'Outils internes no-code / low-code (mini-SaaS)',
      'Documentation et formation des équipes',
    ],
    deliverables: ['Cartographie processus', '8–15 workflows n8n', 'Dashboards live', 'Guide maintenance'],
    duration: '3–6 semaines',
    color: 'gold',
  },
]

const colorMap = {
  accent: {
    badge: 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20',
    dot: 'bg-brand-accent',
    check: 'text-brand-accent',
  },
  gold: {
    badge: 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20',
    dot: 'bg-brand-gold',
    check: 'text-brand-gold',
  },
}

export default function ExpertisePage() {
  return (
    <>
      {/* Hero */}
      <Section py="2xl" className="relative hero-bg">
        <AmbientGlow
          className="top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
          color="#7c6ff7"
          opacity={0.07}
          width={700}
          height={350}
        />
        <Container size="md" className="relative z-10 text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              Services & Consulting
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              Expertise opérationnelle.
              <br />
              <span className="text-gradient-brand">Zéro compromis sur la data.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary leading-relaxed max-w-xl mx-auto mb-8">
              Du tracking à l'activation, en passant par l\'automatisation — des missions à fort impact, livrées avec rigueur.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/contact">
              <Button variant="primary" size="xl" icon={<ArrowRight className="h-5 w-5" />}>
                Démarrer un audit
              </Button>
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Services */}
      <Section py="xl">
        <Container>
          <div className="space-y-8">
            {services.map((service, i) => {
              const colors = colorMap[service.color as keyof typeof colorMap]
              return (
                <Reveal key={service.id} delay={i * 0.05}>
                  <Card variant="glass" padding="xl" className="hover:border-brand-border-strong transition-all duration-300">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left */}
                      <div className="lg:col-span-2">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${colors.badge}`}>
                            {service.badge}
                          </span>
                          <div className="flex items-center gap-1.5 text-brand-text-muted">
                            <Clock className="h-3.5 w-3.5" />
                            <span className="text-xs">{service.duration}</span>
                          </div>
                        </div>

                        <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-text-primary tracking-tight mb-1">
                          {service.title}
                        </h2>
                        <p className={`text-sm font-medium mb-4 ${colors.check}`}>
                          {service.subtitle}
                        </p>
                        <p className="text-brand-text-secondary leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted mb-3">
                          Ce que je fais concrètement
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {service.what.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${colors.check}`} />
                              <span className="text-sm text-brand-text-secondary">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right */}
                      <div>
                        <div className="p-5 rounded-2xl bg-brand-surface/60 border border-brand-border h-full flex flex-col">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted mb-4">
                            Livrables inclus
                          </h4>
                          <ul className="space-y-2.5 mb-6 flex-1">
                            {service.deliverables.map((d) => (
                              <li key={d} className="flex items-center gap-2">
                                <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${colors.dot}`} />
                                <span className="text-sm text-brand-text-secondary">{d}</span>
                              </li>
                            ))}
                          </ul>

                          <Link href="/contact">
                            <Button variant="secondary" size="md" className="w-full">
                              Demander un devis
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section py="xl" className="border-t border-brand-border text-center bg-brand-surface/20">
        <Container size="sm">
          <Reveal>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Quel est votre enjeu ?
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Audit gratuit · Diagnostic précis · Plan d'action chiffré.
              Réponse sous 24h.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl" icon={<ArrowRight className="h-5 w-5" />}>
                  Réserver un appel
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="secondary" size="xl">
                  Voir les cas clients
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
