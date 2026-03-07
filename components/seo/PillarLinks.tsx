import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight } from 'lucide-react'

type Locale = 'fr' | 'en'

interface PillarLinksProps {
  locale: Locale
  current:
    | 'data-tracking'
    | 'performance-marketing'
    | 'marketing-automation'
    | 'customer-intelligence'
    | 'seo-acquisition'
}

const pillars = {
  fr: [
    {
      slug: 'data-tracking',
      title: 'Data Tracking',
      desc: 'GTM, GA4, pixel, CAPI, dataLayer et fiabilité de la mesure.',
      tag: 'Tracking',
    },
    {
      slug: 'performance-marketing',
      title: 'Performance Marketing',
      desc: 'Google Ads, Meta Ads, ROAS, attribution et optimisation.',
      tag: 'Acquisition',
    },
    {
      slug: 'marketing-automation',
      title: 'Marketing Automation',
      desc: 'CRM, emailing, n8n, workflows et lifecycle marketing.',
      tag: 'Automation',
    },
    {
      slug: 'customer-intelligence',
      title: 'Customer Intelligence',
      desc: 'Segmentation, qualité CRM, lifecycle et valeur client.',
      tag: 'CRM & Data',
    },
    {
      slug: 'seo-acquisition',
      title: 'SEO Acquisition',
      desc: 'SEO technique, indexation, contenu, maillage et croissance organique.',
      tag: 'SEO',
    },
  ],
  en: [
    {
      slug: 'data-tracking',
      title: 'Data Tracking',
      desc: 'GTM, GA4, pixel, CAPI, dataLayer and measurement reliability.',
      tag: 'Tracking',
    },
    {
      slug: 'performance-marketing',
      title: 'Performance Marketing',
      desc: 'Google Ads, Meta Ads, ROAS, attribution and optimization.',
      tag: 'Acquisition',
    },
    {
      slug: 'marketing-automation',
      title: 'Marketing Automation',
      desc: 'CRM, emailing, n8n, workflows and lifecycle marketing.',
      tag: 'Automation',
    },
    {
      slug: 'customer-intelligence',
      title: 'Customer Intelligence',
      desc: 'Segmentation, CRM quality, lifecycle and customer value.',
      tag: 'CRM & Data',
    },
    {
      slug: 'seo-acquisition',
      title: 'SEO Acquisition',
      desc: 'Technical SEO, indexing, content, internal linking and organic growth.',
      tag: 'SEO',
    },
  ],
} as const

export function PillarLinks({ locale, current }: PillarLinksProps) {
  const items = pillars[locale].filter((item) => item.slug !== current)

  return (
    <section className="border-t border-brand-border">
      <div className="pt-12">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-3">
            {locale === 'fr' ? 'Explorer aussi' : 'Explore also'}
          </p>
          <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight mb-3">
            {locale === 'fr'
              ? 'Autres piliers de l’écosystème'
              : 'Other pillars in the ecosystem'}
          </h2>
          <p className="text-brand-text-secondary max-w-3xl">
            {locale === 'fr'
              ? 'Ces pages sont pensées pour fonctionner ensemble : tracking, acquisition, automation, CRM et SEO.'
              : 'These pages are designed to work together: tracking, acquisition, automation, CRM and SEO.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {items.map((item) => (
            <Link key={item.slug} href={`/${locale}/${item.slug}`} className="group block">
              <Card variant="glass" hover padding="lg" className="h-full">
                <Badge variant="accent" size="sm" className="mb-3">
                  {item.tag}
                </Badge>
                <h3 className="font-display font-bold text-brand-text-primary mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 text-brand-accent text-sm">
                  <span>{locale === 'fr' ? 'Découvrir' : 'Discover'}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}