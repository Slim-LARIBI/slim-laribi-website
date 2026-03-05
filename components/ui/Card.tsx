import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'glass' | 'surface' | 'bordered' | 'glow'
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  as?: React.ElementType
}

export function Card({
  children,
  className,
  variant = 'glass',
  hover = false,
  padding = 'lg',
  as: Component = 'div',
}: CardProps) {
  const variants = {
    glass:
      'glass rounded-2xl',
    surface:
      'bg-brand-surface border border-brand-border rounded-2xl',
    bordered:
      'bg-transparent border border-brand-border rounded-2xl',
    glow:
      'glass rounded-2xl shadow-glow-sm',
  }

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6',
    xl: 'p-8',
  }

  const hoverStyles = hover
    ? 'transition-all duration-300 hover:shadow-glow-md hover:border-brand-border-strong hover:-translate-y-1 cursor-pointer'
    : ''

  return (
    <Component
      className={cn(
        variants[variant],
        paddings[padding],
        hoverStyles,
        'relative overflow-hidden',
        className
      )}
    >
      {/* Subtle gradient shine on hover */}
      {hover && (
        <span
          aria-hidden
          className="absolute inset-0 bg-card-shine opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        />
      )}
      {children}
    </Component>
  )
}
