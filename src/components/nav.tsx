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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "border-b"
            : "border-b border-transparent"
        }`}
        style={
          scrolled || mobileOpen
            ? {
                background: "var(--color-bg)",
                borderBottomColor: "var(--color-border)",
              }
            : { background: "transparent" }
        }
      >
        <div className="max-w-site mx-auto px-6 lg:px-10 h-[64px] flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-fraunces font-semibold text-[20px] leading-none transition-opacity hover:opacity-70"
            style={{ color: "var(--color-charcoal-dark)" }}
            onClick={() => setMobileOpen(false)}
          >
            Breedbase
          </Link>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://app.breedbase.com/login"
              className="font-inter font-medium text-sm transition-colors"
              style={{ color: "var(--color-text-primary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-teal)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-primary)")
              }
            >
              Sign in
            </a>
            <a
              href="https://app.breedbase.com/signup"
              className="font-inter font-semibold text-sm px-4 py-2.5 transition-colors rounded-none"
              style={{
                background: "var(--color-teal)",
                color: "var(--color-surface)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--color-teal-dark)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--color-teal)")
              }
            >
              Get early access
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8"
            style={{ gap: "6px" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="block w-6 origin-center transition-transform duration-200"
              style={{
                height: "1px",
                background: "var(--color-text-primary)",
                transform: mobileOpen ? "rotate(45deg) translateY(3.5px)" : "none",
              }}
            />
            <span
              className="block w-6 transition-opacity duration-200"
              style={{
                height: "1px",
                background: "var(--color-text-primary)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 origin-center transition-transform duration-200"
              style={{
                height: "1px",
                background: "var(--color-text-primary)",
                transform: mobileOpen ? "rotate(-45deg) translateY(-3.5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[64px] z-40 md:hidden transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "var(--color-bg)" }}
      >
        <div className="flex flex-col h-full px-6 pt-10 pb-8 gap-8">
          <Link
            href="/features"
            className="font-fraunces text-[32px] leading-none"
            style={{ color: "var(--color-charcoal-dark)" }}
            onClick={() => setMobileOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="font-fraunces text-[32px] leading-none"
            style={{ color: "var(--color-charcoal-dark)" }}
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>
          <div
            className="pt-8 space-y-4"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <a
              href="https://app.breedbase.com/login"
              className="block font-inter text-[18px]"
              style={{ color: "var(--color-text-muted)" }}
              onClick={() => setMobileOpen(false)}
            >
              Sign in
            </a>
            <a
              href="https://app.breedbase.com/signup"
              className="block w-full font-inter font-semibold text-sm px-6 py-3.5 text-center transition-colors rounded-none"
              style={{
                background: "var(--color-teal)",
                color: "var(--color-surface)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Get early access
            </a>
          </div>
          <div className="mt-auto">
            <p
              className="font-inter text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              Built for professional dog trainers in the UK.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
