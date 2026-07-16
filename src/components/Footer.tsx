import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY } from '@/lib/constants';
import horizontalLogo from '@/assets/horizontal-logo.jpeg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-surface font-sans text-slate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4 md:px-12">
        <div className="space-y-5">
          <Link href="/" className="inline-block" aria-label="Bhatti Solar System home">
            <Image
              src={horizontalLogo}
              alt="Bhatti Solar System"
              className="h-10 w-auto object-contain mix-blend-multiply"
              height={40}
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-slate">
            Solar installation and equipment for homes and businesses across Lahore — panels, inverters, batteries, and LESCO net metering under one roof.
          </p>
          <div className="flex items-center gap-2.5 pt-1">
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-canvas text-steel transition-colors duration-150 hover:border-brand-green-dark hover:text-brand-green-dark" aria-label="Facebook">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-canvas text-steel transition-colors duration-150 hover:border-brand-green-dark hover:text-brand-green-dark" aria-label="Twitter">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-canvas text-steel transition-colors duration-150 hover:border-brand-green-dark hover:text-brand-green-dark" aria-label="Instagram">
              <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-canvas text-steel transition-colors duration-150 hover:border-brand-green-dark hover:text-brand-green-dark" aria-label="LinkedIn">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold text-ink">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="text-slate transition-colors hover:text-ink">Home</Link>
            </li>
            <li>
              <Link href="/services" className="text-slate transition-colors hover:text-ink">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate transition-colors hover:text-ink">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold text-ink">DISCO Net Metering</h4>
          <ul className="space-y-2 text-sm text-slate">
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green-dark"></span>
              LESCO (Lahore Region)
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="mb-5 text-sm font-semibold text-ink">Contact Details</h4>
          <ul className="space-y-3.5 text-sm text-slate">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-green-dark" />
              <span>Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-brand-green-dark" />
              <a href={PHONE_TEL} className="transition-colors hover:text-ink">{PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-green-dark transition-colors hover:text-brand-green-mid">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-steel md:flex-row md:px-12">
          <p>© {currentYear} Bhatti Solar System. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-ink">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="transition-colors hover:text-ink">Terms of Service</a>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-brand-green-dark">Clean energy for Lahore</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
