import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { PillarLinks } from '@/components/seo/PillarLinks'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd'
import {
  ArrowRight,
  CheckCircle2,
  Workflow,
  Mail,
  Users,
  Zap,
  Layers,
  BellRing,
  ShieldCheck,
  Bot,
  GitBranch,
} from 'lucide-react'

interface Props {
  params: { locale: 'fr' | 'en' }
}

const siteUrl = 'https://laribislim.com'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/marketing-automation`

  if (locale === 'fr') {
    return {
      title: 'Marketing Automation — Guide expert CRM, emailing, n8n, workflows & lifecycle',
      description:
        'Guide expert marketing automation : CRM, emailing, segmentation, flows lifecycle, Klaviyo, n8n, automatisation e-commerce et orchestration data-driven.',
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr/marketing-automation`,
          'en-US': `${siteUrl}/en/marketing-automation`,
        },
      },
      openGraph: {
        title: 'Marketing Automation — Guide expert CRM, emailing, n8n, workflows & lifecycle',
        description:
          'Guide expert marketing automation : CRM, emailing, segmentation, flows lifecycle, Klaviyo, n8n, automatisation e-commerce et orchestration data-driven.',
        url: pageUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: 'Marketing Automation — Slim Laribi',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Marketing Automation — Guide expert CRM, emailing, n8n, workflows & lifecycle',
        description:
          'Guide expert sur l’automatisation marketing : CRM, emailing, workflows, n8n, lifecycle et orchestration e-commerce.',
        images: [`${siteUrl}/og-image.jpg`],
      },
    }
  }

  return {
    title: 'Marketing Automation — Expert guide to CRM, emailing, n8n, workflows & lifecycle',
    description:
      'Expert guide to marketing automation: CRM, emailing, segmentation, lifecycle flows, Klaviyo, n8n, e-commerce automation and data-driven orchestration.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr/marketing-automation`,
        'en-US': `${siteUrl}/en/marketing-automation`,
      },
    },
  }
}

const relatedArticles = [
  {
    slug: 'automation-n8n-ecommerce',
    title: 'Automatisation n8n e-commerce : cas d’usage et logique de workflow',
    category: 'Automation',
  },
  {
    slug: 'crm-profile-completion-rate',
    title: 'Profile Completion Rate : pourquoi la qualité CRM change tout',
    category: 'CRM',
  },
  {
    slug: 'utm-tracking',
    title: 'UTM Tracking : relier acquisition, email et attribution',
    category: 'Analytics',
  },
]

const pillars = [
  {
    icon: Workflow,
    title: 'Automatiser sans complexifier',
    text:
      'La meilleure automatisation n’est pas la plus impressionnante, c’est la plus utile. Elle réduit les tâches manuelles, fiabilise l’exécution, accélère les réactions marketing et garde une logique simple à maintenir.',
  },
  {
    icon: Users,
    title: 'Activer la donnée CRM',
    text:
      'Le marketing automation devient puissant quand il repose sur une segmentation propre : nouveaux inscrits, acheteurs récents, inactifs, VIP, panier abandonné, visiteurs engagés. Sans structure CRM, l’automation devient du spam automatisé.',
  },
  {
    icon: Zap,
    title: 'Créer un système qui travaille même sans vous',
    text:
      'Un bon système d’automatisation continue d’agir pendant que les équipes se concentrent sur la stratégie. Relances email, alertes, synchronisations, qualification et reporting doivent tourner avec une logique fiable.',
  },
]

const stack = [
  'CRM',
  'Email Marketing',
  'Klaviyo',
  'n8n',
  'Lifecycle',
  'Segmentation',
  'Workflows',
  'Lead Routing',
  'E-commerce Automation',
  'Reporting Automation',
]

export default function MarketingAutomationPage({ params }: Props) {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/marketing-automation`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: locale === 'fr' ? 'Accueil' : 'Home', url: `${siteUrl}/${locale}` },
          { name: 'Marketing Automation', url: pageUrl },
        ]}
      />

      <WebPageJsonLd
        name="Marketing Automation"
        description="Guide expert sur l’automatisation marketing, les workflows CRM, les flows lifecycle, n8n et l’orchestration data-driven."
        url={pageUrl}
      />

      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              {locale === 'fr'
                ? 'Page pilier · CRM & automation'
                : 'Pillar page · CRM & automation'}
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-6 leading-tight">
              Marketing Automation.
              <br />
              <span className="text-gradient-brand">
                Moins de tâches. Plus de valeur.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
              Le <strong>marketing automation</strong> ne consiste pas à envoyer quelques emails
              automatiques. C’est une logique d’orchestration entre <strong>CRM</strong>,
              <strong> emailing</strong>, segmentation, signaux comportementaux, workflows,
              qualification et activation. Bien conçu, il transforme un ensemble d’outils dispersés
              en un système cohérent capable de nourrir la relation client, récupérer de la valeur
              perdue et réduire radicalement les tâches manuelles.
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
                  {locale === 'fr' ? 'Automatiser mon marketing' : 'Automate my marketing'}
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
              Qu’est-ce que le marketing automation ?
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>
                Le marketing automation désigne la capacité à déclencher automatiquement des actions
                marketing en fonction de comportements, de données ou d’événements. Cela peut
                concerner un email de bienvenue, une relance panier abandonné, un workflow de
                réactivation, une alerte stock, un scoring de profil CRM, un routage de leads ou
                encore la génération automatique de rapports. L’automatisation devient donc un
                levier de performance opérationnelle autant qu’un levier relationnel.
              </p>

              <p>
                Dans un environnement e-commerce ou lead gen, l’automation joue un rôle central
                parce qu’elle comble le vide entre l’acquisition et la relation. Une campagne ads
                peut générer du trafic. Un bon site peut convertir une partie de ce trafic.
                Mais tout ce qui se passe entre le premier contact, le panier, l’achat, la relance,
                la fidélisation et la réactivation dépend souvent d’une mécanique automatisée.
              </p>

              <p>
                La difficulté est qu’un système d’automation peut très vite devenir illisible :
                outils mal connectés, flows doublonnés, segments peu fiables, logique CRM trop
                floue, workflows bricolés sans documentation. Le vrai sujet n’est donc pas
                seulement “automatiser”, mais construire une architecture d’automatisation
                maintenable, utile et directement liée aux objectifs business.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="bg-brand-surface/20 border-y border-brand-border">
        <Container>
          <Reveal className="mb-10">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Les briques d’un système d’automation efficace
            </h2>
            <p className="text-brand-text-secondary max-w-3xl leading-relaxed">
              Une automatisation solide n’est pas un ensemble de hacks. C’est une chaîne
              organisée entre données, segmentation, logique d’activation et contrôle.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Users,
                title: 'CRM & segmentation',
                text:
                  'Tout commence par une structure CRM exploitable : profils identifiés, enrichissement, segmentation lifecycle, récence, fréquence, valeur, engagement et signaux comportementaux.',
              },
              {
                icon: Mail,
                title: 'Emailing & lifecycle',
                text:
                  'Welcome flow, abandon panier, post-achat, win-back, cross-sell, relance inactifs : l’email automation reste l’un des meilleurs leviers de rentabilité quand il est bien structuré.',
              },
              {
                icon: Workflow,
                title: 'Workflows & orchestration',
                text:
                  'Les workflows permettent de relier les outils entre eux : site, CRM, Slack, Google Sheets, dashboards, forms, plateformes e-commerce et outils de support.',
              },
              {
                icon: Bot,
                title: 'n8n & automatisation avancée',
                text:
                  'n8n est puissant pour créer des automatisations flexibles : alertes, synchronisations, enrichissements, imports, reporting, récupération de données et traitement métier personnalisé.',
              },
              {
                icon: BellRing,
                title: 'Alerting & réactivité',
                text:
                  'Une bonne automation ne fait pas qu’envoyer des emails. Elle remonte aussi des alertes utiles : stock faible, chute de ROAS, erreurs tracking, commandes à risque, leads prioritaires.',
              },
              {
                icon: ShieldCheck,
                title: 'Contrôle & fiabilité',
                text:
                  'Logs, documentation, ownership, contrôle qualité et logique de fallback sont essentiels. Sans gouvernance, l’automation crée plus de chaos qu’elle n’en résout.',
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
              Les erreurs les plus fréquentes en marketing automation
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              'Créer trop de flows sans logique de priorité.',
              'Automatiser avant d’avoir une segmentation CRM propre.',
              'Utiliser des outils puissants sans documentation ni règles de gouvernance.',
              'Déclencher des emails sur des événements mal trackés.',
              'Confondre automatisation et surcharge relationnelle.',
              'Ne pas mesurer la contribution réelle des flows sur le revenu ou la réactivation.',
              'Empiler Klaviyo, n8n, Sheets et Slack sans architecture claire.',
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
              Mon approche de l’automatisation marketing
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>
                Mon approche du marketing automation commence toujours par le besoin métier,
                jamais par l’outil. Je cherche d’abord à comprendre les frictions : tâches
                répétitives, manque de visibilité, faible activation CRM, flows inefficaces,
                absence de logique lifecycle, perte de temps opérationnelle ou défaut de réactivité.
                Ensuite, l’architecture d’automation est dessinée autour de ces enjeux.
              </p>

              <p>
                En pratique, cela veut dire : clarifier les segments, revoir les événements utiles,
                structurer les flows relationnels, connecter les outils, automatiser les tâches à
                faible valeur, créer des workflows n8n quand c’est pertinent, puis mesurer
                réellement l’impact : temps gagné, fiabilité accrue, revenu attribué, activation ou
                capacité de réaction des équipes.
              </p>

              <p>
                Un bon système d’automation n’est pas spectaculaire. Il est robuste, lisible,
                activable et rentable. C’est cette logique qui permet à une organisation marketing
                de grandir sans multiplier les tâches manuelles au même rythme.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="border-t border-brand-border">
        <Container>
          <Reveal className="mb-10">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Articles liés au marketing automation
            </h2>
            <p className="text-brand-text-secondary max-w-3xl">
              Ces contenus approfondissent l’automatisation e-commerce, la logique CRM,
              la qualité des profils, la mesure et l’orchestration data-driven.
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
              CRM & workflows
            </Badge>
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
              Votre marketing travaille encore à la main…
              <br />
              là où il pourrait déjà tourner seul ?
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Segmentation CRM, lifecycle, emailing, workflows n8n, alerting, reporting et
              automatisation opérationnelle orientée performance.
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
              <Link href={`/${locale}/performance-marketing`}>
                <Button variant="secondary" size="xl">
                  {locale === 'fr' ? 'Voir Performance Marketing' : 'View Performance Marketing'}
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
        <Section py="xl">
  <Container>
    <PillarLinks locale={locale} current="marketing-automation" />
  </Container>
</Section>
      </Section>
    </>
  )
} 