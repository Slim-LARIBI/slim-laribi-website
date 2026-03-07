import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { AmbientGlow } from '@/components/animations/ParallaxGlow'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd'
import { ArrowRight, Target, Users, Lightbulb, Shield } from 'lucide-react'

const siteUrl = 'https://laribislim.com'

export async function generateMetadata({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/about`

  if (locale === 'fr') {
    return {
      title: 'À propos | Expert Tracking, Data Marketing & MarTech',
      description:
        "Découvrez le parcours, la méthodologie et l’approche de Slim Laribi, expert en tracking, performance marketing et architecture MarTech.",
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr/about`,
          'en-US': `${siteUrl}/en/about`,
        },
      },
      openGraph: {
        title: 'À propos | Expert Tracking, Data Marketing & MarTech',
        description:
          "Découvrez le parcours, la méthodologie et l’approche de Slim Laribi, expert en tracking, performance marketing et architecture MarTech.",
        url: pageUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: 'À propos — Slim Laribi',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'À propos | Expert Tracking, Data Marketing & MarTech',
        description:
          "Découvrez le parcours, la méthodologie et l’approche de Slim Laribi, expert en tracking, performance marketing et architecture MarTech.",
        images: [`${siteUrl}/og-image.jpg`],
      },
    }
  }

  return {
    title: 'About | Tracking, Data Marketing & MarTech Expert',
    description:
      'Discover Slim Laribi’s background, methodology and approach as a tracking, performance marketing and MarTech architecture expert.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr/about`,
        'en-US': `${siteUrl}/en/about`,
      },
    },
    openGraph: {
      title: 'About | Tracking, Data Marketing & MarTech Expert',
      description:
        'Discover Slim Laribi’s background, methodology and approach as a tracking, performance marketing and MarTech architecture expert.',
      url: pageUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'About — Slim Laribi',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About | Tracking, Data Marketing & MarTech Expert',
      description:
        'Discover Slim Laribi’s background, methodology and approach as a tracking, performance marketing and MarTech architecture expert.',
      images: [`${siteUrl}/og-image.jpg`],
    },
  }
}

export default function AboutPage({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}) {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/about`

  const values =
    locale === 'fr'
      ? [
          {
            icon: Target,
            title: 'Résultats avant tout',
            description:
              'Chaque décision, chaque recommandation est orientée vers un résultat mesurable. Pas de théorie creuse — uniquement des actions à impact réel sur vos KPIs.',
          },
          {
            icon: Shield,
            title: 'Rigueur & précision',
            description:
              "La donnée doit être fiable avant d'être analysée. Je refuse les approximations, les taux estimés et les attributions fantaisistes. La qualité de la mesure conditionne la qualité des décisions.",
          },
          {
            icon: Lightbulb,
            title: 'Praticité & clarté',
            description:
              'Je traduis des sujets complexes comme le tracking server-side ou l’attribution data-driven en recommandations actionnables et compréhensibles.',
          },
          {
            icon: Users,
            title: 'Transmission & autonomie',
            description:
              "Mon objectif n'est pas de créer une dépendance mais de vous rendre autonome. En consulting comme en formation, je transmets la méthode, pas seulement le résultat.",
          },
        ]
      : [
          {
            icon: Target,
            title: 'Results first',
            description:
              'Every decision and recommendation is driven by measurable outcomes. No empty theory — only actions with real impact on your KPIs.',
          },
          {
            icon: Shield,
            title: 'Rigor & precision',
            description:
              'Data must be reliable before being analyzed. I reject approximations, estimated rates and fantasy attribution. Measurement quality drives decision quality.',
          },
          {
            icon: Lightbulb,
            title: 'Practicality & clarity',
            description:
              'I turn complex topics like server-side tracking and data-driven attribution into actionable and understandable recommendations.',
          },
          {
            icon: Users,
            title: 'Transfer & autonomy',
            description:
              'My goal is not to create dependency but to make you autonomous. In consulting as in training, I transfer the method, not only the result.',
          },
        ]

  const tools = [
    'Google Tag Manager (Server-side)',
    'Google Analytics 4',
    'Meta Conversions API',
    'Google Ads / Performance Max',
    'Meta Ads Manager',
    'Klaviyo',
    'Shopify',
    'BigQuery',
    'Looker Studio',
    'n8n',
    'Google Cloud Run',
    'Search Ads 360',
    'Segment',
    'WordPress / WooCommerce',
    'Notion',
    'Slack',
  ]

  const timeline =
    locale === 'fr'
      ? [
          {
            year: '2016',
            event: 'Premiers pas en marketing digital — SEO & Google Ads',
          },
          {
            year: '2018',
            event: 'Spécialisation performance e-commerce & tracking',
          },
          {
            year: '2020',
            event: 'Expertise server-side tracking & MarTech stack',
          },
          {
            year: '2022',
            event: 'Lancement de formations Customer Intelligence',
          },
          {
            year: '2024',
            event: 'Projets SaaS & automatisation opérationnelle',
          },
        ]
      : [
          {
            year: '2016',
            event: 'First steps in digital marketing — SEO & Google Ads',
          },
          {
            year: '2018',
            event: 'Specialization in e-commerce performance & tracking',
          },
          {
            year: '2020',
            event: 'Server-side tracking & MarTech stack expertise',
          },
          {
            year: '2022',
            event: 'Launch of Customer Intelligence training programs',
          },
          {
            year: '2024',
            event: 'SaaS projects & operational automation',
          },
        ]

  const storyBlocks =
    locale === 'fr'
      ? [
          {
            title: "Pourquoi la data d'abord",
            content: `Dès mes premières missions, j'ai constaté le même problème récurrent : des budgets ads optimisés sur des données fausses. GA4 mal configuré, CAPI inexistant, attributions gonflées par le multi-touch last-click. Des décisions stratégiques prises sur des illusions de performance.

C'est cette frustration qui a orienté mon expertise vers le tracking et la fiabilité de la donnée. Avant d'optimiser, il faut mesurer correctement.`,
          },
          {
            title: "L'approche opérationnelle",
            content: `Je ne suis pas consultant PowerPoint. J'interviens directement dans vos outils, je configure moi-même les containers GTM, j'audite les flux de données, je structure les comptes ads et je déploie les automations.

Cette approche hands-on permet une transmission efficace : mes clients comprennent ce qui est fait et pourquoi, ce qui garantit leur autonomie après la mission.`,
          },
          {
            title: 'La formation comme mission',
            content: `Former les équipes marketing à la Customer Intelligence est devenu une vocation. Trop de professionnels du marketing subissent les outils sans les comprendre. Mon programme de 90 heures est né de cette conviction : maîtriser ses outils, c'est reprendre le contrôle de sa performance.`,
          },
        ]
      : [
          {
            title: 'Why data comes first',
            content: `From my very first missions, I kept seeing the same recurring issue: ad budgets optimized on false data. Poorly configured GA4, missing CAPI, inflated attribution driven by last-click multi-touch bias. Strategic decisions built on performance illusions.

That frustration is what pushed me toward tracking and data reliability. Before optimizing, you need to measure properly.`,
          },
          {
            title: 'The operational approach',
            content: `I am not a PowerPoint consultant. I work directly inside your tools, configure GTM containers myself, audit data flows, structure ad accounts and deploy automations.

This hands-on approach enables effective transfer: clients understand what is being done and why, which guarantees autonomy after the mission.`,
          },
          {
            title: 'Training as a mission',
            content: `Training marketing teams in Customer Intelligence has become a mission of its own. Too many marketers suffer through tools they do not really understand. My 90-hour program was born from that conviction: mastering your tools means taking back control of performance.`,
          },
        ]

  const pageName =
    locale === 'fr'
      ? 'À propos — Slim Laribi'
      : 'About — Slim Laribi'

  const pageDescription =
    locale === 'fr'
      ? 'Expert Marketing Digital, Tracking & MarTech. Parcours, valeurs et approche opérationnelle basée sur la donnée fiable.'
      : 'Digital Marketing, Tracking & MarTech expert. Background, values and an operational approach built on reliable data.'

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: locale === 'fr' ? 'Accueil' : 'Home',
            url: `${siteUrl}/${locale}`,
          },
          {
            name: locale === 'fr' ? 'À propos' : 'About',
            url: pageUrl,
          },
        ]}
      />

      <WebPageJsonLd
        name={pageName}
        description={pageDescription}
        url={pageUrl}
      />

      <Section py="2xl" className="relative hero-bg">
        <AmbientGlow
          className="top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2"
          color="#7c6ff7"
          opacity={0.08}
        />

        <Container size="md" className="relative z-10 text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              {locale === 'fr' ? 'Expert depuis 8+ ans' : 'Expert for 8+ years'}
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              Slim Laribi.
              <br />
              <span className="text-gradient-brand">
                {locale === 'fr' ? 'Le contexte compte.' : 'Context matters.'}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              {locale === 'fr'
                ? "Expert en Performance Marketing, Tracking & MarTech. Je travaille à l'intersection de la donnée, de la technologie et de l'activation commerciale — avec une obsession commune : la fiabilité et la mesurabilité des résultats."
                : 'Performance Marketing, Tracking & MarTech expert. I work at the intersection of data, technology and commercial activation — with one shared obsession: reliable and measurable results.'}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  {locale === 'fr' ? 'Travailler ensemble' : 'Work together'}
                </Button>
              </Link>

              <Link href={`/${locale}/expertise`}>
                <Button variant="secondary" size="lg">
                  {locale === 'fr' ? 'Mes expertises' : 'My expertise'}
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl">
        <Container size="md">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <Reveal>
                <div className="sticky top-24">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-4">
                    {locale === 'fr' ? 'Mon parcours' : 'My journey'}
                  </p>

                  <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
                    {locale === 'fr' ? '8 ans sur le terrain.' : '8 years in the field.'}
                  </h2>

                  <div className="space-y-3">
                    {timeline.map((item) => (
                      <div key={item.year} className="flex gap-3">
                        <span className="text-xs font-mono font-bold text-brand-accent shrink-0 mt-0.5">
                          {item.year}
                        </span>
                        <span className="text-sm text-brand-text-secondary">
                          {item.event}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-3 space-y-5">
              {storyBlocks.map((block, i) => (
                <Reveal key={block.title} delay={i * 0.08}>
                  <Card variant="glass" padding="lg">
                    <h3 className="font-display font-bold text-brand-text-primary mb-3">
                      {block.title}
                    </h3>
                    {block.content.split('\n\n').map((p, j) => (
                      <p
                        key={j}
                        className="text-brand-text-secondary leading-relaxed text-sm mb-3 last:mb-0"
                      >
                        {p}
                      </p>
                    ))}
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section py="xl" className="bg-brand-surface/30 border-y border-brand-border">
        <Container>
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              {locale === 'fr' ? 'Valeurs' : 'Values'}
            </p>

            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight">
              {locale === 'fr'
                ? 'Ce qui guide chaque mission.'
                : 'What guides every mission.'}
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <Card variant="glass" padding="lg" className="h-full">
                  <v.icon className="h-6 w-6 text-brand-accent mb-4" />
                  <h3 className="font-display font-bold text-brand-text-primary mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed">
                    {v.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section py="xl">
        <Container>
          <Reveal className="mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-3">
              {locale === 'fr' ? 'Stack & outils' : 'Stack & tools'}
            </p>

            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight">
              {locale === 'fr' ? 'Maîtrisé, pas théorisé.' : 'Mastered, not theorized.'}
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-xl text-sm font-medium glass border border-brand-border text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-border-strong transition-all duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="border-t border-brand-border text-center">
        <Container size="sm">
          <Reveal>
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
              {locale === 'fr' ? 'Travaillons ensemble.' : "Let's work together."}
            </h2>

            <p className="text-brand-text-secondary mb-8">
              {locale === 'fr'
                ? 'Mission consulting, audit ou formation — discutons de votre contexte.'
                : 'Consulting mission, audit or training — let’s discuss your context.'}
            </p>

            <Link href={`/${locale}/contact`}>
              <Button
                variant="primary"
                size="xl"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                {locale === 'fr'
                  ? 'Réserver un appel gratuit'
                  : 'Book a free call'}
              </Button>
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}