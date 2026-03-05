'use client'

import { motion } from 'framer-motion'
import { BarChart3, Cpu, ShoppingCart, Code2, GraduationCap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/animations/Reveal'

const pillars = [
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    subtitle: 'Ads · Attribution · ROAS',
    description:
      'Google Ads, Meta Ads, structuration de comptes, optimisation des campagnes et attribution data-driven. Chaque euro dépensé, mesuré.',
    tags: ['Google Ads', 'Meta Ads', 'Performance Max', 'Attribution'],
    color: 'violet',
  },
  {
    icon: Cpu,
    title: 'Tracking & MarTech',
    subtitle: 'GTM · GA4 · Server-side',
    description:
      'Architecture de tracking fiable de bout en bout. Server-side, CAPI, déduplication, qualité de la donnée — zéro fuite de conversion.',
    tags: ['GTM Server-side', 'GA4', 'Meta CAPI', 'BigQuery'],
    color: 'gold',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & CRM',
    subtitle: 'Lifecycle · Segmentation · ROI',
    description:
      'Activation des données client : segmentation RFM, lifecycle email, flows automatisés, PCR et KPIs CRM orientés revenue.',
    tags: ['Klaviyo', 'Shopify', 'Lifecycle', 'Segmentation RFM'],
    color: 'violet',
  },
  {
    icon: Code2,
    title: 'Automation & SaaS',
    subtitle: 'n8n · Builder · No-code',
    description:
      'Construction d\'outils internes, workflows n8n, dashboards automatisés et mini-SaaS pour gagner en efficacité opérationnelle.',
    tags: ['n8n', 'Automation', 'Dashboards', 'SaaS Builder'],
    color: 'gold',
  },
  {
    icon: GraduationCap,
    title: 'Formation Customer Intelligence',
    subtitle: 'Marketing · Tracking · Data',
    description:
      '90 heures de formation intensive : WordPress, SEO, SEA, Meta Ads, GTM, GA4, CRM. Du fondement au déploiement opérationnel.',
    tags: ['Formation 90h', '3 mois', 'Présentiel', 'Certifiant'],
    color: 'violet',
  },
]

const colorMap = {
  violet: {
    icon: 'text-brand-accent',
    iconBg: 'bg-brand-accent/10 border border-brand-accent/20',
    tag: 'bg-brand-accent/8 text-brand-accent border border-brand-accent/15',
    glow: 'shadow-glow-sm',
  },
  gold: {
    icon: 'text-brand-gold',
    iconBg: 'bg-brand-gold/10 border border-brand-gold/20',
    tag: 'bg-brand-gold/8 text-brand-gold border border-brand-gold/15',
    glow: 'shadow-gold-glow',
  },
}

export function ExpertiseCards() {
  return (
    <section className="py-24">
      <Container>
        {/* Header */}
        <Reveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-3">
            Domaines d'expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-brand-text-primary tracking-tight mb-4">
            5 piliers, 1 objectif : vos résultats.
          </h2>
          <p className="text-brand-text-secondary max-w-xl mx-auto">
            Une approche intégrée qui couvre tout le spectre du marketing digital moderne — de la donnée brute à l'activation à grande échelle.
          </p>
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            const colors = colorMap[pillar.color as keyof typeof colorMap]

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <Card
                  variant="glass"
                  hover
                  className="h-full group transition-all duration-300 hover:border-brand-border-strong"
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center h-11 w-11 rounded-xl mb-5 ${colors.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${colors.icon}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-brand-text-primary mb-1 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className={`text-xs font-medium mb-3 ${colors.icon}`}>
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-brand-text-secondary leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
