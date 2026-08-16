'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Zap, Sun, Cpu, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SERVICE_AREAS, waLink } from '@/lib/constants';
import { Section, SectionHeading } from '@/components/ui';

interface Project {
  id: string;
  area: string;
  size: string;
  category: 'residential' | 'commercial' | 'agricultural';
  categoryLabel: string;
  systemType: string;
  tag: string;
  detail: string;
  specs: {
    panels: string;
    inverter: string;
    feature: string;
  };
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 'dha-8',
    area: 'DHA Phase 8',
    size: '15kW',
    category: 'residential',
    categoryLabel: 'Residential',
    systemType: 'On-Grid System',
    tag: 'Luxury Villa Rooftop',
    detail: 'On-grid · Canadian 615W panels · green meter',
    specs: {
      panels: 'Canadian Solar 615W Mono PERC',
      inverter: 'Three-Phase On-Grid Inverter',
      feature: 'LESCO Net Metering & Green Meter',
    },
    image: '/images/projects/dha-phase-8.jpg',
  },
  {
    id: 'lake-city',
    area: 'Lake City',
    size: '8kW',
    category: 'residential',
    categoryLabel: 'Residential',
    systemType: 'Hybrid Backup',
    tag: 'Suburban Villa Rooftop',
    detail: 'Hybrid · Solis inverter · Osaka battery',
    specs: {
      panels: 'Tier-1 Mono PERC High Output Panels',
      inverter: 'Solis Smart Hybrid Inverter',
      feature: 'Osaka Deep Cycle Battery Storage',
    },
    image: '/images/projects/lake-city.jpg',
  },
  {
    id: 'engineer-town',
    area: 'Engineer Town',
    size: '25+10kW',
    category: 'residential',
    categoryLabel: 'Residential',
    systemType: 'Dual Hybrid + On-Grid',
    tag: 'Large Dual System Rooftop',
    detail: 'On-grid plus hybrid · lithium battery',
    specs: {
      panels: 'High-Density Dual Array Setup',
      inverter: 'Synchronized On-Grid & Hybrid Setup',
      feature: 'Wall-Mounted Lithium Battery Bank',
    },
    image: '/images/projects/engineer-town.jpg',
  },
  {
    id: 'cumbo-farm',
    area: 'Cumbo Dairy Farm',
    size: '30kW',
    category: 'agricultural',
    categoryLabel: 'Farm & Tubewell',
    systemType: 'Solar Tubewell Setup',
    tag: 'Agricultural Solar Installation',
    detail: 'Running a 30hp tubewell motor',
    specs: {
      panels: 'Ground-Mounted High-Yield Solar Array',
      inverter: 'Heavy-Duty Solar VFD Pump Controller',
      feature: 'Powers 30hp Tubewell & Dairy Operations',
    },
    image: '/images/projects/cumbo-dairy.jpg',
  },
  {
    id: 'al-rehman',
    area: 'Al-Rehman Hardware',
    size: '25kW',
    category: 'commercial',
    categoryLabel: 'Commercial',
    systemType: 'Commercial On-Grid',
    tag: 'Commercial Building Rooftop',
    detail: 'Commercial system · green meter',
    specs: {
      panels: 'Commercial High-Yield Solar Array',
      inverter: 'Industrial Grade 3-Phase Inverters',
      feature: 'LESCO Net Metering for Peak Tariff Cut',
    },
    image: '/images/projects/al-rehman.jpg',
  },
  {
    id: 'punjab-society',
    area: 'Punjab Society',
    size: '8kW',
    category: 'residential',
    categoryLabel: 'Residential',
    systemType: 'Elevated Hybrid System',
    tag: 'Elevated Mumty Structure',
    detail: 'Hybrid · Longi 645W panels · elevator structure',
    specs: {
      panels: 'Longi 645W Hi-MO High Efficiency',
      inverter: 'Hybrid Smart Energy Inverter',
      feature: 'Custom Elevated Iron Pergola on Roof',
    },
    image: '/images/projects/punjab-society.jpg',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Installations', count: PROJECTS.length },
  {
    id: 'residential',
    label: 'Residential',
    count: PROJECTS.filter((p) => p.category === 'residential').length,
  },
  {
    id: 'commercial-farm',
    label: 'Commercial & Farms',
    count: PROJECTS.filter(
      (p) => p.category === 'commercial' || p.category === 'agricultural'
    ).length,
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'residential') return project.category === 'residential';
    if (activeCategory === 'commercial-farm')
      return (
        project.category === 'commercial' || project.category === 'agricultural'
      );
    return true;
  });

  return (
    <Section id="projects" tone="tint">
      <SectionHeading sub="From luxury homes in DHA to commercial plazas and agricultural tubewells on the city's edge — here's real installation work delivered by our team across Lahore.">
        150+ solar installations across Lahore
      </SectionHeading>

      {/* Filter Tabs */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`cursor-pointer rounded-pill px-4 py-2 text-xs font-semibold transition-all duration-150 ${
              activeCategory === cat.id
                ? 'bg-ink text-white shadow-sm'
                : 'border border-line bg-canvas text-body hover:border-line-strong hover:text-ink'
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => {
          const waMessage = `Assalam-o-Alaikum, I saw your ${project.size} solar installation in ${project.area} and would like a quote for a similar setup for my property.`;

          return (
            <li
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-panel border border-line bg-canvas transition-all duration-300 hover:border-line-strong hover:shadow-float"
            >
              {/* Card Image Area */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-ink">
                <Image
                  src={project.image}
                  alt={`${project.size} solar installation in ${project.area}, Lahore`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Depth & Contrast Gradient Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent"
                />

                {/* Floating Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="tnum inline-flex items-center gap-1.5 rounded-pill border border-white/20 bg-ink/85 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-md">
                    <Zap className="h-3.5 w-3.5 fill-accent text-accent" />
                    {project.size}
                  </span>
                  <span className="rounded-pill border border-white/25 bg-white/20 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Bottom Overlay: Location & Tag */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-white">
                    <MapPin className="h-4 w-4 shrink-0 text-accent" />
                    <h3 className="font-display text-lg font-bold leading-tight text-white drop-shadow-sm">
                      {project.area}
                    </h3>
                  </div>
                  <p className="mt-0.5 pl-5.5 text-xs font-medium text-white/80">
                    {project.tag}
                  </p>
                </div>
              </div>

              {/* Card Content & Specs */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2 text-xs text-body">
                    <Sun className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-ink" />
                    <span className="font-medium leading-relaxed">
                      {project.specs.panels}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-body">
                    <Cpu className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-ink" />
                    <span className="font-medium leading-relaxed">
                      {project.specs.inverter}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-body">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span className="font-medium leading-relaxed text-ink">
                      {project.specs.feature}
                    </span>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs font-semibold text-muted">
                    {project.systemType}
                  </span>

                  <a
                    href={waLink(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-ink transition-colors hover:text-ink"
                  >
                    <span>Get quote</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* SEO & Service Areas Footer */}
      <div className="mt-14 border-t border-line pt-8">
        <h3 className="text-eyebrow uppercase text-muted">
          Areas we&apos;ve installed in
        </h3>
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
