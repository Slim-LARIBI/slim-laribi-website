'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Cpu,
  ShoppingCart,
  Workflow,
  GraduationCap,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/animations/Reveal'

const pillars = [
  {
    icon: BarChart3,
    title: 'Acquisition & Performance',
    subtitle: 'Google Ads · Meta Ads · ROAS',
    description:
      'Structuration, pilotage et optimisation des campagnes d’acquisition pour améliorer la rentabilité, la qualité du trafic et la contribution business réelle.',
    tags: ['Google Ads', 'Meta Ads', 'Performance Max', 'ROAS'],
    color: 'violet',
  },
  {
    icon: Cpu,
    title: 'Tracking, GA4 & MarTech',
    subtitle: 'GTM · GA4 · Server-side',
    description:
      'Mise en place d’une architecture de mesure fiable : tracking web, GA4, GTM server-side, Meta CAPI, déduplication et qualité de la donnée.',
    tags: ['GA4', 'GTM Server-side', 'Meta CAPI', 'DataLayer'],
    color: 'gold',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce, CRM & Data Client',
    subtitle: 'Lifecycle · Segmentation · Revenue',
    description:
      'Activation des données client pour mieux vendre : segmentation, lifecycle marketing, CRM, campagnes automatisées et pilotage orienté chiffre d’affaires.',
    tags: ['CRM', 'Segmentation', 'Lifecycle', 'E-commerce'],
    color: 'violet',
  },
  {
    icon: Workflow,
    title: 'Automation & IA appliquée',
    subtitle: 'n8n · CRM · IA · Workflows',
    description:
      'Création de workflows, automatisations marketing, dashboards et systèmes assistés par IA pour gagner du temps, réduire les tâches manuelles et scaler les opérations.',
    tags: ['n8n', 'Automation', 'IA', 'Dashboards'],
    color: 'gold',
  },
  {
    icon: GraduationCap,
    title: 'Formation & montée en compétence',
    subtitle: 'Marketing · Data · Tracking',
    description:
      'Formations intensives et ateliers pratiques pour aider les étudiants, équipes marketing et dirigeants à maîtriser les leviers digitaux modernes.',
    tags: ['Formation', 'Workshops', '90h', 'Présentiel'],
    color: 'violet',
  },
]

const colorMap = {
  violet: {
    icon: 'text-brand-accent',
    iconBg: 'bg-brand-accent/10 border border-brand-accent/20',
    tag: 'bg-brand-accent/8 text-brand-accent border border-brand-accent/15',
  },
  gold: {
    icon: 'text-brand-gold',
    iconBg: 'bg-brand-gold/10 border border-brand-gold/20',
    tag: 'bg-brand-gold/8 text-brand-gold border border-brand-gold/15',
  },
}

export function ExpertiseCards() {
  return (
    <section className="relative overflow-hidden py-24 section-deep-bg section-grid">
      <Container>
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Domaines d&apos;expertise
          </p>

          <h2 className="mb-4 font-display text-4xl font-black tracking-tight text-brand-text-primary md:text-5xl">
            5 piliers pour construire une croissance mesurable.
          </h2>

          <p className="mx-auto max-w-2xl text-brand-text-secondary">
            Une approche complète qui relie acquisition, tracking, data client,
            automation et formation — pour passer de l’exécution marketing à un
            système de performance piloté.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            const colors = colorMap[pillar.color as keyof typeof colorMap]

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <Card
                  variant="glass"
                  hover
                  className="group h-full transition-all duration-300 hover:border-brand-border-strong"
                >
                  <div
                    className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${colors.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${colors.icon}`} />
                  </div>

                  <h3 className="mb-1 font-display text-xl font-bold tracking-tight text-brand-text-primary">
                    {pillar.title}
                  </h3>

                  <p className={`mb-3 text-xs font-medium ${colors.icon}`}>
                    {pillar.subtitle}
                  </p>

                  <p className="mb-5 text-sm leading-relaxed text-brand-text-secondary">
                    {pillar.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-lg px-2.5 py-1 text-xs font-medium ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}