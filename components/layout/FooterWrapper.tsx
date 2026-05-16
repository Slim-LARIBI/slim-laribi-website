'use client'

import { usePathname } from 'next/navigation'
import { Footer } from '@/components/layout/Footer'

export function FooterWrapper() {
  const pathname = usePathname()

  const isHomePage = pathname === '/fr' || pathname === '/en'

  return <Footer showCTA={!isHomePage} />
}