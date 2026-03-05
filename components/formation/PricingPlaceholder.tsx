'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface PricingTier {
  name: string
  badge?: string
  price: string
  priceSub?: string
  description: string
  features: string[]
  cta: string
  ctaVariant?: 'primary' | 'gold' | 'secondary'
  highlighted?: boolean
}

const tiers: PricingTier[] = [
  {
    name: 'Formation seule',
    price: 'Sur devis',
    priceSub: 'selon financement',
    description: 'Accès complet au programme 90h en présentiel avec supports pédagogiques.',
    features: [
      '90h de formation présentiel',
      'Supports pédagogiques complets',
      'Accès aux ressources en ligne',
      'Suivi pédagogique individuel',
      'Projet capstone final',
      'Attestation de formation',
    ],
    cta: 'Nous contacter',
    ctaVariant: 'secondary',
  },
  {
    name: 'Formation + Mentorat',
    badge: 'Recommandé',
    price: 'Sur devis',
    priceSub: 'CPF · OPCO · Financement perso',
    description: '90h de formation intensive + sessions de mentorat individualisées pour accélérer votre progression.',
    features: [
      'Tout du pack Formation seule',
      '4 sessions mentorat individuel (1h)',
      'Revue de votre projet capstone',
      'Accès communauté alumni',
      'Assistance post-formation (30j)',
      'Lettre de recommandation',
    ],
    cta: 'Réserver un appel',
    ctaVariant: 'primary',
    highlighted: true,
  },
  {
    name: 'Entreprise / Équipe',
    price: 'Sur mesure',
    priceSub: 'intra-entreprise',
    description: 'Formation adaptée à votre contexte et vos outils, dispensée directement dans vos locaux pour votre équipe marketing.',
    features: [
      'Programme personnalisé',
      'Formation sur site',
      'Cas pratiques sur vos données',
      'Jusqu\'à 12 participants',
      'Support suivi 60 jours',
      'Facturation entreprise',
    ],
    cta: 'Demander un devis',
    ctaVariant: 'gold',
  },
]

export function PricingPlaceholder() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
      {tiers.map((tier, i) => (
        <motion.div
          key={tier.name}
          className={cn(
            'relative flex flex-col rounded-3xl border transition-all duration-300',
            tier.highlighted
              ? 'border-brand-accent/40 bg-brand-accent/5 shadow-glow-md'
              : 'border-brand-border glass hover:border-brand-border-strong hover:shadow-glow-sm'
          )}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          {tier.highlighted && (
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
          )}

          <div className="relative p-7 flex flex-col h-full">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-bold text-brand-text-primary">{tier.name}</h3>
                {tier.badge && (
                  <Badge variant="accent" size="sm">{tier.badge}</Badge>
                )}
              </div>

              <div className="mb-3">
                <span className="font-display text-3xl font-black text-brand-text-primary">
                  {tier.price}
                </span>
                {tier.priceSub && (
                  <p className="text-xs text-brand-text-muted mt-1">{tier.priceSub}</p>
                )}
              </div>

              <p className="text-sm text-brand-text-secondary leading-relaxed">
                {tier.description}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-2.5 mb-8 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckCircle2 className={cn(
                    'h-4 w-4 shrink-0 mt-0.5',
                    tier.highlighted ? 'text-brand-accent' : 'text-brand-text-muted'
                  )} />
                  <span className="text-sm text-brand-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link href="/contact">
              <Button
                variant={tier.ctaVariant ?? 'secondary'}
                size="lg"
                className="w-full"
                icon={<Phone className="h-4 w-4" />}
                iconPosition="left"
              >
                {tier.cta}
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
