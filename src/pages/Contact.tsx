import { Phone, MapPin } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/923044854300?text=' +
  encodeURIComponent(
    'As-salamu alaykum, I am visiting the Bhatti Solar System website and would like to request a free solar quote for my home/business in Lahore.'
  );
const PHONE_TEL = 'tel:+923044854300';
const PHONE_DISPLAY = '+92 304 4854300';

export const Contact = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12 text-left">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-[11px] font-semibold tracking-[1px] text-brand-green-dark uppercase">Consultation</span>
        <h1 className="text-3xl md:text-4xl font-medium text-ink tracking-[-0.02em]">Request a quote</h1>
        <p className="text-sm text-slate">Call or WhatsApp us for a free site survey and solar quote in Lahore.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-canvas p-8 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] space-y-6">
            <h2 className="text-lg font-bold text-ink uppercase tracking-wide">Get In Touch</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-green-dark mt-0.5" />
                <div>
                  <h4 className="font-bold text-ink">Headquarters</h4>
                  <p className="text-slate">Lahore, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand-green-dark mt-0.5" />
                <div>
                  <h4 className="font-bold text-ink">Call / WhatsApp</h4>
                  <p className="text-slate">
                    <a href={PHONE_TEL} className="hover:text-brand-green-dark font-medium">{PHONE_DISPLAY}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-canvas p-8 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-ink uppercase tracking-wide">Fastest Way to Reach Us</h2>
            <p className="text-sm text-slate leading-relaxed">
              Message us on WhatsApp for a free quote. We'll arrange a free site survey and walk you through LESCO net metering options for your home or business.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-brand-green hover:bg-brand-green-hover text-ink py-2.5 px-[22px] rounded-full font-semibold transition-colors duration-150 flex items-center justify-center text-sm text-center"
            >
              Get a Free Quote on WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              className="flex-1 bg-transparent border border-hairline-strong text-ink py-2.5 px-[22px] rounded-full font-semibold transition-colors duration-150 hover:bg-surface-soft flex items-center justify-center text-sm text-center"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
