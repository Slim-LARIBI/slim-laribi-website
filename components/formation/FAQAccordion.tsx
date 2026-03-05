'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

function FAQItemComponent({ item, isOpen, onToggle }: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={cn(
        'border border-brand-border rounded-2xl overflow-hidden transition-all duration-300',
        isOpen ? 'border-brand-border-strong bg-brand-surface/60' : 'bg-brand-surface/30 hover:bg-brand-surface/50'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <div
          className={cn(
            'shrink-0 flex items-center justify-center h-6 w-6 rounded-full border mt-0.5 transition-all duration-300',
            isOpen
              ? 'border-brand-accent bg-brand-accent/15 text-brand-accent'
              : 'border-brand-border text-brand-text-muted'
          )}
        >
          {isOpen ? (
            <Minus className="h-3 w-3" />
          ) : (
            <Plus className="h-3 w-3" />
          )}
        </div>
        <span className={cn(
          'font-medium leading-relaxed transition-colors duration-200',
          isOpen ? 'text-brand-text-primary' : 'text-brand-text-secondary'
        )}>
          {item.question}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="px-5 pb-5 pl-[4.25rem]">
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, i) => (
        <FAQItemComponent
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
