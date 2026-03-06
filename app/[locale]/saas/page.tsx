import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Zap, BarChart2, Bell, Layers, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projets SaaS — Outils Marketing & Tracking',
  description:
    'Projets SaaS et outils internes construits par Slim Laribi : audit tracking automatisé, dashboard ROAS unifié, scoring CRM, automatisation e-commerce.',
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
    problem: 'Les audits manuels de tracking prennent des heures et sont souvent incomplets. Les équipes marketing n\'ont pas de visibilité temps réel sur la santé de leur tracking.',
    solution: 'Crawler léger qui simule la navigation, intercepte les appels réseau (GTM, GA4, pixels) et confronte les événements capturés avec un plan de marquage de référence.',
    stack: ['Next.js', 'TypeScript', 'Puppeteer', 'BigQuery'],
    statusDetails: { label: 'Bêta privée', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  },
  {
    id: 'roas-dashboard',
    icon: BarChart2,
    name: 'ROASDash',
    tagline: 'Dashboard ROAS unifié multi-canal',
    description:
      'Vue consolidée des performances ads Google + Meta avec attribution cross-canal configurable, comparaison périodes et alertes de seuils ROAS automatiques par Slack.',
    status: 'building' as const,
    tags: ['Google Ads', 'Meta Ads', 'Attribution', 'Dashboard'],
    problem: 'L\'attribution fragmentée par canal donne une vision biaisée du vrai ROAS business. Google reporte ses propres chiffres, Meta les siens — personne n\'a la vérité.',
    solution: 'Agrégation des données via API Google Ads et Meta Marketing API. Attribution configurable (last-click, linear, data-driven) appliquée de façon cohérente sur tous les canaux.',
    stack: ['Next.js', 'Looker Studio API', 'Google Ads API', 'Meta API'],
    statusDetails: { label: 'En construction', color: 'text-brand-accent', bg: 'bg-brand-accent/10 border-brand-accent/20' },
  },
  {
    id: 'crm-scorer',
    icon: Bell,
    name: 'ProfileScorer',
    tagline: 'Scoring et complétion des profils CRM',
    description:
      'Calcul automatique du PCR (Profile Completion Rate) sur Klaviyo + Shopify, avec plans d\'enrichissement personnalisés et alertes d\'activation pour les contacts à fort potentiel.',
    status: 'concept' as const,
    tags: ['CRM', 'Klaviyo', 'Segmentation', 'Scoring'],
    problem: 'Les équipes CRM ignorent la qualité réelle de leurs profils contacts. Sans PCR mesuré, l\'enrichissement et la segmentation sont approximatifs.',
    solution: 'Connexion aux APIs Klaviyo + Shopify pour calculer un score de complétion par profil (email, téléphone, RFM, comportement) et identifier les profils prioritaires à activer.',
    stack: ['Python', 'Klaviyo API', 'Shopify API', 'n8n'],
    statusDetails: { label: 'Concept', color: 'text-brand-text-muted', bg: 'bg-white/5 border-white/10' },
  },
  {
    id: 'n8n-ecom-hub',
    icon: Layers,
    name: 'EcomOpsHub',
    tagline: 'Hub d\'automatisation opérationnelle e-commerce',
    description:
      'Collection de workflows n8n pré-construits pour les opérations e-commerce : alertes stock, rapports daily, synchronisation CRM, routing SAV, reporting ads automatisé.',
    status: 'building' as const,
    tags: ['n8n', 'Automation', 'Shopify', 'Ops'],
    problem: 'Chaque boutique e-commerce réinvente les mêmes automatisations. Des centaines d\'heures de travail pour des workflows identiques d\'un projet à l\'autre.',
    solution: 'Bibliothèque de 20+ workflows n8n prêts à l\'emploi, documentés et maintenus. Installation en self-hosted ou cloud. Compatible Shopify, Klaviyo, Slack, Google Sheets.',
    stack: ['n8n', 'Shopify', 'Klaviyo', 'Slack', 'Docker'],
    statusDetails: { label: 'En construction', color: 'text-brand-accent', bg: 'bg-brand-accent/10 border-brand-accent/20' },
  },
]

const statusConfig = {
  beta: 'success' as const,
  building: 'accent' as const,
  concept: 'muted' as const,
}

export default function SaaSPage() {
  return (
    <>
      {/* Hero */}
      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="gold" dot className="mb-5">Projets SaaS & Outils</Badge>
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
              Chaque projet SaaS résout un problème réel identifié en mission : tracking opaque, ROAS menteur, CRM sous-utilisé, opérations manuelles.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/contact">
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
                  <Card variant="glass" padding="xl" className="hover:border-brand-border-strong transition-all duration-300">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left */}
                      <div className="lg:col-span-2">
                        {/* Header */}
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                          <div className="h-11 w-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-brand-gold" />
                          </div>
                          <div>
                            <h2 className="font-display text-2xl font-bold text-brand-text-primary">{project.name}</h2>
                            <p className="text-xs font-medium text-brand-gold">{project.tagline}</p>
                          </div>
                          <Badge variant={statusConfig[project.status]} dot>
                            {project.statusDetails.label}
                          </Badge>
                        </div>

                        <p className="text-brand-text-secondary leading-relaxed mb-6">{project.description}</p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted mb-2">Problème résolu</p>
                            <p className="text-sm text-brand-text-secondary leading-relaxed italic">
                              {project.problem}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted mb-2">Approche technique</p>
                            <p className="text-sm text-brand-text-secondary leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right */}
                      <div>
                        <div className="p-5 rounded-2xl bg-brand-surface/60 border border-brand-border h-full flex flex-col gap-4">
                          {/* Screenshot placeholder */}
                          <div className="aspect-video rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center">
                            <div className="text-center">
                              <div className="h-8 w-8 rounded-lg bg-brand-surface-2 border border-brand-border mx-auto mb-2 flex items-center justify-center">
                                <Icon className="h-4 w-4 text-brand-text-muted" />
                              </div>
                              <p className="text-2xs text-brand-text-muted">Screenshot</p>
                            </div>
                          </div>

                          {/* Stack */}
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted mb-2">Stack</p>
                            <div className="flex flex-wrap gap-1.5">
                              {project.stack.map((s) => (
                                <span key={s} className="px-2 py-0.5 rounded-md text-2xs font-medium bg-white/5 text-brand-text-muted border border-white/8">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-brand-gold/8 text-brand-gold border border-brand-gold/15">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link href="/contact" className="mt-auto">
                            <Button variant="secondary" size="md" className="w-full" icon={<ExternalLink className="h-3.5 w-3.5" />}>
                              En savoir plus
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
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
              Vous avez un problème récurrent ?
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Si vous rencontrez un problème opérationnel récurrent dans votre marketing, il y a peut-être un outil à construire. Discutons-en.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="xl" icon={<ArrowRight className="h-5 w-5" />}>
                Proposer un projet
              </Button>
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
