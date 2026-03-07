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
  Search,
  Globe,
  Gauge,
  FileSearch,
  Link2,
  BarChart3,
  ShieldCheck,
  Layers,
  Compass,
} from 'lucide-react'

interface Props {
  params: { locale: 'fr' | 'en' }
}

const siteUrl = 'https://laribislim.com'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/seo-acquisition`

  if (locale === 'fr') {
    return {
      title: 'SEO Acquisition — Guide expert SEO technique, contenu, indexation & croissance organique',
      description:
        'Guide expert SEO acquisition : SEO technique, indexation, Core Web Vitals, architecture, contenu, maillage interne et croissance organique pilotée par la donnée.',
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr/seo-acquisition`,
          'en-US': `${siteUrl}/en/seo-acquisition`,
        },
      },
      openGraph: {
        title: 'SEO Acquisition — Guide expert SEO technique, contenu, indexation & croissance organique',
        description:
          'Guide expert SEO acquisition : SEO technique, indexation, Core Web Vitals, architecture, contenu, maillage interne et croissance organique pilotée par la donnée.',
        url: pageUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: 'SEO Acquisition — Slim Laribi',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'SEO Acquisition — Guide expert SEO technique, contenu, indexation & croissance organique',
        description:
          'Guide expert sur le SEO acquisition : indexation, performance, contenu, architecture et trafic organique.',
        images: [`${siteUrl}/og-image.jpg`],
      },
    }
  }

  return {
    title: 'SEO Acquisition — Expert guide to technical SEO, content, indexing & organic growth',
    description:
      'Expert guide to SEO acquisition: technical SEO, indexing, Core Web Vitals, architecture, content, internal linking and data-driven organic growth.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr/seo-acquisition`,
        'en-US': `${siteUrl}/en/seo-acquisition`,
      },
    },
  }
}

const relatedArticles = [
  {
    slug: 'seo-core-web-vitals',
    title: 'SEO & Core Web Vitals : améliorer vitesse, UX et visibilité',
    category: 'SEO technique',
  },
  {
    slug: 'codes-http-seo-erreurs-20x-30x-40x-50x',
    title: 'Codes HTTP SEO : erreurs 20x, 30x, 40x, 50x à comprendre',
    category: 'SEO technique',
  },
  {
    slug: 'configuration-permaliens-wordpress',
    title: 'Permaliens WordPress : guide ultime pour optimiser votre SEO',
    category: 'SEO on-site',
  },
  {
    slug: 'keyword-efficiency-index-kei-seo',
    title: 'KEI en SEO : 5 astuces pour choisir des mots-clés performants',
    category: 'Keyword Research',
  },
  {
    slug: 'probleme-indexation-seo',
    title: 'Problème d’indexation SEO : diagnostic et solutions',
    category: 'Indexation',
  },
  {
    slug: 'seo-url-canonique-fragments',
    title: 'URL canonique, fragments et bonnes pratiques SEO',
    category: 'Architecture SEO',
  },
]

const pillars = [
  {
    icon: Search,
    title: 'Acquérir du trafic organique qualifié',
    text:
      'Le SEO acquisition ne cherche pas seulement à gagner des positions. Il cherche à attirer le bon trafic, sur les bonnes intentions, avec une structure de contenu et une architecture capables de transformer la visibilité en opportunité business.',
  },
  {
    icon: Layers,
    title: 'Construire une base technique solide',
    text:
      'Sans structure technique saine, le contenu plafonne. Vitesse, indexation, maillage interne, signaux HTML, URLs, canoniques, performance mobile et crawlabilité conditionnent la capacité d’un site à vraiment croître en SEO.',
  },
  {
    icon: Compass,
    title: 'Créer une croissance durable',
    text:
      'Le SEO devient puissant quand il est pensé comme un système : pages piliers, clusters thématiques, stratégie de mots-clés, maillage, signaux d’expertise et contenu utile. C’est cette logique qui crée une croissance organique durable.',
  },
]

const stack = [
  'SEO Technique',
  'Indexation',
  'Core Web Vitals',
  'Maillage interne',
  'Keyword Research',
  'Architecture SEO',
  'Canonical',
  'Crawl',
  'Content Strategy',
  'Organic Growth',
]

export default function SeoAcquisitionPage({ params }: Props) {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/seo-acquisition`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: locale === 'fr' ? 'Accueil' : 'Home', url: `${siteUrl}/${locale}` },
          { name: 'SEO Acquisition', url: pageUrl },
        ]}
      />

      <WebPageJsonLd
        name="SEO Acquisition"
        description="Guide expert SEO acquisition : SEO technique, indexation, architecture, contenu et croissance organique."
        url={pageUrl}
      />

      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              {locale === 'fr'
                ? 'Page pilier · SEO & croissance organique'
                : 'Pillar page · SEO & organic growth'}
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-6 leading-tight">
              SEO Acquisition.
              <br />
              <span className="text-gradient-brand">
                La visibilité qui se transforme en croissance.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
              Le <strong>SEO acquisition</strong> consiste à construire un système capable
              d’attirer durablement du <strong>trafic organique qualifié</strong>. Cela passe par
              une combinaison de <strong>SEO technique</strong>, structure de contenu, maillage
              interne, indexation, performance, architecture de site et compréhension réelle de
              l’intention de recherche. Le but n’est pas juste de “faire du SEO”, mais de créer une
              machine de croissance organique qui travaille dans la durée.
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
                  {locale === 'fr' ? 'Auditer mon SEO' : 'Audit my SEO'}
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
              Qu’est-ce que le SEO acquisition ?
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>
                Le SEO acquisition est une approche orientée croissance. Il ne s’agit pas seulement
                d’optimiser quelques balises ou de publier des articles. Il s’agit de structurer un
                site pour qu’il capte progressivement un volume croissant de trafic organique sur
                des requêtes pertinentes, avec une logique de conversion, d’autorité thématique et
                de montée en puissance durable.
              </p>

              <p>
                Dans beaucoup d’entreprises, le SEO est encore traité comme une suite d’actions
                isolées : un audit technique ici, quelques contenus là, des optimisations on-page
                ponctuelles. Cette logique produit rarement une vraie croissance. Ce qui fonctionne
                vraiment, c’est une architecture cohérente : pages piliers, clusters de contenus,
                maillage interne, stratégie de mots-clés, qualité technique, capacité
                d’indexation et signaux d’expertise forts.
              </p>

              <p>
                Le SEO acquisition relie donc plusieurs dimensions : la performance technique du
                site, la capacité des pages à être crawlées et indexées, la qualité sémantique du
                contenu, la structure du maillage interne, et la pertinence business des intentions
                ciblées. Quand ces éléments travaillent ensemble, le SEO devient un canal
                d’acquisition prévisible et scalable.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="bg-brand-surface/20 border-y border-brand-border">
        <Container>
          <Reveal className="mb-10">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Les briques d’un système SEO solide
            </h2>
            <p className="text-brand-text-secondary max-w-3xl leading-relaxed">
              Le SEO ne se résume pas à du contenu. Une croissance organique solide repose sur un
              ensemble de fondations techniques et éditoriales.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Globe,
                title: 'Architecture du site',
                text:
                  'La structure des URLs, les hubs thématiques, la profondeur de navigation et la répartition des pages jouent un rôle majeur dans la compréhension globale du site par Google.',
              },
              {
                icon: FileSearch,
                title: 'Indexation & crawl',
                text:
                  'Un bon site SEO est un site que Google comprend, explore et indexe efficacement. Les problèmes d’indexation, de duplication ou de signaux contradictoires freinent toute croissance.',
              },
              {
                icon: Gauge,
                title: 'Core Web Vitals & performance',
                text:
                  'Temps de chargement, stabilité visuelle, réactivité mobile : la performance technique soutient l’expérience utilisateur et améliore la capacité d’un site à performer sur le long terme.',
              },
              {
                icon: Link2,
                title: 'Maillage interne',
                text:
                  'Le maillage interne est l’un des leviers SEO les plus sous-exploités. Il permet de distribuer l’autorité, guider le crawl, renforcer les clusters sémantiques et pousser les pages stratégiques.',
              },
              {
                icon: Search,
                title: 'Recherche de mots-clés',
                text:
                  'Le keyword research ne consiste pas à empiler des volumes. Il consiste à comprendre les intentions, la concurrence, la rentabilité potentielle et la place de chaque requête dans le funnel.',
              },
              {
                icon: ShieldCheck,
                title: 'Qualité technique & gouvernance',
                text:
                  'Canoniques, erreurs HTTP, redirections, duplicate content, balisage, cohérence des métadonnées et logique éditoriale font partie d’une vraie gouvernance SEO.',
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
              Les erreurs qui bloquent la croissance organique
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              'Publier du contenu sans structure de cluster ni page pilier.',
              'Négliger le maillage interne et laisser les articles isolés.',
              'Ignorer les problèmes d’indexation et de duplication.',
              'Créer des pages sans intention de recherche claire.',
              'Optimiser le contenu sans consolider la technique.',
              'Multiplier les articles sans logique de topical authority.',
              'Confondre trafic SEO et trafic utile pour le business.',
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
              Mon approche du SEO acquisition
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>
                Mon approche du SEO acquisition commence par une lecture systémique. Je ne regarde
                pas seulement les pages qui rankent ou celles qui ne rankent pas. Je regarde la
                structure globale : architecture, performance, indexation, signaux HTML, clusters,
                maillage, qualité des contenus et capacité du site à construire une vraie autorité
                thématique.
              </p>

              <p>
                En pratique, cela signifie : auditer le socle technique, clarifier les topics
                stratégiques, structurer des pages piliers, relier les contenus entre eux, corriger
                les signaux SEO bloquants et prioriser les requêtes qui peuvent créer un impact
                business réel. Le SEO n’est pas traité comme une accumulation de tâches, mais comme
                une architecture de croissance.
              </p>

              <p>
                Quand cette logique est bien posée, le site devient plus lisible pour Google, les
                contenus s’indexent mieux, l’autorité thématique se consolide et la croissance
                organique devient beaucoup plus stable et prévisible.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="border-t border-brand-border">
        <Container>
          <Reveal className="mb-10">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Articles liés au SEO acquisition
            </h2>
            <p className="text-brand-text-secondary max-w-3xl">
              Ces contenus approfondissent les sujets clés : <strong>SEO technique</strong>,
              <strong> indexation</strong>, <strong>Core Web Vitals</strong>, architecture, mots-clés
              et structure on-site.
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
              SEO & croissance organique
            </Badge>
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
              Votre site publie du contenu…
              <br />
              ou construit une vraie autorité SEO ?
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Audit SEO technique, architecture, pages piliers, maillage interne, indexation et
              stratégie de croissance organique orientée acquisition.
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
    <PillarLinks locale={locale} current="seo-acquisition" />
  </Container>
</Section>
      </Section>
    </>
  )
}