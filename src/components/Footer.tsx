import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import horizontalLogo from '../assets/horizontal-logo.jpeg';

const WHATSAPP_URL =
  'https://wa.me/923044854300?text=' +
  encodeURIComponent(
    'As-salamu alaykum, I am visiting the Bhatti Solar System website and would like to request a free solar quote for my home/business in Lahore.'
  );
const PHONE_TEL = 'tel:+923044854300';
const PHONE_DISPLAY = '+92 304 4854300';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-teal-deep text-on-dark-muted font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-5">
          <Link to="/" className="inline-block rounded-lg bg-white p-2" aria-label="Bhatti Solar System home">
            <img
              src={horizontalLogo}
              alt="Bhatti Solar System"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-on-dark-muted leading-relaxed max-w-xs">
            Solar installation and equipment for homes and businesses across Lahore — panels, inverters, batteries, and LESCO net metering under one roof.
          </p>
          <div className="flex items-center gap-2.5 pt-1">
            <a href="#" className="w-9 h-9 rounded-full bg-brand-teal flex items-center justify-center text-on-dark-muted hover:text-brand-green transition-colors duration-150" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-brand-teal flex items-center justify-center text-on-dark-muted hover:text-brand-green transition-colors duration-150" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-brand-teal flex items-center justify-center text-on-dark-muted hover:text-brand-green transition-colors duration-150" aria-label="Instagram">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-brand-teal flex items-center justify-center text-on-dark-muted hover:text-brand-green transition-colors duration-150" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-on-dark font-semibold text-sm mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="text-on-dark-muted hover:text-on-dark transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/services" className="text-on-dark-muted hover:text-on-dark transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-on-dark-muted hover:text-on-dark transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-on-dark font-semibold text-sm mb-5">DISCO Net Metering</h4>
          <ul className="space-y-2 text-sm text-on-dark-muted">
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              LESCO (Lahore Region)
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-on-dark font-semibold text-sm mb-5">Contact Details</h4>
          <ul className="space-y-3.5 text-sm text-on-dark-muted">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-green mt-0.5 shrink-0" />
              <span>Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-green shrink-0" />
              <a href={PHONE_TEL} className="hover:text-on-dark transition-colors">{PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-green font-medium hover:text-brand-green-hover transition-colors">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline-dark py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-dark-muted">
          <p>© {currentYear} Bhatti Solar System. All Rights Reserved.</p>
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-on-dark transition-colors">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-on-dark transition-colors">Terms of Service</a>
            <span aria-hidden="true">·</span>
            <span className="text-brand-green font-medium">Clean energy for Lahore</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
