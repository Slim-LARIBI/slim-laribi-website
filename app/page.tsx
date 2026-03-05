import { Hero } from '@/components/home/Hero'
import { FunnelAttributionBlockV2 } from '@/components/hero/FunnelAttributionBlockV2'
import { CredibilityStrip } from '@/components/home/CredibilityStrip'
import { ExpertiseCards } from '@/components/home/ExpertiseCards'
import { Methodology } from '@/components/home/Methodology'
import { TrainingHighlight } from '@/components/home/TrainingHighlight'
import { CaseStudiesPreview } from '@/components/home/CaseStudiesPreview'
import { SaaSPreview } from '@/components/home/SaaSPreview'
import { TestimonialsPreview } from '@/components/home/TestimonialsPreview'
import { FinalCTA } from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FunnelAttributionBlockV2 />
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