import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { PillarLinks } from '@/components/seo/PillarLinks'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd'
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Gauge,
  Radar,
  Layers,
  ShieldCheck,
  Bug,
  BarChart3,
} from 'lucide-react'

interface Props {
  params: { locale: 'fr' | 'en' }
}

const siteUrl = 'https://laribislim.com'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/data-tracking`

  if (locale === 'fr') {
    return {
      title: 'Data Tracking — Guide expert tracking marketing, GTM, GA4 & CAPI',
      description:
        'Guide expert sur le data tracking marketing : Google Tag Manager, GA4, Meta Pixel, Conversions API, dataLayer, debugging et fiabilité de la mesure.',
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr/data-tracking`,
          'en-US': `${siteUrl}/en/data-tracking`,
        },
      },
      openGraph: {
        title: 'Data Tracking — Guide expert tracking marketing, GTM, GA4 & CAPI',
        description:
          'Guide expert sur le data tracking marketing : Google Tag Manager, GA4, Meta Pixel, Conversions API, dataLayer, debugging et fiabilité de la mesure.',
        url: pageUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: 'Data Tracking — Slim Laribi',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Data Tracking — Guide expert tracking marketing, GTM, GA4 & CAPI',
        description:
          'Guide expert sur le data tracking marketing : GTM, GA4, Pixel, CAPI et fiabilité de la donnée.',
        images: [`${siteUrl}/og-image.jpg`],
      },
    }
  }

  return {
    title: 'Data Tracking — Expert guide to marketing tracking, GTM, GA4 & CAPI',
    description:
      'Expert guide to marketing data tracking: Google Tag Manager, GA4, Meta Pixel, Conversions API, dataLayer, debugging and measurement reliability.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr/data-tracking`,
        'en-US': `${siteUrl}/en/data-tracking`,
      },
    },
  }
}

const relatedArticles = [
  {
    slug: 'conversion-linker-gtm',
    title: 'Conversion Linker Google Ads : pourquoi et comment l’utiliser',
    category: 'Google Ads / GTM',
  },
  {
    slug: 'utm-tracking',
    title: 'UTM Tracking : bien structurer ses campagnes et son attribution',
    category: 'Analytics',
  },
  {
    slug: 'pixel-event-tracking-retargeting',
    title: 'Pixel Facebook : suivi, optimisation et ciblage publicitaire',
    category: 'Meta Tracking',
  },
  {
    slug: 'pixel-tracking-purchase-event',
    title: 'Facebook Pixel Purchase Event : maîtrisez le tracking',
    category: 'Meta Tracking',
  },
  {
    slug: 'catalogue-pixel-datafeed-xml-opengraph',
    title: 'Catalogue, pixel, datafeed XML et Open Graph',
    category: 'E-commerce Tracking',
  },
]

const pillars = [
  {
    icon: Database,
    title: 'Collecter la bonne donnée',
    text:
      'Le data tracking commence par une question simple : quelles données faut-il vraiment capter pour piloter le business ? Le but n’est pas d’envoyer un maximum d’événements, mais de construire une mesure utile : vues produit, ajout panier, checkout, achat, lead, valeur, devise, source et contexte.',
  },
  {
    icon: Layers,
    title: 'Structurer le plan de marquage',
    text:
      'Un tracking fiable repose sur un plan de marquage clair : nomenclature des événements, logique dataLayer, conventions GTM, variables, déclencheurs, déduplication et QA. Sans structure, la donnée devient vite inutilisable.',
  },
  {
    icon: Gauge,
    title: 'Rendre la mesure exploitable',
    text:
      'Un bon tracking n’est pas juste “installé”. Il doit être exploitable dans GA4, Google Ads, Meta Ads, dashboards et CRM. La vraie valeur est dans l’activation : optimisation des campagnes, meilleure attribution et décisions plus rapides.',
  },
]

const stack = [
  'Google Tag Manager',
  'GA4',
  'Meta Pixel',
  'Conversions API',
  'Data Layer',
  'UTM Tracking',
  'Debugging',
  'Attribution',
  'Consent Mode',
  'E-commerce Tracking',
]

export default function DataTrackingPage({ params }: Props) {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/data-tracking`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: locale === 'fr' ? 'Accueil' : 'Home', url: `${siteUrl}/${locale}` },
          { name: 'Data Tracking', url: pageUrl },
        ]}
      />

      <WebPageJsonLd
        name="Data Tracking"
        description="Guide expert du data tracking marketing, de Google Tag Manager à GA4, Meta Pixel, Conversions API et debugging."
        url={pageUrl}
      />

      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              {locale === 'fr'
                ? 'Page pilier · Tracking marketing'
                : 'Pillar page · Marketing tracking'}
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-6 leading-tight">
              Data Tracking.
              <br />
              <span className="text-gradient-brand">
                La donnée utile avant la donnée jolie.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
              Le <strong>data tracking marketing</strong> ne consiste pas à installer quelques tags
              puis espérer que les plateformes publicitaires racontent la vérité. Un tracking
              fiable, c’est une architecture de mesure pensée pour répondre à des questions
              business concrètes : d’où viennent les conversions, quelles campagnes créent de la
              valeur, quels signaux sont réellement exploitables dans <strong>GA4</strong>,{' '}
              <strong>Google Tag Manager</strong>, <strong>Meta Pixel</strong> et{' '}
              <strong>Conversions API</strong>.
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
                  {locale === 'fr' ? 'Auditer mon tracking' : 'Audit my tracking'}
                </Button>
              </Link>
              <Link href={`/${locale}/blog`}>
                <Button variant="secondary" size="xl">
                  {locale === 'fr' ? 'Voir les articles' : 'Read the blog'}
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
              Pourquoi le data tracking est devenu un sujet stratégique
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>
                Pendant longtemps, beaucoup d’entreprises ont accepté une mesure approximative.
                Les plateformes ads rapportaient leurs propres conversions, les dashboards étaient
                remplis, et tant que le chiffre “semblait” cohérent, personne ne remettait la
                structure en question. Ce modèle ne tient plus. Entre la fragmentation des
                parcours, les restrictions navigateurs, la multiplication des points de contact et
                la montée en puissance du server-side, le <strong>tracking marketing</strong> doit
                être pensé comme une vraie couche d’infrastructure.
              </p>

              <p>
                Un site e-commerce ou un site lead gen sans architecture de tracking fiable finit
                presque toujours par prendre de mauvaises décisions : campagnes coupées trop tôt,
                retargeting sous-alimenté, audiences biaisées, ROAS gonflé, attribution fausse et
                CRM mal enrichi. À l’inverse, une bonne structure de mesure permet de réconcilier
                acquisition, analytics et activation. C’est là que <strong>Google Tag Manager</strong>,
                <strong> GA4</strong>, <strong>Meta Pixel</strong>, le <strong>dataLayer</strong> et
                la <strong>Conversions API</strong> travaillent ensemble.
              </p>

              <p>
                L’objectif n’est donc pas “d’avoir GA4”. L’objectif est de créer une chaîne
                d’information où chaque signal utile circule correctement : collecte, contrôle,
                enrichissement, activation et lecture. C’est cette logique qui sépare un simple
                site instrumenté d’un vrai système de <strong>data tracking</strong>.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="bg-brand-surface/20 border-y border-brand-border">
        <Container>
          <Reveal className="mb-10">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Les composants d’un tracking marketing fiable
            </h2>
            <p className="text-brand-text-secondary max-w-3xl leading-relaxed">
              Pour construire une mesure exploitable, il faut maîtriser plusieurs briques. Ce ne
              sont pas des sujets isolés : ils forment un système.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Layers,
                title: 'Google Tag Manager',
                text:
                  'Le chef d’orchestre du tagging. GTM permet de structurer les balises, variables et déclencheurs, mais surtout de rendre le tracking maintenable et scalable.',
              },
              {
                icon: BarChart3,
                title: 'Google Analytics 4',
                text:
                  'GA4 devient pertinent quand les événements sont bien pensés. Sinon il ne fait que refléter du bruit. Son intérêt est dans la lecture de parcours, la conversion et l’attribution.',
              },
              {
                icon: Radar,
                title: 'Meta Pixel & Conversions API',
                text:
                  'Le pixel seul ne suffit plus dans beaucoup de contextes. La CAPI améliore la continuité des signaux et renforce la qualité de l’optimisation publicitaire.',
              },
              {
                icon: Database,
                title: 'Data Layer',
                text:
                  'Le dataLayer est la couche de vérité du front. S’il est mal conçu, tout le reste devient fragile : GA4, pixels, dashboards et debugging.',
              },
              {
                icon: Bug,
                title: 'Debugging & QA',
                text:
                  'Un tracking fiable se teste. Prévisualisation GTM, DebugView GA4, Meta Test Events, network logs et QA sur les parcours critiques sont obligatoires.',
              },
              {
                icon: ShieldCheck,
                title: 'Fiabilité & gouvernance',
                text:
                  'Convention de nommage, plan de marquage, documentation, priorisation des signaux utiles et logique de contrôle : sans gouvernance, le tracking dérive vite.',
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
              Les erreurs qui détruisent la qualité de la donnée
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              'Balises installées sans plan de marquage.',
              'Événements dupliqués entre plugin, GTM et code direct.',
              'GA4 configuré mais jamais validé sur le parcours réel.',
              'Meta Pixel actif sans déduplication avec la Conversions API.',
              'UTM tracking incohérent entre campagnes, emails et paid media.',
              'Data Layer absent, incomplet ou non standardisé.',
              'Décisions ROAS prises sur des conversions partielles.',
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
        <Container>
          <Reveal className="mb-10">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Articles liés au data tracking
            </h2>
            <p className="text-brand-text-secondary max-w-3xl">
              Ces contenus prolongent cette page pilier et approfondissent les sujets les plus
              importants : <strong>GTM</strong>, <strong>UTM tracking</strong>,{' '}
              <strong>Meta Pixel</strong>, <strong>Purchase Event</strong> et structure de
              données e-commerce.
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

      <Section py="xl" className="bg-brand-surface/20 border-t border-brand-border">
        <Container size="md">
          <Reveal>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-6">
              Mon approche du data tracking
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>
                Mon approche n’est pas de “poser des tags”. Elle consiste à aligner le tracking
                sur les enjeux business : acquisition, qualité de conversion, lecture des
                performances et exploitation CRM. Chaque intervention commence par une clarification
                des objectifs, une revue de la structure existante, puis une reconstruction du plan
                de mesure autour des événements réellement utiles.
              </p>

              <p>
                En pratique, cela veut dire : revoir le <strong>dataLayer</strong>, auditer la
                logique <strong>Google Tag Manager</strong>, fiabiliser les conversions{' '}
                <strong>GA4</strong>, contrôler les signaux <strong>Meta Pixel</strong>, mettre en
                place la <strong>Conversions API</strong> quand elle est pertinente, puis valider
                l’ensemble dans une logique de QA stricte. Ensuite seulement, la donnée devient un
                levier de pilotage.
              </p>

              <p>
                Si tu veux un site qui remonte “des chiffres”, n’importe quel setup fera l’affaire.
                Si tu veux une mesure sur laquelle tu peux réellement prendre des décisions, il
                faut une architecture de tracking pensée sérieusement.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="border-t border-brand-border text-center">
        <Container size="sm">
          <Reveal>
            <Badge variant="gold" dot className="mb-4">
              Audit tracking
            </Badge>
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
              Votre tracking vous aide à décider…
              <br />
              ou seulement à vous rassurer ?
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Audit tracking, refonte GTM, contrôle GA4, pixel Meta, CAPI et architecture de
              mesure orientée performance.
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
              <Link href={`/${locale}/expertise`}>
                <Button variant="secondary" size="xl">
                  {locale === 'fr' ? 'Voir mes expertises' : 'View expertise'}
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
                <Section py="xl">
                   <Container>
                      <PillarLinks locale={locale} current="data-tracking" />
                    </Container>
                </Section>
      </Section>
    </>
  )
}