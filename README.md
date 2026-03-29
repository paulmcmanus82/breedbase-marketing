# Breedbase Marketing Site

Static Next.js marketing site for [www.breedbase.com](https://www.breedbase.com).

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
3. Add `breedbase.com` — Vercel provides an A record
4. Vercel will automatically redirect `breedbase.com` → `www.breedbase.com`

---

### 4. Update DNS at your registrar

Log into your domain registrar and add:

| Type  | Name | Value                  |
|-------|------|------------------------|
| CNAME | www  | `cname.vercel-dns.com` |
| A     | @    | `76.76.21.21`          |

DNS propagation typically takes a few minutes but can take up to 48 hours.

---

### 5. Verify

- `https://www.breedbase.com` → marketing site
- `https://breedbase.com` → redirects to `www`
- `https://app.breedbase.com` → untouched, separate Vercel project

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, problem, features, early access, final CTA |
| `/features` | Full feature list with expanded descriptions |
| `/pricing` | Pricing block + FAQ |
| `/privacy` | Privacy policy placeholder |
| `/terms` | Terms of service placeholder |

---

## Tech

- **Next.js** — App Router
- **TypeScript**
- **Tailwind CSS**
- **pnpm**
- Google Fonts via `next/font/google`: Fraunces (headlines) + Inter (body)

---

## Design system

All colours are defined as CSS custom properties in `globals.css` and mapped to Tailwind utilities in `tailwind.config.ts`. No hex values appear in component or page files.

| Token | CSS variable | Value |
|-------|-------------|-------|
| Teal | `--color-teal` | `#1A5C4F` |
| Teal dark | `--color-teal-dark` | `#134438` |
| Teal light | `--color-teal-light` | `#EBF4F2` |
| Amber | `--color-amber` | `#D4922A` |
| Charcoal dark | `--color-charcoal-dark` | `#1A1A1A` |
| Canvas | `--color-bg` | `#F7F4EF` |
| Surface | `--color-surface` | `#FFFFFF` |
| Border | `--color-border` | `#E8E4DC` |
| Text primary | `--color-text-primary` | `#2D2D2D` |
| Text muted | `--color-text-muted` | `#7A7060` |

Fonts: **Fraunces** (headlines, wordmark) · **Inter** (body, UI, nav)

Buttons: sharp corners (no border-radius), teal background for secondary CTAs, amber background for the primary hero CTA only.
