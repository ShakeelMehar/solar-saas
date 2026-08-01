/**
 * One source for the FAQ text, consumed by both the rendered accordion and the
 * FAQPage JSON-LD. Google requires the schema to match the visible answer, so
 * these must never be maintained separately.
 */
export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'How much does a solar system cost in Lahore?',
    answer:
      'It depends on the system size, panel and inverter brand, and whether you want battery backup. Because prices move with dollar and panel rates, we give you today’s exact price after a quick survey. Share your electricity bill on WhatsApp for a fast estimate.',
  },
  {
    question: 'How long does the net metering process take?',
    answer:
      'Timelines vary with LESCO, but we handle the entire process for you — application, documentation, and coordination — so you don’t have to chase it yourself.',
  },
  {
    question: 'On-grid or hybrid — which is right for me?',
    answer:
      'If your main goal is to cut your bill and your area has stable supply, on-grid gives the best value. If you also want backup during load-shedding, hybrid is worth the extra cost. We’ll recommend honestly based on your needs during the free survey.',
  },
  {
    question: 'Will solar keep my home running during load-shedding?',
    answer:
      'Only a hybrid or off-grid system with a battery gives backup during outages. A standard on-grid system saves on your bill but shuts off during load-shedding for safety. We’ll explain the trade-off clearly before you decide.',
  },
  {
    question: 'What warranty do you provide?',
    answer:
      'Panels and inverters carry full manufacturer warranties, and we provide a warranty on our installation workmanship.',
  },
  {
    question: 'Which areas of Lahore do you cover?',
    answer:
      'We install across Lahore — including DHA, Al-Rehman Garden, Punjab Society, Lake City, Engineer Town, Medical Scheme, and Hajwari Scheme, plus surrounding areas and farms. Message us your location to confirm.',
  },
];
