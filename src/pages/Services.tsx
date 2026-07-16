const WHATSAPP_URL =
  'https://wa.me/923044854300?text=' +
  encodeURIComponent(
    'As-salamu alaykum, I am visiting the Bhatti Solar System website and would like to request a free solar quote for my home/business in Lahore.'
  );

export const Services = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12 text-left">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Core expertise</span>
        <h1 className="text-3xl md:text-4xl font-medium text-ink tracking-[-0.02em]">Our services</h1>
        <p className="text-sm text-slate">Installation and equipment for homes and businesses across Lahore — from site visit to LESCO net metering.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-canvas p-8 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="bg-accent-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase inline-block">Liaison</span>
            <h2 className="text-xl font-medium text-ink">1. Net metering setup</h2>
            <p className="text-sm text-slate leading-relaxed">
              We handle the full LESCO net metering process for you — paperwork and installation so you can offset your electricity bill.
            </p>
          </div>
          <div className="pt-4 border-t border-hairline-soft">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-green-dark hover:underline text-xs font-semibold uppercase tracking-wider font-mono">Get a Quote &rarr;</a>
          </div>
        </div>

        <div className="bg-canvas p-8 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="bg-accent-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase inline-block">Installation</span>
            <h2 className="text-xl font-medium text-ink">2. Full system install</h2>
            <p className="text-sm text-slate leading-relaxed">
              Quality panels and inverters, supplied and installed by our own team — material and installation included.
            </p>
          </div>
          <div className="pt-4 border-t border-hairline-soft">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-green-dark hover:underline text-xs font-semibold uppercase tracking-wider font-mono">Get a Quote &rarr;</a>
          </div>
        </div>

        <div className="bg-canvas p-8 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="bg-accent-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] font-mono tracking-wider uppercase inline-block">Storage</span>
            <h2 className="text-xl font-medium text-ink">3. Hybrid battery backup</h2>
            <p className="text-sm text-slate leading-relaxed">
              Battery-backed systems built for Lahore's grid — sized to keep power on during load shedding, including major appliances.
            </p>
          </div>
          <div className="pt-4 border-t border-hairline-soft">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-green-dark hover:underline text-xs font-semibold uppercase tracking-wider font-mono">Get a Quote &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
};
