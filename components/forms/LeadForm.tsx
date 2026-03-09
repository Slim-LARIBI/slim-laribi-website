'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Download } from 'lucide-react'

export default function LeadForm({
  locale = 'fr',
}: {
  locale?: 'fr' | 'en'
}) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      console.log('FORM SUBMIT TRIGGERED', email)

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json().catch(() => null)

      console.log('API RESPONSE STATUS:', res.status)
      console.log('API RESPONSE DATA:', data)

      if (!res.ok) {
        throw new Error(data?.error || 'Request failed')
      }

      setSuccess(true)
    } catch (err) {
      console.error('LEAD FORM ERROR:', err)

      setError(
        locale === 'fr'
          ? "Une erreur est survenue. Réessayez."
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

if (success) {
  return (
    <div className="space-y-5">

      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-4 text-emerald-300">

        <p className="font-semibold text-base mb-1">
          {locale === 'fr' ? '✅ Merci !' : '✅ Thank you!'}
        </p>

        <p className="text-sm text-emerald-200">
          {locale === 'fr'
            ? 'Votre checklist est prête.'
            : 'Your checklist is ready.'}
        </p>

        <p className="text-xs text-emerald-200/80 mt-1">
          {locale === 'fr'
            ? 'Nous venons aussi de vous envoyer le PDF par email.'
            : 'We also sent the PDF to your email.'}
        </p>

      </div>

      <a href="/tracking-audit-checklist.pdf" download className="block">
        <Button
          variant="primary"
          size="xl"
          className="w-full"
          icon={<Download className="h-5 w-5" />}
        >
          {locale === 'fr'
            ? 'Télécharger la checklist PDF'
            : 'Download the PDF checklist'}
        </Button>
      </a>

    </div>
  )
}

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white/80 mb-2"
        >
          {locale === 'fr' ? 'Email professionnel' : 'Work email'}
        </label>

        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={
            locale === 'fr' ? 'vous@entreprise.com' : 'you@company.com'
          }
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-white/35 outline-none focus:border-violet-400 transition-colors"
        />
      </div>

      {error ? <p className="text-sm text-red-300">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-accent px-6 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Download className="h-5 w-5" />
        {loading
          ? locale === 'fr'
            ? 'Envoi...'
            : 'Sending...'
          : locale === 'fr'
          ? 'Télécharger la checklist PDF'
          : 'Download the PDF checklist'}
      </button>
    </form>
  )
}