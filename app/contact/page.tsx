import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/animations/Reveal'
import { AmbientGlow } from '@/components/animations/ParallaxGlow'
import { ContactForm } from '@/components/contact/ContactForm'
import { MapPin, Mail, Clock, Phone, Calendar, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Réserver un appel ou discuter d\'un projet',
  description:
    'Réservez un appel découverte de 30 minutes ou envoyez un message pour discuter d\'une mission consulting, d\'un audit tracking ou d\'une formation.',
}

const contactInfo = [
  {
    icon: Clock,
    label: 'Réponse garantie',
    value: 'Sous 24h ouvrées',
  },
  {
    icon: Phone,
    label: 'Appel découverte',
    value: '30 minutes, gratuit',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'France · Remote OK',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@slimlaribi.com',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
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
            <Badge variant="accent" dot className="mb-5">Contact</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black text-brand-text-primary tracking-tight mb-5">
              Parlons de votre{' '}
              <span className="text-gradient-brand">projet.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-brand-text-secondary max-w-xl mx-auto">
              Mission consulting, audit tracking, formation ou projet SaaS — un premier appel de 30 minutes suffit pour qualifier votre besoin et voir si je peux vous aider.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Main content */}
      <Section py="xl">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — Info + Calendly */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact info */}
              <Reveal>
                <Card variant="glass" padding="lg">
                  <h2 className="font-display font-bold text-brand-text-primary mb-5">
                    Informations
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

              {/* Calendly placeholder */}
              <Reveal delay={0.05}>
                <Card variant="glass" padding="lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-brand-gold" />
                    <h3 className="font-display font-bold text-brand-text-primary">
                      Réserver un créneau
                    </h3>
                  </div>
                  <p className="text-sm text-brand-text-secondary mb-4">
                    Réservez directement un appel découverte de 30 minutes dans mon agenda.
                  </p>

                  {/* Calendly embed placeholder */}
                  <div className="h-48 rounded-xl bg-brand-surface border border-brand-border flex flex-col items-center justify-center gap-3">
                    <Calendar className="h-8 w-8 text-brand-text-muted" />
                    <p className="text-xs text-brand-text-muted text-center">
                      Widget Calendly
                      <br />
                      <span className="text-brand-accent">à intégrer ici</span>
                    </p>
                    <a
                      href="https://calendly.com/slim-laribi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-brand-accent hover:text-brand-accent-glow transition-colors underline underline-offset-2"
                    >
                      Ouvrir Calendly →
                    </a>
                  </div>
                </Card>
              </Reveal>

              {/* Social */}
              <Reveal delay={0.1}>
                <Card variant="glass" padding="lg">
                  <h3 className="font-display font-bold text-brand-text-primary mb-4">
                    Réseaux
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

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <Reveal direction="left">
                <Card variant="glass" padding="xl">
                  <div className="mb-7">
                    <h2 className="font-display text-2xl font-bold text-brand-text-primary mb-2">
                      Envoyez un message
                    </h2>
                    <p className="text-sm text-brand-text-secondary">
                      Remplissez ce formulaire et je vous répondrai sous 24h ouvrées avec une première analyse de votre situation.
                    </p>
                  </div>

                  <ContactForm />
                </Card>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* What to expect */}
      <Section py="xl" className="border-t border-brand-border bg-brand-surface/20">
        <Container>
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl font-black text-brand-text-primary tracking-tight">
              Comment ça se passe ?
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Appel de découverte',
                description: '30 minutes pour comprendre votre contexte, vos enjeux et vos objectifs. Sans engagement.',
              },
              {
                step: '02',
                title: 'Proposition personnalisée',
                description: 'Je vous envoie une proposition de mission ou de formation adaptée à vos besoins, avec un planning et des livrables précis.',
              },
              {
                step: '03',
                title: 'On démarre',
                description: 'Après validation, on fixe les jalons et on commence. Premier livrable dans les 2 semaines suivant le kick-off.',
              },
            ].map((step, i) => (
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
