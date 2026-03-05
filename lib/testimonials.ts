export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  sector: string
  content: string
  rating: number
  context: 'consulting' | 'formation' | 'audit'
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie-Claire D.',
    role: 'Head of Digital',
    company: 'Retailer Mode (500+ employés)',
    sector: 'Fashion Retail',
    content:
      'Slim a complètement transformé notre approche data. Avant lui, on naviguait à vue — GA4 mal configuré, Meta CAPI inexistant, budgets ads gaspillés. En 6 semaines, notre tracking était irréprochable et nos décisions enfin basées sur des données fiables. Concret, précis, exigeant.',
    rating: 5,
    context: 'consulting',
  },
  {
    id: '2',
    name: 'Thomas R.',
    role: 'Fondateur',
    company: 'Pure Player E-commerce',
    sector: 'E-commerce DTC',
    content:
      'J\'avais besoin d\'un expert, pas d\'un PowerPoint. Slim est arrivé avec des audits précis, un plan d\'action chiffré et une exécution sans accroc. Notre CPA Google Ads a baissé de 28% en 2 mois. Résultats > promesses.',
    rating: 5,
    context: 'consulting',
  },
  {
    id: '3',
    name: 'Amina K.',
    role: 'Marketing Manager',
    company: 'Scale-up SaaS B2B',
    sector: 'SaaS',
    content:
      'La formation Customer Intelligence est dense, exigeante et surtout ultra-pratique. J\'ai appris à lire mes données GA4, structurer mes campagnes Meta et mettre en place un vrai lifecycle CRM. Slim enseigne comme il travaille : avec précision et sans bullshit.',
    rating: 5,
    context: 'formation',
  },
  {
    id: '4',
    name: 'Julien P.',
    role: 'E-commerce Director',
    company: 'Groupe Retail Omnicanal',
    sector: 'Retail',
    content:
      'L\'audit tracking que Slim a réalisé a révélé des fuites que notre agence n\'avait pas détectées en 2 ans. Méthodique, transparent sur les priorités, et capable d\'expliquer les enjeux techniques aux décideurs non-techniques. Une vraie valeur ajoutée.',
    rating: 5,
    context: 'audit',
  },
  {
    id: '5',
    name: 'Sophie M.',
    role: 'Responsable Acquisition',
    company: 'Marketplace B2C',
    sector: 'E-commerce',
    content:
      'Slim a restructuré nos Performance Max de A à Z. Segmentation, signals, exclusions — on comprend enfin pourquoi nos campagnes performent. Le taux de clics sur nos top produits a progressé de 67% en 8 semaines.',
    rating: 5,
    context: 'consulting',
  },
  {
    id: '6',
    name: 'Kevin B.',
    role: 'Apprenant — promo 2024',
    company: 'Reconversion digitale',
    sector: 'Formation',
    content:
      'J\'avais zéro bagage technique. 3 mois plus tard, je maîtrise GTM, GA4 et Meta Ads, et j\'ai lancé mon propre site e-commerce dans le cadre du projet final. La formation est intense mais les résultats sont réels. Slim s\'investit vraiment dans la progression de chaque apprenant.',
    rating: 5,
    context: 'formation',
  },
]
