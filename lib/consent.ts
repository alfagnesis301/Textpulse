/**
 * Consent strategy for advertising.
 *
 * Do not load Google AdSense personalized ads for visitors in regions requiring
 * consent until a valid consent signal is available from a Google-certified CMP.
 *
 * Recommended implementation:
 * - Configure a Google-certified CMP through AdSense Privacy & messaging or an
 *   approved CMP provider.
 * - Load AdSense only after the CMP is configured and consent choices are known.
 * - Respect user choices for personalized ads, non-personalized ads, analytics,
 *   cookies, and storage where applicable.
 */
export function canLoadAds() {
  return false;
}
