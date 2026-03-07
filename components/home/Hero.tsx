'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ParallaxGlow } from '@/components/animations/ParallaxGlow'
import { trackCTAClick } from '@/lib/analytics'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('hero')

  const metrics = [
    { label: t('metric1.label'), sublabel: t('metric1.sub') },
    { label: t('metric2.label'), sublabel: t('metric2.sub') },
    { label: t('metric3.label'), sublabel: t('metric3.sub') },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-accent opacity-[0.06] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-gold opacity-[0.04] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-brand-accent opacity-[0.03] blur-[150px]" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <ParallaxGlow color="mixed" intensity="low" size="lg" className="w-full">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <Badge variant="accent" dot>
              {t('badge')}
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="text-brand-text-primary">{t('titlePrefix')}&nbsp;</span>
            <span className="text-gradient-brand">{t('title1')}</span>
            <br />
            <span className="text-brand-text-primary">{t('titlePrefix2')}&nbsp;</span>
            <span className="text-gradient-gold">{t('title2')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-brand-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
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
              onClick={() => trackCTAClick(t('cta1'), 'hero')}
            >
              {t('cta1')}
            </Button>

            <Link href="/contact">
              <Button
                variant="secondary"
                size="xl"
                icon={<Phone className="h-5 w-5" />}
                iconPosition="left"
                onClick={() => trackCTAClick(t('cta2'), 'hero')}
              >
                {t('cta2')}
              </Button>
            </Link>

            <Link href="/formation">
              <Button
                variant="ghost"
                size="xl"
                icon={<ArrowRight className="h-4 w-4" />}
                onClick={() => trackCTAClick(t('cta3'), 'hero')}
              >
                {t('cta3')}
              </Button>
            </Link>
          </motion.div>

          {/* Metrics */}
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