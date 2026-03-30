import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Breedbase",
  description: "How Breedbase collects, uses, and protects your personal data.",
  openGraph: {
    title: "Privacy Policy — Breedbase",
    description: "How Breedbase collects, uses, and protects your personal data.",
    url: "https://www.breedbase.com/privacy",
    siteName: "Breedbase",
    type: "website",
    images: [{ url: "https://www.breedbase.com/og.png", width: 1200, height: 630, alt: "Breedbase privacy policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Breedbase",
    description: "How Breedbase collects, uses, and protects your personal data.",
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

const heading3: React.CSSProperties = {
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  fontWeight: 600,
  fontSize: "15px",
  color: "var(--color-charcoal-dark)",
  marginTop: "24px",
  marginBottom: "8px",
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

export default function PrivacyPage() {
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
          Privacy Policy
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
            <strong>Breedbase</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) operates the Breedbase platform at app.breedbase.com. This policy explains how we collect, use, and protect your personal data.
          </p>

          <hr style={rule} />

          <h2 style={heading2}>1. Who We Are</h2>
          <p style={para}>
            Breedbase is a business management platform for professional dog trainers. We provide scheduling, client management, session notes, and invoicing to help trainers run their businesses.
          </p>
          <p style={para}>
            <strong>Data controller:</strong> Breedbase, United Kingdom<br />
            <strong>Contact:</strong>{" "}
            <a href="mailto:privacy@breedbase.com" style={link}>privacy@breedbase.com</a>
          </p>

          <hr style={rule} />

          <h2 style={heading2}>2. What Data We Collect</h2>

          <h3 style={heading3}>Data you provide directly</h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}><strong>Account information:</strong> name, email address, password</li>
            <li style={listItem}><strong>Business information:</strong> business name, phone number</li>
            <li style={listItem}><strong>Client records:</strong> your clients&rsquo; names, contact details, emergency contacts, and notes you add about their dogs (breed, health, temperament, vaccination status)</li>
            <li style={listItem}><strong>Session data:</strong> scheduled appointments, session notes, training plans, and progress records</li>
            <li style={listItem}><strong>Payment information:</strong> processed securely by Stripe; we do not store card numbers</li>
          </ul>

          <h3 style={heading3}>Data collected automatically</h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}><strong>Usage data:</strong> pages visited, features used, device type, browser type</li>
            <li style={listItem}><strong>Log data:</strong> IP address, access times, error logs for debugging</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>3. How We Use Your Data</h2>
          <p style={para}>We use your data to:</p>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>Provide the Breedbase platform and its features</li>
            <li style={listItem}>Manage your account and authenticate your sessions</li>
            <li style={listItem}>Send transactional emails (session reminders, invoices, password resets)</li>
            <li style={listItem}>Improve our platform based on aggregate, anonymised usage patterns</li>
            <li style={listItem}>Respond to support requests</li>
          </ul>
          <p style={para}>We do <strong>not</strong>:</p>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>Sell your personal data to third parties</li>
            <li style={listItem}>Use your data for advertising</li>
            <li style={listItem}>Share your client records with anyone other than you</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>4. Legal Basis for Processing (GDPR)</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "14px", fontSize: "15px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", fontWeight: 600, padding: "10px 14px", backgroundColor: "var(--color-teal-light)", border: "1px solid var(--color-border)", color: "var(--color-charcoal-dark)" }}>Purpose</th>
                <th style={{ textAlign: "left", fontWeight: 600, padding: "10px 14px", backgroundColor: "var(--color-teal-light)", border: "1px solid var(--color-border)", color: "var(--color-charcoal-dark)" }}>Legal basis</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Providing the platform", "Performance of contract"],
                ["Account security and authentication", "Legitimate interest"],
                ["Session reminders and invoices", "Performance of contract"],
                ["Usage analytics (anonymised)", "Legitimate interest"],
                ["Responding to support requests", "Legitimate interest"],
              ].map(([purpose, basis]) => (
                <tr key={purpose}>
                  <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}>{purpose}</td>
                  <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}>{basis}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr style={rule} />

          <h2 style={heading2}>5. Data Storage and Security</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}>Your data is stored on servers in the EU/UK provided by Supabase (database) and Vercel (application hosting)</li>
            <li style={listItem}>All data is encrypted in transit (TLS) and at rest</li>
            <li style={listItem}>Authentication tokens for third-party services are encrypted at rest</li>
            <li style={listItem}>We use Supabase Row Level Security to ensure trainers can only access their own data</li>
            <li style={listItem}>We conduct regular security reviews of our infrastructure</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>6. Data Retention</h2>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}><strong>Account data:</strong> retained while your account is active, deleted within 30 days of account deletion</li>
            <li style={listItem}><strong>Client records and session data:</strong> retained while your account is active; deleted when you delete them or close your account</li>
            <li style={listItem}><strong>Usage logs:</strong> retained for 90 days for debugging, then deleted</li>
          </ul>

          <hr style={rule} />

          <h2 style={heading2}>7. Your Rights</h2>
          <p style={para}>Under UK GDPR, you have the right to:</p>
          <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
            <li style={listItem}><strong>Access</strong> your personal data</li>
            <li style={listItem}><strong>Correct</strong> inaccurate data</li>
            <li style={listItem}><strong>Delete</strong> your data (&ldquo;right to be forgotten&rdquo;)</li>
            <li style={listItem}><strong>Export</strong> your data in a portable format</li>
            <li style={listItem}><strong>Withdraw consent</strong> for optional processing</li>
            <li style={listItem}><strong>Object</strong> to processing based on legitimate interest</li>
            <li style={listItem}><strong>Lodge a complaint</strong> with the Information Commissioner&rsquo;s Office (ICO)</li>
          </ul>
          <p style={para}>
            To exercise any of these rights, contact{" "}
            <a href="mailto:privacy@breedbase.com" style={link}>privacy@breedbase.com</a>. We will respond within 30 days.
          </p>

          <hr style={rule} />

          <h2 style={heading2}>8. Third-Party Services</h2>
          <p style={para}>We use the following third-party services to operate Breedbase:</p>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "14px", fontSize: "15px", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
            <thead>
              <tr>
                {["Service", "Purpose", "Data shared"].map((h) => (
                  <th key={h} style={{ textAlign: "left", fontWeight: 600, padding: "10px 14px", backgroundColor: "var(--color-teal-light)", border: "1px solid var(--color-border)", color: "var(--color-charcoal-dark)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Supabase", "Database and authentication", "Account data, client records"],
                ["Vercel", "Application hosting", "Usage data, IP addresses"],
                ["Stripe", "Payment processing", "Email, payment details"],
                ["Resend", "Transactional email", "Email addresses, message content"],
              ].map(([service, purpose, data]) => (
                <tr key={service}>
                  <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", color: "var(--color-text-primary)", fontWeight: 500 }}>{service}</td>
                  <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}>{purpose}</td>
                  <td style={{ padding: "10px 14px", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}>{data}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={para}>Each service has its own privacy policy and processes data in accordance with GDPR.</p>

          <hr style={rule} />

          <h2 style={heading2}>9. Cookies</h2>
          <p style={para}>
            Breedbase uses only essential cookies required for authentication and session management. We do not use tracking cookies, advertising cookies, or analytics cookies that identify individual users.
          </p>

          <hr style={rule} />

          <h2 style={heading2}>10. Changes to This Policy</h2>
          <p style={para}>
            We may update this policy from time to time. We will notify you of material changes via email or an in-app notice. The &ldquo;last updated&rdquo; date at the top of this page reflects the most recent revision.
          </p>

          <hr style={rule} />

          <h2 style={heading2}>11. Contact</h2>
          <p style={para}>For any questions about this privacy policy or your data:</p>
          <p style={para}>
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@breedbase.com" style={link}>privacy@breedbase.com</a>
          </p>
          <p style={{ ...para, marginBottom: 0 }}>
            For complaints, you may also contact the UK Information Commissioner&rsquo;s Office at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={link}>ico.org.uk</a>.
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
