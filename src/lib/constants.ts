/**
 * Single source of truth for every business fact on the site.
 *
 * NAP (name / address / phone) must stay byte-identical here, in the footer,
 * in the LocalBusiness schema, and in the Google Business Profile — mismatches
 * weaken local ranking. Change it once, here.
 */

/** Temp Vercel URL. Swap to the real domain and everything else follows. */
export const SITE_URL = 'https://bhattisolar.vercel.app';

export const BUSINESS_NAME = 'Bhatti Solar System';

export const WHATSAPP_PHONE = '923044854300';
export const PHONE_TEL = 'tel:+923044854300';
export const PHONE_DISPLAY = '+92 304 4854300';

/** Builds a wa.me link with a URL-encoded pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = waLink(
  'Assalam-o-Alaikum, I want a free solar survey and quote'
);

/*
 * ─────────────────────────────────────────────────────────────
 * FILL BEFORE LAUNCH — the three placeholders from the copy deck.
 * Each is written to render gracefully while still null, so nothing
 * on the page states a fact we have not confirmed.
 * ─────────────────────────────────────────────────────────────
 */

/** e.g. 5 → renders "5-year workmanship warranty". Null → generic wording. */
export const WORKMANSHIP_WARRANTY_YEARS: number | null = 5;

/** Full street address for the footer + schema. Null → city only. */
export const OFFICE_ADDRESS: string | null = 'DHA Phase 6';

/** e.g. 2019 → renders "Serving Lahore since 2019". Null → line omitted. */
export const FOUNDING_YEAR: number | null = 2019;

export const WARRANTY_PHRASE = WORKMANSHIP_WARRANTY_YEARS
  ? `${WORKMANSHIP_WARRANTY_YEARS}-year workmanship warranty`
  : 'Workmanship warranty on every install';

/** Rendered as real text (never inside an image) — this is what wins
 *  "solar installer [area]" searches. */
export const SERVICE_AREAS = [
  'DHA Phase 1',
  'DHA Phase 5',
  'DHA Phase 6',
  'DHA Phase 7',
  'DHA Phase 8',
  'Al-Rehman Garden',
  'Punjab Society',
  'Hajwari Scheme',
  'Medical Scheme',
  'Rizwan Garden',
  'Lake City',
  'Engineer Town',
  'Bahar Colony',
  'Taj Bagh',
  'Garrison',
  'Barki',
  'Kahna',
  'Waton Road',
];

export const PANEL_BRANDS = [
  'Canadian Solar',
  'Longi',
  'Jinko',
  'Solis',
  'Growatt',
  'Osaka',
  'Level-Tech',
];
