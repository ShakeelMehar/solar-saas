export const Services = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12 text-left">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-[11px] font-bold tracking-widest text-brand-green-dark font-mono uppercase">Core Expertise</span>
        <h1 className="text-3xl md:text-4xl font-medium text-ink tracking-tight uppercase">OUR SERVICES</h1>
        <p className="text-sm text-slate">Premium solar solutions designed and engineered for long-term reliability in Pakistan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Service 1 */}
        <div className="bg-canvas p-8 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="bg-accent-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase inline-block">Liaison</span>
            <h2 className="text-xl font-bold text-ink uppercase">1. NET METERING SETUP</h2>
            <p className="text-sm text-slate leading-relaxed">
              We manage the full application process with your regional distribution company (LESCO, K-Electric, IESCO) to activate bidirectional power generation.
            </p>
          </div>
          <div className="pt-4 border-t border-hairline-soft">
            <a href="#contact" className="text-brand-green-dark hover:underline text-xs font-semibold uppercase tracking-wider font-mono">Inquire Setup &rarr;</a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-canvas p-8 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="bg-accent-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase inline-block">Engineering</span>
            <h2 className="text-xl font-bold text-ink uppercase">2. STRUCTURAL DESIGN</h2>
            <p className="text-sm text-slate leading-relaxed">
              Custom metal structures constructed to resist heavy winds and environmental decay, guaranteeing physical protection for your panels.
            </p>
          </div>
          <div className="pt-4 border-t border-hairline-soft">
            <a href="#contact" className="text-brand-green-dark hover:underline text-xs font-semibold uppercase tracking-wider font-mono">Inquire Structural &rarr;</a>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-canvas p-8 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="bg-accent-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase inline-block">Storage</span>
            <h2 className="text-xl font-bold text-ink uppercase">3. HYBRID ACCUMULATION</h2>
            <p className="text-sm text-slate leading-relaxed">
              High performance smart battery setups for absolute uninterrupted load shedding backup, running air conditioners seamlessly.
            </p>
          </div>
          <div className="pt-4 border-t border-hairline-soft">
            <a href="#contact" className="text-brand-green-dark hover:underline text-xs font-semibold uppercase tracking-wider font-mono">Inquire Hybrid &rarr;</a>
          </div>
        </div>

      </div>
    </div>
  );
};
