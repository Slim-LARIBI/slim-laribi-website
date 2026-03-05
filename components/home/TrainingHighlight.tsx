'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/animations/Reveal'

const modules = [
  { name: 'WordPress & E-commerce', hours: 10 },
  { name: 'SEO fondamentaux + technique', hours: 14 },
  { name: 'Google Ads (Search + Shopping)', hours: 12 },
  { name: 'Meta Ads (funnel + mesure)', hours: 12 },
  { name: 'GTM + Events setup', hours: 10 },
  { name: 'GA4 reporting + attribution', hours: 12 },
  { name: 'CRM · Emailing · Lifecycle', hours: 10 },
  { name: 'Projet final (mini e-commerce)', hours: 10 },
]

const outcomes = [
  'Créer et gérer un site e-commerce WordPress performant',
  'Maîtriser le tracking GA4 + GTM de A à Z',
  'Lancer et optimiser des campagnes Google Ads & Meta Ads',
  'Construire un CRM lifecycle email avec automatisations',
  'Analyser et décider sur la base de données fiables',
]

export function TrainingHighlight() {
  const totalHours = modules.reduce((s, m) => s + m.hours, 0)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-brand-accent opacity-[0.05] blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <Reveal>
              <Badge variant="gold" dot className="mb-5">
                Formation intensive · Présentiel
              </Badge>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl md:text-5xl font-black text-brand-text-primary tracking-tight mb-4">
                Customer Intelligence —{' '}
                <span className="text-gradient-gold">90 heures.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-brand-text-secondary leading-relaxed mb-6 text-lg">
                Un parcours de 3 mois en présentiel pour maîtriser tous les leviers du marketing digital moderne : de la création de site à la data, en passant par les ads et le CRM.
              </p>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-5 mb-8">
                {[
                  { icon: Clock, label: '90 heures', sub: '3 mois de formation' },
                  { icon: Users, label: 'Présentiel', sub: 'Groupes réduits' },
                  { icon: Award, label: 'Certifiant', sub: 'Projet final inclus' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                      <stat.icon className="h-4 w-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-text-primary">{stat.label}</p>
                      <p className="text-xs text-brand-text-muted">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Outcomes */}
            <Reveal delay={0.2}>
              <div className="space-y-2.5 mb-8">
                {outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-text-secondary">{o}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-3">
                <Link href="/formation">
                  <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                    Voir la formation complète
                  </Button>
                </Link>
                <Link href="/formation/programme">
                  <Button variant="secondary" size="lg">
                    Planning détaillé
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right: module list */}
          <Reveal direction="left" delay={0.1}>
            <div className="glass rounded-3xl p-6 border border-brand-border">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-bold text-brand-text-primary">
                  Modules du programme
                </h3>
                <Badge variant="accent">
                  {totalHours}h total
                </Badge>
              </div>

              <div className="space-y-2">
                {modules.map((mod, i) => (
                  <motion.div
                    key={mod.name}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-white/[0.03] transition-colors group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i + 0.2, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center shrink-0">
                        <span className="text-2xs font-bold text-brand-text-muted">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-sm text-brand-text-secondary group-hover:text-brand-text-primary transition-colors">
                        {mod.name}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-brand-accent shrink-0 ml-3">
                      {mod.hours}h
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-5 pt-4 border-t border-brand-border">
                <div className="flex justify-between text-xs text-brand-text-muted mb-2">
                  <span>Progression du programme</span>
                  <span>{totalHours}/90h</span>
                </div>
                <div className="h-1.5 bg-brand-surface rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-brand rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(totalHours / 90) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
