'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/animations/Reveal'

const modules = [
  { name: 'Fondations e-commerce & WordPress', hours: 21 },
  { name: 'SEO technique & contenu', hours: 7 },
  { name: 'Google Ads & Meta Ads', hours: 24 },
  { name: 'GTM, GA4 & événements tracking', hours: 18 },
  { name: 'CRM, emailing & lifecycle', hours: 10 },
  { name: 'Projet final e-commerce', hours: 10 },
  { name: 'Ateliers pratiques & accompagnement', hours: 3 },
]

const outcomes = [
  'Construire et optimiser un mini e-commerce complet',
  'Comprendre les fondamentaux SEO, SEA, Social Ads et CRM',
  'Mettre en place un tracking GA4 + GTM exploitable',
  'Analyser la performance et prendre de meilleures décisions',
  'Présenter un projet final structuré, mesurable et orienté business',
]

export function TrainingHighlight() {
  const totalHours = modules.reduce((s, m) => s + m.hours, 0)

  return (
    <section className="relative overflow-hidden py-24 section-gold-bg">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent opacity-[0.05] blur-[150px]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <Badge variant="gold" dot className="mb-5">
                Programme intensif · Cas réels · Présentiel
              </Badge>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mb-4 font-display text-4xl font-black tracking-tight text-brand-text-primary md:text-5xl">
                Customer Intelligence —{' '}
                <span className="text-gradient-gold">93 heures.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-6 text-lg leading-relaxed text-brand-text-secondary">
                Un programme structuré pour former des profils capables de comprendre le business,
                construire un dispositif digital, mesurer correctement la performance et activer les
                bons leviers de croissance.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mb-8 flex flex-wrap gap-5">
                {[
                  { icon: Clock, label: '93 heures', sub: '12 semaines' },
                  { icon: Users, label: 'Présentiel', sub: 'Ateliers pratiques' },
                  { icon: Award, label: 'Projet final', sub: 'Mini e-commerce complet' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gold/20 bg-brand-gold/10">
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

            <Reveal delay={0.2}>
              <div className="mb-8 space-y-2.5">
                {outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                    <span className="text-sm text-brand-text-secondary">{o}</span>
                  </div>
                ))}
              </div>
            </Reveal>

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

          <Reveal direction="left" delay={0.1}>
            <div className="glass rounded-3xl border border-brand-border p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display font-bold text-brand-text-primary">
                  Structure du programme
                </h3>
                <Badge variant="accent">{totalHours}h total</Badge>
              </div>

              <div className="space-y-2">
                {modules.map((mod, i) => (
                  <motion.div
                    key={mod.name}
                    className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.03]"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i + 0.2, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-surface">
                        <span className="text-2xs font-bold text-brand-text-muted">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <span className="text-sm text-brand-text-secondary transition-colors group-hover:text-brand-text-primary">
                        {mod.name}
                      </span>
                    </div>

                    <span className="ml-3 shrink-0 text-xs font-semibold text-brand-accent">
                      {mod.hours}h
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 border-t border-brand-border pt-4">
                <div className="mb-2 flex justify-between text-xs text-brand-text-muted">
                  <span>Progression du programme</span>
                  <span>{totalHours}/93h</span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-brand-surface">
                  <motion.div
                    className="h-full rounded-full bg-gradient-brand"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(totalHours / 93) * 100}%` }}
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