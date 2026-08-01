# Developer Brief — Bhatti Solar System Landing Page
**Stack:** Next.js (App Router recommended) · Hosted on Vercel · Mobile-first
**Deliverables you'll receive with this:** desktop wireframe, mobile wireframe, copy deck (`bhatti-solar-landing-copy.md`)

Read this whole document before starting. It tells you how to build, what SEO tags to add, and — just as important — what to skip.

---

## 1. PROJECT SUMMARY

A single-page marketing site for a solar installation company in Lahore, Pakistan. Goal: rank in Google for local solar searches and convert visitors into WhatsApp leads. 90% of traffic will be mobile — **build mobile-first**.

Temporary URL: `bhattisolar.vercel.app`. A real domain will be connected to the same Vercel project later (see section 9). Build so the domain swap is painless — use relative URLs internally and one central place for the site URL.

---

## 2. BUILD REQUIREMENTS (non-negotiable)

1. **Server-render the page.** Use static generation (SSG) — `export const dynamic = 'force-static'` or default static rendering. Do NOT build the content client-side only. Google must see the full HTML on first load. If content only appears after JS runs, it hurts ranking.
2. **One `<h1>` per page** — the hero headline only. Every other section heading is `<h2>` (sub-items `<h3>`). Do not skip levels.
3. **Semantic HTML** — use `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<h1>`–`<h3>`, `<ul>`/`<li>`. Not `<div>` for everything. Google and screen readers rely on this.
4. **Mobile-first responsive** — design for ~360–414px width first, then scale up. Follow the mobile wireframe.
5. **Sticky header** with Call + WhatsApp buttons always visible.
6. **Floating WhatsApp button** fixed bottom-right on all screen sizes.
7. **Fast.** Target Google PageSpeed / Lighthouse score 90+ on mobile. See section 6.

---

## 3. META TAGS — EXACTLY WHAT TO INCLUDE

In Next.js App Router, set these via the `metadata` export (or `generateMetadata`). Here's the complete set. **Add all of these. Skip anything not listed in section 3B.**

### 3A. Include these

```tsx
export const metadata = {
  metadataBase: new URL('https://bhattisolar.vercel.app'), // change to real domain later
  title: 'Solar System Installation in Lahore | Bhatti Solar System',
  description: 'On-grid, hybrid & off-grid solar in Lahore. 150+ installations, net metering handled for you, Canadian Solar & Longi panels. Free survey on WhatsApp.',
  alternates: {
    canonical: '/', // canonical URL — prevents duplicate-content issues
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'Solar System Installation in Lahore | Bhatti Solar System',
    description: 'On-grid, hybrid & off-grid solar in Lahore. 150+ installations, net metering handled for you. Free survey on WhatsApp.',
    url: 'https://bhattisolar.vercel.app',
    siteName: 'Bhatti Solar System',
    locale: 'en_PK',
    images: [
      {
        url: '/og-image.jpg', // 1200x630px — see note below
        width: 1200,
        height: 630,
        alt: 'Bhatti Solar System — solar installation in Lahore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar System Installation in Lahore | Bhatti Solar System',
    description: 'On-grid, hybrid & off-grid solar in Lahore. Net metering handled. Free survey on WhatsApp.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
```

Also ensure these exist (Next.js adds `viewport` and `charset` by default, but confirm):
- `<meta charset="utf-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `<html lang="en">` (set in root layout)

**What each does (plain English):**
- **title** — the blue clickable headline in Google results. Keep under ~60 characters. Contains the main keyword.
- **description** — the grey text under the title in Google. ~150 characters. Doesn't directly rank you, but a good one gets more clicks. Ends with a call to action.
- **canonical** — tells Google "this is the official URL," avoids duplicate-page penalties.
- **robots (index, follow)** — explicitly allows Google to index the page and follow links.
- **Open Graph tags** — control the preview card when the link is shared on WhatsApp, Facebook, LinkedIn. Critical here — this business shares links on WhatsApp constantly.
- **Twitter tags** — same, for X/Twitter.
- **icons** — favicon (browser tab) + apple-touch-icon (iOS home screen).

**og-image.jpg:** Create a 1200×630px image — company logo + tagline "Solar Installation in Lahore" + a photo/still from an install video. This is what shows when the link is shared on WhatsApp. Do not skip it — an ugly or missing share preview kills trust instantly in this market.

### 3B. DO NOT waste time on these (they do nothing for Google today)

- ❌ **`<meta name="keywords">`** — Google has ignored this for over a decade. Skip entirely.
- ❌ **`geo.region` / `geo.placename` / `ICBM` meta tags** — Google confirmed it does not use these. Local ranking comes from schema + Google Business Profile, not these tags. Skip.
- ❌ **`<meta name="author">`, `revisit-after`, `distribution`, `rating`** — legacy tags, no SEO value. Skip.
- ❌ Keyword-stuffing the title/description with "Lahore solar Lahore panels Lahore" — this hurts, not helps.

---

## 4. STRUCTURED DATA / SCHEMA (very important for local + FAQ)

Two JSON-LD scripts are provided in the copy deck (`bhatti-solar-landing-copy.md`, "Developer: Schema Code" section):

1. **LocalBusiness / SolarInstallation schema** — tells Google this is a real local business (name, phone, address, area served). Foundation of local SEO.
2. **FAQPage schema** — makes the FAQ eligible for expandable rich results in Google, taking up more space and answering searcher questions directly.

**How to add in Next.js:** render each as a `<script type="application/ld+json">` inside the page component using `dangerouslySetInnerHTML`, OR use the `next/script` component. Example:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
/>
```

Fill in `[OFFICE ADDRESS]`, `latitude`, `longitude` (get exact coords from Google Maps — right-click the location → copy coordinates), and update the `url` when the real domain is live.

**Validate before launch:** paste the rendered page URL into Google's Rich Results Test (search "Google Rich Results Test"). Fix any errors it flags.

---

## 5. LOCAL SEO — ON-PAGE (what you control in code)

Local ranking depends heavily on Google Business Profile (client handles that separately), but these on-page items are your job:

1. **NAP consistency.** The business Name, Address, Phone must be written **identically** in: the footer, the LocalBusiness schema, and (later) the Google Business Profile. Same spelling, same format. Even small differences ("St" vs "Street") weaken local signals. Use this exact format everywhere:
   - Name: `Bhatti Solar System`
   - Phone: `+92 304 4854300`
2. **Phone as clickable link:** `<a href="tel:+923044854300">`. Displayed number can be formatted nicely; the `href` must be the clean international format.
3. **WhatsApp links** — every WhatsApp CTA uses:
   `https://wa.me/923044854300?text=Assalam-o-Alaikum,%20I%20want%20a%20free%20solar%20survey`
   (URL-encode the pre-filled message. Different sections can have slightly different pre-filled text.)
4. **Area names in body text** — the "Projects across Lahore" section and footer list real Lahore areas (DHA, Lake City, Engineer Town, etc.). Render these as real HTML text, not inside images. This is what helps you appear for "solar installer [area name]" searches. Do not turn this list into a graphic.
5. **Location in the H1 and title** — already done ("...in Lahore"). Keep it.

---

## 6. TECHNICAL SEO & PERFORMANCE

Google ranks fast, stable, mobile-friendly pages higher. Targets:

1. **Lighthouse mobile score 90+** (Performance, Accessibility, Best Practices, SEO). Run it in Chrome DevTools before handoff.
2. **Core Web Vitals** — keep LCP under 2.5s, CLS near 0 (no layout shifting as things load), INP low. Practical steps below.
3. **Images:**
   - Use Next.js `<Image>` component (auto-optimises, lazy-loads, prevents layout shift).
   - Serve modern formats (WebP/AVIF — Next.js handles this).
   - Every image needs descriptive `alt` text including location where relevant, e.g. `alt="10kW solar installation on elevator structure, DHA Lahore"`.
4. **Videos (install clips):**
   - Do NOT autoplay heavy videos or embed 8 raw video files that all load at once — this destroys mobile load speed.
   - Best approach: show a lightweight poster image (thumbnail) for each video; load the actual video only when the user taps it (facade / lazy-load pattern). If embedding from TikTok/Instagram/Facebook, lazy-load the embed iframes (load on scroll/click, not on page load).
   - Compress any self-hosted video.
5. **Fonts:** use `next/font` to self-host fonts (avoids render-blocking and layout shift). Limit to 1–2 weights.
6. **Lazy-load everything below the fold** — images, videos, embeds.
7. **HTTPS** — Vercel provides this automatically. Confirm the site loads on `https://`.
8. **No render-blocking bloat** — avoid unnecessary heavy JS libraries. This is a static marketing page; keep the bundle small.
9. **Mobile tap targets** — buttons min 44×44px, adequate spacing, no horizontal scroll.

---

## 7. FILES TO CREATE FOR SEO

1. **`robots.txt`** — in Next.js App Router, create `app/robots.ts`:
```tsx
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://bhattisolar.vercel.app/sitemap.xml',
  };
}
```
2. **`sitemap.xml`** — create `app/sitemap.ts`:
```tsx
export default function sitemap() {
  return [
    {
      url: 'https://bhattisolar.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
```
(Update both URLs when the real domain is connected.)

---

## 8. ACCESSIBILITY (also helps SEO)

- Every image/video has meaningful `alt` text.
- Buttons and links have clear, descriptive text (not "click here").
- Colour contrast passes (dark text on light, readable). Green CTA buttons need sufficient contrast on their text.
- Icon-only buttons (e.g. the phone icon in the header) need an `aria-label`, e.g. `aria-label="Call Bhatti Solar System"`.
- Page is fully usable and readable on a 360px-wide screen.

---

## 9. PRE-LAUNCH & POST-LAUNCH CHECKLIST

**Before going live:**
- [ ] All copy pasted from the copy deck; the 3 placeholders (`[YEARS]`, `[OFFICE ADDRESS]`, `[WORKMANSHIP WARRANTY]`) filled in
- [ ] Both JSON-LD schema blocks added and validated in Google Rich Results Test
- [ ] All meta tags from section 3A present; og-image.jpg created (1200×630)
- [ ] Favicon + apple-touch-icon added
- [ ] Lighthouse mobile score 90+
- [ ] Every WhatsApp/Call link tested on a real phone
- [ ] No console errors; no horizontal scroll on mobile
- [ ] robots.ts and sitemap.ts created

**When the real domain is bought (later):**
- [ ] Connect domain to the existing Vercel project (Vercel dashboard → project → Settings → Domains)
- [ ] Update `metadataBase`, canonical, OG `url`, schema `url`, robots sitemap URL, and sitemap.ts URL to the new domain (do a project-wide find/replace of `bhattisolar.vercel.app`)
- [ ] Set the old vercel.app URL to redirect to the new domain (301) so no traffic/authority is lost
- [ ] Create a free **Google Search Console** account, verify the domain, and submit the sitemap
- [ ] Confirm the page is indexed (Search Console → URL Inspection)

---

## 10. QUICK REFERENCE — CONSTANTS

| Item | Value |
|---|---|
| Business name | Bhatti Solar System |
| Phone / WhatsApp | +92 304 4854300 |
| WhatsApp link | `https://wa.me/923044854300?text=...` |
| Temp URL | `bhattisolar.vercel.app` |
| Language | `en` (locale `en_PK`) |
| City | Lahore, Punjab, Pakistan |
| Primary keyword | Solar System Installation in Lahore |

Any questions on copy or structure → refer to the copy deck and the two wireframes. Build the mobile layout first.
