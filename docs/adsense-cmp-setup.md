# AdSense + Certified CMP (IAB TCF v2.2) Setup

This document explains the **manual, external** steps needed to make TextPulses fully
AdSense- and GDPR-ready. The code in this repo is prepared for consent-gated ads, but
a **certified Consent Management Platform (CMP)** must be configured outside the codebase.

> ⚠️ Honesty note: TextPulses currently ships a lightweight first-party cookie banner
> (`components/CookieConsent.tsx`). This is **not** an IAB TCF v2.2 certified CMP. For
> Google AdSense in the EEA, UK and Switzerland, a certified CMP is **required**. Do not
> describe the current banner as "TCF certified" — it gates ad loading, but it does not
> emit a TCF consent string.

## How consent gating works today

1. `components/CookieConsent.tsx` shows a first-party banner and stores the choice in
   `localStorage` (`tp-cookie-consent-v1`). It dispatches a `textpulses-consent-updated` event.
2. `lib/consent.ts` exposes `canLoadAds()` which returns `true` only when the visitor
   accepted ads/analytics.
3. `components/AdSenseScript.tsx` (mounted in `app/layout.tsx`, **not** in `<head>`) loads
   `adsbygoogle.js` **only** when:
   - `NEXT_PUBLIC_ADS_ENABLED === "true"` **and**
   - `NEXT_PUBLIC_ADSENSE_APPROVED === "true"` **and**
   - the visitor has consented.
4. `components/SafeAdSlot.tsx` renders reserved-space ad containers under the same gates.

So **no ad script runs before consent**, and ads are disabled entirely until the env flags
are turned on.

## Environment flags

Set these in `.env` / hosting environment:

```
NEXT_PUBLIC_ADS_ENABLED=true        # turn ad slots on
NEXT_PUBLIC_ADSENSE_APPROVED=true   # only set true AFTER AdSense approves the site
```

Keep both `false` (or unset) until AdSense approval is granted. The AdSense account/client
id lives in `lib/seo/metadata.ts` (`adsenseClientId`).

## Recommended: Google Funding Choices (certified CMP)

Google Funding Choices is a certified IAB TCF v2.2 CMP and is the simplest path for AdSense.

### Step 1 — Create a message in AdSense
1. AdSense → **Privacy & messaging** → **GDPR**.
2. Create a GDPR consent message. Choose to show it to **EEA, UK and Switzerland** traffic only
   (Funding Choices handles the geo-targeting automatically).
3. Enable **"Manage options / TCF v2.2"** so a TCF consent string is generated.

### Step 2 — Add the Funding Choices loader
Google provides a snippet like the one below. Add it **before** AdSense and let the CMP
manage consent. Place it where `AdSenseScript` is mounted, or in `app/layout.tsx` `<head>`
via `next/script` with `strategy="beforeInteractive"`:

```tsx
// Pseudocode — replace PUB_ID with the real publisher id.
<Script
  id="funding-choices"
  strategy="beforeInteractive"
  src="https://fundingchoicesmessages.google.com/i/pub-7051995204409435?ers=1"
/>
<Script id="fc-present" strategy="beforeInteractive">
  {`(function(){function signalGooglefcPresent(){...}})();`}
</Script>
```

> The exact snippet is generated in the AdSense UI — copy it verbatim from there. Do not
> hand-write it.

### Step 3 — Gate AdSense on the TCF string
When using Funding Choices, Google's AdSense tag reads the TCF consent string automatically.
To keep our defense-in-depth gating:
- Leave `AdSenseScript` consent-gated as-is, **or**
- If you let Funding Choices fully manage loading, replace our `canLoadAds()` check with a
  read of the TCF API (`__tcfapi('getTCData', 2, cb)`) so our gate matches the CMP decision.

### Step 4 — Verify
- Load the site from an EEA/UK IP (or use a VPN) and confirm the CMP banner appears.
- Confirm `adsbygoogle.js` does **not** appear in the Network tab until consent is given.
- Confirm `__tcfapi` is defined in the console.

## Alternative certified CMPs
Any Google-certified CMP works (Cookiebot, Quantcast Choice, Didomi, etc.). The integration
shape is the same: load the CMP first, only load AdSense after consent, target EEA/UK/CH.

## Do / Don't checklist
- ✅ Keep AdSense out of `<head>` until consent (already done).
- ✅ Keep `NEXT_PUBLIC_ADSENSE_APPROVED=false` until approval.
- ✅ Reserve ad space to avoid CLS (already done in `SafeAdSlot`).
- ❌ Don't add `preconnect` to `pagead2.googlesyndication.com` before the CMP loads.
- ❌ Don't place ads inside the interactive editor (`TextAnalyzer`).
- ❌ Don't claim TCF certification for the first-party banner.

## Pending manual actions
- [ ] Generate the GDPR/TCF message in AdSense and paste the Funding Choices snippet.
- [ ] Flip env flags after AdSense approval.
- [ ] Create AdSense ad units and pass their `slotId`s into `SafeAdSlot`.
- [ ] Verify CMP visibility from an EEA/UK location.
