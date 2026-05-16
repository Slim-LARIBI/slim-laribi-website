'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const proofItems = [
  {
    icon: Briefcase,
    title: 'Directeur E-commerce',
    description: 'Decathlon Tunisie',
  },
  {
    icon: Sparkles,
    title: 'Fondateur',
    description: 'WeScaleUp.tech',
  },
  {
    icon: GraduationCap,
    title: 'Enseignant & formateur',
    description: 'Top écoles privées',
  },
  {
    icon: Award,
    title: 'Certifié & reconnu',
    description: 'Semrush Ambassador · SAFe® 6',
  },
]

const stats = [
  { value: '8+', label: 'ans en marketing, data & e-commerce' },
  { value: '40+', label: 'projets acquisition, tracking & automation' },
  { value: '90h', label: 'programme Customer Intelligence' },
  { value: '5', label: 'écoles privées en Tunisie' },
]

export function CredibilityStrip() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#090a14] py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,111,247,0.12),transparent_42%)]" />

      <Container className="relative z-10">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
              Proof of authority
            </p>
            <h2 className="mt-3 max-w-4xl font-display text-2xl font-black tracking-tight text-white md:text-4xl">
              Une expertise construite sur le terrain, entre e-commerce, data, formation et accompagnement business.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 md:text-base">
              J’interviens auprès des marques, équipes marketing et dirigeants pour structurer leur acquisition,
              fiabiliser leur tracking, automatiser leurs opérations et mieux piloter la performance.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
          >
            Découvrir mon parcours <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          className="grid gap-4 md:grid-cols-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {proofItems.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:border-brand-accent/40 hover:bg-white/[0.07]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-brand-accent" />
                </div>
                <p className="font-display text-lg font-bold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-white/55">{item.description}</p>
              </div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center backdrop-blur-md"
            >
              <p className="font-display text-3xl font-black text-gradient-brand">{s.value}</p>
              <p className="mt-2 text-xs leading-5 text-white/55">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}