import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'GTM + GA4 Architecture — Playbook Tracking E-commerce',
  description:
    'Architecture visuelle GTM + GA4 pour expliquer le tracking e-commerce, le dataLayer, GA4, Google Ads, Meta Ads et l’optimisation ROAS.',
}

export default function GtmGa4ArchitecturePage({
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
            href={`/${locale}/playbooks`}
            className="mb-8 inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux playbooks
          </Link>

          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="accent" dot className="mb-5">
              Playbook · Tracking · GA4 · GTM
            </Badge>

            <h1 className="font-display text-4xl font-black tracking-tight text-brand-text-primary md:text-6xl">
              GTM + GA4 Architecture
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-brand-text-secondary">
              Une visualisation complète pour expliquer aux étudiants comment une action utilisateur devient un événement, une conversion, une audience et un signal d’optimisation Ads.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/playbooks/gtm-ga4-architecture.html" target="_blank">
                <Button variant="primary">Ouvrir en plein écran</Button>
              </a>

              <a href="/playbooks/gtm-ga4-architecture.html" download>
                <Button
                  variant="gold"
                  icon={<Download className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Télécharger le playbook
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-soft-bg py-10">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-glow-sm">
            <iframe
              src="/playbooks/gtm-ga4-architecture.html"
              title="GTM + GA4 Architecture"
              className="h-[1200px] w-full border-0 bg-transparent"
            />
          </div>
        </Container>
      </section>
    </main>
  )
}