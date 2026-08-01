import {
  SunMedium,
  BatteryCharging,
  Unplug,
  Factory,
  Droplets,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui';

/**
 * On-grid is flagged `featured` because it is what most Lahore homes actually
 * buy — so it gets the dark panel and the full width. Giving one card real
 * emphasis also breaks up a page that was otherwise eleven consecutive bands
 * of identical light cards.
 */
const SOLUTIONS = [
  {
    icon: SunMedium,
    title: 'On-grid solar systems',
    body: 'The most cost-effective option. Your system connects to the grid with net metering, so you save the maximum on your monthly bill. Best for areas with stable supply.',
    featured: true,
  },
  {
    icon: BatteryCharging,
    title: 'Hybrid solar systems',
    body: 'Solar plus battery backup. You save on your bill and keep essential loads running during load-shedding. Ideal if uninterrupted power matters to you.',
    featured: false,
  },
  {
    icon: Unplug,
    title: 'Off-grid solar systems',
    body: 'Complete energy independence with battery storage — no grid needed. Best for remote sites, farms, and locations with unreliable supply.',
    featured: false,
  },
  {
    icon: Factory,
    title: 'Commercial & industrial solar',
    body: 'Larger systems for factories, warehouses, offices, and retail. We’ve installed 25kW–30kW+ systems for businesses and farms across Lahore, including dairy farms and hardware showrooms.',
    featured: false,
  },
  {
    icon: Droplets,
    title: 'Solar tubewell & agricultural systems',
    body: 'Run tubewells and motors on solar with VFD drives — cutting diesel and electricity costs for farms. We’ve installed systems up to 35hp motors on agricultural land around Lahore.',
    featured: false,
  },
];

export function Solutions() {
  return (
    <Section id="solutions">
      <SectionHeading sub="Every system is sized to your roof, your load and your budget — after a free on-site survey.">
        Solar solutions we install
      </SectionHeading>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {SOLUTIONS.map(({ icon: Icon, title, body, featured }) =>
          featured ? (
            <article
              key={title}
              className="rounded-panel bg-ink p-8 md:col-span-2 md:p-10"
            >
              <Icon
                size={26}
                className="text-accent-on-ink"
                aria-hidden="true"
              />
              <h3 className="mt-5 max-w-xl font-display text-title text-white">
                {title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-copy text-pretty text-inverse-muted">
                {body}
              </p>
            </article>
          ) : (
            <article
              key={title}
              className="rounded-panel border border-line bg-canvas-tint p-8 transition-colors duration-150 hover:border-accent-line hover:bg-accent-wash/45"
            >
              <Icon size={22} className="text-accent-ink" aria-hidden="true" />
              <h3 className="mt-5 text-heading text-ink">{title}</h3>
              <p className="mt-2.5 text-sm leading-copy text-pretty text-body">
                {body}
              </p>
            </article>
          )
        )}
      </div>
    </Section>
  );
}
