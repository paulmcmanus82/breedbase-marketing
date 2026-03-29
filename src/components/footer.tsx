import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-near-black">
      <div className="max-w-site mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Left: wordmark + tagline */}
          <div className="space-y-3">
            <p className="font-fraunces text-[22px] text-white leading-none">
              Breedbase
            </p>
            <p className="font-inter text-sm text-dark-muted leading-relaxed max-w-[280px]">
              Built for professional dog trainers in the UK.
            </p>
          </div>

          {/* Right: sparse links */}
          <div className="md:flex md:justify-end">
            <div className="flex flex-wrap gap-x-6 gap-y-3 md:flex-col md:gap-3 md:text-right">
              <Link
                href="/features"
                className="font-inter text-sm text-dark-muted hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="font-inter text-sm text-dark-muted hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/privacy"
                className="font-inter text-sm text-dark-muted hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="font-inter text-sm text-dark-muted hover:text-white transition-colors"
              >
                Terms
              </Link>
              <a
                href="https://app.breedbase.com/login"
                className="font-inter text-sm text-dark-muted hover:text-white transition-colors"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="border-t border-dark-border mt-12 pt-6">
          <p className="font-inter text-xs text-dark-border">
            © 2026 Breedbase
          </p>
        </div>
      </div>
    </footer>
  );
}
