import { PANEL_BRANDS } from '@/lib/constants';
import { Eyebrow } from '@/components/ui';

/**
 * Text-only brand strip. Real logos would need licensed assets we don't have;
 * plain text is honest, weightless, and indexable.
 *
 * Laid out label-left / brands-right so it reads as one quiet line directly
 * under the hero rather than as a third stacked centred block.
 */
export function TrustBar() {
  return (
    <section className="bg-canvas py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-x-12 gap-y-5 lg:grid-cols-[10rem_minmax(0,1fr)] lg:items-baseline">
          <Eyebrow className="lg:pt-1">Brands we install</Eyebrow>

          <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2 md:gap-x-8">
            {PANEL_BRANDS.map((brand) => (
              <li
                key={brand}
                className="font-display text-base font-semibold tracking-tight text-ink md:text-lg"
              >
                {brand}
              </li>
            ))}
          </ul>

          <p className="max-w-2xl text-sm leading-relaxed text-pretty text-muted lg:col-start-2">
            We&apos;re not tied to one brand, so we recommend the system that
            fits your budget and your roof — not the one we&apos;re pushed to
            sell.
          </p>
        </div>
      </div>
    </section>
  );
}
