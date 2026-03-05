'use client'

// Analytics hook placeholder — wire up GA4, Plausible, Mixpanel, etc.

type EventName =
  | 'cta_click'
  | 'form_submit'
  | 'download_programme'
  | 'book_call'
  | 'page_view'
  | 'blog_read'
  | 'case_study_view'

interface TrackEventProps {
  name: EventName
  properties?: Record<string, string | number | boolean>
}

export function trackEvent({ name, properties }: TrackEventProps): void {
  if (typeof window === 'undefined') return

  // TODO: Replace with real analytics
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', name, properties)
  }

  // Example GA4 integration:
  // if (typeof window.gtag !== 'undefined') {
  //   window.gtag('event', name, properties)
  // }

  // Example Plausible integration:
  // if (typeof window.plausible !== 'undefined') {
  //   window.plausible(name, { props: properties })
  // }
}

export function trackPageView(url: string): void {
  trackEvent({ name: 'page_view', properties: { url } })
}

export function trackCTAClick(label: string, location: string): void {
  trackEvent({ name: 'cta_click', properties: { label, location } })
}

export function trackDownload(fileName: string): void {
  trackEvent({ name: 'download_programme', properties: { fileName } })
}
