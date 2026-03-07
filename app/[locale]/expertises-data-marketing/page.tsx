import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd'
import { ArrowRight, Database, BarChart3, Workflow, Brain, Search } from 'lucide-react'

interface Props {
  params: { locale: 'fr' | 'en' }
}

const siteUrl = 'https://laribislim.com'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/expertises-data-marketing`

  if (locale === 'fr') {
    return {
      title: 'Expertises Data Marketing — Tracking, Acquisition, CRM, Automation & SEO',
      description:
        'Découvrez les grandes expertises data marketing de Slim Laribi : data tracking, performance marketing, marketing automation, customer intelligence et SEO acquisition.',
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr/expertises-data-marketing`,
          'en-US': `${siteUrl}/en/expertises-data-marketing`,
        },
      },
    }
  }

  return {
    title: 'Data Marketing Expertise — Tracking, Acquisition, CRM, Automation & SEO',
    description:
      'Explore Slim Laribi’s core data marketing expertise: data tracking, performance marketing, marketing automation, customer intelligence and SEO acquisition.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr/expertises-data-marketing`,
        'en-US': `${siteUrl}/en/expertises-data-marketing`,
      },
    },
  }
}

const pillars = [
  {
    slug: 'data-tracking',
    icon: Database,
    title: 'Data Tracking',
    desc: 'GTM, GA4, pixel, CAPI, dataLayer et fiabilité de la mesure.',
    tag: 'Tracking',
  },
  {
    slug: 'performance-marketing',
    icon: BarChart3,
    title: 'Performance Marketing',
    desc: 'Google Ads, Meta Ads, ROAS, attribution et optimisation.',
    tag: 'Acquisition',
  },
  {
    slug: 'marketing-automation',
    icon: Workflow,
    title: 'Marketing Automation',
    desc: 'CRM, emailing, n8n, workflows et lifecycle marketing.',
    tag: 'Automation',
  },
  {
    slug: 'customer-intelligence',
    icon: Brain,
    title: 'Customer Intelligence',
    desc: 'Segmentation, qualité CRM, lifecycle et valeur client.',
    tag: 'CRM & Data',
  },
  {
    slug: 'seo-acquisition',
    icon: Search,
    title: 'SEO Acquisition',
    desc: 'SEO technique, indexation, contenu, maillage et croissance organique.',
    tag: 'SEO',
  },
]

export default function ExpertisesDataMarketingPage({ params }: Props) {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/expertises-data-marketing`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: locale === 'fr' ? 'Accueil' : 'Home', url: `${siteUrl}/${locale}` },
          {
            name: locale === 'fr' ? 'Expertises Data Marketing' : 'Data Marketing Expertise',
            url: pageUrl,
          },
        ]}
      />

      <WebPageJsonLd
        name={locale === 'fr' ? 'Expertises Data Marketing' : 'Data Marketing Expertise'}
        description={
          locale === 'fr'
            ? 'Hub des expertises data marketing : tracking, acquisition, automation, CRM et SEO.'
            : 'Hub for data marketing expertise: tracking, acquisition, automation, CRM and SEO.'
        }
        url={pageUrl}
      />

      <Section py="2xl" className="hero-bg">
        <Container size="md" className="text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              {locale === 'fr' ? 'Hub d’expertises' : 'Expertise hub'}
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-6 leading-tight">
              {locale === 'fr' ? 'Expertises Data Marketing.' : 'Data Marketing Expertise.'}
              <br />
              <span className="text-gradient-brand">
                {locale === 'fr'
                  ? 'Un écosystème cohérent, pas des sujets isolés.'
                  : 'A coherent ecosystem, not isolated topics.'}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
              {locale === 'fr'
                ? 'Cette page regroupe les 5 grands piliers du site : data tracking, performance marketing, marketing automation, customer intelligence et SEO acquisition. Ensemble, ils forment une architecture complète orientée croissance.'
                : 'This page brings together the 5 strategic pillars of the site: data tracking, performance marketing, marketing automation, customer intelligence and SEO acquisition.'}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <Link href={`/${locale}/contact`}>
              <Button variant="primary" size="xl" icon={<ArrowRight className="h-5 w-5" />}>
                {locale === 'fr' ? 'Réserver un appel' : 'Book a call'}
              </Button>
            </Link>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl">
        <Container>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {pillars.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.06}>
                <Link href={`/${locale}/${item.slug}`} className="group block">
                  <Card variant="glass" hover padding="lg" className="h-full">
                    <item.icon className="h-6 w-6 text-brand-accent mb-4" />
                    <Badge variant="accent" size="sm" className="mb-3">
                      {item.tag}
                    </Badge>
                    <h2 className="font-display text-2xl font-bold text-brand-text-primary mb-3 group-hover:text-white transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-brand-accent text-sm">
                      <span>{locale === 'fr' ? 'Explorer' : 'Explore'}</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}