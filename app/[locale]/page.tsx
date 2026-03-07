import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { CredibilityStrip } from '@/components/home/CredibilityStrip'
import { ExpertiseCards } from '@/components/home/ExpertiseCards'
import { Methodology } from '@/components/home/Methodology'
import { TrainingHighlight } from '@/components/home/TrainingHighlight'
import { CaseStudiesPreview } from '@/components/home/CaseStudiesPreview'
import { SaaSPreview } from '@/components/home/SaaSPreview'
import { TestimonialsPreview } from '@/components/home/TestimonialsPreview'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQJsonLd } from '@/components/seo/FAQJsonLd'
import { OrganizationPersonJsonLd } from '@/components/seo/OrganizationPersonJsonLd'

const siteUrl = 'https://laribislim.com'

const FAQS = {
  fr: [
    {
      question: 'Quels services propose Slim Laribi ?',
      answer:
        "J’aide les équipes e-commerce à augmenter leurs ventes via : tracking (GTM/GA4/server-side), performance marketing (Google/Meta), CRM & automation, et stratégie data.",
    },
    {
      question: 'Proposes-tu un audit tracking ?',
      answer:
        "Oui. Audit complet (Pixel/GA4/GTM/CAPI), diagnostic des écarts, et plan d’actions priorisé pour fiabiliser la mesure et améliorer le ROAS.",
    },
    {
      question: 'La formation 90h est-elle en présentiel ?',
      answer:
        'Oui, la formation Customer Intelligence (90h sur 3 mois) est en présentiel, en groupes réduits, avec ateliers pratiques et projet capstone.',
    },
    {
      question: 'Comment te contacter ?',
      answer:
        "Le plus simple : passer par la page Contact pour réserver un appel de 30 minutes et définir ensemble le besoin (audit, accompagnement, formation).",
    },
  ],
  en: [
    {
      question: 'What services does Slim Laribi offer?',
      answer:
        'I help e-commerce teams grow revenue through: tracking (GTM/GA4/server-side), performance marketing (Google/Meta), CRM & automation, and data strategy.',
    },
    {
      question: 'Do you provide a tracking audit?',
      answer:
        'Yes. Full audit (Pixel/GA4/GTM/CAPI), gap analysis, and a prioritized action plan to improve measurement reliability and ROAS.',
    },
    {
      question: 'Is the 90h training in-person?',
      answer:
        'Yes. The Customer Intelligence program (90h over 3 months) is in-person, small groups, with hands-on workshops and a capstone project.',
    },
    {
      question: 'How can I contact you?',
      answer:
        'Use the Contact page to book a 30-minute call so we can define the best option (audit, coaching, or training).',
    },
  ],
} as const

export async function generateMetadata({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}`

  if (locale === 'fr') {
    return {
      title: 'Slim Laribi — Expert Tracking, Data Marketing & MarTech',
      description:
        'Consultant en tracking, data marketing et architecture MarTech. Audit tracking, server-side GTM, CAPI, performance marketing et formation Customer Intelligence.',
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr`,
          'en-US': `${siteUrl}/en`,
        },
      },
      openGraph: {
        title: 'Slim Laribi — Expert Tracking, Data Marketing & MarTech',
        description:
          'Consultant en tracking, data marketing et architecture MarTech. Audit tracking, server-side GTM, CAPI, performance marketing et formation Customer Intelligence.',
        url: pageUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: 'Slim Laribi',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Slim Laribi — Expert Tracking, Data Marketing & MarTech',
        description:
          'Consultant en tracking, data marketing et architecture MarTech. Audit tracking, server-side GTM, CAPI, performance marketing et formation Customer Intelligence.',
        images: [`${siteUrl}/og-image.jpg`],
      },
    }
  }

  return {
    title: 'Slim Laribi — Tracking & Data Marketing Expert',
    description:
      'Tracking, data marketing and MarTech expert. Server-side tracking, GTM, CAPI, performance marketing and Customer Intelligence training.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr`,
        'en-US': `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: 'Slim Laribi — Tracking & Data Marketing Expert',
      description:
        'Tracking, data marketing and MarTech expert. Server-side tracking, GTM, CAPI, performance marketing and Customer Intelligence training.',
      url: pageUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Slim Laribi',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Slim Laribi — Tracking & Data Marketing Expert',
      description:
        'Tracking, data marketing and MarTech expert. Server-side tracking, GTM, CAPI, performance marketing and Customer Intelligence training.',
      images: [`${siteUrl}/og-image.jpg`],
    },
  }
}

export default function HomePage({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}) {
  const faqs = [...(FAQS[params.locale] ?? FAQS.fr)]

  return (
    <>
      <OrganizationPersonJsonLd locale={params.locale} />
      <FAQJsonLd items={faqs} />

      <Hero />
      <CredibilityStrip />
      <ExpertiseCards />
      <Methodology />
      <TrainingHighlight />
      <CaseStudiesPreview />
      <SaaSPreview />
      <TestimonialsPreview />
      <FinalCTA />
    </>
  )
}