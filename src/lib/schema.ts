import {
  BUSINESS_NAME,
  OFFICE_ADDRESS,
  FOUNDING_YEAR,
  SITE_URL,
} from './constants';
import { FAQS } from './faqs';

/**
 * LocalBusiness schema — the foundation of local SEO. Tells Google this is a
 * real business at a real place. Validate at Google's Rich Results Test after
 * any edit here.
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SolarInstallation',
  name: BUSINESS_NAME,
  description:
    'Solar system installation in Lahore — on-grid, hybrid, and off-grid systems for homes, businesses, and farms. Net metering handled for you.',
  telephone: '+923044854300',
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    // streetAddress is omitted until confirmed — a wrong address is worse
    // than none, because it breaks NAP consistency with Google Business Profile.
    ...(OFFICE_ADDRESS ? { streetAddress: OFFICE_ADDRESS } : {}),
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  areaServed: {
    '@type': 'City',
    name: 'Lahore',
  },
  ...(FOUNDING_YEAR ? { foundingDate: String(FOUNDING_YEAR) } : {}),
  priceRange: '$$',
  openingHours: 'Mo-Sa 09:00-19:00',
};

/** FAQPage schema — makes the FAQ eligible for expandable rich results. */
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
