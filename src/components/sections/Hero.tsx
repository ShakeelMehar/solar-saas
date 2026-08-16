import Image from 'next/image';
import { Phone, Zap } from 'lucide-react';
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  PANEL_BRANDS,
  waLink,
} from '@/lib/constants';
import { WhatsappCta, SecondaryCta } from '@/components/ui';
import solarHeroImg from '@/assets/solar-hero.jpeg';

/**
 * The spec rail.
 *
 * This page is bought on numbers — kW, monthly units, how many roofs the team
 * has actually been on — so the hero closes on figures rather than a fourth
 * line of adjectives. Set in tabular figures so the row reads as a datasheet,
 * which is what the buyer is mentally comparing against anyway.
 */
const SPECS = [
  { figure: '150+', label: 'Installations across Lahore' },
  { figure: '100%', label: 'LESCO net metering handled for you' },
  { figure: '30kW', label: 'Largest commercial system installed' },
  {
    figure: String(PANEL_BRANDS.length),
    label: 'Panel & inverter brands we fit',
  },
];

const HERO_WA = waLink(
  'Assalam-o-Alaikum, I want a free solar survey and quote'
);

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink">
      <Image
        src={solarHeroImg}
        alt="Rooftop solar panel array installed in Lahore under clear sky"
        fill
        priority
        className="-z-10 object-cover object-center"
        sizes="100vw"
      />

      {/* Scrims with warm solar ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(5,41,74,0.84)_0%,rgba(5,41,74,0.62)_48%,rgba(5,41,74,0.78)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(78%_58%_at_50%_44%,rgba(5,41,74,0.36)_0%,rgba(5,41,74,0)_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_45%_at_50%_35%,rgba(254,191,20,0.14)_0%,rgba(5,41,74,0)_70%)]"
      />

      {/* Centred column. */}
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 pt-28 pb-12 text-center md:pt-32">
        {/* Trust Eyebrow Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-pill border border-accent/35 bg-ink/75 px-3.5 py-1 text-xs font-semibold text-accent shadow-sm backdrop-blur-md">
          <Zap className="h-3.5 w-3.5 fill-accent text-accent" />
          <span>LESCO Net-Metering Certified &amp; Tier-1 Solar</span>
        </div>

        <h1 className="text-display text-white">
          Solar system installation in Lahore
        </h1>

        <p className="mt-6 max-w-xl text-lead text-pretty text-white/90">
          Cut your electricity bill by{' '}
          <span className="font-bold text-accent">up to 90%</span> with a
          net-metered solar system, designed and installed for your roof.
          On-grid, hybrid and off-grid systems for homes, businesses and farms.
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
          <WhatsappCta href={HERO_WA}>Get a free site survey</WhatsappCta>
          <SecondaryCta href={PHONE_TEL} onDark>
            <Phone size={16} aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </SecondaryCta>
        </div>
      </div>

      {/* The rail stays anchored to the foot of the viewport */}
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 text-center lg:grid-cols-4 lg:gap-x-10">
          {SPECS.map((spec) => (
            <div key={spec.label} className="group">
              <dt className="sr-only">{spec.label}</dt>
              <dd>
                <span className="tnum block font-display text-figure text-white transition-colors duration-200 group-hover:text-accent">
                  {spec.figure}
                </span>
                <span className="mx-auto mt-2 block max-w-60 text-sm leading-snug text-pretty text-white/80">
                  {spec.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
