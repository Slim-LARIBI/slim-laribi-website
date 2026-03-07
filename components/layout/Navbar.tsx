'use client'

import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Link } from '@/components/i18n/Link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

type Locale = 'fr' | 'en'

interface HeaderProps {
  locale: Locale
}

const labels = {
  fr: {
    expertises: 'Expertises',
    formation: 'Formation',
    caseStudies: 'Cas clients',
    blog: 'Blog',
    about: 'À propos',
    contact: 'Contact',
    cta: 'Réserver un appel',
    mobileMenu: 'Menu',
  },
  en: {
    expertises: 'Expertise',
    formation: 'Training',
    caseStudies: 'Case Studies',
    blog: 'Blog',
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
  const pathname = usePathname()

  const t = labels[locale]
  const items = expertiseItems[locale]

  const frHref = useMemo(() => switchLocaleInPath(pathname || '/', 'fr'), [pathname])
  const enHref = useMemo(() => switchLocaleInPath(pathname || '/', 'en'), [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Brand */}
          <Link href="/" className="shrink-0">
            <span className="font-display text-xl md:text-2xl font-black tracking-tight text-brand-text-primary">
              Slim <span className="uppercase">LARIBI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors"
              >
                <span>{t.expertises}</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-80 rounded-2xl border border-brand-border bg-brand-bg/95 backdrop-blur-xl p-3 shadow-2xl">
                  <div className="grid gap-1">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl px-4 py-3 hover:bg-white/[0.04] transition-colors"
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
              className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors"
            >
              {t.formation}
            </Link>

            <Link
              href="/case-studies"
              className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors"
            >
              {t.caseStudies}
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors"
            >
              {t.blog}
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors"
            >
              {t.about}
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors"
            >
              {t.contact}
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1 rounded-full border border-brand-border bg-white/[0.02] p-1">
              <Link
                href={frHref}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  locale === 'fr'
                    ? 'bg-white text-black'
                    : 'text-brand-text-muted hover:text-brand-text-primary'
                }`}
              >
                FR
              </Link>
              <Link
                href={enHref}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  locale === 'en'
                    ? 'bg-white text-black'
                    : 'text-brand-text-muted hover:text-brand-text-primary'
                }`}
              >
                EN
              </Link>
            </div>

            <Link href="/contact">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                {t.cta}
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-border text-brand-text-primary"
            aria-label={t.mobileMenu}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-border bg-brand-bg">
          <Container>
            <div className="py-6 space-y-3">
              <button
                type="button"
                onClick={() => setMobileExpertiseOpen((v) => !v)}
                className="w-full flex items-center justify-between rounded-xl border border-brand-border px-4 py-3 text-left"
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
                      className="block rounded-xl px-3 py-3 text-sm text-brand-text-secondary hover:text-brand-text-primary hover:bg-white/[0.04] transition-colors"
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
                { href: '/blog', label: t.blog },
                { href: '/about', label: t.about },
                { href: '/contact', label: t.contact },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl border border-brand-border px-4 py-3 text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center justify-between pt-2 gap-3">
                <div className="flex items-center gap-1 rounded-full border border-brand-border bg-white/[0.02] p-1">
                  <Link
                    href={frHref}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
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
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
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