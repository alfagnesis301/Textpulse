# TextPulses

TextPulses is a privacy-first word counter and publish-ready text analyzer built with Next.js, TypeScript, and Tailwind CSS.

It counts words, characters, sentences, paragraphs, lines, unique words, reading time, speaking time, handwriting time, keyword density, phrase frequency, and writing health signals. Its unique PublishFit Score checks whether a draft fits common publishing channels such as blog articles, SEO titles, meta descriptions, YouTube text, LinkedIn posts, X/Twitter posts, Instagram captions, email subjects, academic essays, and speeches.

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

Ad placeholders are rendered by `components/AdSlot.tsx` and display only the label `Advertisement`. They are intentionally separated from tool actions such as Clear, Copy, Download, and CTA buttons.

Replace `pub-XXXXXXXXXXXXXXXX` with your real Google AdSense publisher ID after approval:

- `public/ads.txt`
- Any future AdSense script or ad unit code added inside approved ad locations

Do not display fake ads, disguise ads as navigation, or encourage ad clicks.

## Google Analytics

Analytics is not included by default. If you add Google Analytics or another analytics provider:

- Update the Privacy Policy and Cookie Policy.
- Add a consent management platform when required by UK, EU, EEA, or other applicable laws.
- Avoid loading non-essential tracking before consent where consent is required.

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
- About, Contact, Privacy Policy, Terms, Cookie Policy, and Disclaimer pages exist.
- Navigation and footer links are clear.
- Ad slots are labeled `Advertisement`.
- There are no fake download buttons, fake navigation items, or prompts to click ads.
- The tool is useful without requiring signup.
- Privacy copy explains browser-based analysis and localStorage behavior.
- `ads.txt` exists and publisher ID is ready to replace after approval.
- `robots.txt` and `sitemap.xml` are available.
- No copied text, visual design, brand, assets, or code from another counter site.
