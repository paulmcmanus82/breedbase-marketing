"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-warm-white border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-site mx-auto px-6 lg:px-10 h-[64px] flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-fraunces text-[20px] text-ink leading-none hover:opacity-70 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            Breedbase
          </Link>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://app.breedbase.com/login"
              className="text-sm font-manrope text-muted hover:text-ink transition-colors"
            >
              Sign in
            </a>
            <a
              href="https://app.breedbase.com/register"
              className="text-sm font-manrope bg-near-black text-accent px-4 py-2.5 hover:opacity-80 transition-opacity"
            >
              Get early access
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-[5px]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-px bg-ink origin-center transition-transform duration-200 ${
                mobileOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-ink transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-ink origin-center transition-transform duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu — slides in from right, full height */}
      <div
        className={`fixed inset-0 top-[64px] z-40 bg-warm-white transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-10 pb-8 gap-8">
          <Link
            href="/features"
            className="font-fraunces text-[32px] text-ink leading-none"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="font-fraunces text-[32px] text-ink leading-none"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>
          <div className="border-t border-hairline pt-8 space-y-4">
            <a
              href="https://app.breedbase.com/login"
              className="block font-manrope text-[18px] text-muted"
              onClick={() => setMobileOpen(false)}
            >
              Sign in
            </a>
            <a
              href="https://app.breedbase.com/register"
              className="inline-block bg-near-black text-accent font-manrope text-sm px-6 py-3.5"
              onClick={() => setMobileOpen(false)}
            >
              Get early access
            </a>
          </div>
          <div className="mt-auto">
            <p className="text-xs text-muted font-manrope">
              Built for professional dog trainers in the UK.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
