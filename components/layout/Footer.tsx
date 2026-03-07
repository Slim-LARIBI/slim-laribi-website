import { Link } from '@/components/i18n/Link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const footerLinks = {
  Expertises: [
    { href: '/data-tracking', label: 'Data Tracking' },
    { href: '/performance-marketing', label: 'Performance Marketing' },
    { href: '/marketing-automation', label: 'Marketing Automation' },
    { href: '/customer-intelligence', label: 'Customer Intelligence' },
    { href: '/seo-acquisition', label: 'SEO Acquisition' },
    { href: '/expertises-data-marketing', label: 'Hub expertises' },
  ],
  Formation: [
    { href: '/formation', label: 'Programme 90h' },
    { href: '/formation/programme', label: 'Planning détaillé' },
    { href: '/testimonials', label: 'Témoignages' },
    { href: '/contact', label: "S'inscrire" },
  ],
  Ressources: [
    { href: '/blog', label: 'Blog' },
    { href: '/case-studies', label: 'Cas clients' },
    { href: '/saas', label: 'Projets SaaS' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-brand-border bg-brand-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-gradient-glow" />

      {/* Premium CTA */}
      <div className="relative">
        <Container className="py-20 md:py-24">
          <div className="rounded-[2rem] border border-brand-border bg-white/[0.03] backdrop-blur-sm px-6 py-12 md:px-10 md:py-14 text-center shadow-glow-sm">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-accent mb-4">
              Conseil · Audit · Formation
            </p>

            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight text-brand-text-primary mb-5">
              Construisons une
              <span className="text-gradient-brand"> machine marketing </span>
              pilotée par la donnée.
            </h2>

            <p className="text-brand-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
              Audit tracking, performance marketing, architecture MarTech, CRM et automatisation :
              une approche senior, structurée et orientée résultats.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Réserver un appel
                </Button>
              </Link>
              <Link href="/expertises-data-marketing">
                <Button variant="secondary" size="lg">
                  Explorer les expertises
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <Container className="relative py-14 md:py-16 border-t border-brand-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow-sm">
                <span className="text-sm font-black text-white tracking-wide">SL</span>
              </div>
              <div>
                <span className="block font-display text-xl font-black tracking-tight text-brand-text-primary">
                  Slim Laribi
                </span>
                <span className="block text-xs text-brand-text-muted uppercase tracking-[0.18em] mt-0.5">
                  Digital Marketing · Tracking · MarTech
                </span>
              </div>
            </Link>

            <p className="text-sm text-brand-text-secondary leading-relaxed max-w-md mb-6">
              J’aide les entreprises à fiabiliser leur tracking, mieux piloter leurs campagnes,
              structurer leur CRM et transformer leur data en décisions utiles.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/slim-laribi/',
                  initial: 'in',
                },
                {
                  label: 'Site',
                  href: 'https://laribislim.com',
                  initial: 'SL',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-white/[0.02] text-brand-text-muted hover:text-brand-text-primary hover:border-brand-border-strong hover:bg-white/[0.04] transition-all duration-200 text-xs font-bold"
                >
                  {s.initial}
                </a>
              ))}
            </div>

            <div className="space-y-2 text-sm text-brand-text-muted">
              <p>Audit tracking · Google Tag Manager · GA4 · CAPI</p>
              <p>Google Ads · Meta Ads · CRM · Automation · SEO</p>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-text-muted mb-4">
                  {category}
                </p>
                <ul className="space-y-3">
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
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-brand-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-brand-text-muted">
            © {year} Slim Laribi. Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-brand-text-muted">
            <Link href="/contact" className="hover:text-brand-text-primary transition-colors">
              Contact
            </Link>
            <span className="opacity-40">•</span>
            <Link href="/blog" className="hover:text-brand-text-primary transition-colors">
              Blog
            </Link>
            <span className="opacity-40">•</span>
            <Link
              href="/expertises-data-marketing"
              className="hover:text-brand-text-primary transition-colors"
            >
              Expertises
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}