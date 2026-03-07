import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { AmbientGlow } from '@/components/animations/ParallaxGlow'
import { PricingPlaceholder } from '@/components/formation/PricingPlaceholder'
import { FAQAccordion } from '@/components/formation/FAQAccordion'
import {
  CheckCircle2, Clock, Users, Award, Download, ArrowRight,
  GraduationCap, BarChart3, Globe, Target, Cpu, Mail
} from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}): Promise<Metadata> {
  if (params.locale === 'fr') {
    return {
      title: 'Formation Tracking, Data Marketing & MarTech',
      description:
        'Formations avancées en tracking marketing, Google Tag Manager, server-side tracking et stratégie data pour équipes marketing et entreprises e-commerce.',
    }
  }

  return {
    title: 'Tracking, Data Marketing & MarTech Training',
    description:
      'Advanced training in marketing tracking, Google Tag Manager, server-side tracking and data strategy for marketing teams and e-commerce companies.',
    }
}

const modules = [
  { icon: Globe, name: 'WordPress & E-commerce', hours: 10, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { icon: BarChart3, name: 'SEO fondamentaux + technique', hours: 14, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Target, name: 'Google Ads (Search + Shopping)', hours: 12, color: 'text-brand-accent', bg: 'bg-brand-accent/10 border-brand-accent/20' },
  { icon: Target, name: 'Meta Ads (funnel + mesure)', hours: 12, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
  { icon: Cpu, name: 'GTM setup + events tracking', hours: 10, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  { icon: BarChart3, name: 'GA4 reporting + attribution', hours: 12, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
  { icon: Mail, name: 'CRM · Emailing · Lifecycle', hours: 10, color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
  { icon: Award, name: 'Projet capstone (mini e-commerce)', hours: 10, color: 'text-brand-gold', bg: 'bg-brand-gold/10 border-brand-gold/20' },
]

const outcomes = [
  'Créer et gérer un site e-commerce WordPress complet',
  'Positionner un site sur Google avec une stratégie SEO efficace',
  'Lancer et optimiser des campagnes Google Search et Shopping',
  'Maîtriser la structure et la mesure des campagnes Meta Ads',
  'Implémenter un tracking fiable avec GTM et GA4',
  'Analyser ses données et prendre des décisions basées sur les KPIs',
  'Construire un lifecycle CRM email avec automatisations',
  'Livrer un projet e-commerce complet en conditions réelles',
]

const forWho = [
  {
    title: 'Professionnels en reconversion',
    description: 'Vous venez d\'un autre domaine et souhaitez une formation complète et opérationnelle pour entrer dans le marketing digital.',
  },
  {
    title: 'Marketers juniors & mid',
    description: 'Vous maîtrisez certains leviers mais voulez structurer vos connaissances et combler vos lacunes sur la data et le tracking.',
  },
  {
    title: 'Entrepreneurs & e-commerçants',
    description: 'Vous gérez votre propre activité et voulez reprendre la main sur votre acquisition, votre tracking et votre CRM.',
  },
  {
    title: 'Équipes marketing en entreprise',
    description: 'Votre équipe a besoin de monter en compétences sur des outils critiques comme GA4, GTM, Meta Ads ou Klaviyo.',
  },
]

const faqs = [
  {
    question: 'Quel est le format de la formation ?',
    answer: 'La formation se déroule en présentiel, sur 3 mois, à raison de sessions hebdomadaires. Chaque session combine théorie et ateliers pratiques. Des ressources en ligne complètent la formation entre les sessions.',
  },
  {
    question: 'Faut-il avoir des connaissances préalables ?',
    answer: 'Non. La formation commence par les fondamentaux (WordPress, SEO bases) et monte progressivement en complexité jusqu\'au tracking avancé et au CRM. Une aisance basique avec internet et les outils numériques est suffisante pour démarrer.',
  },
  {
    question: 'La formation est-elle finançable par le CPF ou un OPCO ?',
    answer: 'Oui, nous accompagnons les participants dans les démarches de financement CPF, OPCO, Pôle Emploi (AIF) ou prise en charge entreprise. Contactez-nous pour un devis adapté à votre situation.',
  },
  {
    question: 'Qu\'est-ce que le projet capstone ?',
    answer: 'En fin de formation, chaque apprenant construit et lance un vrai mini e-commerce : site WordPress, SEO, campagnes ads, tracking GA4/GTM, CRM email. Ce projet démontre la maîtrise opérationnelle de tous les outils enseignés.',
  },
  {
    question: 'Quelle est la taille des groupes ?',
    answer: 'Les groupes sont volontairement réduits (6 à 12 participants) pour garantir un suivi individuel et des ateliers pratiques de qualité. Chaque participant bénéficie d\'un accès direct à l\'intervenant.',
  },
  {
    question: 'Y a-t-il un suivi après la formation ?',
    answer: 'Oui. Les participants bénéficient d\'un accès à la communauté alumni, de ressources actualisées et d\'une période de support post-formation (30 jours pour les formules avec mentorat). Des sessions de rattrapage sont aussi disponibles.',
  },
  {
    question: 'Comment s\'inscrire ?',
    answer: 'Réservez un appel de 30 minutes via la page contact. Nous discutons de vos objectifs, votre niveau actuel et les options de financement. L\'inscription se fait ensuite avec un dossier simplifié.',
  },
]

function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; item: string }>
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": it.name,
      "item": it.item,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function FAQJsonLd({
  items,
}: {
  items: Array<{ question: string; answer: string }>
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function FormationPage() {
  const totalHours = modules.reduce((s, m) => s + m.hours, 0)

  return (
    <>
      {/* ✅ Structured Data (SEO) */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', item: 'https://laribislim.com/' },
          { name: 'Formation', item: 'https://laribislim.com/formation' },
        ]}
      />

    {/* ✅ Course Structured Data enrichi */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Formation Customer Intelligence — Marketing Digital 90h",
      "description":
        "Formation intensive 90 heures sur 3 mois : WordPress, SEO, Google Ads, Meta Ads, GTM, GA4, CRM. Présentiel en groupes réduits.",
      "url": "https://laribislim.com/formation",
      "provider": {
        "@type": "Organization",
        "name": "Slim Laribi",
        "url": "https://laribislim.com"
      },
      "inLanguage": "fr-FR",

      /* ✅ Audience (pour qui) */
      "audience": [
        { "@type": "Audience", "audienceType": "Professionnels en reconversion" },
        { "@type": "Audience", "audienceType": "Marketers juniors & mid" },
        { "@type": "Audience", "audienceType": "Entrepreneurs & e-commerçants" },
        { "@type": "Audience", "audienceType": "Équipes marketing en entreprise" }
      ],

      /* ✅ Présentiel + lieu */
      "courseMode": "InPerson",
      "location": {
        "@type": "Place",
        "name": "Centre de formation (Présentiel)",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "TN",
          "addressLocality": "Tunis"
          /* option: "streetAddress": "...", "postalCode": "..." */
        }
      },

      /* ✅ Offre (prix) */
      "offers": {
        "@type": "Offer",
        "url": "https://laribislim.com/formation",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "TND",
        "price": "0",
        "category": "Training"
        /* Mets le vrai prix dès que tu l'as, ex: "price": "2900" */
      },

      /* ✅ Optionnel mais top : instance (durée 3 mois) */
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "InPerson",
        "duration": "P3M"
        /* option: "startDate": "2026-04-01", "endDate": "2026-07-01" */
      }
    }),
  }}
/>
      <FAQJsonLd items={faqs} />

      {/* Hero */}
      <Section py="2xl" className="relative hero-bg overflow-hidden">
        <AmbientGlow className="top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2" color="#c9a84c" opacity={0.07} width={600} height={300} />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <Badge variant="gold" dot className="mb-6">Formation intensive · Présentiel · 3 mois</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-5xl md:text-7xl font-black text-brand-text-primary tracking-tight mb-5 leading-none">
                Customer
                <br />
                <span className="text-gradient-gold">Intelligence.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
                90 heures pour maîtriser tous les leviers du marketing digital moderne — de la création de site à la data, en passant par les ads et le CRM. Une formation opérationnelle, pas théorique.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.12}>
              <div className="flex flex-wrap gap-6 justify-center mb-10">
                {[
                  { icon: Clock, label: '90 heures', sub: 'de formation' },
                  { icon: GraduationCap, label: '3 mois', sub: 'parcours intensif' },
                  { icon: Users, label: '6–12', sub: 'participants max' },
                  { icon: Award, label: 'Projet', sub: 'capstone inclus' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2.5">
                    <div className="h-10 w-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                      <stat.icon className="h-4 w-4 text-brand-gold" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-brand-text-primary text-sm">{stat.label}</p>
                      <p className="text-xs text-brand-text-muted">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="gold" size="xl" icon={<Download className="h-5 w-5" />} iconPosition="left">
                  Télécharger le programme (PDF)
                </Button>
                <Link href="/contact">
                  <Button variant="secondary" size="xl">
                    S'inscrire à la session
                  </Button>
                </Link>
                <Link href="/formation/programme">
                  <Button variant="ghost" size="xl" icon={<ArrowRight className="h-4 w-4" />}>
                    Voir le planning détaillé
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Modules overview */}
      <Section py="xl">
        <Container>
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-3">Programme</p>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-3">
              8 modules. {totalHours} heures. 0 lacune.
            </h2>
            <p className="text-brand-text-secondary">
              Une progression logique du fondement à l'expertise opérationnelle.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((mod, i) => {
              const Icon = mod.icon
              return (
                <Reveal key={mod.name} delay={i * 0.06}>
                  <div className={`glass rounded-2xl p-5 border ${mod.bg.split(' ')[1]} hover:border-opacity-40 transition-all duration-300 hover:-translate-y-0.5 h-full`}>
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${mod.bg} mb-4`}>
                      <Icon className={`h-5 w-5 ${mod.color}`} />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-brand-text-primary leading-snug">{mod.name}</h3>
                      <span className={`text-sm font-black shrink-0 ${mod.color}`}>{mod.hours}h</span>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1} className="mt-6 text-center">
            <Link href="/formation/programme">
              <Button variant="secondary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Voir le planning semaine par semaine
              </Button>
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section py="xl" className="border-y border-brand-border bg-brand-surface/30">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">À l'issue de la formation</p>
              <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
                Ce que vous saurez faire.
              </h2>
              <p className="text-brand-text-secondary">
                Pas des notions théoriques — des compétences opérationnelles immédiatement activables en situation professionnelle réelle.
              </p>
            </Reveal>
            <div className="space-y-3">
              {outcomes.map((o, i) => (
                <Reveal key={o} delay={i * 0.05}>
                  <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.02] transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-text-secondary">{o}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* For who */}
      <Section py="xl">
        <Container>
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-3">Pour qui</p>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight">
              Cette formation est faite pour vous si…
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {forWho.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <Card variant="glass" padding="lg" hover className="h-full">
                  <h3 className="font-display font-bold text-brand-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section py="xl" className="border-y border-brand-border bg-brand-surface/20">
        <Container>
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">Tarifs</p>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-3">
              Investissez dans vos compétences.
            </h2>
            <p className="text-brand-text-secondary">
              Financement CPF · OPCO · AIF · Prise en charge entreprise · Tarif individuel
            </p>
          </Reveal>
          <PricingPlaceholder />
        </Container>
      </Section>

      {/* FAQ */}
      <Section py="xl">
        <Container size="md">
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-3">FAQ</p>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight">
              Questions fréquentes.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section py="xl" className="border-t border-brand-border text-center bg-brand-surface/20">
        <Container size="sm">
          <Reveal>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              Prêt à vous inscrire ?
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Réservez un appel de découverte de 30 min pour discuter de votre projet et des options de financement.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Réserver un appel
                </Button>
              </Link>
              <Button variant="gold" size="xl" icon={<Download className="h-4 w-4" />} iconPosition="left">
                Télécharger le programme
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}