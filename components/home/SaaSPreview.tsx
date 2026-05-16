'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Briefcase,
  Car,
  GraduationCap,
  Home,
  MessageCircle,
  Sparkles,
  Zap,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/animations/Reveal'

const projects = [
  {
    name: 'PixelLens',
    status: 'Live',
    icon: Zap,
    tagline: 'TrackingAuditor · Audit tracking automatique',
    description:
      'Plateforme d’audit tracking pour analyser GA4, GTM, Meta Pixel, CAPI, consentement et qualité des événements.',
    tags: ['GA4', 'GTM', 'CAPI'],
    problem:
      'Les audits tracking manuels prennent du temps et manquent souvent de preuves techniques.',
    link: 'https://pixel-lens.tech/',
  },
  {
    name: 'DevTalent',
    status: 'MVP',
    icon: Briefcase,
    tagline: 'Recrutement d’experts internationaux',
    description:
      'Plateforme pour connecter recruteurs, bailleurs de fonds, missions internationales et experts qualifiés.',
    tags: ['Recruitment', 'Experts', 'SaaS'],
    problem:
      'Le sourcing d’experts internationaux reste lent, manuel et peu structuré.',
    link: 'https://devtalent.tech/',
  },
  {
    name: 'TeachFlow',
    status: 'MVP',
    icon: GraduationCap,
    tagline: 'Plateforme éducative & gestion de formation',
    description:
      'Outil pour gérer modules, classes, étudiants, documents, quiz, sessions et suivi pédagogique.',
    tags: ['EdTech', 'Teacher', 'LMS'],
    problem:
      'Les enseignants manquent d’un espace simple pour structurer cours, évaluations et suivi.',
    link: 'https://teach-flow.tech/',
  },
  {
    name: 'AdPulse',
    status: 'Building',
    icon: BarChart2,
    tagline: 'Dashboard ROAS & performance marketing',
    description:
      'Dashboard pour consolider Google Ads, Meta Ads, CRM et analytics afin de mieux lire la performance business.',
    tags: ['ROAS', 'Ads', 'Dashboard'],
    problem:
      'Les performances sont dispersées entre plateformes, sans vision claire du vrai ROI.',
    link: '/saas',
  },
  {
    name: 'WeScaleUp',
    status: 'Live',
    icon: Sparkles,
    tagline: 'Agence data, acquisition & automation',
    description:
      'Mon agence pour accompagner les clients en tracking, acquisition, analytics, automation et stratégie digitale.',
    tags: ['Agency', 'Tracking', 'Growth'],
    problem:
      'Les entreprises ont besoin d’un partenaire capable de relier stratégie, exécution et mesure.',
    link: 'https://wescaleup.tech/',
  },
  {
    name: 'WhatsFlow',
    status: 'Concept',
    icon: MessageCircle,
    tagline: 'WhatsApp automation pour e-commerce',
    description:
      'Solution pour intégrer WhatsApp aux sites e-commerce : conversations, relances, upsell, cross-sell et support.',
    tags: ['WhatsApp', 'CRM', 'E-commerce'],
    problem:
      'Les conversations WhatsApp sont souvent déconnectées du parcours client et du revenu.',
    link: '/saas',
  },
  {
    name: 'AutoSmart TN',
    status: 'Concept',
    icon: Car,
    tagline: 'Marketplace automobile intelligente',
    description:
      'Plateforme pour annonces auto neuves et occasion, avec meilleure expérience de recherche et données enrichies.',
    tags: ['Auto', 'Marketplace', 'Tunisie'],
    problem:
      'Le marché auto local manque d’une expérience moderne, rapide et intelligente.',
    link: '/saas',
  },
  {
    name: 'Immobilier TN',
    status: 'Concept',
    icon: Home,
    tagline: 'Location premium & biens de luxe',
    description:
      'Plateforme immobilière dédiée à la location de maisons, biens premium et expériences haut de gamme.',
    tags: ['Real Estate', 'Luxury', 'Rental'],
    problem:
      'Les biens premium sont difficiles à découvrir, comparer et qualifier en ligne.',
    link: '/saas',
  },
]

const statusConfig: Record<string, { variant: 'success' | 'accent' | 'muted'; label: string }> = {
  Live: { label: 'Live', variant: 'success' },
  MVP: { label: 'MVP', variant: 'accent' },
  Building: { label: 'En construction', variant: 'accent' },
  Concept: { label: 'Concept', variant: 'muted' },
}

export function SaaSPreview() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current
    if (!carousel) return

    const cardWidth = carousel.querySelector('a')?.clientWidth ?? 360
    const gap = 20

    carousel.scrollBy({
      left: direction === 'right' ? cardWidth + gap : -(cardWidth + gap),
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.08),transparent_42%)]" />

      <Container className="relative z-10">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Builder · Produits · Labs
              </p>

              <h2 className="max-w-4xl font-display text-4xl font-black tracking-tight text-brand-text-primary md:text-5xl">
                Un écosystème de produits construits sur des problèmes réels.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-text-secondary md:text-base">
                Des plateformes SaaS, outils internes et produits digitaux autour du tracking,
                de l’e-commerce, de l’éducation, du recrutement, de l’automation et des marketplaces.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left">
            <Link href="/saas">
              <Button variant="ghost" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                Voir l’écosystème
              </Button>
            </Link>
          </Reveal>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollCarousel('left')}
            aria-label="Projet précédent"
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/70 shadow-glow-sm backdrop-blur-xl transition hover:border-brand-gold/40 hover:bg-brand-gold/10 hover:text-white xl:flex"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel('right')}
            aria-label="Projet suivant"
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/70 shadow-glow-sm backdrop-blur-xl transition hover:border-brand-gold/40 hover:bg-brand-gold/10 hover:text-white xl:flex"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#080914] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#080914] to-transparent" />

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, i) => {
              const Icon = project.icon
              const status = statusConfig[project.status]

              return (
                <motion.div
                  key={project.name}
                  className="min-w-[88%] snap-start md:min-w-[48%] xl:min-w-[calc((100%-40px)/3)]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                >
                  <Link
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                    className="group block h-full"
                  >
                    <div className="relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-3xl border border-brand-border bg-white/[0.045] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/35 hover:bg-white/[0.065] hover:shadow-gold-glow">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(201,168,76,0.12),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative z-10 mb-5 flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/20 bg-brand-gold/10">
                          <Icon className="h-5 w-5 text-brand-gold" />
                        </div>

                        <Badge variant={status.variant} dot size="sm">
                          {status.label}
                        </Badge>
                      </div>

                      <div className="relative z-10">
                        <h3 className="mb-1 font-display text-xl font-bold tracking-tight text-brand-text-primary">
                          {project.name}
                        </h3>

                        <p className="mb-4 text-xs font-medium text-brand-gold">
                          {project.tagline}
                        </p>

                        <p className="mb-5 text-sm leading-relaxed text-brand-text-secondary">
                          {project.description}
                        </p>

                        <div className="mb-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                          <p className="mb-1 text-2xs font-semibold uppercase tracking-wider text-brand-text-muted">
                            Problème terrain
                          </p>

                          <p className="text-xs italic leading-5 text-brand-text-secondary">
                            {project.problem}
                          </p>
                        </div>
                      </div>

                      <div className="relative z-10 mt-auto flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-brand-gold/15 bg-brand-gold/10 px-2 py-0.5 text-2xs font-medium text-brand-gold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-6 flex justify-center gap-3 xl:hidden">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              aria-label="Projet précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition hover:border-brand-gold/40 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              aria-label="Projet suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition hover:border-brand-gold/40 hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}