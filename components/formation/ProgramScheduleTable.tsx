'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, BookOpen, Wrench, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'

export interface WeekPlan {
  week: number
  module: string
  theme: string
  hours: number
  outcomes: string[]
  workshop: string
  phase: 'foundations' | 'acquisition' | 'data' | 'capstone'
}

const phaseConfig = {
  foundations: { label: 'Fondations', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', badge: 'success' as const },
  acquisition: { label: 'Acquisition', color: 'text-brand-accent', bg: 'bg-brand-accent/10 border-brand-accent/20', badge: 'accent' as const },
  data: { label: 'Data & CRM', color: 'text-brand-gold', bg: 'bg-brand-gold/10 border-brand-gold/20', badge: 'gold' as const },
  capstone: { label: 'Projet final', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20', badge: 'accent' as const },
}

interface ProgramScheduleTableProps {
  weeks: WeekPlan[]
  showTotal?: boolean
}

function WeekRow({ week, index }: { week: WeekPlan; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const phase = phaseConfig[week.phase]

  return (
    <motion.div
      className="border border-brand-border rounded-2xl overflow-hidden hover:border-brand-border-strong transition-all duration-200"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        {/* Week number */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="h-9 w-9 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center shrink-0">
            <span className="text-xs font-black text-brand-text-muted">S{week.week}</span>
          </div>
          <Badge variant={phase.badge} size="sm" className="hidden sm:inline-flex">
            {phase.label}
          </Badge>
        </div>

        {/* Module + theme */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <Badge variant={phase.badge} size="sm" className="sm:hidden">
              {phase.label}
            </Badge>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
              {week.module}
            </span>
          </div>
          <p className="text-sm font-medium text-brand-text-primary line-clamp-1">
            {week.theme}
          </p>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-text-muted" />
            <span className="text-sm font-bold text-brand-accent">{week.hours}h</span>
          </div>
          <div className={cn('transition-transform duration-200', expanded && 'rotate-180')}>
            <ChevronDown className="h-4 w-4 text-brand-text-muted" />
          </div>
        </div>
      </button>

      {/* Expanded details */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="px-4 pb-4 border-t border-brand-border"
        >
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            {/* Outcomes */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <BookOpen className="h-3.5 w-3.5 text-brand-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
                  Objectifs pédagogiques
                </span>
              </div>
              <ul className="space-y-1.5">
                {week.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                    <span className="text-xs text-brand-text-secondary">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshop */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <Wrench className="h-3.5 w-3.5 text-brand-gold" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
                  Atelier pratique
                </span>
              </div>
              <p className="text-xs text-brand-text-secondary leading-relaxed p-3 rounded-xl bg-brand-gold/5 border border-brand-gold/10">
                {week.workshop}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export function ProgramScheduleTable({ weeks, showTotal = true }: ProgramScheduleTableProps) {
  const totalHours = weeks.reduce((sum, w) => sum + w.hours, 0)

  // Group by phase
  const phases = ['foundations', 'acquisition', 'data', 'capstone'] as const
  const groupedWeeks = phases.map((phase) => ({
    phase,
    config: phaseConfig[phase],
    weeks: weeks.filter((w) => w.phase === phase),
    totalHours: weeks.filter((w) => w.phase === phase).reduce((s, w) => s + w.hours, 0),
  }))

  return (
    <div className="space-y-8">
      {groupedWeeks.map(({ phase, config, weeks: phaseWeeks, totalHours: phaseHours }) => (
        <div key={phase}>
          {/* Phase header */}
          <div className={cn('flex items-center justify-between p-4 rounded-xl border mb-3', config.bg)}>
            <div>
              <span className={cn('text-sm font-bold', config.color)}>{config.label}</span>
              <span className="text-xs text-brand-text-muted ml-2">
                — Semaines {phaseWeeks[0]?.week}–{phaseWeeks[phaseWeeks.length - 1]?.week}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className={cn('h-4 w-4', config.color)} />
              <span className={cn('font-bold text-sm', config.color)}>{phaseHours}h</span>
            </div>
          </div>

          {/* Weeks */}
          <div className="space-y-2">
            {phaseWeeks.map((week, i) => (
              <WeekRow key={week.week} week={week} index={i} />
            ))}
          </div>
        </div>
      ))}

      {/* Total */}
      {showTotal && (
        <div className="flex items-center justify-between p-5 rounded-2xl glass border border-brand-border-strong">
          <div>
            <p className="font-display font-bold text-brand-text-primary">Total programme</p>
            <p className="text-xs text-brand-text-muted">12 semaines · 3 mois · Présentiel</p>
          </div>
          <div className="text-right">
            <p className="font-display text-3xl font-black text-brand-text-primary">
              <span className="text-gradient-brand">{totalHours}h</span>
            </p>
            {totalHours === 90 && (
              <p className="text-xs text-emerald-400 font-medium mt-0.5">✓ 90h validées</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
