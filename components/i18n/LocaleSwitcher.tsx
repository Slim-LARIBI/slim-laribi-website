'use client'

import NextLink from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils'

function stripLocale(pathname: string) {
  // remove leading /fr or /en
  const cleaned = pathname.replace(/^\/(fr|en)(\/|$)/, '/')
  return cleaned === '' ? '/' : cleaned
}

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const rest = stripLocale(pathname)
  const qs = searchParams?.toString()
  const suffix = qs ? `?${qs}` : ''

  const frHref = `/fr${rest === '/' ? '' : rest}${suffix}`
  const enHref = `/en${rest === '/' ? '' : rest}${suffix}`

  return (
    <div className={cn('inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1', className)}>
      <NextLink
        href={frHref}
        className={cn(
          'px-3 py-1 text-xs font-semibold rounded-full transition-colors',
          locale === 'fr' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'
        )}
      >
        FR
      </NextLink>

      <NextLink
        href={enHref}
        className={cn(
          'px-3 py-1 text-xs font-semibold rounded-full transition-colors',
          locale === 'en' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'
        )}
      >
        EN
      </NextLink>
    </div>
  )
}