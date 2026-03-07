'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from '@/components/i18n/Link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'
import { useLocale, useTranslations } from 'next-intl'

type NavItem = { href: string; key: string; exact?: boolean }

const primaryNav: NavItem[] = [
  { href: '/', key: 'home', exact: true },
  { href: '/expertise', key: 'expertise' },
  { href: '/formation', key: 'formation' },
  { href: '/case-studies', key: 'caseStudies' },
]

const moreNav: NavItem[] = [
  { href: '/saas', key: 'saas' as any },
  { href: '/blog', key: 'blog' },
  { href: '/about', key: 'about' as any },
  { href: '/contact', key: 'contact' },
]

function isActivePath(pathname: string, href: string, exact?: boolean) {
  if (href === '/') return exact ? pathname === '/' : pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

function LocaleSwitcher() {
  const pathname = usePathname()
  const locale = useLocale()

  // pathname like: /fr/..., /en/...
  const segments = pathname.split('/').filter(Boolean)
  const currentLocale = segments[0] === 'fr' || segments[0] === 'en' ? segments[0] : locale
  const rest = segments[0] === 'fr' || segments[0] === 'en' ? segments.slice(1) : segments
  const restPath = rest.length ? `/${rest.join('/')}` : ''

  const nextLocale = currentLocale === 'fr' ? 'en' : 'fr'
  const switchHref = `/${nextLocale}${restPath || ''}`

  return (
    <Link
      href={switchHref}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/8 transition-colors"
      aria-label="Changer la langue"
      
    >
      <span className="opacity-80">FR</span>
      <span className="opacity-40">/</span>
      <span className="opacity-80">EN</span>
    </Link>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  const pathname = usePathname()
  const locale = useLocale()
  const tNav = useTranslations('navigation')

  const navLabels = useMemo(() => {
    // fallback labels if keys missing
    return {
      home: tNav?.('home') ?? 'Accueil',
      expertise: tNav?.('expertise') ?? 'Expertise',
      formation: tNav?.('formation') ?? 'Formation',
      caseStudies: tNav?.('caseStudies') ?? 'Cas clients',
      blog: tNav?.('blog') ?? 'Blog',
      contact: tNav?.('contact') ?? 'Contact',
      // optional keys (if not in json, show FR defaults)
      about: (tNav as any)?.('about') ?? 'À propos',
      saas: (tNav as any)?.('saas') ?? 'SaaS',
      more: (tNav as any)?.('more') ?? 'Plus',
    }
  }, [tNav])

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false)
    setMoreOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close "Plus" when clicking outside
  const moreRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!moreRef.current) return
      if (!moreRef.current.contains(e.target as Node)) setMoreOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  // helper: prefix locale
  const withLocale = (href: string) => {
    // if already localized, keep
    if (href.startsWith('/fr') || href.startsWith('/en')) return href
    return `/${locale}${href === '/' ? '' : href}`
  }

  const mobileLinks = [
    ...primaryNav.map((x) => ({ href: withLocale(x.href), label: (navLabels as any)[x.key] })),
    ...moreNav.map((x) => ({ href: withLocale(x.href), label: (navLabels as any)[x.key] })),
  ]

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          scrolled
            ? 'glass shadow-glass border-b border-brand-border backdrop-blur-xl'
            : 'bg-transparent'
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-3">
            {/* Logo */}
            <Link href={withLocale('/')} className="group flex items-center gap-3" aria-label="Slim Laribi — Accueil">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow-sm">
                <span className="text-sm font-black text-white">SL</span>
              </div>

              {/* wordmark */}
              <div className="leading-none">
                <div className="font-display text-[13px] tracking-[0.22em] text-brand-text-primary group-hover:text-white transition-colors">
                  <span className="font-semibold">SLIM</span>{' '}
                  <span className="font-extrabold">LARIBI</span>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {primaryNav.map((link) => {
                const href = withLocale(link.href)
                const active = isActivePath(pathname, href, link.exact)

                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      active
                        ? 'text-brand-text-primary'
                        : 'text-brand-text-muted hover:text-brand-text-secondary hover:bg-white/5'
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-white/8"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative">{(navLabels as any)[link.key]}</span>
                  </Link>
                )
              })}

              {/* Plus dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => setMoreOpen((v) => !v)}
                  className={cn(
                    'relative inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    'text-brand-text-muted hover:text-brand-text-secondary hover:bg-white/5'
                  )}
                  aria-haspopup="menu"
                  aria-expanded={moreOpen}
                >
                  <span>{(navLabels as any).more}</span>
                  <ChevronDown className={cn('h-4 w-4 transition-transform', moreOpen && 'rotate-180')} />
                </button>

                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 10, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute left-0 mt-2 w-56 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-glass overflow-hidden"
                      role="menu"
                    >
                      <div className="p-2">
                        {moreNav.map((item) => {
                          const href = withLocale(item.href)
                          const active = isActivePath(pathname, href, item.exact)
                          return (
                            <Link
                              key={href}
                              href={href}
                              onClick={() => setMoreOpen(false)}
                              className={cn(
                                'flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors',
                                active
                                  ? 'bg-white/10 text-white'
                                  : 'text-white/80 hover:bg-white/8 hover:text-white'
                              )}
                              
                            >
                              <span>{(navLabels as any)[item.key]}</span>
                              <span className="text-[10px] text-white/40">↗</span>
                            </Link>
                          )
                        })}
                      </div>

                      <div className="border-t border-white/10 p-2">
                        <LocaleSwitcher />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href={withLocale('/contact')}>
                <Button variant="ghost" size="sm">
                  Réserver un appel
                </Button>
              </Link>

              <Link href={withLocale('/formation')}>
                <Button variant="primary" size="sm">
                  Télécharger le programme
                </Button>
              </Link>

              {/* language last (as you asked) */}
              <LocaleSwitcher />
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-brand-text-muted hover:text-brand-text-primary hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} links={mobileLinks} />
    </>
  )
}