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
    { href: '/formation', label: 'Programme 93h' },
    { href: '/formation/programme', label: 'Planning détaillé' },
    { href: '/testimonials', label: 'Témoignages' },
    { href: '/contact', label: "S'inscrire" },
  ],
  Ressources: [
    { href: '/blog', label: 'Blog' },
    { href: '/case-studies', label: 'Cas clients' },
    { href: '/saas', label: 'Labs & outils' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ],
}

export function Footer({ showCTA = true }: { showCTA?: boolean }) {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-brand-border bg-brand-bg">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-gradient-glow" />

      {showCTA && (
        <div className="relative">
          <Container className="py-20 md:py-24">
            <div className="rounded-[2rem] border border-brand-border bg-white/[0.03] px-6 py-12 text-center shadow-glow-sm backdrop-blur-sm md:px-10 md:py-14">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
                Conseil · Audit · Formation
              </p>

              <h2 className="mb-5 font-display text-3xl font-black tracking-tight text-brand-text-primary md:text-5xl">
                Construisons une
                <span className="text-gradient-brand"> machine marketing </span>
                pilotée par la donnée.
              </h2>

              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-brand-text-secondary">
                Audit tracking, performance marketing, architecture MarTech, CRM et automatisation :
                une approche senior, structurée et orientée résultats.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
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
      )}

      <Container
        className={`relative py-14 md:py-16 ${
          showCTA ? 'border-t border-brand-border' : ''
        }`}
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="mb-5 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow-sm">
                <span className="text-sm font-black tracking-wide text-white">SL</span>
              </div>
              <div>
                <span className="block font-display text-xl font-black tracking-tight text-brand-text-primary">
                  Slim Laribi
                </span>
                <span className="mt-0.5 block text-xs uppercase tracking-[0.18em] text-brand-text-muted">
                  Digital Marketing · Tracking · MarTech
                </span>
              </div>
            </Link>

            <p className="mb-6 max-w-md text-sm leading-relaxed text-brand-text-secondary">
              J’aide les entreprises à fiabiliser leur tracking, mieux piloter leurs campagnes,
              structurer leur CRM et transformer leur data en décisions utiles.
            </p>

            <div className="mb-6 flex flex-wrap gap-3">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-white/[0.02] text-xs font-bold text-brand-text-muted transition-all duration-200 hover:border-brand-border-strong hover:bg-white/[0.04] hover:text-brand-text-primary"
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

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
                  {category}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-text-secondary transition-colors duration-200 hover:text-brand-text-primary"
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

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-brand-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-brand-text-muted">
            © {year} Slim Laribi. Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-brand-text-muted">
            <Link href="/contact" className="transition-colors hover:text-brand-text-primary">
              Contact
            </Link>
            <span className="opacity-40">•</span>
            <Link href="/blog" className="transition-colors hover:text-brand-text-primary">
              Blog
            </Link>
            <span className="opacity-40">•</span>
            <Link
              href="/expertises-data-marketing"
              className="transition-colors hover:text-brand-text-primary"
            >
              Expertises
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}