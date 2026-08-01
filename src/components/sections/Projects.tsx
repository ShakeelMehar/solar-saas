import { SERVICE_AREAS } from '@/lib/constants';
import { Section, SectionHeading } from '@/components/ui';

/**
 * The local-SEO section. Two rules here:
 *  1. Area names must be real HTML text, never baked into a graphic — this is
 *     what ranks for "solar installer [area]".
 *  2. Install videos load only on tap. Embedding 6–8 players on page load
 *     would wreck mobile LCP, and mobile is ~90% of traffic.
 *
 * The media slot leads with the installed system size rather than an empty
 * player box. Until the clips land, an empty 4:3 rectangle with a play glyph
 * reads as a broken image; a large kW figure reads as a deliberate spec tile
 * and is the single most useful thing on the card either way.
 *
 * TODO (client media): add `videoUrl` + `poster` to each project once the
 * FB/Insta/TikTok clips are supplied. Captions below are already final.
 */
interface Project {
  area: string;
  size: string;
  detail: string;
  videoUrl?: string;
}

const PROJECTS: Project[] = [
  {
    area: 'DHA Phase 8',
    size: '15kW',
    detail: 'On-grid · Canadian 615W panels · green meter',
  },
  {
    area: 'Lake City',
    size: '8kW',
    detail: 'Hybrid · Solis inverter · Osaka battery',
  },
  {
    area: 'Engineer Town',
    size: '25+10kW',
    detail: 'On-grid plus hybrid · lithium battery',
  },
  {
    area: 'Cumbo Dairy Farm',
    size: '30kW',
    detail: 'Running a 30hp tubewell motor',
  },
  {
    area: 'Al-Rehman Hardware',
    size: '25kW',
    detail: 'Commercial system · green meter',
  },
  {
    area: 'Punjab Society',
    size: '8kW',
    detail: 'Hybrid · Longi 645W panels · elevator structure',
  },
];

export function Projects() {
  return (
    <Section id="projects" tone="tint">
      <SectionHeading sub="From homes in DHA to businesses and farms on the city's edge — here's a look at our work across Lahore.">
        150+ solar installations across Lahore
      </SectionHeading>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <li
            key={project.area}
            className="overflow-hidden rounded-panel border border-line bg-canvas"
          >
            <div className="flex aspect-16/10 flex-col justify-end bg-ink p-6">
              <span className="tnum font-display text-figure text-white">
                {project.size}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-heading text-ink">{project.area}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-pretty text-body">
                {project.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-14 border-t border-line pt-8">
        <h3 className="text-eyebrow uppercase text-muted">
          Areas we&apos;ve installed in
        </h3>
        {/* The separator is rendered in JSX rather than via CSS `content` so it
            is carried by the HTML, whose charset is declared. A middot baked
            into the stylesheet depends on the CSS being decoded as UTF-8. */}
        <ul className="mt-4 flex flex-wrap gap-y-1">
          {SERVICE_AREAS.map((area) => (
            <li key={area} className="text-sm text-body">
              {area}
              <span aria-hidden="true" className="px-2.5 text-line-strong">
                ·
              </span>
            </li>
          ))}
          <li className="text-sm text-muted">
            and surrounding farms &amp; tubewells across Lahore
          </li>
        </ul>
      </div>
    </Section>
  );
}
