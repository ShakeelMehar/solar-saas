import type { Metadata } from 'next';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services | Bhatti Solar System',
  description:
    'Net metering setup, full system install, and hybrid battery backup for homes and businesses across Lahore.',
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-20 text-left md:px-12">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <span className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Core expertise</span>
        <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink md:text-4xl">Our services</h1>
        <p className="text-sm text-slate">Installation and equipment for homes and businesses across Lahore — from site visit to LESCO net metering.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col justify-between space-y-4 rounded-lg border border-hairline bg-canvas p-8 shadow-[0_1px_2px_rgba(0,30,43,0.04)]">
          <div className="space-y-4">
            <span className="inline-block rounded-[4px] bg-accent-orange px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-white uppercase">Liaison</span>
            <h2 className="text-xl font-medium text-ink">1. Net metering setup</h2>
            <p className="text-sm leading-relaxed text-slate">
              We handle the full LESCO net metering process for you — paperwork and installation so you can offset your electricity bill.
            </p>
          </div>
          <div className="border-t border-hairline-soft pt-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-semibold tracking-wider text-brand-green-dark uppercase hover:underline">Get a Quote &rarr;</a>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-4 rounded-lg border border-hairline bg-canvas p-8 shadow-[0_1px_2px_rgba(0,30,43,0.04)]">
          <div className="space-y-4">
            <span className="inline-block rounded-[4px] bg-accent-purple px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-white uppercase">Installation</span>
            <h2 className="text-xl font-medium text-ink">2. Full system install</h2>
            <p className="text-sm leading-relaxed text-slate">
              Quality panels and inverters, supplied and installed by our own team — material and installation included.
            </p>
          </div>
          <div className="border-t border-hairline-soft pt-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-semibold tracking-wider text-brand-green-dark uppercase hover:underline">Get a Quote &rarr;</a>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-4 rounded-lg border border-hairline bg-canvas p-8 shadow-[0_1px_2px_rgba(0,30,43,0.04)]">
          <div className="space-y-4">
            <span className="inline-block rounded-[4px] bg-accent-blue px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-white uppercase">Storage</span>
            <h2 className="text-xl font-medium text-ink">3. Hybrid battery backup</h2>
            <p className="text-sm leading-relaxed text-slate">
              Battery-backed systems built for Lahore&apos;s grid — sized to keep power on during load shedding, including major appliances.
            </p>
          </div>
          <div className="border-t border-hairline-soft pt-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-semibold tracking-wider text-brand-green-dark uppercase hover:underline">Get a Quote &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
