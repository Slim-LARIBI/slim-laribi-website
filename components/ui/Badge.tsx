import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'gold' | 'success' | 'outline' | 'muted'
  size?: 'sm' | 'md'
  className?: string
  dot?: boolean
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
  dot,
}: BadgeProps) {
  const variants = {
    default:
      'bg-white/5 text-brand-text-secondary border border-white/8',
    accent:
      'bg-brand-accent/10 text-brand-accent border border-brand-accent/20',
    gold:
      'bg-brand-gold/10 text-brand-gold border border-brand-gold/25',
    success:
      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    outline:
      'bg-transparent text-brand-text-secondary border border-white/12',
    muted:
      'bg-brand-surface text-brand-text-muted border border-brand-border',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-2xs rounded-md',
    md: 'px-3 py-1 text-xs rounded-lg',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium tracking-wide whitespace-nowrap',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {dot && (
        <span
          aria-hidden
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            variant === 'accent' && 'bg-brand-accent',
            variant === 'gold' && 'bg-brand-gold',
            variant === 'success' && 'bg-emerald-400',
            (variant === 'default' || variant === 'outline' || variant === 'muted') &&
              'bg-brand-text-muted'
          )}
        />
      )}
      {children}
    </span>
  )
}
