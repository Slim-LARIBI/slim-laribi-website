'use client'

import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  as?: React.ElementType
  blur?: boolean
}

export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 28,
  once = true,
  as: Component = 'div',
  blur = false,
}: RevealProps) {
  const MotionComponent = motion(Component as React.ElementType)

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
    fade: { y: 0, x: 0 },
  }

  const initial = {
    opacity: 0,
    ...directionMap[direction],
    ...(blur ? { filter: 'blur(8px)' } : {}),
  }

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    ...(blur ? { filter: 'blur(0px)' } : {}),
  }

  return (
    <MotionComponent
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </MotionComponent>
  )
}

// Staggered reveal for lists
interface RevealGroupProps {
  children: React.ReactNode[]
  className?: string
  stagger?: number
  delay?: number
  direction?: RevealProps['direction']
  once?: boolean
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  direction = 'up',
  once = true,
}: RevealGroupProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal
          key={i}
          direction={direction}
          delay={delay + i * stagger}
          once={once}
        >
          {child}
        </Reveal>
      ))}
    </div>
  )
}
