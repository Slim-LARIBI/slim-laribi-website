'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, BarChart2, Bell } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/animations/Reveal'

const saasProjects = [
  {
    id: 'tracking-auditor',
    icon: Zap,
    name: 'TrackingAuditor',
    tagline: 'Audit automatique de la qualité de tracking',
    description: 'Outil qui analyse un domaine, détecte les événements manquants, les doublons et les inconsistances GTM/GA4 en moins de 60 secondes.',
    status: 'beta' as const,
    tags: ['GTM', 'GA4', 'Audit'],
    problem: 'Les audits manuels de tracking prennent des heures et sont souvent incomplets.',
  },
  {
    id: 'roas-dashboard',
    icon: BarChart2,
    name: 'AdPulse',
    tagline: 'Dashboard ROAS unifié multi-canal',
    description: 'Vue consolidée des performances ads Google + Meta avec attribution cross-canal, comparaison périodes et alertes seuils ROAS en temps réel.',
    status: 'building' as const,
    tags: ['Google Ads', 'Meta Ads', 'Attribution'],
    problem: 'L\'attribution fragmentée par canal donne une vision biaisée du vrai ROAS business.',
  },
  {
    id: 'crm-scorer',
    icon: Bell,
    name: 'ProfileScorer',
    tagline: 'Scoring et complétion des profils CRM',
    description: 'Calcul automatique du PCR (Profile Completion Rate) sur Klaviyo/Shopify, avec suggestions d\'enrichissement et alertes d\'activation.',
    status: 'concept' as const,
    tags: ['CRM', 'Klaviyo', 'Segmentation'],
    problem: 'Les équipes CRM ignorent la qualité réelle de leurs profils contacts.',
  },
]

const statusConfig = {
  beta: { label: 'Bêta', variant: 'success' as const },
  building: { label: 'En construction', variant: 'accent' as const },
  concept: { label: 'Concept', variant: 'muted' as const },
}

export function SaaSPreview() {
  return (
    <section className="py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <Reveal>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
                Projets SaaS
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-brand-text-primary tracking-tight">
                Outils que je construis.
              </h2>
            </div>
          </Reveal>
          <Reveal direction="left">
            <Link href="/saas">
              <Button variant="ghost" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                Tous les projets
              </Button>
            </Link>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {saasProjects.map((project, i) => {
            const Icon = project.icon
            const status = statusConfig[project.status]

            return (
              <motion.div
                key={project.id}
                className="glass rounded-2xl p-6 border border-brand-border hover:border-brand-border-strong hover:shadow-glow-sm transition-all duration-300 hover:-translate-y-1 group"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="h-11 w-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-brand-gold" />
                  </div>
                  <Badge variant={status.variant} dot size="sm">
                    {status.label}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-brand-text-primary mb-1 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-xs font-medium text-brand-gold mb-3">{project.tagline}</p>
                <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Problem solved */}
                <div className="mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/6">
                  <p className="text-2xs font-semibold uppercase tracking-wider text-brand-text-muted mb-1">
                    Problème résolu
                  </p>
                  <p className="text-xs text-brand-text-secondary italic">
                    {project.problem}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-2xs font-medium bg-brand-gold/8 text-brand-gold border border-brand-gold/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
