'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ArrowRight } from 'lucide-react'

const pills = [
  'Retail / Sport',
  'E-commerce',
  'SaaS B2B',
  'D2C',
  'Marketplace',
  'Omnicanal',
]

function Marquee({ reverse = false }: { reverse?: boolean }) {
  const reduce = useReducedMotion()
  const items = [...pills, ...pills]

  if (reduce) {
    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {pills.map((p) => (
          <span key={p} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            {p}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-2"
        style={{ width: 'max-content' }}
        animate={{ x: reverse ? ['-20%', '0%'] : ['0%', '-20%'] }}
        transition={{ duration: reverse ? 22 : 18, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((p, i) => (
          <span
            key={`${p}-${i}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md"
          >
            {p}
          </span>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-black/60 to-transparent" />
    </div>
  )
}

export function CredibilityStrip() {
  return (
    <section className="relative border-y border-brand-border py-12 overflow-hidden">
      <div className="absolute inset-0 bg-brand-surface/40" />

      <Container className="relative z-10">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-text-muted">
              Data-driven. Execution-ready. Results-focused.
            </p>
            <p className="mt-2 text-sm text-white/70 max-w-2xl">
              Des stratégies mesurables, une instrumentation solide, et des optimisations orientées ROI — sur des business réels.
            </p>
          </motion.div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            Voir les cas clients <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Marquee */}
        <div className="space-y-2 mb-10">
          <Marquee />
          <Marquee reverse />
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[
            { value: '8+', label: "ans d'expérience" },
            { value: '40+', label: 'projets livrés' },
            { value: '90h', label: 'formation intensive' },
            { value: '100%', label: 'orienté résultats' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md"
            >
              <p className="font-display text-3xl font-black text-gradient-brand">{s.value}</p>
              <p className="mt-1 text-xs text-white/60">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}