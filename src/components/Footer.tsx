import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-teal-deep text-on-dark-muted font-sans border-t border-hairline-dark">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Information */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-brand-teal-mid flex items-center justify-center text-brand-green border border-brand-teal-mid">
              <Sun className="w-5 h-5 text-brand-green animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white tracking-tight text-base leading-none uppercase">
                Solar Solutions
              </span>
              <span className="text-[10px] text-brand-green font-semibold tracking-widest leading-none mt-1">
                PAKISTAN
              </span>
            </div>
          </Link>
          <p className="text-sm text-on-dark-muted mt-4 leading-relaxed">
            Premium solar technology company providing engineering competence, customized grids, and cost-effective solar solutions across Pakistan.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-brand-teal hover:bg-brand-green hover:text-brand-teal-deep flex items-center justify-center text-on-dark-muted transition-all duration-300" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-brand-teal hover:bg-brand-green hover:text-brand-teal-deep flex items-center justify-center text-on-dark-muted transition-all duration-300" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-brand-teal hover:bg-brand-green hover:text-brand-teal-deep flex items-center justify-center text-on-dark-muted transition-all duration-300" aria-label="Instagram">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-brand-teal hover:bg-brand-green hover:text-brand-teal-deep flex items-center justify-center text-on-dark-muted transition-all duration-300" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-all">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-all">Our Services</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition-all">Success Stories</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-all">Request a Quote</Link>
            </li>
          </ul>
        </div>

        {/* Pakistan DISCO Targets */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">DISCO Net Metering</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              LESCO (Lahore Region)
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              K-Electric (Karachi Region)
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              IESCO (Islamabad/Pindi)
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              FESCO & MEPCO Systems
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Contact Details</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-green mt-0.5 shrink-0" />
              <span>Lahore Address Section, Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-green shrink-0" />
              <a href="tel:+92123456789" className="hover:text-white transition-colors">+92 123 456 789</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-green shrink-0" />
              <a href="mailto:email@example.com" className="hover:text-white transition-colors">email@example.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-hairline-dark bg-canvas-dark py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Solar Solutions Pakistan. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <span className="text-brand-green font-semibold">Clean energy for Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
