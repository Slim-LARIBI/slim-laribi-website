// app/formation2/page.tsx
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Download, Phone, CheckCircle2, Sparkles, Shield, Gauge, Rocket } from 'lucide-react'

export const metadata = {
  title: 'Formation Marketing & Tracking 90h | Slim Laribi',
  description:
    "Bootcamp intensif 90h (3 mois) : WordPress/WooCommerce, SEO avancé, Google Ads & Meta Ads, Tracking GA4 + GTM, Emailing automatisé FluentCRM. Bonus inclus.",
}

const outcomes = [
  "Créer un site WordPress vitrine + e-commerce (Kadence / Elementor + WooCommerce)",
  "Mettre en place un blog optimisé SEO (structure, contenu, performance, maillage)",
  "Lancer et optimiser des campagnes Meta Ads (Traffic, Conversion, DPA) + tracking events",
  "Lancer Google Ads (Search, Display, Performance Max) + Merchant Center",
  "Configurer le tracking avancé via GTM + GA4 (Enhanced Ecommerce, DataLayer, User ID)",
  "Automatiser l’email marketing avec FluentCRM (welcome, panier abandonné, upsell, segmentation)",
]

const modules = [
  {
    icon: Rocket,
    title: 'Création de sites web & e-commerce',
    subtitle: 'WordPress 6.3 · Kadence + Elementor · WooCommerce',
    bullets: [
      'Site vitrine & e-commerce : structure, pages, performance',
      'Intégration d’un blog prêt pour le SEO',
      'Gestion des ventes WooCommerce (produits, variantes, paiement, livraison)',
    ],
  },
  {
    icon: Gauge,
    title: 'SEO avancé (Vitrine / eCommerce)',
    subtitle: 'Domine Google et génère du trafic gratuit',
    bullets: [
      'SEO On-site, Off-site & Technique',
      'Méthodes avancées : PBN, Black Hat SEO (cadre + précautions)',
      'Outils pros : SEMrush, Screaming Frog, Ubersuggest…',
    ],
  },
  {
    icon: Sparkles,
    title: 'Media Buying (Google Ads / Meta Ads)',
    subtitle: 'Campagnes orientées conversion + tracking propre',
    bullets: [
      'Pixel, API de conversion, OpenGraph, Catalogue Instagram/Facebook',
      'Meta Ads : DPA, Traffic, Conversion',
      'Events : PageView, ViewContent, AddToCart, BeginCheckout, Purchase, Lead, Form Submission',
      'Google Ads : Search, Display, Performance Max',
    ],
  },
  {
    icon: Shield,
    title: 'Web Analyse & Tracking avancé',
    subtitle: 'GTM · GA4 · Merchant Center · Stape',
    bullets: [
      'Google Ads configuré via GTM (événements, conversions)',
      'GTM + GA4 : Enhanced Ecommerce, DataLayer, User ID',
      'Stape & Google Merchant Center (bases + setup)',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'Email Marketing automatisé (FluentCRM)',
    subtitle: 'Sequences, segmentation, performance',
    bullets: [
      'Séquences automatiques : welcome, relance panier, upsell…',
      'Segmentation avancée des contacts',
      'Intégrations WooCommerce + formulaires (ex : eBook download)',
      'Analyse des performances des campagnes',
    ],
  },
]

const bonuses = [
  'Accès Kadence Pro & Astra Pro',
  '3 checklists premium (SEO, Mailing, Facebook)',
  '3 eBooks stratégiques offerts',
  'Replays illimités pour revoir les cours',
]

const faqs = [
  {
    q: 'À qui s’adresse la formation ?',
    a: 'Aux profils marketing, e-commerce, entrepreneurs et étudiants qui veulent devenir opérationnels avec une stack complète : site, acquisition, tracking, automation.',
  },
  {
    q: 'Est-ce adapté si je pars de zéro ?',
    a: 'Oui. On construit la base (WordPress + WooCommerce), puis on avance vers le SEO, l’acquisition (Meta/Google), le tracking (GTM/GA4) et l’email automation.',
  },
  {
    q: 'Est-ce que je repars avec des livrables concrets ?',
    a: 'Oui : site fonctionnel + tracking configuré + campagnes structurées + séquences email + checklists. Tu peux montrer tout ça comme portfolio.',
  },
  {
    q: 'Les bonus sont inclus ?',
    a: 'Oui : Kadence Pro & Astra Pro + checklists + eBooks + replays illimités.',
  },
]

function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-text-muted">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-black tracking-tight text-brand-text-primary">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm md:text-base text-brand-text-secondary leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default function Formation2Page() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden hero-bg pt-24 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] rounded-full bg-brand-accent opacity-[0.06] blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-brand-gold opacity-[0.04] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="accent" dot>
                Bootcamp intensif · 90h · 3 mois
              </Badge>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.02]">
              <span className="text-brand-text-primary">De zéro à</span>{' '}
              <span className="text-gradient-brand">opérationnel</span>
              <br />
              <span className="text-brand-text-primary">en marketing</span>{' '}
              <span className="text-gradient-gold">data-driven</span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-brand-text-secondary leading-relaxed">
              Une formation complète pour construire ton site (WordPress/WooCommerce), attirer du
              trafic (SEO), scaler l’acquisition (Meta/Google), fiabiliser le tracking (GTM/GA4) et
              automatiser le CRM (FluentCRM).
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button variant="gold" size="xl" icon={<Download className="h-5 w-5" />} iconPosition="left">
                Télécharger le programme (PDF)
              </Button>

              <Link href="/contact">
                <Button variant="secondary" size="xl" icon={<Phone className="h-5 w-5" />} iconPosition="left">
                  Réserver un appel
                </Button>
              </Link>

              <Link href="#programme">
                <Button variant="ghost" size="xl" icon={<ArrowRight className="h-4 w-4" />}>
                  Voir le contenu
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { t: 'Site + Tracking', d: 'WordPress/Woo + GTM/GA4' },
                { t: 'Acquisition', d: 'Meta & Google Ads' },
                { t: 'Automation', d: 'FluentCRM + Segments' },
              ].map((x) => (
                <div key={x.t} className="glass rounded-2xl border border-brand-border px-5 py-4">
                  <p className="text-sm font-semibold text-brand-text-primary">{x.t}</p>
                  <p className="text-xs text-brand-text-muted mt-1">{x.d}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs text-brand-text-muted">
              Objectif : repartir avec une stack complète + livrables concrets (site, tracking, campagnes, CRM).
            </p>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Résultats"
            title="Ce que tu sauras faire à la fin"
            subtitle="Des compétences actionnables, directement utilisables en entreprise ou pour tes projets."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {outcomes.map((t) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent mt-0.5" />
                  <p className="text-sm text-white/80 leading-relaxed">{t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" className="py-14 md:py-18 border-y border-brand-border relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-surface/35" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Programme"
            title="Un parcours complet, orienté performance"
            subtitle="Création, acquisition, tracking, automation : tout est pensé pour être mesurable et ROI-focused."
          />

          <div className="mt-10 grid gap-4">
            {modules.map((m) => (
              <div key={m.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
                    <m.icon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white tracking-tight">{m.title}</h3>
                        <p className="text-sm text-white/60 mt-1">{m.subtitle}</p>
                      </div>
                    </div>

                    <ul className="mt-5 grid gap-2 md:grid-cols-2">
                      {m.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-white/75">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-gold" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact">
              <Button variant="secondary" size="lg" icon={<Phone className="h-5 w-5" />} iconPosition="left">
                Réserver un appel
              </Button>
            </Link>
            <Button variant="gold" size="lg" icon={<Download className="h-5 w-5" />} iconPosition="left">
              Télécharger le programme (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Bonus"
            title="Bonus exclusifs inclus"
            subtitle="Des ressources premium pour accélérer ton exécution et gagner du temps."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {bonuses.map((b) => (
              <div key={b} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-brand-gold mt-0.5" />
                  <p className="text-sm text-white/80 leading-relaxed">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-18 border-t border-brand-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="FAQ"
            title="Questions fréquentes"
            subtitle="Si tu veux, je peux aussi ajouter une section pricing + calendrier de sessions."
          />

          <div className="mt-10 grid gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <summary className="cursor-pointer list-none text-white font-semibold">
                  <div className="flex items-center justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-white/50 group-open:rotate-45 transition-transform">+</span>
                  </div>
                </summary>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/contact">
              <Button variant="gold" size="xl" icon={<Phone className="h-5 w-5" />} iconPosition="left">
                Discuter de la formation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}