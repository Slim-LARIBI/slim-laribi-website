'use client'

import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { useLocale } from 'next-intl'
import { forwardRef } from 'react'

type Props = Omit<NextLinkProps, 'href'> & {
  href: string
  className?: string
  children: React.ReactNode
}

function withLocale(href: string, locale: string) {
  // external links, anchors, mailto, tel
  if (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  ) {
    return href
  }

  // ✅ if already localized with ANY supported locale, keep as-is
  if (href === '/fr' || href.startsWith('/fr/')) return href
  if (href === '/en' || href.startsWith('/en/')) return href

  // root
  if (href === '/') return `/${locale}`

  // normal internal route
  return `/${locale}${href.startsWith('/') ? '' : '/'}${href}`
}

export const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { href, children, ...props },
  ref
) {
  const locale = useLocale()
  const localizedHref = withLocale(href, locale)

  return (
    <NextLink ref={ref} href={localizedHref} {...props}>
      {children}
    </NextLink>
  )
})