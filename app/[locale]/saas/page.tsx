import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd'
import { ArrowRight, Zap, BarChart2, Bell, Layers, ExternalLink } from 'lucide-react'

const siteUrl = 'https://laribislim.com'

interface Props {
  params: { locale: 'fr' | 'en' }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale ?? 'fr'
  const pageUrl = `${siteUrl}/${locale}/saas`

  return {
    title:
      locale === 'en'
        ? 'SaaS Projects — Marketing & Tracking Tools'
        : 'Projets SaaS — Outils Marketing & Tracking',

    description:
      locale === 'en'
        ? 'Internal SaaS tools built by Slim Laribi: automated tracking audit, ROAS dashboard, CRM scoring and e-commerce automation.'
        : 'Projets SaaS et outils internes construits par Slim Laribi : audit tracking automatisé, dashboard ROAS unifié, scoring CRM et automatisation e-commerce.',

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title:
        locale === 'en'
          ? 'SaaS Projects — Marketing & Tracking Tools'
          : 'Projets SaaS — Outils Marketing & Tracking',
      description:
        locale === 'en'
          ? 'Internal SaaS tools built by Slim Laribi: automated tracking audit, ROAS dashboard, CRM scoring and e-commerce automation.'
          : 'Projets SaaS et outils internes construits par Slim Laribi : audit tracking automatisé, dashboard ROAS unifié, scoring CRM et automatisation e-commerce.',
      url: pageUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'SaaS Projects — Slim Laribi',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title:
        locale === 'en'
          ? 'SaaS Projects — Marketing & Tracking Tools'
          : 'Projets SaaS — Outils Marketing & Tracking',
      description:
        locale === 'en'
          ? 'Internal SaaS tools built by Slim Laribi: automated tracking audit, ROAS dashboard, CRM scoring and e-commerce automation.'
          : 'Projets SaaS et outils internes construits par Slim Laribi : audit tracking automatisé, dashboard ROAS unifié, scoring CRM et automatisation e-commerce.',
      images: [`${siteUrl}/og-image.jpg`],
    },
  }
}

const projects = [
  {
    id: 'tracking-auditor',
    icon: Zap,
    name: 'TrackingAuditor',
    tagline: 'Audit automatique de la qualité de tracking',
    description:
      'Outil qui analyse un domaine, détecte les événements manquants, les doublons GTM, les inconsistances GA4 et génère un rapport de qualité data en moins de 60 secondes.',
    status: 'beta' as const,
    tags: ['GTM', 'GA4', 'Data Quality', 'Audit'],
    problem:
      "Les audits manuels de tracking prennent des heures et sont souvent incomplets. Les équipes marketing n'ont pas de visibilité temps réel sur la santé de leur tracking.",
    solution:
      'Crawler léger qui simule la navigation, intercepte les appels réseau (GTM, GA4, pixels) et confronte les événements capturés avec un plan de marquage de référence.',
    stack: ['Next.js', 'TypeScript', 'Puppeteer', 'BigQuery'],
    statusDetails: {
      label: 'Bêta privée',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
  },
  {
    id: 'roas-dashboard',
    icon: BarChart2,
    name: 'ROASDash',
    tagline: 'Dashboard ROAS unifié multi-canal',
    description:
      'Vue consolidée des performances ads Google + Meta avec attribution cross-canal configurable et alertes automatiques.',
    status: 'building' as const,
    tags: ['Google Ads', 'Meta Ads', 'Attribution', 'Dashboard'],
    problem:
      "L'attribution fragmentée par canal donne une vision biaisée du vrai ROAS business.",
    solution:
      'Agrégation via Google Ads API et Meta API avec attribution cohérente cross-canal.',
    stack: ['Next.js', 'Looker Studio API', 'Google Ads API', 'Meta API'],
    statusDetails: {
      label: 'En construction',
      color: 'text-brand-accent',
      bg: 'bg-brand-accent/10 border-brand-accent/20',
    },
  },
  {
    id: 'crm-scorer',
    icon: Bell,
    name: 'ProfileScorer',
    tagline: 'Scoring et complétion des profils CRM',
    description:
      "Calcul automatique du PCR (Profile Completion Rate) sur Klaviyo + Shopify.",
    status: 'concept' as const,
    tags: ['CRM', 'Klaviyo', 'Segmentation', 'Scoring'],
    problem:
      'Les équipes CRM ignorent la qualité réelle de leurs profils contacts.',
    solution:
      'Score automatique de complétion des profils avec enrichissement priorisé.',
    stack: ['Python', 'Klaviyo API', 'Shopify API', 'n8n'],
    statusDetails: {
      label: 'Concept',
      color: 'text-brand-text-muted',
      bg: 'bg-white/5 border-white/10',
    },
  },
]

export default function SaaSPage({ params }: Props) {
  const locale = params.locale ?? 'fr'
  const pageUrl = `${siteUrl}/${locale}/saas`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: locale === 'en' ? 'Home' : 'Accueil', url: `${siteUrl}/${locale}` },
          { name: 'SaaS', url: pageUrl },
        ]}
      />

      <WebPageJsonLd
        name="SaaS Projects — Slim Laribi"
        description="Marketing and tracking SaaS tools built from real operational needs."
        url={pageUrl}
      />

      {/* Hero */}
      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="gold" dot className="mb-5">
              Projets SaaS & Outils
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              Je construis aussi{' '}
              <span className="text-gradient-gold">les outils</span>
              <br />
              qui me manquaient.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary max-w-xl mx-auto mb-8">
              Chaque projet SaaS résout un problème réel identifié en mission :
              tracking opaque, ROAS trompeur, CRM sous-utilisé et opérations
              marketing manuelles.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Link href={`/${locale}/contact`}>
              <Button variant="primary" size="xl" icon={<ArrowRight className="h-5 w-5" />}>
                Discuter d'un projet
              </Button>
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Projects */}
      <Section py="xl">
        <Container>
          <div className="space-y-6">
            {projects.map((project, i) => {
              const Icon = project.icon

              return (
                <Reveal key={project.id} delay={i * 0.06}>
                  <Card variant="glass" padding="xl">
                    <div className="grid lg:grid-cols-3 gap-8">

                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="h-11 w-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-brand-gold" />
                          </div>

                          <div>
                            <h2 className="font-display text-2xl font-bold text-brand-text-primary">
                              {project.name}
                            </h2>
                            <p className="text-xs text-brand-gold">{project.tagline}</p>
                          </div>
                        </div>

                        <p className="text-brand-text-secondary mb-5">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <Link href={`/${locale}/contact`}>
                          <Button variant="secondary" className="w-full" icon={<ExternalLink className="h-4 w-4" />}>
                            En savoir plus
                          </Button>
                        </Link>
                      </div>

                    </div>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>
    </>
  )
}