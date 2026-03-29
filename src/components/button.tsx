import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-amber text-charcoal-dark hover:bg-amber-dark py-4 px-8 font-inter font-semibold text-[15px] rounded-none",
  secondary:
    "bg-teal text-white hover:bg-teal-dark py-4 px-8 font-inter font-semibold text-[15px] rounded-none",
  ghost:
    "bg-transparent text-ink hover:text-teal font-inter font-semibold text-[15px] rounded-none",
};

export function Button({
  variant = "secondary",
  href,
  children,
  className = "",
}: ButtonProps) {
  const base =
    "w-full block sm:w-auto sm:inline-flex items-center justify-center transition-colors duration-200 " +
    variantClasses[variant];
  const combined = `${base} ${className}`;

  if (!href) {
    return <button className={combined}>{children}</button>;
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
