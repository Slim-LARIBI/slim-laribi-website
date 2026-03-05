import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { ProgramScheduleTable, type WeekPlan } from '@/components/formation/ProgramScheduleTable'
import { Download, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Planning détaillé — Programme 90h Customer Intelligence',
  description:
    'Programme détaillé semaine par semaine de la formation Customer Intelligence 90h sur 3 mois. Thèmes, objectifs, ateliers pratiques et total des heures.',
}

// 12 weeks × detailed plan = exactly 90 hours
const weeklyPlan: WeekPlan[] = [
  // === PHASE 1: FOUNDATIONS (Semaines 1–3, 28h) ===
  {
    week: 1,
    phase: 'foundations',
    module: 'WordPress & E-commerce',
    theme: 'Créer et configurer un site WordPress e-commerce from scratch',
    hours: 8,
    outcomes: [
      'Installer et configurer WordPress + WooCommerce',
      'Choisir et personnaliser un thème adapté',
      'Structurer les pages clés (home, catalogue, fiche produit, checkout)',
      'Configurer les plugins essentiels (SEO, performance, sécurité)',
    ],
    workshop: 'Création d\'un mini e-commerce complet : installation, configuration produits, pages légales et première mise en ligne sur hébergement mutualisé.',
  },
  {
    week: 2,
    phase: 'foundations',
    module: 'WordPress & E-commerce',
    theme: 'Performance, UX & conversion — optimiser son site pour vendre',
    hours: 6,
    outcomes: [
      'Optimiser la vitesse de chargement (Core Web Vitals)',
      'Structurer les fiches produit pour maximiser la conversion',
      'Configurer les méthodes de paiement et livraison',
      'Mettre en place les bases de l\'analytics côté serveur',
    ],
    workshop: 'Audit de performance du site créé en S1 avec PageSpeed Insights. Optimisation images, cache, lazy-loading. Mesure de l\'impact sur le score CWV.',
  },
  {
    week: 3,
    phase: 'foundations',
    module: 'SEO fondamentaux',
    theme: 'Référencement naturel — fondements, stratégie de mots-clés et architecture',
    hours: 7,
    outcomes: [
      'Comprendre le fonctionnement des moteurs de recherche',
      'Réaliser une recherche de mots-clés efficace',
      'Structurer l\'architecture d\'un site pour le SEO',
      'Écrire et optimiser des contenus pour Google',
    ],
    workshop: 'Recherche de mots-clés pour le mini e-commerce créé en S1 : outils (Semrush, Ubersuggest, Google Keyword Planner), clustering d\'intentions, carte de mots-clés.',
  },

  // === PHASE 2: ACQUISITION (Semaines 4–7, 36h) ===
  {
    week: 4,
    phase: 'acquisition',
    module: 'SEO technique + contenu',
    theme: 'SEO technique, netlinking et contenu éditorial',
    hours: 7,
    outcomes: [
      'Diagnostiquer les problèmes techniques SEO (crawl, indexation, vitesse)',
      'Optimiser les balises title, meta, H1, structure interne',
      'Comprendre les bases du netlinking et de l\'autorité de domaine',
      'Créer un calendrier éditorial orienté SEO',
    ],
    workshop: 'Audit SEO technique du mini e-commerce avec Screaming Frog. Correction des erreurs identifiées. Rédaction de 2 fiches produit optimisées.',
  },
  {
    week: 5,
    phase: 'acquisition',
    module: 'Google Ads (SEA)',
    theme: 'Google Ads — structure de compte, campagnes Search et enchères',
    hours: 6,
    outcomes: [
      'Comprendre l\'architecture d\'un compte Google Ads',
      'Créer et structurer des campagnes Search efficaces',
      'Maîtriser les stratégies d\'enchères (manual, tCPA, tROAS)',
      'Rédiger des annonces à fort taux de clic',
    ],
    workshop: 'Création d\'une première campagne Search sur le mini e-commerce : structure campagne/groupe/annonce, choix des mots-clés, correspondances, extensions.',
  },
  {
    week: 6,
    phase: 'acquisition',
    module: 'Google Ads (SEA)',
    theme: 'Google Shopping, Performance Max et optimisation de compte',
    hours: 6,
    outcomes: [
      'Configurer un flux produit Merchant Center',
      'Créer des campagnes Shopping et Performance Max',
      'Segmenter Performance Max avec asset groups et signals',
      'Analyser et optimiser le compte avec les rapports Google Ads',
    ],
    workshop: 'Configuration du Merchant Center et création d\'une campagne Performance Max segmentée en 2 asset groups (top produits vs catalogue). Ajout de signals audiences.',
  },
  {
    week: 7,
    phase: 'acquisition',
    module: 'Meta Ads',
    theme: 'Meta Ads — structure de funnel, ciblages et création de contenus',
    hours: 8,
    outcomes: [
      'Maîtriser l\'architecture de compte Meta (campagne/ensemble/pub)',
      'Structurer un funnel TOFU / MOFU / BOFU sur Meta',
      'Créer des audiences (lookalike, comportementales, retargeting)',
      'Produire des créatifs efficaces (formats, hooks, CTAs)',
    ],
    workshop: 'Création d\'une campagne Meta complète en 3 phases de funnel : prospection cold (lookalike), retargeting visiteurs et retargeting panier abandonné.',
  },
  {
    week: 8,
    phase: 'acquisition',
    module: 'Meta Ads',
    theme: 'Mesure Meta Ads, Attribution et Conversions API',
    hours: 9,
    outcomes: [
      'Comprendre la logique d\'attribution Meta et ses biais',
      'Configurer le pixel Meta correctement',
      'Mettre en place la Conversions API (CAPI) basique',
      'Lire et interpréter le rapport d\'attribution Meta',
    ],
    workshop: 'Installation du pixel Meta via GTM + configuration CAPI basique via intégration Shopify. Vérification de la déduplication via l\'outil de test des événements.',
  },

  // === PHASE 3: DATA & CRM (Semaines 9–11, 16h) ===
  {
    week: 9,
    phase: 'data',
    module: 'GTM + Events tracking',
    theme: 'Google Tag Manager — setup, événements et layers de données',
    hours: 8,
    outcomes: [
      'Comprendre la structure de GTM (conteneur, balises, déclencheurs, variables)',
      'Configurer les événements GA4 clés (page_view, purchase, add_to_cart)',
      'Utiliser le dataLayer pour des tracking avancés',
      'Déboguer avec le mode aperçu GTM et l\'extension DebugView',
    ],
    workshop: 'Configuration complète du plan de marquage e-commerce sur le mini site : events GA4 standard (view_item, add_to_cart, begin_checkout, purchase) via GTM.',
  },
  {
    week: 10,
    phase: 'data',
    module: 'GA4 reporting + attribution',
    theme: 'Google Analytics 4 — reporting, conversions et attribution data-driven',
    hours: 8,
    outcomes: [
      'Naviguer dans l\'interface GA4 et interpréter les rapports',
      'Configurer les conversions et objectifs GA4',
      'Comprendre les modèles d\'attribution et choisir le bon',
      'Créer des rapports personnalisés et des audiences GA4',
    ],
    workshop: 'Analyse des données du mini e-commerce dans GA4 : entonnoir de conversion, rapport attribution data-driven, création d\'une audience remarketing pour Google Ads.',
  },
  {
    week: 11,
    phase: 'data',
    module: 'CRM · Emailing · Lifecycle',
    theme: 'Email marketing, segmentation et automatisation lifecycle',
    hours: 10,
    outcomes: [
      'Comprendre les bases du CRM e-commerce (RFM, lifecycle)',
      'Configurer Klaviyo et intégrer Shopify',
      'Créer des segments comportementaux (acheteurs, inactifs, VIP)',
      'Déployer les 4 flows essentiels (welcome, abandon, post-achat, win-back)',
      'Mesurer les KPIs CRM : OR, CTR, revenue attribué, PCR',
    ],
    workshop: 'Configuration Klaviyo sur le mini e-commerce : intégration Shopify, création de 3 segments RFM, déploiement d\'un flow welcome series et d\'un flow abandon panier.',
  },

  // === PHASE 4: CAPSTONE (Semaines 12, 10h) ===
  {
    week: 12,
    phase: 'capstone',
    module: 'Projet final capstone',
    theme: 'Lancement et présentation du mini e-commerce complet',
    hours: 10,
    outcomes: [
      'Assembler et finaliser le projet e-commerce complet',
      'S\'assurer que le tracking est 100% opérationnel (GA4 + GTM + CAPI)',
      'Lancer les premières campagnes Google Ads et Meta Ads',
      'Présenter le projet avec KPIs, stack technique et plan d\'action',
    ],
    workshop: 'Présentation finale individuelle (20 min) : démonstration du site, audit tracking live, présentation des campagnes lancées et des premiers résultats. Feedback collectif et validation de la formation.',
  },
]

export default function ProgrammePage() {
  const totalHours = weeklyPlan.reduce((s, w) => s + w.hours, 0)

  return (
    <>
      {/* Hero */}
      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Link
              href="/formation"
              className="inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Formation
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <Badge variant="gold" dot className="mb-5">
              Planning semaine par semaine
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              Programme{' '}
              <span className="text-gradient-gold">{totalHours}h.</span>
              <br />
              12 semaines. 4 phases.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-xl text-brand-text-secondary max-w-xl mx-auto mb-8">
              Un programme structuré de A à Z. Chaque semaine, des objectifs précis, des ateliers pratiques et une progression mesurable.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="gold" size="lg" icon={<Download className="h-4 w-4" />} iconPosition="left">
                Télécharger le programme PDF
              </Button>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  S'inscrire à la session
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Phase legend */}
      <Section py="sm">
        <Container>
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-2">
              {[
                { label: 'Fondations', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', weeks: 'S1–S3', hours: 21 },
                { label: 'Acquisition', color: 'text-brand-accent bg-brand-accent/10 border-brand-accent/20', weeks: 'S4–S8', hours: 36 },
                { label: 'Data & CRM', color: 'text-brand-gold bg-brand-gold/10 border-brand-gold/20', weeks: 'S9–S11', hours: 26 },
                { label: 'Projet final', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20', weeks: 'S12', hours: 10 },
              ].map((p) => {
                // Recalculate actual hours
                const actualHours = weeklyPlan.filter(w => {
                  if (p.label === 'Fondations') return w.phase === 'foundations'
                  if (p.label === 'Acquisition') return w.phase === 'acquisition'
                  if (p.label === 'Data & CRM') return w.phase === 'data'
                  return w.phase === 'capstone'
                }).reduce((s, w) => s + w.hours, 0)

                return (
                  <div key={p.label} className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold ${p.color}`}>
                    <span>{p.label}</span>
                    <span className="opacity-60">·</span>
                    <span>{p.weeks}</span>
                    <span className="opacity-60">·</span>
                    <span>{actualHours}h</span>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Schedule table */}
      <Section py="md">
        <Container>
          <Reveal delay={0.05}>
            <ProgramScheduleTable weeks={weeklyPlan} showTotal />
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section py="xl" className="border-t border-brand-border text-center">
        <Container size="sm">
          <Reveal>
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-4">
              Ce programme vous correspond ?
            </h2>
            <p className="text-brand-text-secondary mb-8">
              Réservez un appel pour discuter des prochaines sessions disponibles et des options de financement.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Réserver un appel
                </Button>
              </Link>
              <Button variant="gold" size="xl" icon={<Download className="h-4 w-4" />} iconPosition="left">
                Télécharger le PDF
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
