import { Plus } from 'lucide-react';
import { FAQS } from '@/lib/faqs';
import { Section, SectionHeading } from '@/components/ui';

/**
 * Native <details>/<summary> rather than a JS accordion: fully server-rendered,
 * keyboard accessible for free, and every answer sits in the initial HTML where
 * Google can read it — which is the whole point of pairing this with FAQPage
 * schema.
 */
export function FaqSection() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <SectionHeading>Frequently asked questions</SectionHeading>
        </div>

        <div className="border-t border-line">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-heading text-ink transition-colors duration-150 hover:text-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-ink [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  size={20}
                  className="shrink-0 text-accent-ink transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-6 text-base leading-copy text-pretty text-body">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
