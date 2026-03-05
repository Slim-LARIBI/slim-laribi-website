'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/animations/Reveal'
import { testimonials } from '@/lib/testimonials'

const contextLabels = {
  consulting: 'Consulting',
  formation: 'Formation',
  audit: 'Audit',
}

export function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3)

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-brand-surface/30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <Reveal>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-3">
                Témoignages
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-brand-text-primary tracking-tight">
                Ce qu'ils en disent.
              </h2>
            </div>
          </Reveal>
          <Reveal direction="left">
            <Link href="/testimonials">
              <Button variant="ghost" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                Tous les avis
              </Button>
            </Link>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((t, i) => (
            <motion.div
              key={t.id}
              className="glass rounded-2xl p-6 border border-brand-border flex flex-col"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-brand-text-secondary leading-relaxed mb-5 flex-1 italic">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                <div>
                  <p className="text-sm font-semibold text-brand-text-primary">{t.name}</p>
                  <p className="text-xs text-brand-text-muted">{t.role}</p>
                  <p className="text-xs text-brand-text-muted">{t.company}</p>
                </div>
                <Badge variant="outline" size="sm">
                  {contextLabels[t.context]}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
