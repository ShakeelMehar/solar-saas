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
        <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[10rem_minmax(0,1fr)] lg:items-center">
          <Eyebrow className="lg:pt-0">Brands we install</Eyebrow>

          <ul className="flex flex-wrap items-center gap-2.5">
            {PANEL_BRANDS.map((brand) => (
              <li
                key={brand}
                className="inline-flex items-center gap-2 rounded-pill border border-line bg-canvas-tint px-3.5 py-1.5 font-display text-xs font-bold tracking-tight text-ink shadow-xs transition-all duration-200 hover:border-accent/60 hover:bg-accent/15 hover:shadow-sm md:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
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
