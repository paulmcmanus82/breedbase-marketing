import Link from "next/link";
import { AppMockup } from "@/components/app-mockup";

const features = [
  {
    name: "Scheduling",
    description:
      "Book assessments, 1:1s, follow-ups, and group classes from your phone in under a minute. Syncs with Google Calendar automatically. Never manage two diaries again.",
  },
  {
    name: "Client & dog profiles",
    description:
      "Every client, every dog, every session — in one place. Breed, vaccination records, behavioural history, emergency contacts. The stuff that lives in your head right now.",
  },
  {
    name: "Training programmes",
    description:
      "Structure a 6-week programme for a reactive dog or a puppy foundation course — and track real progress session by session. Not just dates. Actual development.",
  },
  {
    name: "Session notes",
    description:
      "Log what happened while it's fresh. Notes attach to the dog's record automatically. Six months later, you'll know exactly where you left off.",
  },
  {
    name: "Homework delivery",
    description:
      "Coming soon — send exercises to clients after sessions, see who's keeping up, nudge who isn't.",
    comingSoon: true,
  },
  {
    name: "Invoicing & payments",
    description:
      "Coming soon — generate invoices from completed sessions, get paid online, stop chasing.",
    comingSoon: true,
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center bg-warm-white pt-[64px]">
        <div className="w-full max-w-site mx-auto px-6 lg:px-10 py-16 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
            {/* Left — 7 cols */}
            <div className="lg:col-span-7">
              <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-muted mb-6 lg:mb-8">
                The business tool for dog trainers
              </p>
              <h1 className="font-fraunces text-[48px] sm:text-[60px] lg:text-[76px] xl:text-[84px] leading-[1.02] tracking-[-0.02em] text-ink mb-6 lg:mb-8">
                Stop running your business on a WhatsApp thread{" "}
                <span className="text-accent">and a prayer.</span>
              </h1>
              <p className="font-inter text-[17px] lg:text-[18px] text-muted leading-[1.6] max-w-[480px] mb-8 lg:mb-10">
                Breedbase handles your scheduling, client records, and training
                programmes — built for dog trainers, not adapted from something
                else.
              </p>
              <div>
                <a
                  href="https://app.breedbase.com/register"
                  className="inline-block bg-near-black text-accent font-inter text-[14px] font-medium px-6 py-3.5 hover:opacity-80 transition-opacity"
                >
                  Get 6 months free
                </a>
                <p className="mt-3 font-inter text-[12px] text-muted">
                  First 20 trainers only · No credit card · £10/month after
                </p>
              </div>
            </div>

            {/* Right — 5 cols */}
            <div className="lg:col-span-5 lg:h-[520px] relative">
              <AppMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem section ───────────────────────────────────── */}
      <section className="bg-near-black py-[80px] lg:py-[120px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-dark-muted mb-8 lg:mb-10">
            The reality
          </p>
          <h2 className="font-fraunces text-[42px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em] text-white mb-14 lg:mb-16 max-w-[640px]">
            You're organised. Your tools aren't.
          </h2>

          {/* Numbered statements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 mb-14 lg:mb-16">
            {[
              {
                num: "01",
                text: "Your client's address is in a text from six months ago.",
              },
              {
                num: "02",
                text: "You sent the invoice. You think. You're not sure if they paid.",
              },
              {
                num: "03",
                text: "The session notes are in four different apps and your memory.",
              },
            ].map(({ num, text }) => (
              <div key={num}>
                <p className="font-fraunces text-[80px] lg:text-[96px] leading-none text-dark-border mb-4 select-none">
                  {num}
                </p>
                <p className="font-inter text-[17px] text-white leading-[1.6]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Body text */}
          <div className="border-t border-dark-border pt-12">
            <p className="font-inter text-[17px] lg:text-[18px] text-dark-muted leading-[1.7] max-w-[640px]">
              Most trainers aren't disorganised. They're just using tools that
              were never designed for them. Breedbase was built from scratch for
              how dog trainers actually work — by someone whose wife is one.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features section ──────────────────────────────────── */}
      <section className="bg-warm-white py-[80px] lg:py-[120px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-muted mb-8 lg:mb-10">
            What you get
          </p>
          <h2 className="font-fraunces text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-ink mb-12 lg:mb-16 max-w-[640px]">
            Everything in one place. Nothing you don't need.
          </h2>

          {/* Feature list */}
          <div>
            {features.map((feature) => (
              <div
                key={feature.name}
                className={`border-t border-hairline py-8 lg:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 transition-opacity ${
                  feature.comingSoon ? "opacity-40" : ""
                }`}
              >
                <div className="md:col-span-4 lg:col-span-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-fraunces text-[22px] lg:text-[26px] text-ink leading-snug">
                      {feature.name}
                    </h3>
                    {feature.comingSoon && (
                      <span className="font-inter text-[9px] uppercase tracking-[0.12em] bg-surface text-muted px-2 py-1">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
                <div className="md:col-span-8 lg:col-span-8">
                  <p className="font-inter text-[16px] text-muted leading-[1.7]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-hairline" />
          </div>
        </div>
      </section>

      {/* ── Pricing teaser ────────────────────────────────────── */}
      <section className="bg-near-black py-[80px] lg:py-[120px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="max-w-[680px]">
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-dark-muted mb-8">
              Early access
            </p>
            <h2 className="font-fraunces text-[42px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em] text-white mb-6 lg:mb-8">
              An embarrassingly good deal.
            </h2>
            <p className="font-inter text-[17px] lg:text-[18px] text-dark-muted leading-[1.7] mb-10 lg:mb-12">
              We're in early access. The first 20 trainers get 6 months
              completely free. After that, founding members pay £10/month —
              locked for life. We're doing this because we want trainers who'll
              tell us what to fix.
            </p>
            <div>
              <a
                href="https://app.breedbase.com/register"
                className="inline-block bg-accent text-near-black font-inter text-[14px] font-semibold px-6 py-3.5 hover:opacity-80 transition-opacity"
              >
                Claim your spot
              </a>
              <p className="mt-3 font-inter text-[12px] text-dark-muted">
                20 spots. No credit card. No contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="bg-warm-white py-[80px] lg:py-[120px]">
        <div className="max-w-site mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-fraunces text-[44px] sm:text-[52px] lg:text-[64px] leading-[1.08] tracking-[-0.02em] text-ink mb-8 max-w-[720px] mx-auto">
            Your clients deserve a trainer who isn't drowning in admin.
          </h2>
          <a
            href="https://app.breedbase.com/register"
            className="inline-block bg-near-black text-accent font-inter text-[14px] font-medium px-7 py-4 hover:opacity-80 transition-opacity"
          >
            Get 6 months free
          </a>
          <p className="mt-3 font-inter text-[12px] text-muted">
            First 20 trainers only · No credit card required
          </p>
        </div>
      </section>
    </>
  );
}
