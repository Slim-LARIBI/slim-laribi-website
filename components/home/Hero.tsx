'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ParallaxGlow } from '@/components/animations/ParallaxGlow'
import { HeroBackdropAurora } from '@/components/animations/HeroBackdropAurora'
import { trackCTAClick } from '@/lib/analytics'

const metrics = [
  { label: 'Tracking fiable', sublabel: 'Server-side & CAPI' },
  { label: 'Performance ROI', sublabel: 'Attribution réelle' },
  { label: 'Automation at scale', sublabel: 'n8n · Flows · CRM' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg pt-16">
      {/* Premium animated background */}
      <HeroBackdropAurora />

      <ParallaxGlow color="mixed" intensity="low" size="lg" className="w-full">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Label chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <Badge variant="accent" dot>
              Expert Marketing · Tracking · MarTech · Formation
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="text-brand-text-primary">Data&nbsp;</span>
            <span className="text-gradient-brand">fiable.</span>
            <br />
            <span className="text-brand-text-primary">Résultats&nbsp;</span>
            <span className="text-gradient-gold">mesurables.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-brand-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            J'aide les entreprises à{' '}
            <span className="text-brand-text-primary font-medium">maîtriser leur tracking</span>,
            optimiser leurs{' '}
            <span className="text-brand-text-primary font-medium">performances ads</span> et
            automatiser leurs opérations. Je forme aussi les équipes marketing à la{' '}
            <span className="text-brand-text-primary font-medium">Customer Intelligence</span>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Button
              variant="gold"
              size="xl"
              icon={<Download className="h-5 w-5" />}
              iconPosition="left"
              onClick={() => trackCTAClick('Télécharger programme', 'hero')}
            >
              Télécharger le programme (PDF)
            </Button>

            <Link href="/contact">
              <Button
                variant="secondary"
                size="xl"
                icon={<Phone className="h-5 w-5" />}
                iconPosition="left"
                onClick={() => trackCTAClick('Réserver un appel', 'hero')}
              >
                Réserver un appel
              </Button>
            </Link>

            <Link href="/formation">
              <Button
                variant="ghost"
                size="xl"
                icon={<ArrowRight className="h-4 w-4" />}
                onClick={() => trackCTAClick('Voir les formations', 'hero')}
              >
                Voir les formations
              </Button>
            </Link>
          </motion.div>

          {/* Metric chips */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="flex items-center gap-3 glass px-5 py-3 rounded-2xl border border-brand-border"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + i * 0.08, duration: 0.5 }}
              >
                <div className="h-2 w-2 rounded-full bg-brand-accent shadow-glow-sm" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-brand-text-primary leading-none">
                    {metric.label}
                  </p>
                  <p className="text-xs text-brand-text-muted mt-0.5">{metric.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center gap-1"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="h-8 w-px bg-gradient-to-b from-transparent to-brand-border" />
              <div className="h-1.5 w-1.5 rounded-full bg-brand-text-muted" />
            </motion.div>
          </motion.div>
        </div>
      </ParallaxGlow>
    </section>
  )
}