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
}

export default withNextIntl(nextConfig)