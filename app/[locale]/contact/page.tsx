import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/animations/Reveal'
import { AmbientGlow } from '@/components/animations/ParallaxGlow'
import { ContactForm } from '@/components/contact/ContactForm'
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'
import { WebPageJsonLd } from '@/components/seo/WebPageJsonLd'
import { MapPin, Mail, Clock, Phone, Calendar, Linkedin } from 'lucide-react'

const siteUrl = 'https://laribislim.com'

export async function generateMetadata({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}): Promise<Metadata> {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/contact`

  if (locale === 'fr') {
    return {
      title: 'Contact Expert Tracking & Data Marketing',
      description:
        "Besoin d’un audit tracking ou d’une stratégie data marketing ? Contactez Slim Laribi pour discuter de votre projet.",
      alternates: {
        canonical: pageUrl,
        languages: {
          'fr-FR': `${siteUrl}/fr/contact`,
          'en-US': `${siteUrl}/en/contact`,
        },
      },
      openGraph: {
        title: 'Contact Expert Tracking & Data Marketing',
        description:
          "Besoin d’un audit tracking ou d’une stratégie data marketing ? Contactez Slim Laribi pour discuter de votre projet.",
        url: pageUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: 'Contact — Slim Laribi',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Contact Expert Tracking & Data Marketing',
        description:
          "Besoin d’un audit tracking ou d’une stratégie data marketing ? Contactez Slim Laribi pour discuter de votre projet.",
        images: [`${siteUrl}/og-image.jpg`],
      },
    }
  }

  return {
    title: 'Contact Tracking & Data Marketing Expert',
    description:
      'Need a tracking audit or a data marketing strategy? Contact Slim Laribi to discuss your project.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'fr-FR': `${siteUrl}/fr/contact`,
        'en-US': `${siteUrl}/en/contact`,
      },
    },
    openGraph: {
      title: 'Contact Tracking & Data Marketing Expert',
      description:
        'Need a tracking audit or a data marketing strategy? Contact Slim Laribi to discuss your project.',
      url: pageUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Contact — Slim Laribi',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Tracking & Data Marketing Expert',
      description:
        'Need a tracking audit or a data marketing strategy? Contact Slim Laribi to discuss your project.',
      images: [`${siteUrl}/og-image.jpg`],
    },
  }
}

export default function ContactPage({
  params,
}: {
  params: { locale: 'fr' | 'en' }
}) {
  const locale = params.locale || 'fr'
  const pageUrl = `${siteUrl}/${locale}/contact`

  const contactInfo =
    locale === 'fr'
      ? [
          { icon: Clock, label: 'Réponse garantie', value: 'Sous 24h ouvrées' },
          { icon: Phone, label: 'Appel découverte', value: '30 minutes, gratuit' },
          { icon: MapPin, label: 'Localisation', value: 'France · Remote OK' },
          { icon: Mail, label: 'Email', value: 'contact@laribislim.com' },
        ]
      : [
          { icon: Clock, label: 'Guaranteed response', value: 'Within 24 business hours' },
          { icon: Phone, label: 'Discovery call', value: '30 minutes, free' },
          { icon: MapPin, label: 'Location', value: 'France · Remote OK' },
          { icon: Mail, label: 'Email', value: 'contact@laribislim.com' },
        ]

  const pageName =
    locale === 'fr'
      ? "Contact — Réserver un appel ou discuter d'un projet"
      : 'Contact — Book a call or discuss a project'

  const pageDescription =
    locale === 'fr'
      ? "Réservez un appel découverte de 30 minutes ou envoyez un message pour discuter d'une mission consulting, d'un audit tracking ou d'une formation."
      : 'Book a 30-minute discovery call or send a message to discuss a consulting mission, a tracking audit or a training need.'

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: locale === 'fr' ? 'Accueil' : 'Home',
            url: `${siteUrl}/${locale}`,
          },
          {
            name: locale === 'fr' ? 'Contact' : 'Contact',
            url: pageUrl,
          },
        ]}
      />

      <WebPageJsonLd name={pageName} description={pageDescription} url={pageUrl} />

      <Section py="2xl" className="relative hero-bg">
        <AmbientGlow
          className="top-1/3 right-1/4 -translate-y-1/2"
          color="#7c6ff7"
          opacity={0.07}
          width={500}
          height={250}
        />

        <Container size="md" className="relative z-10 text-center">
          <Reveal>
            <Badge variant="accent" dot className="mb-5">
              {locale === 'fr' ? 'Contact' : 'Contact'}
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              {locale === 'fr' ? (
                <>
                  Parlons de votre <span className="text-gradient-brand">projet.</span>
                </>
              ) : (
                <>
                  Let&apos;s talk about your <span className="text-gradient-brand">project.</span>
                </>
              )}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary max-w-xl mx-auto">
              {locale === 'fr'
                ? 'Mission consulting, audit tracking, formation ou projet SaaS — un premier appel de 30 minutes suffit pour qualifier votre besoin et voir si je peux vous aider.'
                : 'Consulting mission, tracking audit, training or SaaS project — a 30-minute first call is enough to qualify your need and see how I can help.'}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section py="xl">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-5">
              <Reveal>
                <Card variant="glass" padding="lg">
                  <h2 className="font-display font-bold text-brand-text-primary mb-5">
                    {locale === 'fr' ? 'Informations' : 'Information'}
                  </h2>

                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                          <item.icon className="h-4 w-4 text-brand-accent" />
                        </div>
                        <div>
                          <p className="text-xs text-brand-text-muted">{item.label}</p>
                          <p className="text-sm font-medium text-brand-text-primary">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>

              <Reveal delay={0.05}>
                <Card variant="glass" padding="lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-brand-gold" />
                    <h3 className="font-display font-bold text-brand-text-primary">
                      {locale === 'fr' ? 'Réserver un créneau' : 'Book a slot'}
                    </h3>
                  </div>

                  <p className="text-sm text-brand-text-secondary mb-4">
                    {locale === 'fr'
                      ? 'Réservez directement un appel découverte de 30 minutes dans mon agenda.'
                      : 'Book a 30-minute discovery call directly in my calendar.'}
                  </p>

                  <div className="h-48 rounded-xl bg-brand-surface border border-brand-border flex flex-col items-center justify-center gap-3">
                    <Calendar className="h-8 w-8 text-brand-text-muted" />
                    <p className="text-xs text-brand-text-muted text-center">
                      {locale === 'fr' ? (
                        <>
                          Widget Calendly
                          <br />
                          <span className="text-brand-accent">à intégrer ici</span>
                        </>
                      ) : (
                        <>
                          Calendly widget
                          <br />
                          <span className="text-brand-accent">to integrate here</span>
                        </>
                      )}
                    </p>

                    <a
                      href="https://calendly.com/slim-laribi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-brand-accent hover:text-brand-accent-glow transition-colors underline underline-offset-2"
                    >
                      {locale === 'fr' ? 'Ouvrir Calendly →' : 'Open Calendly →'}
                    </a>
                  </div>
                </Card>
              </Reveal>

              <Reveal delay={0.1}>
                <Card variant="glass" padding="lg">
                  <h3 className="font-display font-bold text-brand-text-primary mb-4">
                    {locale === 'fr' ? 'Réseaux' : 'Social'}
                  </h3>

                  <div className="space-y-3">
                    {[
                      {
                        icon: Linkedin,
                        label: 'LinkedIn',
                        handle: 'slim-laribi',
                        href: 'https://linkedin.com/in/slim-laribi',
                        color: 'text-blue-400',
                        bg: 'bg-blue-500/10 border-blue-500/20',
                      },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors group"
                      >
                        <div className={`h-8 w-8 rounded-lg border flex items-center justify-center ${social.bg}`}>
                          <social.icon className={`h-4 w-4 ${social.color}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-brand-text-primary">{social.label}</p>
                          <p className="text-xs text-brand-text-muted">@{social.handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </Card>
              </Reveal>
            </div>

            <div className="lg:col-span-3">
              <Reveal direction="left">
                <Card variant="glass" padding="xl">
                  <div className="mb-7">
                    <h2 className="font-display text-2xl font-bold text-brand-text-primary mb-2">
                      {locale === 'fr' ? 'Envoyez un message' : 'Send a message'}
                    </h2>

                    <p className="text-sm text-brand-text-secondary">
                      {locale === 'fr'
                        ? 'Remplissez ce formulaire et je vous répondrai sous 24h ouvrées avec une première analyse de votre situation.'
                        : 'Fill out this form and I will reply within 24 business hours with an initial analysis of your situation.'}
                    </p>
                  </div>

                  <ContactForm />
                </Card>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section py="xl" className="border-t border-brand-border bg-brand-surface/20">
        <Container>
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight">
              {locale === 'fr' ? 'Comment ça se passe ?' : 'How does it work?'}
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {(
              locale === 'fr'
                ? [
                    {
                      step: '01',
                      title: 'Appel de découverte',
                      description:
                        '30 minutes pour comprendre votre contexte, vos enjeux et vos objectifs. Sans engagement.',
                    },
                    {
                      step: '02',
                      title: 'Proposition personnalisée',
                      description:
                        'Je vous envoie une proposition de mission ou de formation adaptée à vos besoins, avec un planning et des livrables précis.',
                    },
                    {
                      step: '03',
                      title: 'On démarre',
                      description:
                        'Après validation, on fixe les jalons et on commence. Premier livrable dans les 2 semaines suivant le kick-off.',
                    },
                  ]
                : [
                    {
                      step: '01',
                      title: 'Discovery call',
                      description:
                        '30 minutes to understand your context, challenges and goals. No commitment.',
                    },
                    {
                      step: '02',
                      title: 'Custom proposal',
                      description:
                        'I send you a consulting or training proposal tailored to your needs, with a clear timeline and deliverables.',
                    },
                    {
                      step: '03',
                      title: 'We start',
                      description:
                        'Once validated, we set milestones and kick off. First deliverable within 2 weeks after kickoff.',
                    },
                  ]
            ).map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 mb-4">
                    <span className="font-display text-sm font-black text-brand-accent">{step.step}</span>
                  </div>
                  <h3 className="font-display font-bold text-brand-text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}