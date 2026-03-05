'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Veuillez entrer votre nom (min. 2 caractères)'),
  email: z.string().email('Adresse email invalide'),
  company: z.string().optional(),
  subject: z.enum(['consulting', 'formation', 'audit', 'saas', 'autre'], {
    errorMap: () => ({ message: 'Veuillez choisir un sujet' }),
  }),
  message: z.string().min(20, 'Message trop court (min. 20 caractères)'),
  budget: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

type Status = 'idle' | 'loading' | 'success' | 'error'

const subjectOptions = [
  { value: 'consulting', label: 'Mission consulting' },
  { value: 'formation', label: 'Formation Customer Intelligence' },
  { value: 'audit', label: 'Audit tracking / data' },
  { value: 'saas', label: 'Projet SaaS / outil' },
  { value: 'autre', label: 'Autre' },
]

const budgetOptions = [
  { value: '', label: 'Budget (optionnel)' },
  { value: '<5k', label: '< 5 000 €' },
  { value: '5k-15k', label: '5 000 – 15 000 €' },
  { value: '15k-30k', label: '15 000 – 30 000 €' },
  { value: '>30k', label: '> 30 000 €' },
]

interface FieldProps {
  label: string
  error?: string
  children: React.ReactNode
  required?: boolean
}

function Field({ label, error, children, required }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-brand-text-secondary mb-1.5">
        {label}
        {required && <span className="text-brand-accent ml-0.5">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
          >
            <AlertCircle className="h-3 w-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputClass =
  'w-full bg-brand-surface/60 border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/40 focus:border-brand-accent/50 transition-all duration-200 hover:border-brand-border-strong'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="h-16 w-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-4">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </div>
        <h3 className="font-display text-xl font-bold text-brand-text-primary mb-2">
          Message envoyé !
        </h3>
        <p className="text-sm text-brand-text-secondary mb-6 max-w-sm">
          Je vous répondrai dans les 24h ouvrées. En attendant, consultez le programme de formation.
        </p>
        <Button variant="ghost" onClick={() => setStatus('idle')}>
          Envoyer un autre message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nom complet" error={errors.name?.message} required>
          <input
            {...register('name')}
            type="text"
            placeholder="Marie Dupont"
            className={cn(inputClass, errors.name && 'border-red-500/50 focus:ring-red-500/30')}
          />
        </Field>
        <Field label="Email professionnel" error={errors.email?.message} required>
          <input
            {...register('email')}
            type="email"
            placeholder="marie@entreprise.com"
            className={cn(inputClass, errors.email && 'border-red-500/50 focus:ring-red-500/30')}
          />
        </Field>
      </div>

      {/* Company + Subject */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Entreprise" error={errors.company?.message}>
          <input
            {...register('company')}
            type="text"
            placeholder="Votre entreprise"
            className={inputClass}
          />
        </Field>
        <Field label="Sujet" error={errors.subject?.message} required>
          <select
            {...register('subject')}
            className={cn(inputClass, 'cursor-pointer', errors.subject && 'border-red-500/50')}
            defaultValue=""
          >
            <option value="" disabled>Choisissez un sujet</option>
            {subjectOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-brand-surface">
                {o.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Budget */}
      <Field label="Budget indicatif" error={errors.budget?.message}>
        <select {...register('budget')} className={cn(inputClass, 'cursor-pointer')}>
          {budgetOptions.map((o) => (
            <option key={o.value} value={o.value} className="bg-brand-surface">
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Message */}
      <Field label="Message" error={errors.message?.message} required>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Décrivez votre projet, vos enjeux, vos objectifs..."
          className={cn(
            inputClass,
            'resize-none',
            errors.message && 'border-red-500/50 focus:ring-red-500/30'
          )}
        />
      </Field>

      {/* Error state */}
      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Une erreur s'est produite. Réessayez ou contactez-moi directement par email.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting || status === 'loading'}
        icon={<Send className="h-4 w-4" />}
        iconPosition="right"
        className="w-full"
      >
        Envoyer le message
      </Button>

      <p className="text-xs text-center text-brand-text-muted">
        Réponse garantie sous 24h ouvrées · Données traitées de façon confidentielle
      </p>
    </form>
  )
}
