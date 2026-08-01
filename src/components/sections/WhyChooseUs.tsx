import { Check } from 'lucide-react';
import { WORKMANSHIP_WARRANTY_YEARS } from '@/lib/constants';
import { Section, SectionHeading } from '@/components/ui';

const REASONS = [
  {
    title: '150+ completed installations',
    body: 'Across Lahore — real work you can verify.',
  },
  {
    title: 'Multi-brand & unbiased',
    body: 'We fit what suits you, not what we’re pushed to sell.',
  },
  {
    title: 'Net metering handled',
    body: 'Full LESCO process managed for you, start to finish.',
  },
  {
    title: 'Elevator structures',
    body: 'Proper mounting that protects your roof and keeps the space usable.',
  },
  {
    title: 'Genuine, branded equipment',
    body: 'Canadian Solar, Longi and Jinko panels; Solis and Growatt inverters.',
  },
  {
    title: WORKMANSHIP_WARRANTY_YEARS
      ? `${WORKMANSHIP_WARRANTY_YEARS}-year workmanship warranty`
      : 'Workmanship warranty',
    body: 'Plus full manufacturer warranty on panels and inverters.',
  },
];

export function WhyChooseUs() {
  return (
    <Section id="why-us">
      <SectionHeading sub="Six things that decide whether a solar system keeps saving you money in year eight, not just year one.">
        Why homeowners and businesses choose us
      </SectionHeading>

      <ul className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
        {REASONS.map((reason) => (
          <li key={reason.title} className="flex gap-4 border-t border-line pt-6">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-accent-wash">
              <Check size={15} className="text-accent-ink" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-heading text-ink">{reason.title}</h3>
              <p className="mt-1.5 text-sm leading-copy text-pretty text-body">
                {reason.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
