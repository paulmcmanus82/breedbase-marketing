import type { Metadata } from "next";
import { Button } from "@/components/button";

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
    a: "Correct. You sign up, you get full access for 6 months, no payment details needed.",
  },
  {
    q: "What happens after 6 months?",
    a: "We'll ask for your card and you'll move to £10/month — locked for life as a founding member. You'll get plenty of notice before anything changes.",
  },
  {
    q: "What if I want to cancel?",
    a: "Just stop. No contracts, no cancellation flows.",
  },
  {
    q: "Is Breedbase only for UK trainers?",
    a: "For now, yes. We're building specifically for the UK market first.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-[120px] pb-[80px] lg:pt-[140px]"
        style={{ background: "var(--color-teal)" }}
      >
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <p
            className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] mb-8"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            PRICING
          </p>
          <h1
            className="font-fraunces font-medium text-[48px] lg:text-[64px] leading-[1.04] text-white max-w-[640px]"
          >
            Simple. Embarrassingly good right now.
          </h1>
        </div>
      </section>

      {/* Pricing block */}
      <section className="bg-canvas py-[80px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="max-w-[520px] mx-auto">
            <div
              style={{
                background: "var(--color-surface)",
                border: "2px solid var(--color-teal)",
                padding: "48px",
              }}
            >
              <p
                className="font-inter font-semibold text-[11px] uppercase tracking-[0.12em] mb-6"
                style={{ color: "var(--color-teal)" }}
              >
                FOUNDING TRAINER
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span
                  className="font-fraunces font-semibold text-[80px] leading-none tracking-[-0.02em]"
                  style={{ color: "var(--color-charcoal-dark)" }}
                >
                  Free
                </span>
                <span
                  className="font-fraunces text-[20px] leading-snug"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  for 6 months
                </span>
              </div>
              <p
                className="font-inter text-[16px] mt-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                Then £10/month — locked for life.
              </p>
              <p
                className="font-inter font-semibold text-[14px] mt-1"
                style={{ color: "var(--color-amber)" }}
              >
                First 20 trainers only.
              </p>

              {/* Feature list */}
              <div
                className="mt-8 pt-8 space-y-3"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                {includedFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span
                      className="font-inter text-[15px] shrink-0 select-none"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      —
                    </span>
                    <span
                      className="font-inter text-[15px]"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button
                  variant="primary"
                  href="https://app.breedbase.com/signup"
                  className="w-full justify-center"
                >
                  Claim your free spot
                </Button>
              </div>
              <p
                className="font-inter text-[13px] mt-3 text-center"
                style={{ color: "var(--color-text-muted)" }}
              >
                20 spots. No credit card required.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div
            className="max-w-[520px] mx-auto mt-16 pt-16"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {faqs.map(({ q, a }) => (
              <div key={q} className="mb-10">
                <p
                  className="font-inter font-semibold text-[17px] mb-2"
                  style={{ color: "var(--color-charcoal-dark)" }}
                >
                  {q}
                </p>
                <p
                  className="font-inter text-[17px] leading-[1.7]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
