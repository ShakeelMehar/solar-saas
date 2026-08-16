import { Zap } from 'lucide-react';
import { Section } from '@/components/ui';

export function WhySolar() {
  return (
    <Section id="why-solar" tone="tint">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <h2 className="text-title text-ink">Why Lahore is switching to solar</h2>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-accent/40 bg-accent/20 px-3.5 py-1.5 text-xs font-bold text-ink shadow-xs">
              <Zap size={13} className="fill-accent text-accent" />
              3–4 Years Average Payback
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-canvas px-3.5 py-1.5 text-xs font-semibold text-body shadow-xs">
              25-Year Panel Performance
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Opening paragraph runs at lead size so the section has an entry
              point instead of two identical blocks of grey. */}
          <p className="text-lead text-pretty text-ink">
            Electricity tariffs keep climbing, and load-shedding still
            interrupts daily life and business. A solar system fixes both.
          </p>
          <p className="text-base leading-copy text-pretty text-body">
            With net metering, your panels power your home or office during the
            day and sell surplus units back to the grid — so your meter runs
            backwards and your monthly bill drops sharply.
          </p>
          <p className="text-base leading-copy text-pretty text-body">
            A properly sized system typically pays for itself in a few years,
            then keeps saving you money for two decades or more. The question is
            no longer <em>whether</em> to go solar — it&apos;s getting it done
            right, with quality equipment and a team that handles the paperwork
            for you.
          </p>
        </div>
      </div>
    </Section>
  );
}
