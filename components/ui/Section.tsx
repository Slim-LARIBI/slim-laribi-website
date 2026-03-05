import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: React.ElementType
  py?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none'
  withGlow?: boolean
  glowPosition?: 'top' | 'center' | 'bottom'
}

export function Section({
  children,
  className,
  id,
  as: Component = 'section',
  py = 'xl',
  withGlow = false,
  glowPosition = 'top',
}: SectionProps) {
  const pyStyles = {
    none: '',
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24',
    '2xl': 'py-32',
  }

  const glowPositions = {
    top: 'top-0',
    center: 'top-1/2 -translate-y-1/2',
    bottom: 'bottom-0',
  }

  return (
    <Component
      id={id}
      className={cn('relative overflow-hidden', pyStyles[py], className)}
    >
      {withGlow && (
        <div
          aria-hidden
          className={cn(
            'absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20 pointer-events-none',
            'bg-brand-accent',
            glowPositions[glowPosition]
          )}
        />
      )}
      {children}
    </Component>
  )
}
