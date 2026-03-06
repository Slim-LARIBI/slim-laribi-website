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

export const metadata: Metadata = {
  title: 'À propos — Slim Laribi',
  description:
    "Expert Marketing Digital, Tracking & MarTech. Découvrez mon parcours, mes valeurs et mon approche opérationnelle basée sur la donnée fiable et l'exécution sans compromis.",
}

const values = [
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
      "La donnée doit être fiable avant d'être analysée. Je refuse les approximations, les taux \"estimés\" et les attributions fantaisistes. La qualité de la mesure conditionne la qualité des décisions.",
  },
  {
    icon: Lightbulb,
    title: 'Praticité & clarté',
    description:
      'Je traduis des sujets complexes (tracking server-side, attribution data-driven) en recommandations actionnables et compréhensibles pour toutes les parties prenantes.',
  },
  {
    icon: Users,
    title: 'Transmission & autonomie',
    description:
      "Mon objectif n'est pas de créer une dépendance mais de vous rendre autonome. En consulting comme en formation, je transmets la méthode, pas seulement le résultat.",
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

export default function AboutPage() {
  return (
    <>
      {/* ✅ SEO JSON-LD */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: 'https://laribislim.com' },
          { name: 'À propos', url: 'https://laribislim.com/about' },
        ]}
      />
      <WebPageJsonLd
        name="À propos — Slim Laribi"
        description="Expert Marketing Digital, Tracking & MarTech. Parcours, valeurs et approche opérationnelle basée sur la donnée fiable."
        url="https://laribislim.com/about"
      />

      {/* Hero */}
      <Section py="2xl" className="relative hero-bg">
        <AmbientGlow
          className="top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2"
          color="#7c6ff7"
          opacity={0.08}
        />
        <Container size="md" className="relative z-10 text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              Expert depuis 8+ ans
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              Slim Laribi.
              <br />
              <span className="text-gradient-brand">Le contexte compte.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Expert en Performance Marketing, Tracking & MarTech. Je travaille à
              l'intersection de la donnée, de la technologie et de l'activation
              commerciale — avec une obsession commune : la fiabilité et la
              mesurabilité des résultats.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Travailler ensemble
                </Button>
              </Link>
              <Link href="/expertise">
                <Button variant="secondary" size="lg">
                  Mes expertises
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Story */}
      <Section py="xl">
        <Container size="md">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <Reveal>
                <div className="sticky top-24">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-4">
                    Mon parcours
                  </p>
                  <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
                    8 ans sur le terrain.
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        year: '2016',
                        event:
                          'Premiers pas en marketing digital — SEO & Google Ads',
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
                        event:
                          'Lancement de formations Customer Intelligence',
                      },
                      {
                        year: '2024',
                        event: 'Projets SaaS & automatisation opérationnelle',
                      },
                    ].map((item) => (
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
              {[
                {
                  title: "Pourquoi la data d'abord",
                  content: `Dès mes premières missions, j'ai constaté le même problème récurrent : des budgets ads optimisés sur des données fausses. GA4 mal configuré, CAPI inexistant, attributions gonflées par le multi-touch last-click. Des décisions stratégiques prises sur des illusions de performance.\n\nC'est cette frustration qui a orienté mon expertise vers le tracking et la fiabilité de la donnée. Avant d'optimiser, il faut mesurer correctement.`,
                },
                {
                  title: "L'approche opérationnelle",
                  content: `Je ne suis pas consultant PowerPoint. J'interviens directement dans vos outils, je configure moi-même les containers GTM, j'audite les flux de données, je structure les comptes ads et je déploie les automations.\n\nCette approche hands-on permet une transmission efficace : mes clients comprennent ce qui est fait et pourquoi, ce qui garantit leur autonomie après la mission.`,
                },
                {
                  title: 'La formation comme mission',
                  content: `Former les équipes marketing à la Customer Intelligence est devenu une vocation. Trop de professionnels du marketing subissent les outils sans les comprendre. Mon programme de 90 heures est né de cette conviction : maîtriser ses outils, c'est reprendre le contrôle de sa performance.`,
                },
              ].map((block, i) => (
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

      {/* Values */}
      <Section
        py="xl"
        className="bg-brand-surface/30 border-y border-brand-border"
      >
        <Container>
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              Valeurs
            </p>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight">
              Ce qui guide chaque mission.
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

      {/* Tools */}
      <Section py="xl">
        <Container>
          <Reveal className="mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-3">
              Stack & outils
            </p>
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight">
              Maîtrisé, pas théorisé.
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

      {/* CTA */}
      <Section py="xl" className="border-t border-brand-border text-center">
        <Container size="sm">
          <Reveal>
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
              Travaillons ensemble.
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Mission consulting, audit ou formation — discutons de votre
              contexte.
            </p>
            <Link href="/contact">
              <Button
                variant="primary"
                size="xl"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                Réserver un appel gratuit
              </Button>
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}