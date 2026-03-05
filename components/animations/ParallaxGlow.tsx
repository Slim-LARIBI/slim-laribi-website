'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ParallaxGlowProps {
  className?: string
  color?: 'accent' | 'gold' | 'mixed'
  intensity?: 'low' | 'medium' | 'high'
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
  interactive?: boolean
}

export function ParallaxGlow({
  className,
  color = 'accent',
  intensity = 'medium',
  size = 'md',
  children,
  interactive = true,
}: ParallaxGlowProps) {
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const glowX = useTransform(springX, [-0.5, 0.5], ['-30%', '30%'])
  const glowY = useTransform(springY, [-0.5, 0.5], ['-30%', '30%'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    if (!interactive) return
    mouseX.set(0)
    mouseY.set(0)
  }

  const colorMap = {
    accent: 'rgba(124, 111, 247, VAR)',
    gold: 'rgba(201, 168, 76, VAR)',
    mixed: 'rgba(124, 111, 247, VAR)',
  }

  const opacityMap = {
    low: 0.1,
    medium: 0.2,
    high: 0.35,
  }

  const sizeMap = {
    sm: { w: 300, h: 150 },
    md: { w: 500, h: 250 },
    lg: { w: 800, h: 400 },
  }

  const { w, h } = sizeMap[size]
  const opacity = opacityMap[intensity]
  const baseColor = colorMap[color].replace('VAR', String(opacity))
  const glowColor = color === 'mixed'
    ? `rgba(201, 168, 76, ${opacity * 0.6})`
    : baseColor

  return (
    <div
      ref={ref}
      className={cn('relative', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Primary glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute rounded-full blur-[80px] opacity-60"
        style={{
          width: w,
          height: h,
          background: baseColor,
          top: '50%',
          left: '50%',
          x: interactive ? glowX : '-50%',
          y: interactive ? glowY : '-50%',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Secondary glow for mixed */}
      {color === 'mixed' && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute rounded-full blur-[120px] opacity-40"
          style={{
            width: w * 0.7,
            height: h * 0.7,
            background: glowColor,
            top: '30%',
            left: '60%',
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      )}

      {children}
    </div>
  )
}

// Ambient background glow (static, decorative)
export function AmbientGlow({
  className,
  color = '#7c6ff7',
  opacity = 0.12,
  blur = 120,
  width = 600,
  height = 300,
}: {
  className?: string
  color?: string
  opacity?: number
  blur?: number
  width?: number
  height?: number
}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute rounded-full', className)}
      style={{
        width,
        height,
        background: color,
        opacity,
        filter: `blur(${blur}px)`,
      }}
    />
  )
}
