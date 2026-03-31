import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Breedbase — Business management for dog walkers and trainers",
  description:
    "Breedbase handles your scheduling, client records, session notes, and post-visit updates — built for dog walkers and trainers, not adapted from something else.",
  openGraph: {
    title: "Breedbase — Business management for dog walkers and trainers",
    description:
      "Breedbase handles your scheduling, client records, session notes, and post-visit updates — built for dog walkers and trainers, not adapted from something else.",
    url: "https://www.breedbase.com",
    siteName: "Breedbase",
    type: "website",
    images: [
      {
        url: "https://www.breedbase.com/og.png",
        width: 1200,
        height: 630,
        alt: "Breedbase — Business management for dog walkers and trainers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breedbase — Business management for dog walkers and trainers",
    description:
      "Breedbase handles your scheduling, client records, session notes, and post-visit updates — built for dog walkers and trainers, not adapted from something else.",
    images: ["https://www.breedbase.com/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-inter bg-canvas text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
