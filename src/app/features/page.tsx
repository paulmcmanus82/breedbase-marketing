import type { Metadata } from "next";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Features — Breedbase",
  description:
    "Scheduling, client records, session notes, post-visit updates, and invoicing — built around how dog walkers and trainers actually work.",
  openGraph: {
    title: "Features — Breedbase",
    description:
      "Scheduling, client records, session notes, post-visit updates, and invoicing — built around how dog walkers and trainers actually work.",
    url: "https://www.breedbase.com/features",
    siteName: "Breedbase",
    type: "website",
    images: [{ url: "https://www.breedbase.com/og.png", width: 1200, height: 630, alt: "Breedbase features" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — Breedbase",
    description:
      "Scheduling, client records, session notes, post-visit updates, and invoicing — built around how dog walkers and trainers actually work.",
    images: ["https://www.breedbase.com/og.png"],
  },
};

const features = [
  {
    name: "Scheduling",
    description:
      "Book solo walks, group walks, 1:1 training, group classes, drop-ins, and boarding from your phone in under a minute. Every session type is there \u2014 colour-coded so your week is readable at a glance. You pick the type, the client, the date, and you\u2019re done.",
  },
  {
    name: "Post-visit updates in seconds",
    description:
      "Every dog walker sends individual updates to owners after each walk. Most do it manually \u2014 typing a message, finding a photo, copying a number, sending on WhatsApp \u2014 for every dog, every day.\n\nBreedbase automates it. Mark a session complete, attach your photo, and Breedbase pre-writes the update message for you. One tap shares it directly via WhatsApp or SMS. The owner gets a professional update. You save five minutes per dog, every single day.\n\nAt ten dogs a day, that\u2019s nearly an hour back.",
  },
  {
    name: "Client & dog profiles",
    description:
      "Every client, every dog, every visit \u2014 in one place. Breed, vaccination records with expiry alerts, behavioural history, vet details, emergency contacts. The stuff that lives in your head right now.",
  },
  {
    name: "Session notes & behaviour log",
    description:
      "After a session, open the dog\u2019s profile and write your notes directly. Tag the behaviour areas you worked on \u2014 reactivity, recall, leash manners, separation anxiety, and more. Notes are attached to that session, date-stamped, and permanent. Six months later when someone asks where you left off \u2014 you know. When a dog gets referred to a vet, you have the full history ready.",
  },
  {
    name: "Route planning",
    description:
      "For dog walkers: plan your morning pickup round in seconds. Optimal order, client addresses auto-loaded from your records, opens straight into Google Maps. Save 20 minutes every morning.",
    comingSoon: true,
  },
  {
    name: "Invoicing",
    description:
      "Every completed session becomes an invoice with one tap. Send it directly to the client. Track what\u2019s draft, sent, and paid. No more chasing, no more wondering if they got the bank transfer details.",
  },
  {
    name: "Homework delivery",
    description:
      "After a session, assign specific exercises for the client to practise at home. Clients see their homework in a simple portal \u2014 no app download required. You see who\u2019s completing exercises and who isn\u2019t.",
    comingSoon: true,
  },
  {
    name: "Payment collection",
    description:
      "Accept card payments directly through Breedbase via Stripe. Get paid the moment you send an invoice.",
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
            Whether you walk dogs, train them, or both.
          </p>
          <p
            className="font-inter text-[17px] leading-[1.7] max-w-[560px] mt-5"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Breedbase is built around the dog &mdash; not the appointment, not
            the invoice, not the admin. Every feature works whether you&rsquo;re
            a dog walker, a trainer, or both. Your wife might be both. Ours is.
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
                  className="font-inter text-[17px] leading-[1.7] whitespace-pre-line"
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
            The first 20 dog walkers and trainers get 6 months completely free.
            After that, £10/month &mdash; locked for life.
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
    </>
  );
}
