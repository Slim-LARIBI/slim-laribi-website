import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PillarLinks } from '@/components/seo/PillarLinks'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd'
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Users,
  Target,
  Database,
  BarChart3,
  ShieldCheck,
  Layers,
  Activity,
  Sparkles,
} from 'lucide-react'

interface Props {
  params: { locale: 'fr' | 'en' }
}

const siteUrl = 'https://laribislim.com'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/customer-intelligence`

  if (locale === 'fr') {
    return {
      title: 'Customer Intelligence — Guide expert CRM, data client, segmentation & activation',
      description:
        'Guide expert Customer Intelligence : data client, segmentation CRM, lifecycle, RFM, qualité des profils, activation marketing et décisions orientées valeur client.',
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr/customer-intelligence`,
          'en-US': `${siteUrl}/en/customer-intelligence`,
        },
      },
      openGraph: {
        title: 'Customer Intelligence — Guide expert CRM, data client, segmentation & activation',
        description:
          'Guide expert Customer Intelligence : data client, segmentation CRM, lifecycle, RFM, qualité des profils, activation marketing et décisions orientées valeur client.',
        url: pageUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: 'Customer Intelligence — Slim Laribi',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Customer Intelligence — Guide expert CRM, data client, segmentation & activation',
        description:
          'Guide expert sur la Customer Intelligence : segmentation, CRM, lifecycle, valeur client et activation.',
        images: [`${siteUrl}/og-image.jpg`],
      },
    }
  }

  return {
    title: 'Customer Intelligence — Expert guide to CRM, customer data, segmentation & activation',
    description:
      'Expert guide to Customer Intelligence: customer data, CRM segmentation, lifecycle, RFM, profile quality, activation and customer-value driven decisions.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr/customer-intelligence`,
        'en-US': `${siteUrl}/en/customer-intelligence`,
      },
    },
  }
}

const relatedArticles = [
  {
    slug: 'crm-profile-completion-rate',
    title: 'Profile Completion Rate : pourquoi la qualité CRM change tout',
    category: 'CRM',
  },
  {
    slug: 'automation-n8n-ecommerce',
    title: 'Automatisation n8n e-commerce : cas d’usage et logique de workflow',
    category: 'Automation',
  },
  {
    slug: 'ga4-event-strategy-ecommerce',
    title: 'GA4 Event Strategy E-commerce : mieux structurer la donnée',
    category: 'Analytics',
  },
]

const pillars = [
  {
    icon: Brain,
    title: 'Comprendre le client, pas seulement le trafic',
    text:
      'La Customer Intelligence consiste à transformer la donnée client en compréhension exploitable. Le but n’est pas d’avoir plus de dashboards, mais de mieux savoir qui achète, qui revient, qui décroche, qui a de la valeur et qui doit être réactivé.',
  },
  {
    icon: Database,
    title: 'Relier qualité de donnée et performance',
    text:
      'Une mauvaise qualité CRM limite toute la chaîne marketing : segmentation imprécise, flows inefficaces, personnalisation faible, reporting trompeur. La qualité des profils est un sujet stratégique, pas un détail technique.',
  },
  {
    icon: Target,
    title: 'Activer les bons segments au bon moment',
    text:
      'La vraie puissance de la Customer Intelligence apparaît quand la segmentation nourrit l’action : acquisition plus intelligente, CRM plus rentable, meilleure réactivation, meilleure fidélisation et meilleure lecture de la valeur client.',
  },
]

const stack = [
  'CRM',
  'Segmentation',
  'Lifecycle',
  'RFM',
  'Profile Quality',
  'Customer Data',
  'Activation',
  'Retention',
  'Klaviyo',
  'Analytics',
]

export default function CustomerIntelligencePage({ params }: Props) {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/customer-intelligence`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: locale === 'fr' ? 'Accueil' : 'Home', url: `${siteUrl}/${locale}` },
          { name: 'Customer Intelligence', url: pageUrl },
        ]}
      />

      <WebPageJsonLd
        name="Customer Intelligence"
        description="Guide expert Customer Intelligence : segmentation, CRM, lifecycle, qualité de la donnée client et activation."
        url={pageUrl}
      />

      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              {locale === 'fr'
                ? 'Page pilier · Data client & CRM'
                : 'Pillar page · Customer data & CRM'}
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-6 leading-tight">
              Customer Intelligence.
              <br />
              <span className="text-gradient-brand">
                La donnée client qui devient décision.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
              La <strong>Customer Intelligence</strong> consiste à exploiter la{' '}
              <strong>data client</strong> pour mieux segmenter, mieux activer, mieux fidéliser et
              mieux décider. Ce n’est pas seulement un sujet de CRM, ni seulement un sujet
              d’analytics. C’est l’intersection entre <strong>qualité des profils</strong>,
              <strong> segmentation</strong>, <strong>lifecycle marketing</strong>, valeur client,
              réactivation et compréhension réelle des comportements.
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
                  {locale === 'fr' ? 'Structurer mon CRM' : 'Structure my CRM'}
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
              Qu’est-ce que la Customer Intelligence ?
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>
                La Customer Intelligence est la capacité à transformer la donnée client en lecture
                stratégique. Elle permet de répondre à des questions concrètes : quels profils ont
                réellement de la valeur ? Quels segments réagissent le mieux ? Quels clients
                reviennent naturellement, lesquels nécessitent une relance, lesquels risquent
                l’attrition ? Où se situe la valeur entre acquisition, achat, fréquence, panier et
                fidélité ?
              </p>

              <p>
                Beaucoup d’équipes accumulent de la donnée sans intelligence exploitable. Elles ont
                des listes de contacts, des dashboards CRM, parfois des flows emailing, mais peu de
                clarté sur la qualité des profils et la logique d’activation. Sans segmentation
                sérieuse, la donnée client devient un stock passif. Avec une vraie approche
                Customer Intelligence, elle devient un levier de pilotage marketing.
              </p>

              <p>
                Cette discipline relie plusieurs couches : la collecte de données, la qualité des
                profils, la segmentation comportementale, la lecture lifecycle, l’activation CRM et
                la mesure de la valeur. C’est ce qui permet de sortir d’un marketing “mass market”
                pour passer à une logique beaucoup plus fine, centrée sur les comportements et le
                potentiel de chaque segment.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="bg-brand-surface/20 border-y border-brand-border">
        <Container>
          <Reveal className="mb-10">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Les briques d’une Customer Intelligence utile
            </h2>
            <p className="text-brand-text-secondary max-w-3xl leading-relaxed">
              Une vraie logique data client ne repose pas sur un seul KPI. Elle repose sur une
              architecture de lecture cohérente.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Users,
                title: 'Qualité des profils CRM',
                text:
                  'La première couche, c’est la qualité des données : email valide, téléphone, informations comportementales, source, historique, attributs utiles. Sans profil exploitable, la segmentation reste faible.',
              },
              {
                icon: Layers,
                title: 'Segmentation lifecycle',
                text:
                  'Nouveaux inscrits, primo-acheteurs, récurrents, inactifs, VIP, à risque, dormants : la logique lifecycle structure les actions marketing et évite les prises de parole génériques.',
              },
              {
                icon: Activity,
                title: 'Lecture comportementale',
                text:
                  'Pages vues, fréquence d’achat, engagement email, source d’acquisition, récence, panier, usage produit : ces signaux permettent de comprendre le client au-delà de son simple statut CRM.',
              },
              {
                icon: BarChart3,
                title: 'Mesure de la valeur',
                text:
                  'La Customer Intelligence doit relier la segmentation à la valeur : revenu, fréquence, panier, réachat, marge, rétention. Sinon, les segments restent descriptifs mais peu actionnables.',
              },
              {
                icon: Sparkles,
                title: 'Activation marketing',
                text:
                  'La donnée client n’a d’intérêt que si elle alimente l’action : flows CRM, personnalisation, retargeting, exclusions publicitaires, priorisation commerciale ou réactivation ciblée.',
              },
              {
                icon: ShieldCheck,
                title: 'Gouvernance & interprétation',
                text:
                  'Les équipes doivent partager une lecture commune des segments, des KPIs et des priorités. Sans méthode, la donnée client produit plus de confusion que d’intelligence.',
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
              Les erreurs les plus fréquentes sur la donnée client
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              'Confondre base de contacts et vrai CRM exploitable.',
              'Segmenter uniquement sur des critères statiques.',
              'Mesurer le volume de profils sans mesurer leur qualité.',
              'Ne pas relier segmentation et activation concrète.',
              'Multiplier les segments sans logique métier claire.',
              'Ignorer la récence, la fréquence et la valeur client.',
              'Construire des flows CRM sans comprendre le lifecycle réel.',
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
              Mon approche de la Customer Intelligence
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>
                Mon approche commence par une question simple : quelle lecture client vous manque
                aujourd’hui pour mieux décider ? Parfois le problème vient de la qualité des
                données. Parfois du manque de segmentation utile. Parfois d’un CRM rempli mais
                sous-activé. Parfois d’une équipe qui a des outils, mais pas de méthode commune de
                lecture. Le travail consiste alors à reconstruire la chaîne d’intelligence client.
              </p>

              <p>
                En pratique, cela signifie : auditer la donnée disponible, qualifier les profils,
                définir une logique lifecycle, structurer les segments, mesurer leur valeur,
                connecter ces segments à l’activation marketing puis suivre l’impact réel. La
                Customer Intelligence n’est pas une couche décorative. C’est un outil de pilotage.
              </p>

              <p>
                Quand cette logique est bien posée, le marketing devient plus fin, les flows CRM
                deviennent plus pertinents, les décisions média gagnent en précision et les équipes
                comprennent mieux où se situe la vraie valeur client.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl" className="border-t border-brand-border">
        <Container>
          <Reveal className="mb-10">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Articles liés à la Customer Intelligence
            </h2>
            <p className="text-brand-text-secondary max-w-3xl">
              Ces contenus prolongent la logique CRM, la qualité des profils, la structuration de
              la donnée marketing et l’orchestration client.
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
              Data client & activation
            </Badge>
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
              Vous avez des contacts…
              <br />
              ou une vraie intelligence client ?
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Audit CRM, segmentation, lifecycle, qualité des profils, logique RFM, activation
              marketing et structuration orientée valeur client.
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
              <Link href={`/${locale}/marketing-automation`}>
                <Button variant="secondary" size="xl">
                  {locale === 'fr' ? 'Voir Marketing Automation' : 'View Marketing Automation'}
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
        <Section py="xl">
  <Container>
    <PillarLinks locale={locale} current="customer-intelligence" />
  </Container>
</Section>
      </Section>
    </>
  )
}