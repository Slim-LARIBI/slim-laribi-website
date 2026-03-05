'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Download, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-surface/50 to-brand-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-glow opacity-60 pointer-events-none" />

      {/* Glow sphere */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-accent opacity-[0.08] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container size="md" className="relative z-10 text-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-accent mb-4">
            Passez à l'action
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
            Votre tracking fuit.{' '}
            <span className="text-gradient-brand">Vos data mentent.</span>
            <br />
            On y remédie.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg text-brand-text-secondary max-w-xl mx-auto mb-10">
            Audit gratuit · Diagnostic précis · Plan d'action chiffré. Sans engagement, sans bullshit.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button
                variant="primary"
                size="xl"
                icon={<Phone className="h-5 w-5" />}
                iconPosition="left"
              >
                Réserver un appel
              </Button>
            </Link>
            <Button
              variant="gold"
              size="xl"
              icon={<Download className="h-5 w-5" />}
              iconPosition="left"
            >
              Télécharger le programme
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Link
            href="/formation"
            className="inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-text-primary transition-colors duration-200"
          >
            <span>Ou découvrez la formation Customer Intelligence</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
