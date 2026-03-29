import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Breedbase",
  description:
    "6 months free for the first 20 trainers. Then £10/month, locked for life.",
};

const includedFeatures = [
  "Full access to everything built",
  "Scheduling & Google Calendar sync",
  "Client & dog profiles",
  "Training programmes & session notes",
  "Direct input into what gets built next",
  "Guaranteed founder pricing forever",
];

const faqs = [
  {
    q: "Is there really no credit card required?",
    a: "Correct. You sign up, you get full access for 6 months, no payment details needed. We want you to actually use it before we ask for anything.",
  },
  {
    q: "What happens after 6 months?",
    a: "We'll ask for your card and you'll move to £10/month — locked for life as a founding member. You'll get plenty of notice before anything changes.",
  },
  {
    q: "What if I want to cancel?",
    a: "Just stop. No contracts, no cancellation flows. We're not in the business of making it difficult to leave — we'd rather earn your loyalty.",
  },
  {
    q: "Is Breedbase only for UK trainers?",
    a: "For now, yes. We're building specifically for the UK market — scheduling, invoicing, and terminology are all UK-first. We may expand later.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── Page hero ─────────────────────────────────────────── */}
      <section className="bg-near-black pt-[120px] pb-[80px] lg:pt-[140px] lg:pb-[100px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <p className="font-manrope text-[11px] uppercase tracking-[0.18em] text-dark-muted mb-8">
            Pricing
          </p>
          <h1 className="font-fraunces text-[48px] sm:text-[58px] lg:text-[68px] leading-[1.04] tracking-[-0.02em] text-white max-w-[640px]">
            Simple. Embarrassingly good right now.
          </h1>
        </div>
      </section>

      {/* ── Pricing block ─────────────────────────────────────── */}
      <section className="bg-warm-white py-[80px] lg:py-[100px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="max-w-[560px]">
            {/* Plan box — sharp corners, clean border */}
            <div className="border border-dark-border p-8 lg:p-10">
              <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-muted mb-6">
                Founding trainer
              </p>

              {/* Price display */}
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-fraunces text-[72px] lg:text-[80px] leading-none text-ink tracking-[-0.03em]">
                  Free
                </span>
                <span className="font-manrope text-[16px] text-muted leading-tight">
                  for 6<br />months
                </span>
              </div>
              <p className="font-manrope text-[15px] text-muted mb-1">
                Then £10/month — locked for life.
              </p>
              <p className="font-manrope text-[13px] text-muted italic mb-8">
                First 20 trainers only.
              </p>

              {/* Feature list */}
              <div className="space-y-3 mb-10">
                {includedFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="font-manrope text-[15px] text-muted shrink-0 select-none mt-px">
                      —
                    </span>
                    <span className="font-manrope text-[15px] text-ink">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://app.breedbase.com/register"
                className="block w-full text-center bg-near-black text-accent font-manrope text-[14px] font-semibold py-4 hover:opacity-80 transition-opacity"
              >
                Claim your free spot
              </a>
              <p className="mt-3 font-manrope text-[12px] text-muted text-center">
                20 spots. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-warm-white pb-[80px] lg:pb-[120px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="border-t border-hairline pt-12 lg:pt-16 max-w-[640px]">
            <p className="font-manrope text-[11px] uppercase tracking-[0.18em] text-muted mb-10">
              Questions
            </p>
            <div className="space-y-10">
              {faqs.map(({ q, a }) => (
                <div key={q}>
                  <p className="font-manrope text-[16px] font-semibold text-ink mb-2 leading-snug">
                    {q}
                  </p>
                  <p className="font-manrope text-[15px] text-muted leading-[1.7]">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
