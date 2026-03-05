'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  variant?: 'words' | 'chars' | 'lines'
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
}

export function AnimatedText({
  text,
  className,
  as: Tag = 'p',
  variant = 'words',
  delay = 0,
  duration = 0.6,
  stagger = 0.04,
  once = true,
}: AnimatedTextProps) {
  const MotionTag = motion[Tag]

  if (variant === 'lines') {
    return (
      <MotionTag
        className={cn('overflow-hidden', className)}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once }}
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {text}
      </MotionTag>
    )
  }

  const units = variant === 'words' ? text.split(' ') : text.split('')
  const separator = variant === 'words' ? ' ' : ''

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: variant === 'words' ? 20 : 12,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <motion.span
      className={cn('inline', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={childVariants}
          >
            {unit}
            {i < units.length - 1 ? separator : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
