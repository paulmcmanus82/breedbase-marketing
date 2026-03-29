import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Breedbase",
};

export default function TermsPage() {
  return (
    <div className="bg-warm-white min-h-screen pt-[64px]">
      <div className="max-w-[680px] mx-auto px-6 py-[80px] lg:py-[100px]">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-fraunces text-[18px] text-ink hover:opacity-70 transition-opacity block mb-12"
        >
          Breedbase
        </Link>

        <p className="font-manrope text-[11px] uppercase tracking-[0.18em] text-muted mb-6">
          Terms of service
        </p>
        <h1 className="font-fraunces text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] text-ink mb-3">
          Terms of Service
        </h1>
        <p className="font-manrope text-[13px] text-muted mb-12">
          Last updated: March 2026
        </p>

        <div className="border-t border-hairline pt-8">
          <p className="font-manrope text-[16px] text-muted leading-[1.75]">
            These terms of service are being updated. Please check back soon.
          </p>
          <p className="font-manrope text-[16px] text-muted leading-[1.75] mt-4">
            If you have any questions, contact us at{" "}
            <a
              href="mailto:hello@breedbase.com"
              className="text-ink underline underline-offset-2"
            >
              hello@breedbase.com
            </a>
            .
          </p>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-hairline">
          <Link
            href="/"
            className="font-manrope text-[14px] text-muted hover:text-ink transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
