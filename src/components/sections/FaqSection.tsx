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

        <div className="space-y-2">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-panel border border-line bg-canvas p-4 transition-all duration-200 open:border-accent/40 open:bg-canvas-tint/70 open:shadow-xs sm:p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-heading text-ink transition-colors duration-150 group-open:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                <span className="font-semibold">{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill border border-line bg-canvas shadow-xs transition-all duration-200 group-open:border-accent/50 group-open:bg-accent/20">
                  <Plus
                    size={16}
                    className="text-ink transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-copy text-pretty text-body">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
