import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/animations/Reveal'
import { ArrowRight, Database, BarChart3, Workflow, Brain, Search } from 'lucide-react'

const pillars = {
  fr: [
    {
      slug: 'data-tracking',
      icon: Database,
      title: 'Data Tracking',
      desc: 'GTM, GA4, pixel, CAPI et fiabilité de la mesure.',
    },
    {
      slug: 'performance-marketing',
      icon: BarChart3,
      title: 'Performance Marketing',
      desc: 'Google Ads, Meta Ads, ROAS et attribution.',
    },
    {
      slug: 'marketing-automation',
      icon: Workflow,
      title: 'Marketing Automation',
      desc: 'CRM, emailing, workflows et n8n.',
    },
    {
      slug: 'customer-intelligence',
      icon: Brain,
      title: 'Customer Intelligence',
      desc: 'Segmentation, lifecycle et valeur client.',
    },
    {
      slug: 'seo-acquisition',
      icon: Search,
      title: 'SEO Acquisition',
      desc: 'SEO technique, contenu et croissance organique.',
    },
  ],
  en: [
    {
      slug: 'data-tracking',
      icon: Database,
      title: 'Data Tracking',
      desc: 'GTM, GA4, pixel, CAPI and measurement reliability.',
    },
    {
      slug: 'performance-marketing',
      icon: BarChart3,
      title: 'Performance Marketing',
      desc: 'Google Ads, Meta Ads, ROAS and attribution.',
    },
    {
      slug: 'marketing-automation',
      icon: Workflow,
      title: 'Marketing Automation',
      desc: 'CRM, emailing, workflows and n8n.',
    },
    {
      slug: 'customer-intelligence',
      icon: Brain,
      title: 'Customer Intelligence',
      desc: 'Segmentation, lifecycle and customer value.',
    },
    {
      slug: 'seo-acquisition',
      icon: Search,
      title: 'SEO Acquisition',
      desc: 'Technical SEO, content and organic growth.',
    },
  ],
} as const

export function PillarsPreview({ locale }: { locale?: 'fr' | 'en' }) {
  const safeLocale = locale === 'en' ? 'en' : 'fr'
  const items = pillars[safeLocale]

  return (
    <Section py="xl" className="border-t border-brand-border">
      <Container>
        <Reveal className="text-center mb-10">
          <Badge variant="accent" dot className="mb-4">
            {safeLocale === 'fr' ? 'Écosystème d’expertises' : 'Expertise ecosystem'}
          </Badge>
          <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
            {safeLocale === 'fr'
              ? '5 piliers pour piloter la croissance'
              : '5 pillars to drive growth'}
          </h2>
          <p className="text-brand-text-secondary max-w-3xl mx-auto">
            {safeLocale === 'fr'
              ? 'Tracking, acquisition, automation, data client et SEO : des expertises reliées entre elles pour construire une vraie architecture marketing.'
              : 'Tracking, acquisition, automation, customer data and SEO: connected expertise areas designed as one coherent marketing architecture.'}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.05}>
              <Link href={`/${safeLocale}/${item.slug}`} className="group block">
                <Card variant="glass" hover padding="lg" className="h-full">
                  <item.icon className="h-6 w-6 text-brand-accent mb-4" />
                  <h3 className="font-display font-bold text-brand-text-primary mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-brand-accent text-sm">
                    <span>{safeLocale === 'fr' ? 'Découvrir' : 'Discover'}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="text-center mt-8">
          <Link
            href={`/${safeLocale}/expertises-data-marketing`}
            className="inline-flex items-center gap-2 text-sm text-brand-accent hover:text-brand-accent-glow transition-colors"
          >
            <span>{safeLocale === 'fr' ? 'Voir le hub complet' : 'View full hub'}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  )
}