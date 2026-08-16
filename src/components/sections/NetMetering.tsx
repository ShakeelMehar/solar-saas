import { Zap, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui';

/**
 * The star differentiator — given its own dark band so it reads as a claim,
 * not another feature card.
 *
 * The four items are what "handled" concretely means. They are deliberately
 * not numbered: LESCO does not run them in a fixed order, and the page already
 * has one real sequence in "How we work". Numbering both would flatten the
 * distinction between a checklist and a process.
 */
const HANDLED = [
  'Application filed',
  'Documentation prepared',
  'LESCO coordination',
  'Green meter installed',
];

export function NetMetering() {
  return (
    <Section id="net-metering" tone="ink">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-pill border border-accent/35 bg-accent/15 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
            <Zap size={12} className="fill-accent text-accent" />
            100% Turnkey LESCO Service
          </div>
          <h2 className="text-title text-white">
            Net metering, completely handled for you
          </h2>
          <p className="mt-6 text-lead text-pretty text-white/90">
            No running around offices. No confusion.{' '}
            <span className="font-semibold text-accent">
              We handle it end to end.
            </span>
          </p>
        </div>

        <div>
          <p className="text-base leading-copy text-pretty text-inverse-muted">
            Most people worry about the LESCO net metering process. We remove
            that worry entirely — our team manages the full process so you start
            saving without the paperwork headache.
          </p>

          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
            {HANDLED.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 border-t border-line-inverse py-4 text-sm font-medium text-white"
              >
                <CheckCircle2 size={16} className="shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
