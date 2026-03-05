'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  asChild?: boolean
  href?: string
  external?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className,
      children,
      loading,
      icon,
      iconPosition = 'right',
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      'relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg disabled:pointer-events-none disabled:opacity-50 select-none overflow-hidden'

    const variants = {
      primary:
        'bg-brand-accent text-white shadow-glow-sm hover:bg-brand-accent-glow hover:shadow-glow-md active:scale-[0.98]',
      secondary:
        'glass text-brand-text-primary border border-brand-border hover:border-brand-border-strong hover:bg-white/5 active:scale-[0.98]',
      ghost:
        'text-brand-text-secondary hover:text-brand-text-primary hover:bg-white/5 active:scale-[0.98]',
      gold:
        'bg-gradient-gold text-brand-bg font-semibold shadow-gold-glow hover:opacity-90 active:scale-[0.98]',
      outline:
        'border border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 hover:border-brand-accent active:scale-[0.98]',
    }

    const sizes = {
      sm: 'h-8 px-4 text-xs rounded-lg',
      md: 'h-10 px-5 text-sm rounded-xl',
      lg: 'h-12 px-7 text-base rounded-xl',
      xl: 'h-14 px-9 text-lg rounded-2xl',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {/* Shine overlay */}
        <span
          aria-hidden
          className="absolute inset-0 bg-card-shine opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />

        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="shrink-0">{icon}</span>
            )}
            <span>{children}</span>
            {icon && iconPosition === 'right' && (
              <span className="shrink-0">{icon}</span>
            )}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
