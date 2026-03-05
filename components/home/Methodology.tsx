'use client'

import { motion } from 'framer-motion'
import { Search, Database, Zap, Workflow } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/animations/Reveal'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit & Diagnostic',
    description:
      'Analyse complète de l\'existant : tracking, comptes ads, stack MarTech, performance CRM. Identification précise des fuites et des quick wins à impact immédiat.',
    deliverables: ['Rapport d\'audit', 'Score de maturité', 'Priorisation actions'],
  },
  {
    number: '02',
    icon: Database,
    title: 'Tracking & Data Reliability',
    description:
      'Construction ou refonte de l\'infrastructure de collecte. GTM server-side, CAPI, GA4 structuré, qualité de donnée vérifiable à chaque étape.',
    deliverables: ['Plan de marquage', 'Container GTM', 'Dashboard qualité data'],
  },
  {
    number: '03',
    icon: Zap,
    title: 'Activation — Ads & CRM',
    description:
      'Lancement ou optimisation des campagnes sur base de données fiables. Google Ads, Meta Ads structurés, CRM lifecycle, flows automatisés.',
    deliverables: ['Campagnes optimisées', 'Flows CRM', 'Rapports ROAS réels'],
  },
  {
    number: '04',
    icon: Workflow,
    title: 'Automation & Scale',
    description:
      'Industrialisation des processus : n8n, dashboards automatisés, alertes intelligentes, documentation et formation des équipes pour l\'autonomie opérationnelle.',
    deliverables: ['Workflows n8n', 'Dashboards live', 'Handover équipe'],
  },
]

export function Methodology() {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-surface/30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <Container className="relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
            Méthodologie
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-brand-text-primary tracking-tight mb-4">
            Un processus éprouvé en 4 phases.
          </h2>
          <p className="text-brand-text-secondary max-w-lg mx-auto">
            Chaque mission suit la même rigueur : diagnostiquer avant d'agir, mesurer avant d\'optimiser.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4 mb-5 lg:flex-col lg:items-start lg:gap-3">
                    {/* Circle with icon */}
                    <div className="relative">
                      <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-surface border border-brand-border shadow-glass">
                        <Icon className="h-6 w-6 text-brand-accent" />
                      </div>
                      {/* Number badge */}
                      <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-brand-accent flex items-center justify-center">
                        <span className="text-2xs font-black text-white">{i + 1}</span>
                      </div>
                    </div>
                    <span className="font-display text-6xl font-black text-brand-border lg:hidden">
                      {step.number}
                    </span>
                  </div>

                  {/* Big number (desktop) */}
                  <div className="hidden lg:block mb-2">
                    <span className="font-display text-5xl font-black text-white/[0.04] select-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold text-brand-text-primary mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed mb-4 flex-1">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-1.5">
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-brand-accent shrink-0" />
                        <span className="text-xs text-brand-text-muted">{d}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
