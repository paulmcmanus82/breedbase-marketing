import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "var(--color-teal)" }}>
      <div className="max-w-site mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Left */}
          <div className="space-y-3">
            <p className="font-fraunces text-[22px] text-white leading-none">
              Breedbase
            </p>
            <p
              className="font-inter text-sm leading-relaxed max-w-[280px]"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Built for professional dog trainers in the UK.
            </p>
          </div>

          {/* Right */}
          <div className="md:flex md:justify-end">
            <div className="flex flex-wrap gap-x-6 gap-y-3 md:flex-col md:gap-3 md:text-right">
              {[
                { label: "Features", href: "/features", external: false },
                { label: "Pricing", href: "/pricing", external: false },
                { label: "Privacy", href: "/privacy", external: false },
                { label: "Terms", href: "/terms", external: false },
                {
                  label: "Sign in",
                  href: "https://app.breedbase.com/login",
                  external: true,
                },
              ].map(({ label, href, external }) =>
                external ? (
                  <a
                    key={label}
                    href={href}
                    className="font-inter text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    className="font-inter text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
          <p
            className="font-inter text-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            © 2026 Breedbase
          </p>
        </div>
      </div>
    </footer>
  );
}
