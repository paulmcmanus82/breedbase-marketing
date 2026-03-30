import Image from "next/image";

interface LogoWordmarkProps {
  variant?: "white" | "dark" | "teal";
  size?: "sm" | "md" | "lg";
}

const TEXT_COLORS = {
  white: "#ffffff",
  dark: "#1A1A18",
  teal: "#1A5C4F",
};

const MARK_SRCS = {
  white: "/logo-mark-white.svg",
  dark: "/logo-mark-black.svg",
  teal: "/logo-mark-teal.svg",
};

const SIZES = {
  sm: { mark: 18, fontSize: "16px" },
  md: { mark: 22, fontSize: "20px" },
  lg: { mark: 28, fontSize: "26px" },
};

export function LogoWordmark({ variant = "dark", size = "md" }: LogoWordmarkProps) {
  const color = TEXT_COLORS[variant];
  const src = MARK_SRCS[variant];
  const { mark, fontSize } = SIZES[size];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        flexShrink: 0,
      }}
    >
      <Image
        src={src}
        alt=""
        width={mark}
        height={mark}
        style={{ display: "block", flexShrink: 0 }}
        priority
      />
      <span
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontWeight: 600,
          fontSize,
          color,
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        Breedbase
      </span>
    </span>
  );
}
