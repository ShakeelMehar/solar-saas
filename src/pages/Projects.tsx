export const Projects = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-[11px] font-bold tracking-widest text-brand-green-dark font-mono uppercase">Case Studies</span>
        <h1 className="text-3xl md:text-4xl font-medium text-ink tracking-tight uppercase">SUCCESS STORIES</h1>
        <p className="text-sm text-slate">Track record of successful industrial, agricultural, and residential custom setups across Pakistan.</p>
      </div>

      <div className="bg-canvas p-8 md:p-12 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] text-center py-20 max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl font-bold text-ink uppercase">Our Full Portfolio</h2>
        <p className="text-sm text-slate max-w-md mx-auto leading-relaxed">
          Explore our complete catalog of 150+ operational solar installations. We audit savings and publish performance logs on an annual schedule.
        </p>
        <div>
          <span className="text-brand-green-dark font-bold text-xs tracking-wider uppercase bg-brand-green-soft px-4 py-2 rounded-full border border-brand-green-soft font-mono">
            100% Client Satisfaction Rate
          </span>
        </div>
      </div>
    </div>
  );
};
