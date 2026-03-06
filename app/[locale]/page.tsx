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
        "Oui, la formation Customer Intelligence (90h sur 3 mois) est en présentiel, en groupes réduits, avec ateliers pratiques et projet capstone.",
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
        "I help e-commerce teams grow revenue through: tracking (GTM/GA4/server-side), performance marketing (Google/Meta), CRM & automation, and data strategy.",
    },
    {
      question: 'Do you provide a tracking audit?',
      answer:
        "Yes. Full audit (Pixel/GA4/GTM/CAPI), gap analysis, and a prioritized action plan to improve measurement reliability and ROAS.",
    },
    {
      question: 'Is the 90h training in-person?',
      answer:
        "Yes. The Customer Intelligence program (90h over 3 months) is in-person, small groups, with hands-on workshops and a capstone project.",
    },
    {
      question: 'How can I contact you?',
      answer:
        "Use the Contact page to book a 30-minute call so we can define the best option (audit, coaching, or training).",
    },
  ],
} as const

export default function HomePage({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}) {
  const faqs = [...(FAQS[params.locale] ?? FAQS.fr)]

  return (
    <>
      {/* ✅ Knowledge Graph */}
      <OrganizationPersonJsonLd locale={params.locale} />

      {/* ✅ FAQ Schema */}
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