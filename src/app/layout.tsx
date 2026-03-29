import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Breedbase — Built for dog trainers",
  description:
    "Scheduling, client records, and training programmes — built for professional dog trainers, not adapted from something else.",
  openGraph: {
    title: "Breedbase — Built for dog trainers",
    description:
      "Stop running your business on a WhatsApp thread and a prayer. Breedbase handles scheduling, client records, and training programmes.",
    url: "https://www.breedbase.com",
    siteName: "Breedbase",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-manrope bg-warm-white text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
