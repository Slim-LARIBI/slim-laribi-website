import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localeDetection: false,
})

const legacyBlogSlugs = new Set([
  'strategies-encheres-ads-sea',
  'conversion-linker-gtm',
  'pixel-event-tracking-retargeting',
  'pixel-tracking-purchase-event',
  'seo-core-web-vitals',
  'utm-tracking',
  'expressions-regulieres-regex-seo-gsc',
  'codes-http-seo-erreurs-20x-30x-40x-50x',
  'catalogue-pixel-datafeed-xml-opengraph',
  'seo-url-canonique-fragments',
  'configuration-permaliens-wordpress',
  'keyword-efficiency-index-kei-seo',
  'probleme-indexation-seo',
])

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ignore system/static/api files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return intlMiddleware(request)
  }

  const cleanPath = pathname.replace(/^\/+|\/+$/g, '')
  const segments = cleanPath ? cleanPath.split('/') : []

  // Legacy WordPress blog URLs:
  // /conversion-linker-gtm  -> /fr/blog/conversion-linker-gtm
  if (segments.length === 1 && legacyBlogSlugs.has(segments[0])) {
    const url = request.nextUrl.clone()
    url.pathname = `/fr/blog/${segments[0]}`
    return NextResponse.redirect(url, 308)
  }

  // If someone hits /fr/conversion-linker-gtm by mistake, also fix it
  if (
    segments.length === 2 &&
    (segments[0] === 'fr' || segments[0] === 'en') &&
    legacyBlogSlugs.has(segments[1])
  ) {
    const url = request.nextUrl.clone()
    url.pathname = `/fr/blog/${segments[1]}`
    return NextResponse.redirect(url, 308)
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}