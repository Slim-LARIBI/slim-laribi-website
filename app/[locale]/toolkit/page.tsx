import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Toolkits — Slim Laribi",
  description:
    "Collection de toolkits et ressources autour du tracking, analytics, GTM, GA4 et marketing data.",
};

export default function ToolkitHubPage({
  params,
}: {
  params: { locale: "fr" | "en" };
}) {
  const locale = params.locale || "fr";

  return (
    <main className="min-h-screen bg-[#080914] py-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          <Badge variant="gold" dot className="mb-6">
            Resources · Toolkits
          </Badge>

          <h1 className="font-display text-5xl font-black tracking-tight text-white md:text-6xl">
            Toolkits & Resources
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Visual frameworks, tracking architectures and advanced resources
            around GTM, GA4, server-side tracking, consent mode and marketing
            analytics.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Link
              href={`/${locale}/toolkit/gtm-ga4-architecture`}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">
                Tracking · GA4
              </div>

              <h2 className="text-2xl font-bold text-white">
                GTM + GA4 Architecture Diagram
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Complete visual architecture for dataLayer, GTM, GA4,
                ecommerce tracking, consent mode and analytics workflows.
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}