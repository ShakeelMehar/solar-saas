import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Bhatti Solar System',
  description:
    'Track record of successful industrial, agricultural, and residential solar setups across Pakistan.',
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <span className="font-mono text-[11px] font-bold tracking-widest text-brand-green-dark uppercase">Case Studies</span>
        <h1 className="text-3xl font-medium tracking-tight text-ink uppercase md:text-4xl">SUCCESS STORIES</h1>
        <p className="text-sm text-slate">Track record of successful industrial, agricultural, and residential custom setups across Pakistan.</p>
      </div>

      <div className="mx-auto max-w-4xl space-y-6 rounded-lg border border-hairline bg-canvas p-8 py-20 text-center shadow-[0_1px_2px_rgba(0,30,43,0.04)] md:p-12">
        <h2 className="text-xl font-bold text-ink uppercase">Our Full Portfolio</h2>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-slate">
          Explore our complete catalog of 150+ operational solar installations. We audit savings and publish performance logs on an annual schedule.
        </p>
        <div>
          <span className="rounded-full border border-brand-green-soft bg-brand-green-soft px-4 py-2 font-mono text-xs font-bold tracking-wider text-brand-green-dark uppercase">
            100% Client Satisfaction Rate
          </span>
        </div>
      </div>
    </div>
  );
}
