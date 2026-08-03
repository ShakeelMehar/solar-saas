'use client';

import type { CSSProperties } from 'react';
import { useMemo, useState } from 'react';
import { waLink } from '@/lib/constants';
import { WhatsappCta, Eyebrow } from '@/components/ui';

/**
 * Sizing helper, deliberately price-free.
 *
 * The business quotes current rates directly because panel and dollar prices
 * move — so this recommends a system size and hands the visitor to WhatsApp
 * with that context pre-filled, rather than publishing a number that dates.
 */

/** Lahore rule of thumb: roughly 120 units per kW per month. */
const UNITS_PER_KW_MONTH = 120;

const MIN_UNITS = 200;
const MAX_UNITS = 3000;

const SIZES = [
  { kw: 6, suits: 'Standard home, moderate appliance load' },
  { kw: 8, suits: 'Larger home with AC load' },
  { kw: 10, suits: 'Big home or small commercial setup' },
  { kw: 15, suits: 'Large home / small business' },
  { kw: 25, suits: 'Commercial, industrial & agricultural', plus: true },
];

const PRESETS = [
  { label: 'Small home', units: 500 },
  { label: 'Family home', units: 900 },
  { label: 'Large home', units: 1600 },
  { label: 'Commercial', units: 2600 },
];

export function SizeAdvisor() {
  const [monthlyUnits, setMonthlyUnits] = useState(900);

  const recommended = useMemo(() => {
    const raw = monthlyUnits / UNITS_PER_KW_MONTH;
    return SIZES.find((size) => raw <= size.kw + 1) ?? SIZES[SIZES.length - 1];
  }, [monthlyUnits]);

  const label = `${recommended.kw}${recommended.plus ? 'kW+' : 'kW'}`;

  /* Drives the filled portion of the range track — see `.range-field`. */
  const fill = ((monthlyUnits - MIN_UNITS) / (MAX_UNITS - MIN_UNITS)) * 100;

  const cta = waLink(
    `Assalam-o-Alaikum, my monthly usage is about ${monthlyUnits} units. I want a free survey and today's price for a ${label} system.`
  );

  return (
    <div className="grid overflow-hidden rounded-panel border border-line md:grid-cols-2">
      <div className="bg-canvas p-6 sm:p-8 md:p-10">
        <label
          htmlFor="monthly-units"
          className="block text-eyebrow uppercase text-muted"
        >
          Your monthly units
        </label>

        <p className="mt-4 font-display text-figure tracking-tight text-ink">
          <span className="tnum">{monthlyUnits.toLocaleString()}</span>{' '}
          <span className="font-sans text-sm font-medium tracking-normal text-muted">
            units / month
          </span>
        </p>

        <input
          id="monthly-units"
          type="range"
          min={MIN_UNITS}
          max={MAX_UNITS}
          step={50}
          value={monthlyUnits}
          onChange={(event) => setMonthlyUnits(Number(event.target.value))}
          className="range-field mt-3"
          style={{ '--range-fill': `${fill}%` } as CSSProperties}
        />
        <div className="tnum flex justify-between text-xs font-medium text-muted">
          <span>{MIN_UNITS}</span>
          <span>{MAX_UNITS.toLocaleString()}</span>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {PRESETS.map((preset) => {
            const active = monthlyUnits === preset.units;
            return (
              <button
                key={preset.label}
                type="button"
                onClick={() => setMonthlyUnits(preset.units)}
                aria-pressed={active}
                className={`min-h-11 rounded-pill border px-4 text-xs font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  active
                    ? 'border-brand bg-brand-wash text-brand-ink'
                    : 'border-line bg-canvas-tint text-body hover:border-line-strong hover:text-ink'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>

        <p className="mt-7 max-w-sm text-xs leading-relaxed text-muted">
          Find your monthly units on your LESCO bill. This is a starting point —
          your exact size is confirmed during the free survey.
        </p>
      </div>

      <div className="flex flex-col justify-between bg-ink p-6 sm:p-8 md:p-10">
        <div>
          <Eyebrow onDark>Likely system size</Eyebrow>
          <p
            aria-live="polite"
            className="tnum mt-4 font-display text-stat text-white"
          >
            {label}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-pretty text-inverse-muted">
            {recommended.suits}
          </p>
        </div>

        <div className="mt-10 border-t border-line-inverse pt-7">
          <p className="text-sm leading-relaxed text-pretty text-inverse-muted">
            Solar prices change with panel and dollar rates, so we quote the
            current best price directly. Send your recent bill on WhatsApp and
            we&apos;ll confirm the right size and today&apos;s rate.
          </p>
          <WhatsappCta href={cta} className="mt-6 w-full">
            Get today&apos;s price
          </WhatsappCta>
        </div>
      </div>
    </div>
  );
}
