import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions — Breedbase",
  description: "Terms and conditions for using the Breedbase platform.",
  openGraph: {
    title: "Terms and Conditions — Breedbase",
    description: "Terms and conditions for using the Breedbase platform.",
    url: "https://www.breedbase.com/terms",
    siteName: "Breedbase",
    type: "website",
    images: [{ url: "https://www.breedbase.com/og.png", width: 1200, height: 630, alt: "Breedbase terms and conditions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions — Breedbase",
    description: "Terms and conditions for using the Breedbase platform.",
    images: ["https://www.breedbase.com/og.png"],
  },
};

const heading2: React.CSSProperties = {
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  fontWeight: 600,
  fontSize: "17px",
  color: "var(--color-charcoal-dark)",
  marginTop: "40px",
  marginBottom: "12px",
};

const para: React.CSSProperties = {
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  fontSize: "16px",
  lineHeight: "1.75",
  color: "var(--color-text-primary)",
  marginBottom: "14px",
};

const listItem: React.CSSProperties = {
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  fontSize: "16px",
  lineHeight: "1.75",
  color: "var(--color-text-primary)",
  marginBottom: "6px",
};

const rule: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid var(--color-border)",
  margin: "36px 0",
};

const link: React.CSSProperties = {
  color: "var(--color-teal)",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

export default function TermsPage() {
  return (
    <div className="bg-canvas min-h-screen pt-[64px]">
      <div className="max-w-[680px] mx-auto px-6 py-[80px] lg:py-[100px]">
        {/* Wordmark */}
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
          Legal
        </p>
        <h1
          className="font-fraunces text-[40px] lg:text-[48px] leading-[1.08]"
          style={{ color: "var(--color-charcoal-dark)" }}
        >
          Terms and Conditions
        </h1>
        <p
          className="font-inter text-[13px] mt-2 mb-12"
          style={{ color: "var(--color-text-muted)" }}
        >
          Last updated: 23 March 2026
        </p>

        {/* Content */}
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px" }}>

          <p style={para}>
            <strong>Breedbase</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) operates the Breedbase platform at app.breedbase.com. By creating an account or using our platform, you agree to these terms.
          </p>

          <hr style={rule} />

          <h2 style={heading2}>1. What Breedbase Is</h2>
          <p style={para}>
            Breedbase is a business management platform for professional dog trainers. We provide tools for scheduling, client management, training plans, invoicing, and calendar integration. We are a software provider — we do not provide dog training services, veterinary advice, or any direct pet care services.
          </p>

          <hr style={rule} />

          <h2 style={heading2}>2. Your Account</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>You must be at least 18 years old to create an account</li>
            <li style={listItem}>You are responsible for keeping your login credentials secure</li>
            <li style={listItem}>You are responsible for all activity that occurs under your account</li>
            <li style={listItem}>You must provide accurate information when creating your account</li>
            <li style={listItem}>We may suspend or terminate accounts that violate these terms</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>3. What You Can Do</h2>
          <p style={para}>With a Breedbase account, you can:</p>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>Create and manage client and pet records</li>
            <li style={listItem}>Schedule and track training sessions</li>
            <li style={listItem}>Build and assign training plans</li>
            <li style={listItem}>Generate invoices and accept payments</li>
            <li style={listItem}>Sync sessions to your Google Calendar</li>
            <li style={listItem}>Import client data via CSV</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>4. Your Data and Content</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}><strong>You own your data.</strong> All client records, session notes, training plans, and other content you create in Breedbase belongs to you</li>
            <li style={listItem}>You grant us a limited licence to host, store, and display your data solely for the purpose of providing the Breedbase platform to you</li>
            <li style={listItem}>You can export your data at any time</li>
            <li style={listItem}>You can delete your data at any time</li>
            <li style={listItem}>When you close your account, we delete your data within 30 days</li>
            <li style={listItem}>See our{" "}
              <a href="https://www.breedbase.com/privacy" style={link}>Privacy Policy</a>{" "}
              for full details on how we handle data
            </li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>5. Your Responsibilities</h2>
          <p style={para}>By using Breedbase, you agree that:</p>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>You have the legal right to store and process the personal data of your clients, and that you have obtained any necessary consent from them</li>
            <li style={listItem}>You are responsible for complying with data protection laws (including UK GDPR) in relation to your clients&apos; data</li>
            <li style={listItem}>You will not use Breedbase for any unlawful purpose</li>
            <li style={listItem}>You will not attempt to access other users&apos; data or interfere with the platform&apos;s operation</li>
            <li style={listItem}>The accuracy of the information you enter (client details, health records, vaccination status) is your responsibility — Breedbase does not verify this information</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>6. Dog Training and Veterinary Disclaimer</h2>
          <p style={para}>Breedbase is a business management tool. We do not:</p>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>Provide dog training advice or recommendations</li>
            <li style={listItem}>Offer veterinary or medical advice for animals</li>
            <li style={listItem}>Verify the qualifications, certifications, or insurance of trainers using the platform</li>
            <li style={listItem}>Guarantee training outcomes for any dog or client</li>
          </ul>
          <p style={para}>
            Any training plans, session notes, or behavioural records stored in Breedbase reflect the professional judgment of the trainer who created them. We accept no liability for training methods, outcomes, or decisions made based on information stored in the platform.
          </p>

          <hr style={rule} />

          <h2 style={heading2}>7. Subscription and Payments</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>Breedbase is offered as a subscription service with pricing published on our website</li>
            <li style={listItem}>Subscriptions are billed monthly or annually, depending on your chosen plan</li>
            <li style={listItem}>Payments are processed securely by Stripe</li>
            <li style={listItem}>You can cancel your subscription at any time; access continues until the end of your current billing period</li>
            <li style={listItem}>We may change our pricing with 30 days&apos; notice; existing subscribers will be notified by email before any price change takes effect on their account</li>
            <li style={listItem}>Refunds are provided at our discretion for the current billing period if requested within 14 days of a charge</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>8. Free Tier and Trials</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>We may offer a free tier or trial period at our discretion</li>
            <li style={listItem}>Free tier features and limits may change at any time</li>
            <li style={listItem}>We may convert free accounts to paid plans with reasonable notice</li>
            <li style={listItem}>We reserve the right to close inactive free accounts after 12 months of no activity, with 30 days&apos; email notice before deletion</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>9. Third-Party Integrations</h2>
          <p style={para}>
            Breedbase integrates with third-party services including Google Calendar and Stripe. When you connect these services:
          </p>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>You are also subject to their respective terms of service and privacy policies</li>
            <li style={listItem}>We are not responsible for outages, changes, or data handling by third-party services</li>
            <li style={listItem}>You can disconnect integrations at any time from your Settings page</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>10. Availability and Reliability</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>We aim for 99.9% uptime but do not guarantee uninterrupted access</li>
            <li style={listItem}>We may perform maintenance with reasonable notice where possible</li>
            <li style={listItem}>We are not liable for any loss resulting from platform downtime, including missed appointments or lost revenue</li>
            <li style={listItem}>We recommend maintaining your own backups of critical business data</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>11. Intellectual Property</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>The Breedbase platform, including its design, code, and branding, is our intellectual property</li>
            <li style={listItem}>You may not copy, modify, distribute, or reverse-engineer any part of the platform</li>
            <li style={listItem}>&ldquo;Breedbase&rdquo; is our trading name and you may not use it in a way that implies endorsement or affiliation without our written permission</li>
            <li style={listItem}>Content you create (training plans, session notes, client records) remains your intellectual property</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>12. Limitation of Liability</h2>
          <p style={para}>To the fullest extent permitted by law:</p>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>Breedbase is provided &ldquo;as is&rdquo; without warranty of any kind</li>
            <li style={listItem}>We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform</li>
            <li style={listItem}>Our total liability for any claim relating to the platform is limited to the amount you paid us in the 12 months preceding the claim</li>
            <li style={listItem}>We are not liable for any injury to people or animals arising from training activities, regardless of whether those activities were scheduled or documented through Breedbase</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>13. Termination</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>You may close your account at any time from Settings or by contacting us</li>
            <li style={listItem}>We may suspend or terminate your account if you breach these terms, with notice where reasonably possible</li>
            <li style={listItem}>On termination, your access ceases and your data is deleted within 30 days</li>
            <li style={listItem}>Provisions that by their nature should survive termination (including limitation of liability, intellectual property, and dispute resolution) will survive</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>14. Changes to These Terms</h2>
          <p style={para}>
            We may update these terms from time to time. We will notify you of material changes via email or an in-app notice at least 14 days before the changes take effect. Continued use of Breedbase after changes take effect constitutes acceptance of the updated terms.
          </p>

          <hr style={rule} />

          <h2 style={heading2}>15. Governing Law</h2>
          <p style={para}>
            These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <hr style={rule} />

          <h2 style={heading2}>16. Contact</h2>
          <p style={para}>For any questions about these terms:</p>
          <p style={{ ...para, marginBottom: 0 }}>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@breedbase.com" style={link}>hello@breedbase.com</a>
          </p>
        </div>

        <div style={{ marginTop: "64px" }}>
          <Link
            href="/"
            className="font-inter text-[14px] transition-colors"
            style={{ color: "var(--color-teal)" }}
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
