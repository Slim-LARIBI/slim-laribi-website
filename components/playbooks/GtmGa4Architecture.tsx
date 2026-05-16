const flowNodes = [
  ['👤', 'Utilisateur', 'Visite, clique, achète'],
  ['🌐', 'Website', 'Pages, actions, formulaires'],
  ['📦', 'DataLayer', 'Events & produits'],
  ['🏷️', 'GTM', 'Triggers · Variables · Tags'],
  ['📊', 'GA4', 'Events · conversions · audiences'],
  ['📣', 'Ads', 'Google Ads · Meta'],
  ['💡', 'Insights', 'ROAS · optimisation'],
]

const funnel = [
  ['①', 'Impression Produit', 'view_item_list'],
  ['②', 'Fiche Produit', 'view_item'],
  ['③', 'Ajout Panier', 'add_to_cart'],
  ['④', 'Voir Panier', 'view_cart'],
  ['⑤', 'Début Checkout', 'begin_checkout'],
  ['⑥', 'Info Livraison', 'add_shipping_info'],
  ['⑦', 'Info Paiement', 'add_payment_info'],
  ['⑧', 'Achat ⭐', 'purchase'],
]

const events = [
  ['view_item', 'Custom'],
  ['add_to_cart', 'Custom'],
  ['begin_checkout', 'Custom'],
  ['purchase ⭐', 'Conversion'],
  ['search_performed', 'Custom'],
  ['whatsapp_click', 'Custom'],
  ['call_click', 'Custom'],
]

const bestPractices = [
  'Utiliser les events standards GA4',
  'Naming en snake_case',
  'Tester en GTM Preview + GA4 DebugView',
  'Envoyer currency: TND',
  'Dédupliquer via transaction_id',
  'Auditer les tags chaque mois',
]

export function GtmGa4Architecture() {
  return (
    <section className="section-soft-bg py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Decathlon Tunisie · Tracking Architecture · 2026
          </div>
          <h2 className="font-display text-4xl font-black tracking-tight text-brand-text-primary md:text-6xl">
            GTM + GA4 Architecture
          </h2>
          <p className="mt-3 text-brand-text-secondary">
            Complete e-commerce tracking architecture · Google Ads · PMAX · Meta Ads
          </p>
        </div>

        <div className="mb-8 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.035] p-4 md:grid-cols-7">
          {flowNodes.map(([icon, title, desc], i) => (
            <div key={title} className="relative rounded-2xl bg-white/[0.03] p-4 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                {icon}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/70">{title}</div>
              <div className="mt-1 text-xs text-white/40">{desc}</div>
              {i < flowNodes.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-white/25 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[280px_1fr_320px]">
          <Card title="01 Data Layer" color="purple">
            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-xs leading-6 text-white/80">
{`window.dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'TN-4521',
    value: 249.90,
    currency: 'TND',
    items: [{
      item_id: '8547321',
      item_name: 'Tapis de course',
      category: 'Fitness',
      price: 249.90,
      quantity: 1
    }]
  }
});`}
            </pre>

            <div className="mt-4 space-y-2 text-xs">
              {['event', 'page_type', 'product_id', 'product_name', 'category', 'price', 'value', 'currency', 'items[]', 'transaction_id'].map((v) => (
                <div key={v} className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-cyan-300">{v}</span>
                  <span className="text-white/45">variable</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-5">
            <Card title="02 GTM Container Structure" color="blue">
              <div className="grid gap-4 md:grid-cols-3">
                <GtmColumn
                  title="Triggers"
                  items={['Page View', 'Click Triggers', 'Scroll / Engage', 'Ecommerce DL', 'Form Submit']}
                />
                <GtmColumn
                  title="Variables"
                  items={['DataLayer Vars', 'Built-in Vars', 'Custom Vars', 'Computed Vars']}
                />
                <GtmColumn
                  title="Tags"
                  items={['GA4 Config', 'GA4 Ecommerce', 'Google Ads Conv.', 'Meta Pixel', 'Server-side GTM']}
                />
              </div>
            </Card>

            <Card title="02b Funnel E-commerce Tracking" color="cyan">
              <div className="grid gap-3 md:grid-cols-2">
                {funnel.map(([num, title, event]) => (
                  <div
                    key={event}
                    className={`rounded-2xl border bg-white/[0.04] p-4 ${
                      event === 'purchase' ? 'border-red-400/40' : 'border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl font-black text-white/30">{num}</span>
                      <div>
                        <div className="text-sm font-bold text-white">{title}</div>
                        <div className="font-mono text-xs text-cyan-300">{event}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card title="03 GA4 Setup" color="orange">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40">
              Custom events
            </h4>
            <div className="space-y-2">
              {events.map(([event, type]) => (
                <div key={event} className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2">
                  <span className={`font-mono text-xs ${type === 'Conversion' ? 'text-red-300' : 'text-cyan-300'}`}>
                    {event}
                  </span>
                  <span className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase ${
                    type === 'Conversion'
                      ? 'bg-red-400/15 text-red-300'
                      : 'bg-yellow-400/15 text-yellow-300'
                  }`}>
                    {type}
                  </span>
                </div>
              ))}
            </div>

            <h4 className="mb-3 mt-6 text-xs font-bold uppercase tracking-widest text-white/40">
              Audiences remarketing
            </h4>
            {['🔥 Abandons panier', '🌡️ Product viewers', '💙 Buyers', '👥 Lookalike Meta'].map((a) => (
              <div key={a} className="mb-2 rounded-xl border border-violet-400/20 bg-violet-400/10 p-3 text-xs text-violet-200">
                {a}
              </div>
            ))}
          </Card>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Card title="04 Reporting & Activation" color="purple">
            <div className="grid gap-3 md:grid-cols-2">
              {['GA4 Reports', 'Google Ads', 'Meta Ads', 'Looker Studio'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-2 font-bold text-white">{item}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['ROAS', 'CPA', 'Funnel', 'Audience'].map((m) => (
                      <span key={m} className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/50">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="05 Best Practices" color="green">
            <div className="grid gap-3 md:grid-cols-2">
              {bestPractices.map((item) => (
                <div key={item} className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <div className="mb-2 text-emerald-300">✅</div>
                  <div className="text-sm font-semibold text-white">{item}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <div className="flex min-w-max items-center gap-3 text-xs">
            {['User Action', 'Website', 'dataLayer.push()', 'GTM Trigger', 'GTM Variable', 'GTM Tag Fire', 'GA4 Event', 'Conversion', 'Bidding Signal', 'ROAS / PMAX'].map((node, i) => (
              <div key={node} className="flex items-center gap-3">
                <span className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-white/70">
                  {node}
                </span>
                {i < 9 && <span className="text-white/25">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({
  title,
  color,
  children,
}: {
  title: string
  color: 'purple' | 'blue' | 'orange' | 'cyan' | 'green'
  children: React.ReactNode
}) {
  const colors = {
    purple: 'text-violet-300 border-violet-400/20',
    blue: 'text-cyan-300 border-cyan-400/20',
    orange: 'text-orange-300 border-orange-400/20',
    cyan: 'text-cyan-300 border-cyan-400/20',
    green: 'text-emerald-300 border-emerald-400/20',
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl">
      <div className={`border-b px-5 py-4 ${colors[color]}`}>
        <h3 className="text-xs font-black uppercase tracking-[0.2em]">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function GtmColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-3 border-b border-white/10 pb-2 text-xs font-bold uppercase tracking-widest text-white/40">
        {title}
      </h4>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="text-sm font-semibold text-white">{item}</div>
            <div className="mt-1 font-mono text-xs text-white/35">rules · params · debug</div>
          </div>
        ))}
      </div>
    </div>
  )
}