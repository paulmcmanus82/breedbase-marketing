# Breedbase Marketing Site

Static Next.js 14 marketing site for [www.breedbase.com](https://www.breedbase.com).

**Separate from the app** at [app.breedbase.com](https://app.breedbase.com) — no Supabase, no auth, no backend.

---

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

### 1. Create GitHub repo

1. Go to [github.com/new](https://github.com/new)
2. Name it `breedbase-marketing`
3. Set to Private (or Public — your choice)
4. Do **not** initialise with README (the project already has one)
5. Click **Create repository**

Then from this project directory:

```bash
git init
git add .
git commit -m "Initial marketing site"
git remote add origin https://github.com/YOUR_USERNAME/breedbase-marketing.git
git push -u origin main
```

---

### 2. Create Vercel project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository** → select `breedbase-marketing`
3. Framework preset will auto-detect as **Next.js** — leave all defaults
4. **No environment variables needed** — this is a fully static site
5. Click **Deploy**

Every push to `main` auto-deploys from this point.

---

### 3. Add custom domains in Vercel

1. In the Vercel project, go to **Settings → Domains**
2. Add `www.breedbase.com` — Vercel provides a CNAME record
3. Add `breedbase.com` — Vercel provides an A record (or CNAME for root)
4. Vercel will automatically redirect `breedbase.com` → `www.breedbase.com`

---

### 4. Update DNS at your registrar

Log into your domain registrar and add the records Vercel gives you:

| Type  | Name | Value                      |
|-------|------|----------------------------|
| CNAME | www  | `cname.vercel-dns.com`     |
| A     | @    | `76.76.21.21`              |

> DNS propagation typically takes a few minutes but can take up to 48 hours.

---

### 5. Verify

- `https://www.breedbase.com` → marketing site ✓
- `https://breedbase.com` → redirects to `www` ✓
- `https://app.breedbase.com` → **untouched** — separate Vercel project ✓

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, problem, features, pricing teaser, final CTA |
| `/features` | Full feature list with expanded descriptions |
| `/pricing` | Pricing block + FAQ |
| `/privacy` | Privacy policy placeholder |
| `/terms` | Terms of service placeholder |

---

## Tech

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS 3**
- **pnpm**
- Google Fonts via `next/font/google`: Fraunces (headlines) + Inter (body)

---

## Design system

| Token | Value |
|-------|-------|
| Background | `#FAFAF7` |
| Dark background | `#0C0C0A` |
| Text | `#1A1A18` |
| Muted text | `#6B6B63` |
| Accent | `#C8F04A` |
| Hairline border | `#E5E5E0` |

Fonts: **Fraunces** (headlines) · **Inter** (body)

Buttons: sharp corners (`rounded-none`), dark background, accent text.

Accent colour appears exactly three places: primary CTA button, one word in the hero headline, active nav states.
