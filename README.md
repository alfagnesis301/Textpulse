# TextPulses

TextPulses is a privacy-first word counter and publish-ready text analyzer built with Next.js, TypeScript, and Tailwind CSS.

It counts words, characters, sentences, paragraphs, lines, unique words, reading time, speaking time, handwriting time, keyword density, phrase frequency, and writing health signals. Its unique PublishFit Score checks whether a draft fits common publishing channels such as blog articles, SEO titles, meta descriptions, YouTube text, LinkedIn posts, X/Twitter posts, Instagram captions, email subjects, academic essays, and speeches.

The site also includes original writing guides for word count, SEO titles, meta descriptions, readability, keyword density, social posts, email subjects, essays, speech timing, PublishFit Score, and a methodology page explaining how the browser-side signals are calculated.

## Tech stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Browser-only text analysis
- No required backend

## Privacy model

Text analysis runs in the browser. TextPulses does not send editor text to a server for counting or scoring.

LocalStorage is used for preferences such as theme, selected PublishFit preset, and Auto-save locally status. Draft text is stored only when the user manually enables Auto-save locally.

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Branding

- Product metadata lives in `lib/seo.ts`.
- The React logo component is `components/Logo.tsx`.
- The favicon is `public/favicon.svg`.
- Main colors are configured in `tailwind.config.ts`.

## Google AdSense preparation

Visible ad placeholders are not currently rendered in the interface because `NEXT_PUBLIC_ADS_ENABLED` is unset by default. Future placements should use `components/SafeAdSlot.tsx`, which returns `null` unless `NEXT_PUBLIC_ADS_ENABLED=true`.

The AdSense publisher ID is configured as `pub-7051995204409435` and `ads.txt` contains:

```txt
google.com, pub-7051995204409435, DIRECT, f08c47fec0942fa0
```

The AdSense loader is present in `components/AdSenseScript.tsx`, but it only renders when both environment variables are set:

```bash
NEXT_PUBLIC_ADSENSE_ENABLED=true
NEXT_PUBLIC_CMP_READY=true
```

Do not display fake ads, disguise ads as navigation, or encourage ad clicks.

Before serving personalized ads to visitors in the EEA, UK, or Switzerland, configure a Google-certified consent management platform that supports the IAB Transparency and Consent Framework. Do not set `NEXT_PUBLIC_CMP_READY=true` until that CMP is configured.

## Google Analytics

Analytics is not included by default. If you add Google Analytics or another analytics provider:

- Update the Privacy Policy and Cookie Policy.
- Add a consent management platform when required by UK, EU, EEA, or other applicable laws.
- Avoid loading non-essential tracking before consent where consent is required.

## Contact form

The contact form uses Netlify Forms. A static form definition lives at `public/forms/contact.html` so Netlify can detect the form during deploy, while the React contact form submits to that endpoint.

## Deployment

### Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Use the default Next.js build settings.
4. Deploy and verify `/robots.txt`, `/sitemap.xml`, and `/ads.txt`.

### Netlify

1. Connect the repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `.next`.
4. Use the official Netlify Next.js runtime if prompted.

## AdSense readiness checklist

- Original homepage content is present.
- Original educational guide pages are present under `/guides`.
- `/methodology` explains how TextPulses calculates writing signals.
- About, Contact, Privacy Policy, Terms, Cookie Policy, and Disclaimer pages exist.
- Navigation and footer links are clear.
- Any future ad slots are clearly labeled and separated from primary actions.
- There are no fake download buttons, fake navigation items, or prompts to click ads.
- The tool is useful without requiring signup.
- Privacy and Cookie Policy copy explains browser-based analysis, localStorage behavior, Google AdSense advertising cookies, opt-out choices, and consent requirements.
- `ads.txt` exists with the configured publisher ID.
- `robots.txt` and `sitemap.xml` are available.
- Submit the sitemap in Google Search Console after the production domain is stable.
- Configure a Google-certified CMP before serving personalized ads in the EEA, UK, or Switzerland.
- No copied text, visual design, brand, assets, or code from another counter site.
