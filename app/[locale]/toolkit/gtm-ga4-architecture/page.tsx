import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Download } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Toolkit — GTM + GA4 Architecture Diagram',
  description:
    'Diagramme interactif GTM + GA4 pour comprendre l’architecture tracking e-commerce : dataLayer, GTM, GA4, conversions, consent mode et activation Ads.',
}

export default function GtmGa4ToolkitPage({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}) {
  const locale = params.locale || 'fr'

  return (
    <main className="min-h-screen bg-[#080914]">
      <section className="hero-bg border-b border-brand-border py-14">
        <Container>
          <Link
            href={`/${locale}/toolkit`}
            className="mb-8 inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au toolkit
          </Link>

          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="gold" dot className="mb-5">
              Toolkit · Tracking · GTM · GA4
            </Badge>

            <h1 className="font-display text-4xl font-black tracking-tight text-brand-text-primary md:text-6xl">
              GTM + GA4 Architecture Diagram
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-brand-text-secondary">
              Un support visuel avancé pour expliquer comment structurer un tracking e-commerce
              complet : dataLayer, GTM, GA4, conversions, consent mode, reporting et activation Ads.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/toolkit/gtm-ga4-architecture.html" target="_blank">
                <Button variant="primary" icon={<ExternalLink className="h-4 w-4" />}>
                  Ouvrir en plein écran
                </Button>
              </a>

              <a href="/toolkit/gtm-ga4-architecture.html" download>
                <Button
                  variant="gold"
                  icon={<Download className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Télécharger le HTML
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-soft-bg py-10 px-4 md:px-8">
        <Container>
          <div className="mx-auto max-w-[1800px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_0_80px_rgba(124,111,247,0.12)]">
            <iframe
            src="/toolkit/gtm-ga4-architecture.html"
            title="GTM + GA4 Architecture Diagram"
            className="h-[2600px] w-full border-0 bg-transparent"
            />
          </div>
        </Container>
      </section>
    </main>
  )
}