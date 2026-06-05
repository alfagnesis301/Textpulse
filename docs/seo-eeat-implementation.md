# SEO / AdSense / E-E-A-T / UX Implementation Notes

Date: 2026-06-04 · Stack: Next.js 15 App Router + TypeScript + Tailwind

This pass implemented the SEO/E-E-A-T/AdSense audit safely: small, reusable changes,
no design or tool-functionality changes, English-only, no new dependencies, SSR/SSG intact.
Anything already implemented correctly was left in place and is marked **Verified** below.

## Summary of changes

### Technical SEO (Priority 1)
- **Removed the global `meta keywords` list** from `app/layout.tsx` (Google ignores it; the
  audit flagged it as a careless-template signal). Added a comment to prevent reintroduction.
- **`<html lang="en">`** — **Verified** already correct in `app/layout.tsx`.
- **JSON-LD** — already comprehensive (`lib/seo/schema.ts`, `components/seo/JsonLd.tsx`).
  Improvements made:
  - `Organization` now exposes a **prepared (empty) `sameAs`** and a `founder` reference to
    the author Person. No invented profiles.
  - **Removed the fake `SearchAction`** that pointed at a non-existent `/guides?search=` route.
    A comment documents how to re-add it once a real `/search` route exists.
  - `Article` author changed from a generic "TextPulses Editorial" Organization to a
    **`Person` (Ricardo Diaz)** linked to `/author/ricardo-diaz`; publisher stays TextPulses.
  - Added reusable **`personSchema()`** + **`AuthorJsonLd`** component.
  - `WebApplication` / `SoftwareApplication` now accept an **`applicationCategory`** override.
    Tool pages send `SEOApplication` for SEO checkers and `WritingApplication` otherwise.
  - **`offers.price: 0` / `priceCurrency: USD` / `operatingSystem`** — **Verified** already present.
  - **No `aggregateRating`/reviews invented** — **Verified** (guarded by the smoke test).
- **Home H1** shortened to **"Free SEO Text Analyzer for Writers"**; subtitle rewritten to
  cover privacy-first, browser-based, word count, readability, SEO title, meta description,
  and keyword density (no keyword stuffing).

### On-page SEO / CTR (Priority 2)
- Improved weak titles: `/about` → "About TextPulses — Privacy-First Writing Tools";
  `/examples` → "Text Analysis Examples for Writers & SEOs". Both unique and < 60 chars.
- Added soft CTA to the examples description ("Check yours free in your browser.").
- Titles across guides/tools/about/examples — **Verified unique** (smoke test enforces no
  duplicate SEO titles).

### Open Graph images (Priority 2.7)
- The site previously used a **single SVG** OG image. SVG is not rendered by X/Facebook/LinkedIn.
- Generated **four branded 1200×630 PNG** cards in `public/og/`:
  `textpulses-og.png` (default/home), `tools-og.png`, `guides-og.png`, `examples-og.png`.
- `createMetadata` default image is now the **PNG**; hub pages pass their specific PNG; guide
  detail pages fall back to `guides-og.png` (or a per-guide `ogImage` if set).
- **Pending (optional):** per-tool and per-guide PNGs. The system already accepts a per-page
  `image` / `guide.ogImage`; see "Pending OG images" below.

### Breadcrumbs & architecture (Priority 3)
- Visible breadcrumbs + `BreadcrumbList` — **Verified** on tools detail and guides detail.
- **Added structured data to `examples/[slug]`** (it had a visible FAQ + breadcrumb but no
  JSON-LD): now emits `WebPage` + `BreadcrumbList` + `FAQPage`, and the visible breadcrumb
  was made semantic (`aria-label="Breadcrumb"`).
- **Added a visible breadcrumb to legal pages** (`components/LegalPage.tsx`) to match the
  `BreadcrumbList` schema that was already present.
- Home intentionally has **no breadcrumb** (per audit).

### E-E-A-T (Priority 4)
- **Created `/author/ricardo-diaz`** — honest bio (independent publisher, focus areas,
  how tools are tested, limitations & corrections), `Person` schema, and a commented
  placeholder for verified `sameAs` profiles. **No invented credentials or profiles.**
- Linked the author page from **About** (new "Who is behind TextPulses" section) and the
  **footer**. About now also clusters Editorial Policy / Privacy / Methodology / Contact.

### AdSense readiness (Priority 5)
- **Critical fix:** `adsbygoogle.js` was hard-coded in `<head>` and loaded on every page
  **before consent**. Removed it. AdSense now loads only via the consent-gated
  `AdSenseScript` component (mounted at the end of `<body>`), behind env flags + consent.
- Ad containers (`SafeAdSlot`) already reserve space (`min-h`) to avoid CLS and are excluded
  from the interactive editor — **Verified**. Home keeps a single placement.
- See **`docs/adsense-cmp-setup.md`** for the certified CMP (Funding Choices) steps.

### Performance / CWV (Priority 6)
- **Verified:** no web fonts / `@font-face` (system font stack), so no `font-display` issue.
- **Verified:** no `<img>` tags needing lazy-loading (inline SVG logo).
- Removing the head AdSense script also removes pre-consent third-party JS from first paint.
- Did **not** add `preconnect` to googlesyndication (would contradict consent strategy).

### Sitemap & robots (Priority 7)
- **Verified:** `app/sitemap.ts` is generated from canonical tools/guides/examples with
  `lastModified`; `app/robots.ts` allows all and points to the sitemap.
- Added `/author/ricardo-diaz` to the sitemap.
- < 200 URLs, so a single sitemap is fine (no segmentation needed yet).

### Tests (Priority 6.15)
Extended `scripts/seo-smoke-test.mjs` (`npm run test`) with assertions for: short home H1,
`lang="en"` (source + built HTML), no global meta keywords, consent-gated AdSense (no head
script), author page + Person schema, no `SearchAction`, examples JSON-LD, PNG OG images,
and **exactly one `<h1>` per built key page**.

## Pending OG images (optional next step)
To add per-tool / per-guide cards:
1. Generate 1200×630 PNGs (reuse `scripts`-style PIL generation or a design tool).
2. Save to `public/og/` (e.g. `tools/word-counter.png`).
3. For guides, set `ogImage: "/og/guides/<slug>.png"` on the guide in `lib/guides.ts`.
4. For tools, pass `image` through `createMetadata` in `app/tools/[slug]/page.tsx`
   `generateMetadata` (add an optional `ogImage` field to `ToolPage`).

## Post-deploy checklist
- [ ] **Rich Results Test** — validate home, a tool, a guide, an example (Article, FAQPage,
      Breadcrumb, SoftwareApplication, Person).
- [ ] **Search Console** — submit `sitemap.xml`, check Coverage and Enhancements.
- [ ] **PageSpeed Insights (mobile)** — confirm CLS/LCP are healthy.
- [ ] **`ads.txt`** — confirm `https://textpulses.com/ads.txt` resolves (already in `public/`).
- [ ] **CMP** — confirm the certified CMP banner appears in UK/EU/CH (see CMP doc).
- [ ] **Consent** — confirm `adsbygoogle.js` does not load before consent (Network tab).
- [ ] Verify OG cards in the LinkedIn Post Inspector / X Card Validator / Facebook debugger.

## Recommended next sprint
1. Wire a certified CMP (Funding Choices) and flip ad env flags after AdSense approval.
2. Generate per-tool and per-guide OG PNGs (or add a Next.js `opengraph-image` route).
3. Add real, verified `sameAs` profiles to `organizationSameAs` once they exist.
4. Consider a real `/search` route, then re-enable the WebSite `SearchAction`.
5. Add `datePublished`/`dateModified` fields per guide in `lib/guides.ts` (currently a shared
   published date + per-guide `updated`).
