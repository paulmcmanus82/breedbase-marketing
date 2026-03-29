import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Breedbase",
  description:
    "Scheduling, client records, training programmes, session notes, and more — built around how dog trainers actually work.",
};

const features = [
  {
    name: "Scheduling",
    description:
      "Book assessments, 1:1s, follow-ups, and group classes from your phone in under a minute.",
    detail:
      "No more bouncing between a paper diary and a phone calendar. Open Breedbase, pick a client, pick a date, done. Every session type is there — assessment, 1:1, follow-up, group class. Your day view shows you exactly what's on and who's coming. Syncs with Google Calendar automatically so you're never managing two diaries at once.",
  },
  {
    name: "Client & dog profiles",
    description:
      "Every client, every dog, every session — in one place.",
    detail:
      "The stuff that lives in your head right now — breed, vaccination status, behavioural history, emergency contacts, who the owner is — lives in Breedbase instead. Search any client or dog in seconds. See their full history at a glance before a session. Add intake notes when a new client enquires. Nothing gets lost in a chat thread.",
  },
  {
    name: "Training programmes",
    description:
      "Structure a multi-week programme and track real progress session by session.",
    detail:
      "Create a 6-week reactive dog programme, a puppy foundation course, or a custom plan for a specific behavioural issue. Each programme has sessions, each session has objectives and notes. Mark sessions complete as you go, log progress readings, and see at a glance where every dog is on their programme. Not just a list of dates — actual documented development.",
  },
  {
    name: "Session notes",
    description:
      "Log what happened while it's fresh. Notes stay with the dog's record forever.",
    detail:
      "After a session, open the dog's profile and write your notes directly. They're attached to that session, date-stamped, and searchable. Six months later when someone asks where you left off — you know. When a dog gets referred to a vet, you have the full history ready. When a client disputes something — the record is there.",
  },
  {
    name: "Google Calendar sync",
    description:
      "Connect once. Every session appears in your Google Calendar automatically.",
    detail:
      "Link your Google Calendar in one step. From then on, every session you book in Breedbase appears in your calendar instantly. Edit or cancel a session in Breedbase and your calendar updates. You always have one source of truth — and you can still see everything in the calendar app you already use.",
  },
  {
    name: "Homework delivery",
    description:
      "Coming soon — send exercises to clients after sessions, see who's keeping up.",
    detail:
      "After a session, assign specific exercises for the client to practice at home. Set frequency, add notes, attach video links. Clients see their homework in a simple portal — no app download required. You see who's completing exercises and who isn't. Nudge the ones who've gone quiet.",
    comingSoon: true,
  },
  {
    name: "Invoicing & payments",
    description:
      "Coming soon — generate invoices from completed sessions, get paid online.",
    detail:
      "Every completed session becomes an invoice with one tap. Send it directly to the client. They pay online. You get notified. No more chasing, no more wondering whether they got the bank transfer details, no more mental arithmetic at the end of the month.",
    comingSoon: true,
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* ── Page hero ─────────────────────────────────────────── */}
      <section className="bg-near-black pt-[120px] pb-[80px] lg:pt-[140px] lg:pb-[100px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-dark-muted mb-8">
            Features
          </p>
          <h1 className="font-fraunces text-[48px] sm:text-[58px] lg:text-[68px] leading-[1.04] tracking-[-0.02em] text-white mb-5 max-w-[720px]">
            Built around how you actually work.
          </h1>
          <p className="font-inter text-[17px] lg:text-[18px] text-dark-muted leading-[1.6] max-w-[520px]">
            Not how a software company thinks you work.
          </p>
        </div>
      </section>

      {/* ── Feature list ─────────────────────────────────────── */}
      <section className="bg-warm-white py-[80px] lg:py-[100px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          {features.map((feature) => (
            <div
              key={feature.name}
              className={`border-t border-hairline py-10 lg:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 transition-opacity ${
                feature.comingSoon ? "opacity-40" : ""
              }`}
            >
              {/* Left column */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  <h2 className="font-fraunces text-[24px] lg:text-[28px] text-ink leading-snug">
                    {feature.name}
                  </h2>
                  {feature.comingSoon && (
                    <span className="font-inter text-[9px] uppercase tracking-[0.12em] bg-surface text-muted px-2 py-1">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="font-inter text-[14px] text-muted leading-[1.6] italic">
                  {feature.description}
                </p>
              </div>
              {/* Right column */}
              <div className="md:col-span-8">
                <p className="font-inter text-[16px] lg:text-[17px] text-muted leading-[1.75]">
                  {feature.detail}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-hairline" />
        </div>
      </section>

      {/* ── CTA section ──────────────────────────────────────── */}
      <section className="bg-near-black py-[80px] lg:py-[120px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="max-w-[640px]">
            <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-dark-muted mb-8">
              Early access
            </p>
            <h2 className="font-fraunces text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.06] tracking-[-0.02em] text-white mb-6 lg:mb-8">
              An embarrassingly good deal.
            </h2>
            <p className="font-inter text-[17px] text-dark-muted leading-[1.7] mb-10">
              The first 20 trainers get 6 months completely free. After that,
              £10/month — locked for life.
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
    </>
  );
}
