import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-canvas min-h-screen pt-[64px] flex items-center">
      <div className="max-w-[680px] mx-auto px-6 py-[80px] lg:py-[100px]">
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
          404
        </p>
        <h1
          className="font-fraunces text-[40px] lg:text-[48px] leading-[1.08] mb-6"
          style={{ color: "var(--color-charcoal-dark)" }}
        >
          Page not found.
        </h1>
        <p
          className="font-inter text-[17px] leading-[1.7] mb-10"
          style={{ color: "var(--color-text-muted)" }}
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link
          href="/"
          className="font-inter text-[14px] transition-colors"
          style={{ color: "var(--color-teal)" }}
        >
          &larr; Back to home
        </Link>
      </div>
    </div>
  );
}
