'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Source = {
  name: string;
  color: string; // used only for glow via CSS variable, not mandatory
  initials: string; // simple logo fallback (avoids external assets)
};

const SOURCES: Source[] = [
  { name: 'Meta', color: '#1877F2', initials: 'M' },
  { name: 'Facebook', color: '#1877F2', initials: 'f' },
  { name: 'Instagram', color: '#E1306C', initials: 'IG' },
  { name: 'TikTok', color: '#00F2EA', initials: 'TT' },
  { name: 'Google Ads', color: '#34A853', initials: 'G' },
  { name: 'YouTube', color: '#FF0000', initials: 'YT' },
];

function LogoPill({ s }: { s: Source }) {
  return (
    <div
      className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md"
      style={{ ['--glow' as any]: s.color }}
      aria-label={s.name}
      title={s.name}
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xs font-semibold text-white/90">
        {s.initials}
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: 'radial-gradient(circle at 30% 30%, var(--glow), transparent 65%)' }} />
      </span>
      <span className="text-sm text-white/80">{s.name}</span>
    </div>
  );
}

function Ga4Card() {
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

      {/* Fake chart */}
      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-white/60">Revenue trend</p>
          <p className="text-[11px] text-white/60">Last 28 days</p>
        </div>
        <div className="mt-3 h-16 w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <div className="h-full w-full"
               style={{
                 background:
                   'linear-gradient(90deg, rgba(124,111,247,.25), rgba(201,168,76,.18)), radial-gradient(circle at 20% 40%, rgba(124,111,247,.35), transparent 55%)',
               }}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl"
           style={{ background: 'radial-gradient(circle, rgba(124,111,247,.35), transparent 65%)' }} />
    </div>
  );
}

export function FunnelAttributionBlock() {
  const reduce = useReducedMotion();

  const float = reduce
    ? {}
    : {
        y: [0, -6, 0],
        transition: { duration: 3.6, repeat: Infinity, ease: 'easeInOut' as const },
      };

  return (
    <section className="relative mx-auto mt-10 max-w-6xl px-6 md:mt-14 md:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-10">
        {/* subtle background */}
        <div className="pointer-events-none absolute inset-0 opacity-70"
             style={{
               background:
                 'radial-gradient(circle at 20% 20%, rgba(124,111,247,.18), transparent 55%), radial-gradient(circle at 80% 30%, rgba(201,168,76,.10), transparent 55%)',
             }}
        />
        <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
          {/* Left: sources */}
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-widest text-white/60">Acquisition Signals</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Du trafic… à la donnée exploitable.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Les signaux multi-plateformes entrent dans un funnel de mesure, normalisation et
              fiabilisation — et ressortent en reporting GA4 clair, actionnable, orienté ROI.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {SOURCES.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={reduce ? false : { opacity: 0, x: -10 }}
                  whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, delay: 0.06 * i }}
                >
                  <LogoPill s={s} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Middle: funnel */}
          <div className="relative md:col-span-3">
            <div className="relative mx-auto flex w-full max-w-xs items-center justify-center md:max-w-none">
              <svg
                className="h-56 w-full md:h-72"
                viewBox="0 0 220 300"
                fill="none"
                aria-label="Funnel animation"
              >
                {/* funnel outline */}
                <path
                  d="M30 40 H190 L145 140 V200 Q145 230 110 245 Q75 230 75 200 V140 L30 40Z"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="2"
                />
                {/* inner glow */}
                <path
                  d="M42 52 H178 L138 138 V198 Q138 220 110 232 Q82 220 82 198 V138 L42 52Z"
                  fill="rgba(124,111,247,0.08)"
                />

                {/* particles moving in */}
                {!reduce && (
                  <>
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <motion.circle
                        key={idx}
                        cx={idx % 2 === 0 ? 70 : 150}
                        cy={20 + idx * 10}
                        r={3.2}
                        fill="rgba(201,168,76,0.9)"
                        initial={{ opacity: 0.0 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          cy: [28, 120, 185, 245],
                          cx: [idx % 2 === 0 ? 70 : 150, 110, 110, 110],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          delay: idx * 0.25,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </>
                )}

                {/* output line */}
                <path
                  d="M110 245 V285"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* output pulse */}
                {!reduce && (
                  <motion.circle
                    cx="110"
                    cy="285"
                    r="6"
                    fill="rgba(124,111,247,0.85)"
                    animate={{ r: [6, 10, 6], opacity: [0.6, 0.25, 0.6] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </svg>

              {/* labels */}
              <div className="pointer-events-none absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-white/70">
                Signals In
              </div>
              <div className="pointer-events-none absolute -bottom-3 left-0 right-0 mx-auto w-fit rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-white/70">
                Clean Data Out
              </div>
            </div>
          </div>

          {/* Right: GA4 reporting */}
          <div className="md:col-span-4">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              animate={float as any}
            >
              <Ga4Card />
            </motion.div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">GA4 events</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">CAPI</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">UTM hygiene</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Attribution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}