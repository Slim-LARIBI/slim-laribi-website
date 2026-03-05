'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function HeroBackdropAurora() {
  const reduce = useReducedMotion()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base */}
      <div className="absolute inset-0 bg-[#05060a]" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Aurora blobs */}
      {!reduce ? (
        <>
          <motion.div
            className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full blur-[90px] opacity-[0.22]"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(124,111,247,.95), transparent 60%)',
            }}
            animate={{ x: [0, 50, -20, 0], y: [0, 25, 10, 0], scale: [1, 1.08, 0.98, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute top-[15%] right-[-12%] h-[560px] w-[560px] rounded-full blur-[100px] opacity-[0.16]"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(201,168,76,.95), transparent 62%)',
            }}
            animate={{ x: [0, -40, 25, 0], y: [0, 10, 35, 0], scale: [1, 1.06, 0.97, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute bottom-[-35%] left-[20%] h-[700px] w-[700px] rounded-full blur-[120px] opacity-[0.10]"
            style={{
              background:
                'radial-gradient(circle at 40% 40%, rgba(124,111,247,.65), transparent 62%)',
            }}
            animate={{ x: [0, 30, -15, 0], y: [0, -25, 10, 0], scale: [1, 1.05, 0.98, 1] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full blur-[90px] opacity-[0.20]"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(124,111,247,.95), transparent 60%)',
            }}
          />
          <div
            className="absolute top-[15%] right-[-12%] h-[560px] w-[560px] rounded-full blur-[100px] opacity-[0.14]"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(201,168,76,.95), transparent 62%)',
            }}
          />
        </>
      )}

      {/* Light beams */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute -left-40 top-[-20%] h-[140%] w-[380px] rotate-[18deg] blur-[2px]"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(255,255,255,.28), transparent)',
          }}
        />
        <div
          className="absolute left-[35%] top-[-30%] h-[150%] w-[260px] rotate-[-12deg] blur-[2px]"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(255,255,255,.18), transparent)',
          }}
        />
      </div>

      {/* Mesh overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(124,111,247,.35), transparent 35%), radial-gradient(circle at 80% 30%, rgba(201,168,76,.22), transparent 40%), radial-gradient(circle at 50% 80%, rgba(124,111,247,.18), transparent 45%)',
        }}
      />

      {/* Grid ultra subtle */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Grain (luxury texture) */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}