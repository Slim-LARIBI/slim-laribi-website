import type { Metadata, Viewport } from 'next'
import { Inter, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PersonJsonLd } from '@/components/seo/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const siteUrl = 'https://slimlaribi.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Slim Laribi — Expert Marketing, Tracking & Formation',
    template: '%s | Slim Laribi',
  },
  description:
    'Expert Digital Marketing, Tracking & MarTech. Je vous aide à fiabiliser votre data, optimiser vos performances ads et former vos équipes. Formation Customer Intelligence 90h.',
  keywords: [
    'Expert Marketing Digital',
    'Tracking Server-side',
    'GA4',
    'GTM',
    'Meta CAPI',
    'Performance Marketing',
    'Formation Marketing Digital',
    'Customer Intelligence',
    'Slim Laribi',
    'E-commerce',
    'CRM Automation',
  ],
  authors: [{ name: 'Slim Laribi', url: siteUrl }],
  creator: 'Slim Laribi',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Slim Laribi',
    title: 'Slim Laribi — Expert Marketing, Tracking & Formation',
    description:
      'Expert Digital Marketing, Tracking & MarTech. Data fiable. Résultats mesurables.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Slim Laribi — Expert Marketing, Tracking & Formation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slim Laribi — Expert Marketing, Tracking & Formation',
    description: 'Data fiable. Résultats mesurables. Performance à grande échelle.',
    creator: '@slimlaribi',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'fr-FR': siteUrl,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#05060a',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-brand-bg text-brand-text-primary antialiased">
        <PersonJsonLd
          name="Slim Laribi"
          url={siteUrl}
          jobTitle="Expert Digital Marketing, Tracking & MarTech"
          description="Expert en Performance Marketing, Tracking server-side, MarTech et formation Customer Intelligence. 8+ ans d'expérience, 40+ projets livrés."
          sameAs={[
            'https://linkedin.com/in/slim-laribi',
            'https://twitter.com/slimlaribi',
          ]}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
