import { Phone, Zap } from 'lucide-react';
import { PHONE_TEL, PHONE_DISPLAY, waLink } from '@/lib/constants';
import { Section, WhatsappCta, SecondaryCta } from '@/components/ui';

const FINAL_WA = waLink('Assalam-o-Alaikum, I want a free solar survey');

export function FinalCta() {
  return (
    <Section id="contact" tone="ink">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-pill border border-accent/35 bg-accent/15 px-3.5 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
            <Zap size={13} className="fill-accent text-accent" />
            Zero Obligation · Free Consultation
          </div>
          <h2 className="max-w-2xl text-display text-white">
            Get a free site survey
          </h2>
          <p className="mt-6 max-w-xl text-lead text-pretty text-inverse-muted">
            Send us your recent LESCO bill on WhatsApp. We&apos;ll recommend the
            right system for your roof and quote today&apos;s price — no
            pressure, no obligation.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row lg:flex-col lg:items-stretch">
          <WhatsappCta href={FINAL_WA}>Message us on WhatsApp</WhatsappCta>
          <SecondaryCta href={PHONE_TEL} onDark>
            <Phone size={16} aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </SecondaryCta>
        </div>
      </div>
    </Section>
  );
}
