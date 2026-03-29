import type { Metadata } from "next";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Features — Breedbase",
  description:
    "Scheduling, client records, training programmes, session notes, and more — built around how dog trainers actually work.",
};

const features = [
  {
    name: "Scheduling",
    description:
      "Book assessments, 1:1s, follow-ups, and group classes from your phone in under a minute. Every session type is there — you pick the type, the client, the date, and you're done. Syncs with Google Calendar automatically so you're never managing two diaries at once.",
  },
  {
    name: "Client & dog profiles",
    description:
      "Every client, every dog, every session — in one place. Breed, vaccination status, behavioural history, emergency contacts, who the owner is — lives in Breedbase. Search any client or dog in seconds. See their full history at a glance before a session.",
  },
  {
    name: "Training programmes",
    description:
      "Create a 6-week reactive dog programme, a puppy foundation course, or a custom plan for a specific behavioural issue. Each programme has sessions, each session has objectives and notes. Mark sessions complete as you go and see where every dog is on their programme.",
  },
  {
    name: "Session notes",
    description:
      "After a session, open the dog's profile and write your notes directly. They're attached to that session, date-stamped, and permanent. Six months later when someone asks where you left off — you know. When a dog gets referred to a vet, you have the full history ready.",
  },
  {
    name: "Google Calendar sync",
    description:
      "Link your Google Calendar once. From then on, every session you book in Breedbase appears in your calendar instantly. Edit or cancel in Breedbase and your calendar updates. One source of truth — visible in the app you already use.",
  },
  {
    name: "Homework delivery",
    description:
      "After a session, assign specific exercises for the client to practise at home. Clients see their homework in a simple portal — no app download required. You see who's completing exercises and who isn't.",
    comingSoon: true,
  },
  {
    name: "Invoicing & payments",
    description:
      "Every completed session becomes an invoice with one tap. Send it directly to the client. They pay online. No more chasing, no more wondering if they got the bank transfer details.",
    comingSoon: true,
  },
];

export default function FeaturesPage() {
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
            FEATURES
          </p>
          <h1
            className="font-fraunces font-medium text-[48px] lg:text-[64px] leading-[1.04] text-white mb-5 max-w-[720px]"
          >
            Built around how you actually work.
          </h1>
          <p
            className="font-inter text-[17px] leading-[1.6] max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Not how a software company thinks you work.
          </p>
        </div>
      </section>

      {/* Feature list */}
      <section className="bg-canvas py-[80px]">
        <div className="max-w-site mx-auto px-6 lg:px-10">
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
                  <h2
                    className="font-fraunces font-medium text-[26px] leading-snug"
                    style={{ color: "var(--color-teal)" }}
                  >
                    {feature.name}
                  </h2>
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
      </section>

      {/* CTA */}
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
            The first 20 trainers get 6 months completely free. After that,
            £10/month — locked for life.
          </p>
          <div className="mt-10">
            <Button variant="secondary" href="https://app.breedbase.com/signup">
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
    </>
  );
}
