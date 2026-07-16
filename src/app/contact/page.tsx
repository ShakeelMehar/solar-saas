import type { Metadata } from 'next';
import { Phone, MapPin } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Bhatti Solar System',
  description:
    'Request a free solar quote and site survey in Lahore. Call or WhatsApp Bhatti Solar System.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-20 text-left md:px-12">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <span className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Consultation</span>
        <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink md:text-4xl">Request a quote</h1>
        <p className="text-sm text-slate">Call or WhatsApp us for a free site survey and solar quote in Lahore.</p>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-6 rounded-lg border border-hairline bg-canvas p-8 shadow-[0_1px_2px_rgba(0,30,43,0.04)]">
            <h2 className="text-lg font-bold tracking-wide text-ink uppercase">Get In Touch</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 text-brand-green-dark" />
                <div>
                  <h4 className="font-bold text-ink">Headquarters</h4>
                  <p className="text-slate">Lahore, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 text-brand-green-dark" />
                <div>
                  <h4 className="font-bold text-ink">Call / WhatsApp</h4>
                  <p className="text-slate">
                    <a href={PHONE_TEL} className="font-medium hover:text-brand-green-dark">{PHONE_DISPLAY}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-lg border border-hairline bg-canvas p-8 shadow-[0_1px_2px_rgba(0,30,43,0.04)] lg:col-span-7">
          <div className="space-y-2">
            <h2 className="text-lg font-bold tracking-wide text-ink uppercase">Fastest Way to Reach Us</h2>
            <p className="text-sm leading-relaxed text-slate">
              Message us on WhatsApp for a free quote. We&apos;ll arrange a free site survey and walk you through LESCO net metering options for your home or business.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center rounded-full bg-brand-green px-[22px] py-2.5 text-center text-sm font-semibold text-ink transition-colors duration-150 hover:bg-brand-green-hover"
            >
              Get a Free Quote on WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              className="flex flex-1 items-center justify-center rounded-full border border-hairline-strong bg-transparent px-[22px] py-2.5 text-center text-sm font-semibold text-ink transition-colors duration-150 hover:bg-surface-soft"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
