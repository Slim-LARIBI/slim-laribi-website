'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/animations/Reveal'
import { getFeaturedCaseStudies } from '@/lib/case-studies'

export function CaseStudiesPreview() {
  const studies = getFeaturedCaseStudies().slice(0, 3)

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-brand-surface/20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <Reveal>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-3">
                Cas clients
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-brand-text-primary tracking-tight">
                Résultats concrets.
              </h2>
            </div>
          </Reveal>
          <Reveal direction="left">
            <Link href="/case-studies">
              <Button variant="ghost" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                Tous les cas
              </Button>
            </Link>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {studies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                <div className="glass rounded-2xl p-6 border border-brand-border h-full transition-all duration-300 group-hover:border-brand-border-strong group-hover:shadow-glow-sm group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="accent" size="sm">
                      {study.sector}
                    </Badge>
                    <ArrowRight className="h-4 w-4 text-brand-text-muted group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all duration-200" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-brand-text-primary mb-2 leading-tight group-hover:text-white transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-sm text-brand-text-secondary mb-5 line-clamp-3 leading-relaxed">
                    {study.excerpt}
                  </p>

                  {/* Key results */}
                  <div className="space-y-2 mb-5">
                    {study.results.slice(0, 2).map((r) => (
                      <div key={r.label} className="flex items-center justify-between py-2 border-b border-brand-border last:border-0">
                        <span className="text-xs text-brand-text-muted">{r.label}</span>
                        <div className="flex items-center gap-1.5">
                          <TrendingUp className="h-3 w-3 text-emerald-400" />
                          <span className="text-sm font-bold text-brand-text-primary">{r.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-2xs font-medium bg-white/5 text-brand-text-muted border border-white/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
