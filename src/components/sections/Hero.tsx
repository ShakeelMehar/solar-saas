import Image from 'next/image';
import { Phone } from 'lucide-react';
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

      {/* Two scrims. The vertical one is heaviest at the top, where the bar
          floats transparent over open sky and has nothing else to sit on, and
          eases off across the middle so the array keeps its texture. The
          radial adds density directly behind the centred column so the
          headline has a ground of its own rather than relying on the wash. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,32,46,0.82)_0%,rgba(0,32,46,0.58)_48%,rgba(0,32,46,0.72)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(78%_58%_at_50%_44%,rgba(0,32,46,0.34)_0%,rgba(0,32,46,0)_72%)]"
      />

      {/* Centred column. Capped narrower than the page grid: centred type only
          holds together while the reader's eye returns to a predictable left
          edge, and a full 72rem measure loses that. */}
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 pt-28 pb-12 text-center md:pt-32">
        <h1 className="text-display text-white">
          Solar system installation in Lahore
        </h1>

        <p className="mt-6 max-w-xl text-lead text-pretty text-white/85">
          Cut your electricity bill by up to 90% with a net-metered solar
          system, designed and installed for your roof. On-grid, hybrid and
          off-grid systems for homes, businesses and farms.
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
          <WhatsappCta href={HERO_WA}>Get a free site survey</WhatsappCta>
          <SecondaryCta href={PHONE_TEL} onDark>
            <Phone size={16} aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </SecondaryCta>
        </div>
      </div>

      {/* The rail stays anchored to the foot of the viewport rather than
          travelling with the centred column, so it reads as the base of the
          hero and marks where the page continues. */}
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 text-center lg:grid-cols-4 lg:gap-x-10">
          {SPECS.map((spec) => (
            <div key={spec.label}>
              <dt className="sr-only">{spec.label}</dt>
              <dd>
                <span className="tnum block font-display text-figure text-white">
                  {spec.figure}
                </span>
                <span className="mx-auto mt-2 block max-w-60 text-sm leading-snug text-pretty text-white/70">
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
