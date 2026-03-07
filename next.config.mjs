import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  async redirects() {
    return [

      // ===== BLOG REDIRECTS (ancien WordPress → nouveau blog) =====

      {
        source: '/strategies-encheres-ads-sea',
        destination: '/fr/blog/strategies-encheres-ads-sea',
        permanent: true,
      },
      {
        source: '/strategies-encheres-ads-sea/',
        destination: '/fr/blog/strategies-encheres-ads-sea',
        permanent: true,
      },

      {
        source: '/conversion-linker-gtm',
        destination: '/fr/blog/conversion-linker-gtm',
        permanent: true,
      },
      {
        source: '/conversion-linker-gtm/',
        destination: '/fr/blog/conversion-linker-gtm',
        permanent: true,
      },

      {
        source: '/pixel-event-tracking-retargeting',
        destination: '/fr/blog/pixel-event-tracking-retargeting',
        permanent: true,
      },
      {
        source: '/pixel-event-tracking-retargeting/',
        destination: '/fr/blog/pixel-event-tracking-retargeting',
        permanent: true,
      },

      {
        source: '/pixel-tracking-purchase-event',
        destination: '/fr/blog/pixel-tracking-purchase-event',
        permanent: true,
      },
      {
        source: '/pixel-tracking-purchase-event/',
        destination: '/fr/blog/pixel-tracking-purchase-event',
        permanent: true,
      },

      {
        source: '/seo-core-web-vitals',
        destination: '/fr/blog/seo-core-web-vitals',
        permanent: true,
      },
      {
        source: '/seo-core-web-vitals/',
        destination: '/fr/blog/seo-core-web-vitals',
        permanent: true,
      },

      {
        source: '/utm-tracking',
        destination: '/fr/blog/utm-tracking',
        permanent: true,
      },
      {
        source: '/utm-tracking/',
        destination: '/fr/blog/utm-tracking',
        permanent: true,
      },

      {
        source: '/expressions-regulieres-regex-seo-gsc',
        destination: '/fr/blog/expressions-regulieres-regex-seo-gsc',
        permanent: true,
      },
      {
        source: '/expressions-regulieres-regex-seo-gsc/',
        destination: '/fr/blog/expressions-regulieres-regex-seo-gsc',
        permanent: true,
      },

      {
        source: '/codes-http-seo-erreurs-20x-30x-40x-50x',
        destination: '/fr/blog/codes-http-seo-erreurs-20x-30x-40x-50x',
        permanent: true,
      },
      {
        source: '/codes-http-seo-erreurs-20x-30x-40x-50x/',
        destination: '/fr/blog/codes-http-seo-erreurs-20x-30x-40x-50x',
        permanent: true,
      },

      {
        source: '/catalogue-pixel-datafeed-xml-opengraph',
        destination: '/fr/blog/catalogue-pixel-datafeed-xml-opengraph',
        permanent: true,
      },
      {
        source: '/catalogue-pixel-datafeed-xml-opengraph/',
        destination: '/fr/blog/catalogue-pixel-datafeed-xml-opengraph',
        permanent: true,
      },

      {
        source: '/seo-url-canonique-fragments',
        destination: '/fr/blog/seo-url-canonique-fragments',
        permanent: true,
      },
      {
        source: '/seo-url-canonique-fragments/',
        destination: '/fr/blog/seo-url-canonique-fragments',
        permanent: true,
      },

      {
        source: '/configuration-permaliens-wordpress',
        destination: '/fr/blog/configuration-permaliens-wordpress',
        permanent: true,
      },
      {
        source: '/configuration-permaliens-wordpress/',
        destination: '/fr/blog/configuration-permaliens-wordpress',
        permanent: true,
      },

      {
        source: '/keyword-efficiency-index-kei-seo',
        destination: '/fr/blog/keyword-efficiency-index-kei-seo',
        permanent: true,
      },
      {
        source: '/keyword-efficiency-index-kei-seo/',
        destination: '/fr/blog/keyword-efficiency-index-kei-seo',
        permanent: true,
      },

      {
        source: '/probleme-indexation-seo',
        destination: '/fr/blog/probleme-indexation-seo',
        permanent: true,
      },
      {
        source: '/probleme-indexation-seo/',
        destination: '/fr/blog/probleme-indexation-seo',
        permanent: true,
      },

      // ===== REDIRECTS ARCHITECTURE =====

      {
        source: '/case-studies/:slug',
        destination: '/fr/case-studies/:slug',
        permanent: true,
      },

      {
        source: '/formation/programme',
        destination: '/fr/formation/programme',
        permanent: true,
      },
      {
        source: '/formation/programme/',
        destination: '/fr/formation/programme',
        permanent: true,
      },

    ]
  },
}

export default withNextIntl(nextConfig)