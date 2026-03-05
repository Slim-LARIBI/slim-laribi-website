'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/formation', label: 'Formation' },
  { href: '/case-studies', label: 'Cas clients' },
  { href: '/saas', label: 'SaaS' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

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
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2"
              aria-label="Slim Laribi — Accueil"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow-sm">
                <span className="text-sm font-black text-white">SL</span>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-brand-text-primary group-hover:text-white transition-colors">
                Slim Laribi
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      isActive
                        ? 'text-brand-text-primary'
                        : 'text-brand-text-muted hover:text-brand-text-secondary hover:bg-white/5'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-white/8"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <Button variant="ghost" size="sm">
                  Réserver un appel
                </Button>
              </Link>
              <Link href="/formation">
                <Button variant="primary" size="sm">
                  Voir la formation
                </Button>
              </Link>
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

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
      />
    </>
  )
}
