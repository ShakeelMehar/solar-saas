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

      {/* Rendered as a real table so the size/usage pairs are indexable text. */}
      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-104 border-collapse text-left">
          <caption className="sr-only">
            Common solar system sizes in Lahore and the households or businesses
            they typically suit
          </caption>
          <thead>
            <tr className="border-b border-line-strong">
              <th
                scope="col"
                className="py-3 pr-6 text-eyebrow uppercase text-muted"
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
              <tr key={row.size} className="border-b border-line">
                <th
                  scope="row"
                  className="tnum py-4 pr-6 font-display text-lg font-bold whitespace-nowrap text-ink"
                >
                  {row.size}
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
