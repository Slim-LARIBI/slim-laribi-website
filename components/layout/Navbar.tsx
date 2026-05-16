'use client'

import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Link } from '@/components/i18n/Link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  BookOpen,
  Layers,
  FlaskConical,
  Wrench,
} from 'lucide-react'

type Locale = 'fr' | 'en'

interface HeaderProps {
  locale: Locale
}

const labels = {
  fr: {
    expertises: 'Expertises',
    formation: 'Formation',
    caseStudies: 'Cas clients',
    insights: 'Insights',
    about: 'À propos',
    contact: 'Contact',
    cta: 'Réserver un appel',
    mobileMenu: 'Menu',
  },
  en: {
    expertises: 'Expertise',
    formation: 'Training',
    caseStudies: 'Case Studies',
    insights: 'Insights',
    about: 'About',
    contact: 'Contact',
    cta: 'Book a call',
    mobileMenu: 'Menu',
  },
} as const

const expertiseItems = {
  fr: [
    { href: '/data-tracking', label: 'Data Tracking' },
    { href: '/performance-marketing', label: 'Performance Marketing' },
    { href: '/marketing-automation', label: 'Marketing Automation' },
    { href: '/customer-intelligence', label: 'Customer Intelligence' },
    { href: '/seo-acquisition', label: 'SEO Acquisition' },
  ],
  en: [
    { href: '/data-tracking', label: 'Data Tracking' },
    { href: '/performance-marketing', label: 'Performance Marketing' },
    { href: '/marketing-automation', label: 'Marketing Automation' },
    { href: '/customer-intelligence', label: 'Customer Intelligence' },
    { href: '/seo-acquisition', label: 'SEO Acquisition' },
  ],
} as const

const insightItems = {
  fr: [
    {
      href: '/blog',
      label: 'Blog',
      description: 'Articles, analyses et retours terrain.',
      icon: BookOpen,
    },
    {
      href: '/playbooks',
      label: 'Playbooks',
      description: 'Guides pratiques étape par étape.',
      icon: Layers,
    },
    {
      href: '/labs',
      label: 'Labs',
      description: 'SaaS, IA, automation et expérimentations.',
      icon: FlaskConical,
    },
    {
      href: '/toolkit',
      label: 'Toolkit',
      description: 'Templates, checklists et ressources.',
      icon: Wrench,
    },
  ],
  en: [
    {
      href: '/blog',
      label: 'Blog',
      description: 'Articles, analysis and field insights.',
      icon: BookOpen,
    },
    {
      href: '/playbooks',
      label: 'Playbooks',
      description: 'Step-by-step practical guides.',
      icon: Layers,
    },
    {
      href: '/labs',
      label: 'Labs',
      description: 'SaaS, AI, automation and experiments.',
      icon: FlaskConical,
    },
    {
      href: '/toolkit',
      label: 'Toolkit',
      description: 'Templates, checklists and resources.',
      icon: Wrench,
    },
  ],
} as const

function switchLocaleInPath(pathname: string, targetLocale: Locale) {
  if (!pathname) return `/${targetLocale}`

  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) {
    return `/${targetLocale}`
  }

  if (segments[0] === 'fr' || segments[0] === 'en') {
    segments[0] = targetLocale
    return `/${segments.join('/')}`
  }

  return `/${targetLocale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`
}

export function Navbar({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false)
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false)
  const pathname = usePathname()

  const t = labels[locale]
  const items = expertiseItems[locale]
  const insights = insightItems[locale]

  const frHref = useMemo(() => switchLocaleInPath(pathname || '/', 'fr'), [pathname])
  const enHref = useMemo(() => switchLocaleInPath(pathname || '/', 'en'), [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="shrink-0">
            <span className="font-display text-xl font-black tracking-tight text-brand-text-primary md:text-2xl">
              Slim <span className="uppercase">LARIBI</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-text-primary"
              >
                <span>{t.expertises}</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-80 rounded-2xl border border-brand-border bg-brand-bg/95 p-3 shadow-2xl backdrop-blur-xl">
                  <div className="grid gap-1">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl px-4 py-3 transition-colors hover:bg-white/[0.04]"
                      >
                        <div className="text-sm font-semibold text-brand-text-primary">
                          {item.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/formation"
              className="text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-text-primary"
            >
              {t.formation}
            </Link>

            <Link
              href="/case-studies"
              className="text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-text-primary"
            >
              {t.caseStudies}
            </Link>

            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-text-primary"
              >
                <span>{t.insights}</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-[520px] rounded-2xl border border-brand-border bg-brand-bg/95 p-3 shadow-2xl backdrop-blur-xl">
                  <div className="grid grid-cols-2 gap-2">
                    {insights.map((item) => {
                      const Icon = item.icon

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group/item rounded-xl p-4 transition-colors hover:bg-white/[0.04]"
                        >
                          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border bg-white/[0.03]">
                            <Icon className="h-4 w-4 text-brand-accent" />
                          </div>

                          <div className="text-sm font-semibold text-brand-text-primary">
                            {item.label}
                          </div>

                          <p className="mt-1 text-xs leading-5 text-brand-text-muted">
                            {item.description}
                          </p>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-text-primary"
            >
              {t.about}
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-text-primary"
            >
              {t.contact}
            </Link>
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-brand-border bg-white/[0.02] p-1">
              <Link
                href={frHref}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  locale === 'fr'
                    ? 'bg-white text-black'
                    : 'text-brand-text-muted hover:text-brand-text-primary'
                }`}
              >
                FR
              </Link>
              <Link
                href={enHref}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  locale === 'en'
                    ? 'bg-white text-black'
                    : 'text-brand-text-muted hover:text-brand-text-primary'
                }`}
              >
                EN
              </Link>
            </div>

            <Link href="/contact">
              <Button variant="primary" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                {t.cta}
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-border text-brand-text-primary lg:hidden"
            aria-label={t.mobileMenu}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-brand-border bg-brand-bg lg:hidden">
          <Container>
            <div className="space-y-3 py-6">
              <button
                type="button"
                onClick={() => setMobileExpertiseOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-xl border border-brand-border px-4 py-3 text-left"
              >
                <span className="text-sm font-semibold text-brand-text-primary">
                  {t.expertises}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-brand-text-muted transition-transform ${
                    mobileExpertiseOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileExpertiseOpen && (
                <div className="rounded-2xl border border-brand-border bg-white/[0.02] p-2">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-3 text-sm text-brand-text-secondary transition-colors hover:bg-white/[0.04] hover:text-brand-text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {[
                { href: '/formation', label: t.formation },
                { href: '/case-studies', label: t.caseStudies },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl border border-brand-border px-4 py-3 text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setMobileInsightsOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-xl border border-brand-border px-4 py-3 text-left"
              >
                <span className="text-sm font-semibold text-brand-text-primary">
                  {t.insights}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-brand-text-muted transition-transform ${
                    mobileInsightsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileInsightsOpen && (
                <div className="rounded-2xl border border-brand-border bg-white/[0.02] p-2">
                  {insights.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.04]"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="text-sm font-semibold text-brand-text-primary">
                        {item.label}
                      </div>
                      <p className="mt-1 text-xs text-brand-text-muted">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              {[
                { href: '/about', label: t.about },
                { href: '/contact', label: t.contact },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl border border-brand-border px-4 py-3 text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-1 rounded-full border border-brand-border bg-white/[0.02] p-1">
                  <Link
                    href={frHref}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      locale === 'fr'
                        ? 'bg-white text-black'
                        : 'text-brand-text-muted hover:text-brand-text-primary'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    FR
                  </Link>
                  <Link
                    href={enHref}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      locale === 'en'
                        ? 'bg-white text-black'
                        : 'text-brand-text-muted hover:text-brand-text-primary'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    EN
                  </Link>
                </div>

                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" size="md">
                    {t.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}