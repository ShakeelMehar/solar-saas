import { Section, SectionHeading } from '@/components/ui';
import { SizeAdvisor } from '@/components/SizeAdvisor';

const SIZE_TABLE = [
  { size: '6kW', suits: 'Standard home, moderate appliance load' },
  { size: '8kW', suits: 'Larger home with AC load' },
  { size: '10kW', suits: 'Big home or small commercial setup' },
  { size: '15kW', suits: 'Large home / small business' },
  { size: '25kW+', suits: 'Commercial, industrial & agricultural' },
];

export function SystemSizes() {
  return (
    <Section id="sizes" tone="tint">
      <SectionHeading sub="Not sure what you need? Move the slider to see the size that usually fits your usage.">
        Common system sizes for homes &amp; businesses
      </SectionHeading>

      <div className="mt-14">
        <SizeAdvisor />
      </div>

      {/* Rendered as a real table so the size/usage pairs are indexable text.

          The min-width was 26rem, which is wider than the 312px of content a
          360px phone leaves after the section padding — so the whole table
          scrolled sideways on the narrowest common screen, with no affordance
          saying it could. 18rem lets it fit and wrap instead; overflow-x-auto
          stays as the safety net for a long string, not as the normal path. */}
      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-72 border-collapse text-left">
          <caption className="sr-only">
            Common solar system sizes in Lahore and the households or businesses
            they typically suit
          </caption>
          <thead>
            <tr className="border-b border-line-strong">
              <th
                scope="col"
                className="py-3 pr-4 text-eyebrow uppercase text-muted sm:pr-6"
              >
                System size
              </th>
              <th scope="col" className="py-3 text-eyebrow uppercase text-muted">
                Typically suits
              </th>
            </tr>
          </thead>
          <tbody>
            {SIZE_TABLE.map((row) => (
              <tr
                key={row.size}
                className="border-b border-line transition-colors duration-150 hover:bg-canvas"
              >
                <th
                  scope="row"
                  className="tnum py-4 pr-4 font-display text-lg font-bold whitespace-nowrap text-ink sm:pr-6"
                >
                  <span className="inline-flex items-center gap-2">
                    {row.size}
                    {row.size === '10kW' ? (
                      <span className="rounded-pill border border-accent/40 bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-ink">
                        Most Popular
                      </span>
                    ) : null}
                  </span>
                </th>
                <td className="py-4 text-sm text-body">{row.suits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
