import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PillarLinks } from '@/components/seo/PillarLinks'
import { Reveal } from '@/components/animations/Reveal'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd'
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart3,
  Layers,
  Radar,
  Coins,
  ShieldCheck,
  Search,
} from 'lucide-react'

interface Props {
  params: { locale: 'fr' | 'en' }
}

const siteUrl = 'https://laribislim.com'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/performance-marketing`

  if (locale === 'fr') {
    return {
      title: 'Performance Marketing — Guide expert Google Ads, Meta Ads, ROAS & attribution',
      description:
        'Guide expert performance marketing : Google Ads, Meta Ads, structure de campagnes, ROAS, attribution, optimisation budgétaire et croissance pilotée par la donnée.',
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr/performance-marketing`,
          'en-US': `${siteUrl}/en/performance-marketing`,
        },
      },
      openGraph: {
        title: 'Performance Marketing — Guide expert Google Ads, Meta Ads, ROAS & attribution',
        description:
          'Guide expert performance marketing : Google Ads, Meta Ads, structure de campagnes, ROAS, attribution, optimisation budgétaire et croissance pilotée par la donnée.',
        url: pageUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: 'Performance Marketing — Slim Laribi',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Performance Marketing — Guide expert Google Ads, Meta Ads, ROAS & attribution',
        description:
          'Guide expert du performance marketing : Google Ads, Meta Ads, ROAS, attribution et optimisation.',
        images: [`${siteUrl}/og-image.jpg`],
      },
    }
  }

  return {
    title: 'Performance Marketing — Expert guide to Google Ads, Meta Ads, ROAS & attribution',
    description:
      'Expert guide to performance marketing: Google Ads, Meta Ads, campaign structure, ROAS, attribution, budget optimization and data-driven growth.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr/performance-marketing`,
        'en-US': `${siteUrl}/en/performance-marketing`,
      },
    },
  }
}

const relatedArticles = [
  {
    slug: 'strategies-encheres-ads-sea',
    title: 'Stratégies d’enchères Ads SEA : comment piloter la performance',
    category: 'Google Ads',
  },
  {
    slug: 'conversion-linker-gtm',
    title: 'Conversion Linker Google Ads : pourquoi et comment l’utiliser',
    category: 'Google Ads / Tracking',
  },
  {
    slug: 'pixel-event-tracking-retargeting',
    title: 'Pixel Facebook : suivi, optimisation et ciblage publicitaire',
    category: 'Meta Ads',
  },
  {
    slug: 'pixel-tracking-purchase-event',
    title: 'Facebook Pixel Purchase Event : maîtrisez le tracking',
    category: 'Meta Ads / Tracking',
  },
  {
    slug: 'utm-tracking',
    title: 'UTM Tracking : structurer ses campagnes et son attribution',
    category: 'Attribution',
  },
]

const pillars = [
  {
    icon: Target,
    title: 'Piloter la croissance, pas juste le spend',
    text:
      'Le performance marketing n’est pas une logique de diffusion brute. L’objectif n’est pas de dépenser plus, mais de transformer le budget en croissance rentable via des campagnes mieux structurées, mieux mesurées et mieux optimisées.',
  },
  {
    icon: Coins,
    title: 'Optimiser le ROAS réel',
    text:
      'Un bon ROAS ne se lit pas uniquement dans les plateformes. Il faut réconcilier la donnée publicitaire, l’attribution, la qualité des conversions et la valeur business réelle. Sinon, le pilotage est biaisé.',
  },
  {
    icon: Radar,
    title: 'Relier acquisition et data',
    text:
      'Les meilleures performances viennent quand Google Ads, Meta Ads, tracking, CRM et analytics travaillent ensemble. Sans cette cohérence, les algorithmes optimisent sur des signaux partiels.',
  },
]

const stack = [
  'Google Ads',
  'Meta Ads',
  'Performance Max',
  'Search Ads',
  'Retargeting',
  'ROAS',
  'Attribution',
  'Audience Signals',
  'Pixel Tracking',
  'Budget Optimization',
]

export default function PerformanceMarketingPage({ params }: Props) {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/performance-marketing`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: locale === 'fr' ? 'Accueil' : 'Home', url: `${siteUrl}/${locale}` },
          { name: 'Performance Marketing', url: pageUrl },
        ]}
      />

      <WebPageJsonLd
        name="Performance Marketing"
        description="Guide expert du performance marketing : Google Ads, Meta Ads, ROAS, attribution et optimisation pilotée par la donnée."
        url={pageUrl}
      />

      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              {locale === 'fr'
                ? 'Page pilier · Acquisition & performance'
                : 'Pillar page · Acquisition & performance'}
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-6 leading-tight">
              Performance Marketing.
              <br />
              <span className="text-gradient-brand">
                La rentabilité avant le volume.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
              Le <strong>performance marketing</strong> regroupe les leviers d’acquisition
              pilotés par la donnée : <strong>Google Ads</strong>, <strong>Meta Ads</strong>,
              campagnes Search, Shopping, Performance Max, retargeting, audiences, enchères et
              attribution. Le vrai enjeu n’est pas seulement de générer du trafic ou des clics,
              mais de construire une mécanique rentable où chaque euro investi est mesuré,
              interprété et optimisé.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button
                  variant="primary"
                  size="xl"
                  icon={<ArrowRight className="h-5 w-5" />}
                >
                  {locale === 'fr' ? 'Optimiser mes campagnes' : 'Optimize my campaigns'}
                </Button>
              </Link>
              <Link href={`/${locale}/blog`}>
                <Button variant="secondary" size="xl">
                  {locale === 'fr' ? 'Lire les articles' : 'Read the blog'}
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="sm">
        <Container>
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-xl text-sm font-medium glass border border-brand-border text-brand-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl">
        <Container>
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <Card variant="glass" padding="lg" className="h-full">
                  <item.icon className="h-6 w-6 text-brand-accent mb-4" />
                  <h2 className="font-display text-xl font-bold text-brand-text-primary mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm text-brand-text-secondary leading-relaxed">
                    {item.text}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section py="xl" className="border-t border-brand-border">
        <Container size="md">
          <Reveal>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-6">
              Qu’est-ce que le performance marketing, réellement ?
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>
                Le performance marketing désigne l’ensemble des actions d’acquisition
                où la dépense publicitaire est reliée à un résultat mesurable :
                clic, lead, achat, revenu, coût d’acquisition, panier moyen ou valeur vie client.
                Cela concerne principalement <strong>Google Ads</strong>, <strong>Meta Ads</strong>,
                parfois TikTok Ads, LinkedIn Ads ou d’autres canaux, mais la logique reste la même :
                on investit, on mesure, on optimise.
              </p>

              <p>
                Le problème, c’est que beaucoup d’entreprises pensent faire du performance marketing
                alors qu’elles font seulement de la diffusion média. Elles lancent des campagnes,
                lisent des dashboards de plateformes, regardent un ROAS affiché, puis ajustent les
                budgets. Sans architecture de mesure fiable, sans logique d’attribution, sans
                cohérence entre tracking et business, ce pilotage est incomplet. Le “bon chiffre”
                peut masquer une mauvaise réalité.
              </p>

              <p>
                Un vrai pilotage performance repose sur trois couches : une structure publicitaire
                propre, un <strong>tracking fiable</strong> et une lecture business des résultats.
                C’est seulement quand ces trois couches sont alignées que les algorithmes de
                diffusion peuvent réellement apprendre sur les bons signaux.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="bg-brand-surface/20 border-y border-brand-border">
        <Container>
          <Reveal className="mb-10">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Les briques d’une machine d’acquisition performante
            </h2>
            <p className="text-brand-text-secondary max-w-3xl leading-relaxed">
              Les plateformes seules ne suffisent pas. La performance vient d’un système complet,
              pas d’un seul levier.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Search,
                title: 'Google Ads',
                text:
                  'Search, Shopping, Performance Max, brand, generic, non-brand, remarketing : Google Ads reste un levier puissant quand la structure de campagne et les signaux de conversion sont maîtrisés.',
              },
              {
                icon: TrendingUp,
                title: 'Meta Ads',
                text:
                  'Meta excelle dans la création de demande, le retargeting et l’optimisation créative. Sa performance dépend fortement de la qualité du pixel, de la CAPI et de la segmentation des audiences.',
              },
              {
                icon: Layers,
                title: 'Structure des campagnes',
                text:
                  'Une bonne campagne n’est pas “jolie”, elle est lisible : objectif clair, naming propre, segmentation logique, assets adaptés, messages cohérents par audience et par étape du funnel.',
              },
              {
                icon: BarChart3,
                title: 'Attribution & lecture des résultats',
                text:
                  'Le ROAS affiché dans les plateformes n’est pas toujours le ROAS business. Il faut croiser analytics, tracking, CRM et parfois offline pour avoir une vision utile.',
              },
              {
                icon: ShieldCheck,
                title: 'Tracking fiable',
                text:
                  'Sans signal de conversion propre, les campagnes apprennent mal. Pixel, GA4, GTM, UTM, Conversion Linker et Conversions API sont la base du pilotage.',
              },
              {
                icon: Coins,
                title: 'Budget & rentabilité',
                text:
                  'La vraie question n’est pas “combien dépenser ?” mais “où et quand dépenser plus sans dégrader la rentabilité ?”. Le budget suit la qualité du signal et la performance marginale.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <Card variant="glass" padding="lg" className="h-full">
                  <item.icon className="h-5 w-5 text-brand-gold mb-4" />
                  <h3 className="font-display text-xl font-bold text-brand-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed">
                    {item.text}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section py="xl">
        <Container size="md">
          <Reveal>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-6">
              Les erreurs classiques en performance marketing
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              'Lire uniquement les chiffres des plateformes sans contrôle externe.',
              'Lancer des campagnes sans segmentation par intention ou niveau de maturité.',
              'Utiliser Performance Max ou les broad audiences sans données de conversion fiables.',
              'Optimiser au CPC ou au CTR au lieu d’optimiser au revenu ou à la marge.',
              'Confondre volume de conversions et qualité de conversions.',
              'Couper trop vite une campagne sans comprendre sa place dans le funnel.',
              'Ne pas aligner créa, landing page, offre et tracking.',
            ].map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <div className="flex items-start gap-3 p-4 rounded-2xl glass border border-brand-border">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <p className="text-brand-text-secondary">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section py="xl" className="border-t border-brand-border">
        <Container size="md">
          <Reveal>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-6">
              Mon approche du pilotage performance
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>
                Je ne traite pas le performance marketing comme une simple gestion de campagnes.
                Je le traite comme un système de croissance. Cela commence par la clarification
                des objectifs : acquisition de trafic qualifié, génération de leads, ventes
                e-commerce, rentabilité par catégorie, pilotage par marge ou par valeur client.
                Ensuite, la structure média est alignée sur ces objectifs.
              </p>

              <p>
                En pratique, cela veut dire : auditer les comptes <strong>Google Ads</strong> et
                <strong> Meta Ads</strong>, revoir le tracking, contrôler l’attribution, corriger
                les signaux de conversion, repenser les campagnes et les enchères, puis piloter
                l’optimisation avec des indicateurs qui ont un sens business. Le sujet n’est pas
                juste “faire baisser le CPA”, mais augmenter la valeur créée par le budget.
              </p>

              <p>
                Quand l’architecture est bonne, les plateformes apprennent mieux, les budgets
                s’allouent plus intelligemment et le marketing redevient un levier pilotable.
                C’est là que le performance marketing devient réellement performant.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="border-t border-brand-border">
        <Container>
          <Reveal className="mb-10">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Articles liés au performance marketing
            </h2>
            <p className="text-brand-text-secondary max-w-3xl">
              Ces contenus approfondissent les sujets stratégiques : <strong>Google Ads</strong>,
              <strong> Meta Ads</strong>, <strong>tracking publicitaire</strong>, attribution,
              événements de conversion et logique d’optimisation.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedArticles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.08}>
                <Link href={`/${locale}/blog/${article.slug}`} className="group block">
                  <Card variant="glass" hover padding="lg" className="h-full">
                    <Badge variant="accent" size="sm" className="mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="font-display font-bold text-brand-text-primary mb-2 group-hover:text-white transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-brand-accent text-sm mt-4">
                      <span>{locale === 'fr' ? 'Lire l’article' : 'Read article'}</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section py="xl" className="bg-brand-surface/20 border-t border-brand-border text-center">
        <Container size="sm">
          <Reveal>
            <Badge variant="gold" dot className="mb-4">
              Acquisition & ROAS
            </Badge>
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
              Vos campagnes apprennent sur les bons signaux…
              <br />
              ou sur du bruit ?
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Audit Google Ads, Meta Ads, tracking, attribution, structure de campagnes et
              optimisation orientée rentabilité.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button
                  variant="primary"
                  size="xl"
                  icon={<ArrowRight className="h-5 w-5" />}
                >
                  {locale === 'fr' ? 'Réserver un appel' : 'Book a call'}
                </Button>
              </Link>
              <Link href={`/${locale}/data-tracking`}>
                <Button variant="secondary" size="xl">
                  {locale === 'fr' ? 'Voir Data Tracking' : 'View Data Tracking'}
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
<Section py="xl">
  <Container>
    <PillarLinks locale={locale} current="performance-marketing" />
  </Container>
</Section>

      </Section>
    </>
  )
}