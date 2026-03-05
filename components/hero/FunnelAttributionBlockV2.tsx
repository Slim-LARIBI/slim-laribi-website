'use client'

import { motion, useReducedMotion } from 'framer-motion'

type Source = { name: string; color: string; initials: string }

const SOURCES: Source[] = [
  { name: 'Meta', color: '#1877F2', initials: 'M' },
  { name: 'Facebook', color: '#1877F2', initials: 'f' },
  { name: 'Instagram', color: '#E1306C', initials: 'IG' },
  { name: 'TikTok', color: '#00F2EA', initials: 'TT' },
  { name: 'Google Ads', color: '#34A853', initials: 'G' },
  { name: 'YouTube', color: '#FF0000', initials: 'YT' },
  { name: 'Snap', color: '#FFFC00', initials: 'S' },
  { name: 'Email', color: '#c9a84c', initials: '@' },
]

function LogoPill({ s }: { s: Source }) {
  return (
    <div
      className="relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md"
      style={{ ['--glow' as any]: s.color }}
      aria-label={s.name}
      title={s.name}
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xs font-semibold text-white/90">
        {s.initials}
        <span
          className="pointer-events-none absolute inset-0 rounded-full opacity-70 blur-md"
          style={{
            background: 'radial-gradient(circle at 30% 30%, var(--glow), transparent 65%)',
          }}
        />
      </span>
      <span className="whitespace-nowrap text-sm text-white/80">{s.name}</span>
    </div>
  )
}

function MarqueeRow({ speed = 18, reverse = false }: { speed?: number; reverse?: boolean }) {
  const reduce = useReducedMotion()
  const items = [...SOURCES, ...SOURCES]

  if (reduce) {
    return (
      <div className="flex flex-wrap gap-2">
        {SOURCES.map((s) => (
          <LogoPill key={s.name} s={s} />
        ))}
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-2"
        style={{ width: 'max-content' }}
        animate={{ x: reverse ? ['-20%', '0%'] : ['0%', '-20%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((s, i) => (
          <LogoPill key={`${s.name}-${i}`} s={s} />
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/40 to-transparent" />
    </div>
  )
}

function Ga4Card() {
  const reduce = useReducedMotion()

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-white/60">Reporting</p>
          <p className="text-lg font-semibold tracking-tight text-white">GA4 Dashboard</p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          Attribution
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
          <p className="text-[11px] text-white/60">Conversions</p>
          <p className="mt-1 text-base font-semibold text-white">+18%</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
          <p className="text-[11px] text-white/60">ROAS</p>
          <p className="mt-1 text-base font-semibold text-white">x2.4</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
          <p className="text-[11px] text-white/60">Data Quality</p>
          <p className="mt-1 text-base font-semibold text-white">99%</p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-white/60">Revenue trend</p>
          <p className="text-[11px] text-white/60">Last 28 days</p>
        </div>

        <div className="relative mt-3 h-16 w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(124,111,247,.18), rgba(201,168,76,.10)), radial-gradient(circle at 20% 40%, rgba(124,111,247,.28), transparent 55%)',
            }}
          />

          {!reduce && (
            <>
              <motion.div
                className="absolute inset-y-0 -left-1/2 w-1/2"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)',
                }}
                animate={{ x: ['0%', '240%'] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="absolute inset-0 flex items-end gap-[3px] px-2 pb-2">
                {[10, 16, 12, 22, 18, 26, 20, 30, 24, 36, 28, 40, 34, 46, 38, 52].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-[6px] rounded-sm bg-white/20"
                    animate={{ height: [6, h, Math.max(8, h - 6), h] }}
                    transition={{
                      duration: 2.4,
                      delay: i * 0.03,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">GA4 events</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">CAPI</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">UTM hygiene</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Attribution</span>
      </div>

      <div
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(124,111,247,.35), transparent 65%)' }}
      />
    </div>
  )
}

export function FunnelAttributionBlockV2() {
  const reduce = useReducedMotion()

  return (
    // ✅ Normal section (no -mt / -mb). Place it after <Hero /> in app/page.tsx
    <section className="relative py-12 md:py-16.">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(circle at 20% 20%, rgba(124,111,247,.18), transparent 55%), radial-gradient(circle at 80% 30%, rgba(201,168,76,.10), transparent 55%)',
            }}
          />

          <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-widest text-white/60">Acquisition Signals</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Du trafic… à la donnée exploitable.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Les signaux multi-plateformes entrent dans un funnel de mesure, normalisation et
                fiabilisation — et ressortent en reporting GA4 clair, actionnable, orienté ROI.
              </p>

              <div className="mt-5 space-y-2">
                <MarqueeRow speed={18} />
                <MarqueeRow speed={22} reverse />
              </div>

              {!reduce && (
                <motion.div
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                  <span>Scroll pour voir la méthode & les cas clients</span>
                </motion.div>
              )}
            </div>

            <div className="md:col-span-5">
              <Ga4Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}