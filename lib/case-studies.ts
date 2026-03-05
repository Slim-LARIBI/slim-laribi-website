export interface CaseStudy {
  slug: string
  title: string
  client: string
  sector: string
  tags: string[]
  challenge: string
  solution: string
  results: { label: string; value: string; delta?: string }[]
  tools: string[]
  duration: string
  excerpt: string
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'retail-sportif-server-side-tracking',
    title: 'Tracking server-side + GA4 + Meta CAPI — Retail Sportif',
    client: 'Retail Sportif',
    sector: 'E-commerce / Sport',
    tags: ['Server-side Tracking', 'GA4', 'Meta CAPI', 'GTM'],
    excerpt:
      'Refonte complète de l\'infrastructure de tracking d\'un retailer sportif majeur : passage en server-side, déduplication des événements Meta et gain de visibilité data critique.',
    challenge:
      'Perte de 40% des événements de conversion côté Meta due aux ITP et bloqueurs de pub. Attribution défaillante, ROAS surestimé, budgets mal alloués.',
    solution:
      'Déploiement d\'un container server-side GTM sur Cloud Run. Implémentation du Conversions API Meta avec déduplication browser/server. Structuration GA4 avec événements custom et paramètres e-commerce standardisés.',
    results: [
      { label: 'Événements Meta récupérés', value: '+38%', delta: 'vs baseline ITP' },
      { label: 'EMQ Score (Event Match Quality)', value: '8.4/10', delta: '+2.1 points' },
      { label: 'ROAS réel (attributé correctement)', value: '4.2x', delta: 'vs 6.1x surestimé' },
      { label: 'Réduction du CPA', value: '-22%', delta: 'après optimisation algorithme' },
    ],
    tools: ['GTM Server-side', 'Google Cloud Run', 'Meta CAPI', 'GA4', 'BigQuery'],
    duration: '6 semaines',
    featured: true,
  },
  {
    slug: 'fashion-crm-segmentation-lifecycle',
    title: 'CRM Lifecycle & Segmentation — Fashion DTC',
    client: 'Fashion DTC Brand',
    sector: 'Mode / D2C',
    tags: ['CRM', 'Klaviyo', 'Segmentation', 'Lifecycle', 'Email'],
    excerpt:
      'Construction d\'une architecture CRM lifecycle complète sur Klaviyo : segmentation RFM, flows automatisés, et scoring de profils pour activer les acheteurs dormants.',
    challenge:
      'Base CRM de 120K contacts avec un taux d\'ouverture de 12% et un taux de désinscription en hausse. Aucune segmentation comportementale. Revenue email < 8% du CA total.',
    solution:
      'Audit complet de la base, nettoyage et structuration RFM. Création de 14 segments comportementaux. Déploiement de 8 flows automatisés (welcome, abandon, post-achat, win-back). A/B testing systématique des sujets.',
    results: [
      { label: 'Revenue email / CA total', value: '24%', delta: 'de 8% à 24%' },
      { label: 'Taux d\'ouverture moyen', value: '31%', delta: '+19 points' },
      { label: 'Acheteurs win-back réactivés', value: '12%', delta: 'des dormants > 90j' },
      { label: 'PCR (Profile Completion Rate)', value: '67%', delta: '+41 points' },
    ],
    tools: ['Klaviyo', 'Shopify', 'GA4', 'Segment', 'Looker Studio'],
    duration: '8 semaines',
    featured: true,
  },
  {
    slug: 'ecommerce-performance-max-guardrails',
    title: 'Performance Max avec guardrails — E-commerce B2C',
    client: 'E-commerce B2C',
    sector: 'E-commerce généraliste',
    tags: ['Google Ads', 'Performance Max', 'Shopping', 'ROAS'],
    excerpt:
      'Restructuration d\'un compte Google Ads avec Performance Max segmenté et guardrails avancés pour protéger les segments à haute valeur et réduire le cannibalisme.',
    challenge:
      'PMax unique sur tout le catalogue, cannibalisant les campagnes Shopping existantes et aucune visibilité sur la répartition budget produit/marque/prospection.',
    solution:
      'Segmentation PMax en 3 asset groups (top produits, longue traîne, brand). Exclusions de requêtes via DSA. Signals d\'audience first-party depuis GA4. Liaisons Merchant Center optimisées.',
    results: [
      { label: 'ROAS campagnes', value: '5.8x', delta: '+1.4x vs période N-1' },
      { label: 'Impressions top produits', value: '+67%', delta: 'meilleure allocation' },
      { label: 'Coût par acquisition', value: '-28%', delta: 'en 60 jours' },
      { label: 'Part de budget brand', value: '18%', delta: 'vs 34% cannibalisme initial' },
    ],
    tools: ['Google Ads', 'Merchant Center', 'GA4', 'Search Ads 360', 'Looker Studio'],
    duration: '10 semaines',
    featured: true,
  },
  {
    slug: 'automation-n8n-operations-ecommerce',
    title: 'Automatisation opérationnelle — Stack n8n + Shopify',
    client: 'Pure Player E-commerce',
    sector: 'E-commerce / Opérations',
    tags: ['n8n', 'Automation', 'Shopify', 'Ops', 'No-code'],
    excerpt:
      'Déploiement d\'une infrastructure d\'automatisation sur n8n pour éliminer les tâches manuelles répétitives : alertes, rapports, synchronisations multi-plateformes.',
    challenge:
      '6h/semaine perdues sur des tâches manuelles : export de rapports, alertes stock, synchronisation CRM/ERP, notification équipe SAV.',
    solution:
      'Cartographie complète des flux opérationnels. Déploiement n8n self-hosted. 12 workflows automatisés : rapport daily GA4, alertes stock critique Slack, sync commandes CRM, routing SAV prioritaire.',
    results: [
      { label: 'Temps manuel économisé', value: '5.5h/sem', delta: 'par opérateur' },
      { label: 'Délai alerte rupture stock', value: '< 3min', delta: 'vs 24h manuel' },
      { label: 'Taux d\'erreur synchronisation', value: '< 0.2%', delta: 'vs 8% manuel' },
      { label: 'ROI automation', value: '340%', delta: 'sur 6 mois' },
    ],
    tools: ['n8n', 'Shopify', 'Slack', 'Google Sheets', 'Klaviyo', 'Notion'],
    duration: '4 semaines',
    featured: false,
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  return caseStudies.find((cs) => cs.slug === slug) ?? null
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured)
}
