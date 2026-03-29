import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Breedbase",
};

export default function TermsPage() {
  return (
    <div className="bg-canvas min-h-screen pt-[64px]">
      <div className="max-w-[680px] mx-auto px-6 py-[80px] lg:py-[100px]">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-fraunces text-[18px] block mb-12 transition-colors"
          style={{ color: "var(--color-charcoal-dark)" }}
        >
          Breedbase
        </Link>

        <p
          className="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
          style={{ color: "var(--color-text-muted)" }}
        >
          TERMS OF SERVICE
        </p>
        <h1
          className="font-fraunces text-[40px] lg:text-[48px] leading-[1.08]"
          style={{ color: "var(--color-charcoal-dark)" }}
        >
          Terms of Service
        </h1>
        <p
          className="font-inter text-[13px] mt-2 mb-12"
          style={{ color: "var(--color-text-muted)" }}
        >
          Last updated: March 2026
        </p>

        <div
          className="pt-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p
            className="font-inter text-[16px] leading-[1.75]"
            style={{ color: "var(--color-text-muted)" }}
          >
            This policy is being updated. Please check back soon or contact us
            at{" "}
            <a
              href="mailto:hello@breedbase.com"
              className="underline underline-offset-2 transition-colors"
              style={{ color: "var(--color-teal)" }}
            >
              hello@breedbase.com
            </a>
            .
          </p>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="font-inter text-[14px] transition-colors"
            style={{ color: "var(--color-teal)" }}
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
