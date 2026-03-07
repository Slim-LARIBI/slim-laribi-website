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
import {
  ArrowRight,
  Download,
  CheckCircle2,
  ShieldCheck,
  Database,
  BarChart3,
  Layers,
  Target,
} from 'lucide-react'

interface Props {
  params: { locale: 'fr' | 'en' }
}

const siteUrl = 'https://laribislim.com'
const pdfUrl = '/tracking-audit-checklist.pdf'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/tracking-audit-checklist`

  if (locale === 'fr') {
    return {
      title: 'Checklist Tracking Audit — GA4, GTM, Pixel, CAPI & Google Ads',
      description:
        'Téléchargez gratuitement la checklist Tracking Audit : GA4, Google Tag Manager, Meta Pixel, Conversions API, Google Ads et dataLayer.',
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr/tracking-audit-checklist`,
          'en-US': `${siteUrl}/en/tracking-audit-checklist`,
        },
      },
      openGraph: {
        title: 'Checklist Tracking Audit — GA4, GTM, Pixel, CAPI & Google Ads',
        description:
          'Téléchargez gratuitement la checklist Tracking Audit : GA4, Google Tag Manager, Meta Pixel, Conversions API, Google Ads et dataLayer.',
        url: pageUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: 'Checklist Tracking Audit — Slim Laribi',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Checklist Tracking Audit — GA4, GTM, Pixel, CAPI & Google Ads',
        description:
          'Checklist gratuite pour auditer votre stack tracking marketing.',
        images: [`${siteUrl}/og-image.jpg`],
      },
    }
  }

  return {
    title: 'Tracking Audit Checklist — GA4, GTM, Pixel, CAPI & Google Ads',
    description:
      'Download the free Tracking Audit Checklist: GA4, Google Tag Manager, Meta Pixel, Conversions API, Google Ads and dataLayer.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr/tracking-audit-checklist`,
        'en-US': `${siteUrl}/en/tracking-audit-checklist`,
      },
    },
  }
}

export default function TrackingAuditChecklistPage({ params }: Props) {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/tracking-audit-checklist`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: locale === 'fr' ? 'Accueil' : 'Home', url: `${siteUrl}/${locale}` },
          {
            name: locale === 'fr' ? 'Checklist Tracking Audit' : 'Tracking Audit Checklist',
            url: pageUrl,
          },
        ]}
      />

      <WebPageJsonLd
        name={locale === 'fr' ? 'Checklist Tracking Audit' : 'Tracking Audit Checklist'}
        description={
          locale === 'fr'
            ? 'Checklist gratuite pour auditer votre tracking marketing : GA4, GTM, Pixel, CAPI, Google Ads.'
            : 'Free checklist to audit your marketing tracking: GA4, GTM, Pixel, CAPI, Google Ads.'
        }
        url={pageUrl}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.32),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.18),transparent_20%),linear-gradient(to_bottom,#050505_0%,#090909_45%,#000000_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="absolute left-1/2 top-[10%] h-[440px] w-[840px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />

        <Container size="lg" className="relative z-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <Badge variant="accent" dot className="mb-5">
                  {locale === 'fr' ? 'Lead Magnet · Gratuit' : 'Lead Magnet · Free'}
                </Badge>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="font-display text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
                  {locale === 'fr' ? (
                    <>
                      Votre tracking
                      <br />
                      <span className="bg-gradient-to-r from-white via-violet-200 to-blue-300 bg-clip-text text-transparent">
                        est-il fiable ?
                      </span>
                    </>
                  ) : (
                    <>
                      Is your tracking
                      <br />
                      <span className="bg-gradient-to-r from-white via-violet-200 to-blue-300 bg-clip-text text-transparent">
                        actually reliable?
                      </span>
                    </>
                  )}
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-xl text-white/72 leading-relaxed mb-8 max-w-xl">
                  {locale === 'fr'
                    ? 'Téléchargez gratuitement la checklist Tracking Audit pour contrôler GA4, Google Tag Manager, Meta Pixel, Conversions API, Google Ads et dataLayer.'
                    : 'Download the free Tracking Audit Checklist to review GA4, Google Tag Manager, Meta Pixel, Conversions API, Google Ads and dataLayer.'}
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="space-y-3">
                  {[
                    locale === 'fr' ? 'Checklist claire et actionnable' : 'Clear and actionable checklist',
                    locale === 'fr' ? 'Pensée pour e-commerce, lead gen et marketers' : 'Built for e-commerce, lead gen and marketers',
                    locale === 'fr' ? 'Version PDF immédiate à télécharger' : 'Instant PDF download',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-white/72">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* FORM CARD */}
            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-md p-7 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-violet-300 mb-3">
                  {locale === 'fr' ? 'Téléchargement immédiat' : 'Instant download'}
                </p>

                <h2 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                  {locale === 'fr'
                    ? 'Recevoir la checklist'
                    : 'Get the checklist'}
                </h2>

                <p className="text-white/65 text-sm leading-relaxed mb-6">
                  {locale === 'fr'
                    ? 'Entrez votre email pour télécharger immédiatement le PDF. Nous pourrons ensuite vous envoyer d’autres ressources utiles sur le tracking et la performance.'
                    : 'Enter your email to instantly download the PDF. We may also send you other useful resources on tracking and performance.'}
                </p>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      {locale === 'fr' ? 'Email professionnel' : 'Work email'}
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={locale === 'fr' ? 'vous@entreprise.com' : 'you@company.com'}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-white/35 outline-none focus:border-violet-400 transition-colors"
                    />
                  </div>

                  <a href={pdfUrl} download className="block">
                    <Button
                      variant="primary"
                      size="xl"
                      className="w-full"
                      icon={<Download className="h-5 w-5" />}
                    >
                      {locale === 'fr'
                        ? 'Télécharger la checklist PDF'
                        : 'Download the PDF checklist'}
                    </Button>
                  </a>
                </form>

                <p className="text-xs text-white/40 mt-4 leading-relaxed">
                  {locale === 'fr'
                    ? 'En cliquant, vous acceptez de recevoir des contenus liés au tracking, au marketing et à la performance.'
                    : 'By clicking, you agree to receive content related to tracking, marketing and performance.'}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <Section py="xl" className="bg-[#050505] border-b border-brand-border">
        <Container>
          <Reveal className="text-center mb-12">
            <Badge variant="gold" dot className="mb-4">
              {locale === 'fr' ? 'Ce que contient la checklist' : 'What is inside'}
            </Badge>
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              {locale === 'fr'
                ? 'Une vue rapide de votre stack tracking'
                : 'A quick review of your tracking stack'}
            </h2>
            <p className="text-brand-text-secondary max-w-3xl mx-auto">
              {locale === 'fr'
                ? 'Le but n’est pas d’ajouter plus de tags. Le but est de vérifier si votre mesure est exploitable, fiable et utile pour piloter vos décisions marketing.'
                : 'The goal is not to add more tags. The goal is to check whether your measurement is usable, reliable and useful for decision-making.'}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {[
              {
                icon: BarChart3,
                title: locale === 'fr' ? 'GA4' : 'GA4',
                text:
                  locale === 'fr'
                    ? 'Événements, conversions, cohérence des signaux et qualité de lecture.'
                    : 'Events, conversions, signal consistency and reporting quality.',
              },
              {
                icon: Layers,
                title: locale === 'fr' ? 'Google Tag Manager' : 'Google Tag Manager',
                text:
                  locale === 'fr'
                    ? 'Variables, déclencheurs, structure, déduplication et logique de setup.'
                    : 'Variables, triggers, structure, deduplication and setup logic.',
              },
              {
                icon: Target,
                title: locale === 'fr' ? 'Meta Pixel & CAPI' : 'Meta Pixel & CAPI',
                text:
                  locale === 'fr'
                    ? 'Continuité des signaux publicitaires et qualité d’optimisation.'
                    : 'Ad signal continuity and optimization quality.',
              },
              {
                icon: Database,
                title: locale === 'fr' ? 'Google Ads & dataLayer' : 'Google Ads & dataLayer',
                text:
                  locale === 'fr'
                    ? 'Conversion Linker, événements clés et structure de données utile.'
                    : 'Conversion Linker, key events and usable data structure.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <Card variant="glass" padding="lg" className="h-full">
                  <item.icon className="h-6 w-6 text-brand-accent mb-4" />
                  <h3 className="font-display text-xl font-bold text-brand-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed">
                    {item.text}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHO IS IT FOR */}
      <Section py="xl" className="bg-[#07070a] border-b border-brand-border">
        <Container size="md">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-4xl font-black text-brand-text-primary tracking-tight mb-4">
              {locale === 'fr'
                ? 'À qui cette checklist est utile'
                : 'Who this checklist is for'}
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              locale === 'fr'
                ? 'Responsables e-commerce qui veulent auditer rapidement leur stack.'
                : 'E-commerce managers who want to quickly audit their stack.',
              locale === 'fr'
                ? 'Traffic managers qui doutent de la qualité réelle des conversions.'
                : 'Traffic managers who doubt the real quality of conversion data.',
              locale === 'fr'
                ? 'Agences qui veulent une base claire avant audit ou mission.'
                : 'Agencies who want a clear baseline before an audit or mission.',
              locale === 'fr'
                ? 'Équipes marketing qui utilisent GA4, GTM, Meta et Google Ads.'
                : 'Marketing teams using GA4, GTM, Meta and Google Ads.',
            ].map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl border border-brand-border bg-white/[0.03] p-4">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-brand-text-secondary">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden border-t border-white/10 bg-black text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(124,58,237,0.20),transparent_28%),linear-gradient(to_bottom,#050505_0%,#000000_100%)]" />
        <div className="absolute left-1/2 top-1/2 h-56 w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        <Container size="sm" className="relative z-10 py-24">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
              {locale === 'fr'
                ? 'Téléchargez la checklist maintenant'
                : 'Download the checklist now'}
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-white/70 mb-8">
              {locale === 'fr'
                ? 'Une ressource simple, concrète et directement utile pour vérifier votre tracking.'
                : 'A simple, practical and useful resource to review your tracking.'}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <a href={pdfUrl} download>
              <Button
                variant="primary"
                size="xl"
                icon={<Download className="h-5 w-5" />}
              >
                {locale === 'fr'
                  ? 'Télécharger le PDF'
                  : 'Download the PDF'}
              </Button>
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  )
}