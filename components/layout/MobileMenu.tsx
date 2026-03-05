'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            className="fixed top-0 right-0 z-50 h-full w-80 max-w-full"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          >
            <div className="h-full flex flex-col bg-brand-surface border-l border-brand-border shadow-glass-lg">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-brand-border">
                <span className="font-display font-bold text-xl text-brand-text-primary tracking-tight">
                  Slim Laribi
                </span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-brand-text-muted hover:text-brand-text-primary hover:bg-white/5 transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto py-6 px-4">
                <ul className="space-y-1">
                  {links.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center px-4 py-3 rounded-xl text-brand-text-secondary hover:text-brand-text-primary hover:bg-white/5 transition-all duration-200 font-medium"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTAs */}
              <div className="p-6 border-t border-brand-border space-y-3">
                <Button
                  variant="gold"
                  size="md"
                  className="w-full"
                  onClick={onClose}
                >
                  Télécharger le programme
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={onClose}
                >
                  Réserver un appel
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
