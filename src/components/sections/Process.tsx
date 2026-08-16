import { Section, SectionHeading } from '@/components/ui';

const STEPS = [
  {
    title: 'Free site survey',
    body: 'We visit, assess your roof and load, and understand your needs.',
  },
  {
    title: 'Custom design & honest quote',
    body: 'A system sized correctly for you, with a clear, no-pressure quote.',
  },
  {
    title: 'Professional installation',
    body: 'Fitted on strong elevator structures that protect your roof and keep the space usable.',
  },
  {
    title: 'Net metering',
    body: 'We complete the full LESCO net-metering process on your behalf.',
  },
  {
    title: 'After-sales support',
    body: 'We stay available for service and support after installation.',
  },
];

/**
 * This is a genuine sequence, so the numerals are carrying information rather
 * than decorating — which is why they are set large instead of tucked into a
 * badge. Two columns because a single narrow list left the right half of the
 * section empty at desktop width.
 */
export function Process() {
  return (
    <Section id="process">
      <SectionHeading sub="From the first visit to the day your green meter is running — five steps, and we take the paperwork.">
        How we work
      </SectionHeading>

      <ol className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex gap-5 border-t border-line pt-6">
            <span
              aria-hidden="true"
              className="tnum flex h-9 w-9 shrink-0 items-center justify-center rounded-pill border border-accent/45 bg-accent/25 font-display text-sm font-bold text-ink shadow-xs"
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            <div>
              <h3 className="text-heading text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-copy text-pretty text-body">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
