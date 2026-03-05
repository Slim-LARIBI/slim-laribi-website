import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const footerLinks = {
  Expertise: [
    { href: '/expertise', label: 'Tracking & Data' },
    { href: '/expertise', label: 'Performance Ads' },
    { href: '/expertise', label: 'CRM & Automation' },
    { href: '/saas', label: 'SaaS Projects' },
  ],
  Formation: [
    { href: '/formation', label: 'Programme 90h' },
    { href: '/formation/programme', label: 'Planning détaillé' },
    { href: '/testimonials', label: 'Témoignages' },
    { href: '/contact', label: 'S\'inscrire' },
  ],
  Ressources: [
    { href: '/blog', label: 'Blog' },
    { href: '/case-studies', label: 'Cas clients' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      {/* CTA block */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50 pointer-events-none" />
        <Container className="py-20 text-center relative z-10">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-accent mb-4">
            Prêt à passer à l'action&nbsp;?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text-primary mb-4 tracking-tight">
            Démarrons votre projet.
          </h2>
          <p className="text-brand-text-secondary max-w-md mx-auto mb-8">
            Audit gratuit · Diagnostic tracking · Mission consulting ou formation — discutons-en.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Réserver un appel
              </Button>
            </Link>
            <Link href="/formation">
              <Button variant="secondary" size="lg">
                Découvrir la formation
              </Button>
            </Link>
          </div>
        </Container>
      </div>

      {/* Links grid */}
      <Container className="py-12 border-t border-brand-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand">
                <span className="text-sm font-black text-white">SL</span>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-brand-text-primary">
                Slim Laribi
              </span>
            </Link>
            <p className="text-sm text-brand-text-muted leading-relaxed mb-4">
              Expert Digital Marketing, Tracking & MarTech.
              Formateur Customer Intelligence.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/slim-laribi', initial: 'in' },
                { label: 'Twitter/X', href: 'https://twitter.com/slimlaribi', initial: 'X' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border text-brand-text-muted hover:text-brand-text-primary hover:border-brand-border-strong transition-all duration-200 text-xs font-bold"
                >
                  {s.initial}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold tracking-wider uppercase text-brand-text-muted mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-brand-text-muted">
            © {year} Slim Laribi. Tous droits réservés.
          </p>
          <p className="text-xs text-brand-text-muted">
            Data-driven. Execution-ready. Results-focused.
          </p>
        </div>
      </Container>
    </footer>
  )
}
