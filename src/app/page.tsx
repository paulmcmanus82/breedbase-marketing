import { Button } from "@/components/button";
import { AppMockup } from "@/components/app-mockup";

const features = [
  {
    name: "Scheduling",
    description:
      "Book solo walks, group walks, 1:1 training sessions, group classes, and drop-ins from your phone in under a minute. Colour-coded by session type. Never manage two diaries again.",
  },
  {
    name: "Post-visit updates in seconds",
    description:
      "Complete a session, attach a photo, and send the owner a WhatsApp update — all in under 30 seconds. No more typing individual messages after every walk.",
  },
  {
    name: "Client & dog profiles",
    description:
      "Every client, every dog, every visit — in one place. Breed, vaccination records with expiry alerts, behavioural history, vet details, emergency contacts. The stuff that lives in your head right now.",
  },
  {
    name: "Session notes",
    description:
      "Log what happened while it\u2019s fresh. Tag behaviour areas covered — reactivity, recall, leash manners, and more. Notes attach to the dog\u2019s record automatically. Six months later, you\u2019ll know exactly where you left off.",
  },
  {
    name: "Route planning",
    description:
      "For dog walkers: plan your morning pickup round in seconds. Optimal order, client addresses auto-loaded from your records, opens straight into Google Maps. Save 20 minutes every morning.",
    comingSoon: true,
  },
  {
    name: "Homework delivery",
    description:
      "Send exercises to clients after sessions, see who\u2019s keeping up, nudge who isn\u2019t.",
    comingSoon: true,
  },
  {
    name: "Invoicing",
    description:
      "Create invoices from completed sessions, track what\u2019s draft, sent, and paid. No more wondering whether they got the bank transfer details.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="min-h-screen flex items-center bg-canvas pt-[64px]">
        <div className="w-full max-w-site mx-auto px-6 lg:px-10 py-16 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left — 7 cols */}
            <div className="lg:col-span-7">
              <p
                className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] mb-6"
                style={{ color: "var(--color-text-muted)" }}
              >
                THE BUSINESS TOOL FOR DOG WALKERS &amp; TRAINERS
              </p>
              <h1
                className="font-fraunces font-semibold text-[52px] lg:text-[88px] leading-[1.0] tracking-[-0.02em]"
                style={{ color: "var(--color-charcoal-dark)" }}
              >
                Stop running your
                <br />
                business on a
                <br />
                WhatsApp thread
                <br />
                <span style={{ color: "var(--color-amber)" }}>
                  and a prayer.
                </span>
              </h1>
              <p
                className="font-inter text-[17px] leading-[1.7] max-w-[480px] mt-6"
                style={{ color: "var(--color-text-muted)" }}
              >
                Breedbase handles your scheduling, client records, session
                notes, and post-visit updates &mdash; built for dog walkers and
                trainers, not adapted from something else.
              </p>
              <div className="mt-10">
                <Button variant="primary" href="https://app.breedbase.com/signup">
                  Get 6 months free
                </Button>
              </div>
              <p
                className="font-inter text-[13px] mt-3"
                style={{ color: "var(--color-text-muted)" }}
              >
                First 20 spots only &middot; No credit card &middot; £10/month after
              </p>
            </div>

            {/* Right — 5 cols */}
            <div className="lg:col-span-5">
              <AppMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section
        className="py-[80px] lg:py-[120px]"
        style={{ background: "var(--color-teal)" }}
      >
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <p
            className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] mb-8"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            THE REALITY
          </p>
          <h2
            className="font-fraunces font-medium text-[40px] lg:text-[56px] leading-[1.05] text-white mb-14"
          >
            You&rsquo;re a professional. Your tools don&rsquo;t act like it.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                n: "01",
                text: "Your client\u2019s dog\u2019s address, medical notes, and emergency contact are in three different places.",
              },
              {
                n: "02",
                text: "You sent the invoice. You think. You\u2019re not sure if they paid.",
              },
              {
                n: "03",
                text: "You typed the same post-visit WhatsApp update six times today \u2014 once per dog.",
              },
            ].map(({ n, text }) => (
              <div key={n}>
                <p
                  className="font-fraunces text-[100px] lg:text-[120px] leading-none select-none"
                  style={{ color: "rgba(255,255,255,0.1)" }}
                >
                  {n}
                </p>
                <p className="font-inter text-[17px] text-white leading-[1.6] -mt-6">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-12 pt-12"
            style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
          >
            <p
              className="font-inter text-[17px] leading-[1.7] max-w-[640px]"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Most dog professionals aren&rsquo;t disorganised. They&rsquo;re just using
              tools that were never designed for them. Breedbase was built from
              scratch for how dog walkers and trainers actually work &mdash; by
              someone whose wife is both.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Features */}
      <section className="bg-canvas py-[80px] lg:py-[100px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <p
            className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
            style={{ color: "var(--color-text-muted)" }}
          >
            WHAT YOU GET
          </p>
          <h2
            className="font-fraunces font-medium text-[40px] lg:text-[52px] leading-[1.05] mb-12"
            style={{ color: "var(--color-charcoal-dark)" }}
          >
            Everything you need. Nothing you don&rsquo;t.
          </h2>

          <div>
            {features.map((feature, i) => (
              <div
                key={feature.name}
                className={`py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 ${
                  feature.comingSoon ? "opacity-50" : ""
                }`}
                style={{
                  borderTop: "1px solid var(--color-border)",
                  borderBottom:
                    i === features.length - 1
                      ? "1px solid var(--color-border)"
                      : "none",
                }}
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3
                      className="font-fraunces font-medium text-[26px] leading-snug"
                      style={{ color: "var(--color-teal)" }}
                    >
                      {feature.name}
                    </h3>
                    {feature.comingSoon && (
                      <span
                        className="font-inter text-[11px] uppercase tracking-[0.08em] px-2 py-0.5 rounded-none"
                        style={{
                          background: "var(--color-teal-light)",
                          color: "var(--color-teal)",
                        }}
                      >
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
                <div className="md:col-span-8">
                  <p
                    className="font-inter text-[17px] leading-[1.7]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Early access */}
      <section
        className="py-[80px] lg:py-[120px]"
        style={{ background: "var(--color-charcoal-dark)" }}
      >
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <p
            className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            EARLY ACCESS
          </p>
          <h2 className="font-fraunces font-medium text-[40px] lg:text-[52px] text-white">
            An embarrassingly good deal.
          </h2>
          <p
            className="font-inter text-[17px] leading-[1.7] max-w-[580px] mt-6"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            We&rsquo;re in early access. The first 20 dog walkers and trainers get 6
            months completely free. After that, founding members pay £10/month
            &mdash; locked for life. We&rsquo;re doing this because we want professionals
            who&rsquo;ll tell us what to fix.
          </p>
          <div className="mt-10">
            <Button variant="primary" href="https://app.breedbase.com/signup">
              Claim your spot
            </Button>
          </div>
          <p
            className="font-inter text-[13px] mt-3"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            20 spots. No credit card. No contracts.
          </p>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section
        className="py-[80px] lg:py-[100px] text-center"
        style={{ background: "var(--color-bg)" }}
      >
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <h2
            className="font-fraunces font-medium text-[40px] lg:text-[52px] max-w-[640px] mx-auto leading-[1.08]"
            style={{ color: "var(--color-charcoal-dark)" }}
          >
            Your clients deserve a trainer who isn&rsquo;t drowning in admin.
          </h2>
          <div className="mt-10 flex justify-center">
            <Button variant="primary" href="https://app.breedbase.com/signup">
              Get free access
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
