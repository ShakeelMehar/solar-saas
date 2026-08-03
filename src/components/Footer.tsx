'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MapPin,
  Clock,
  ArrowUp,
  ShieldCheck,
  Zap,
  ChevronRight,
} from 'lucide-react';
import {
  BUSINESS_NAME,
  WHATSAPP_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  OFFICE_ADDRESS,
  FOUNDING_YEAR,
  SERVICE_AREAS,
  WARRANTY_PHRASE,
} from '@/lib/constants';
import { WhatsappIcon, Eyebrow } from '@/components/ui';
import horizontalLogo from '@/assets/Bhatti Solar System Logo/Horizontal.svg';

const QUICK_LINKS = [
  { name: 'Solar Solutions', href: '#solutions' },
  { name: 'System Sizes & Pricing', href: '#sizes' },
  { name: 'Net Metering Guide', href: '#net-metering' },
  { name: 'Recent Projects', href: '#projects' },
  { name: 'Frequently Asked Questions', href: '#faq' },
  { name: 'Free Site Survey', href: '#contact' },
];

/**
 * NAP block. Name, address and phone here must match the LocalBusiness schema
 * and the Google Business Profile character for character — they all read from
 * the same constants for exactly that reason.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-ink text-inverse-muted">
      {/* Primary Footer Section */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Trust Badges (4 cols) */}
          <div className="flex flex-col space-y-6 lg:col-span-4">
            <Link href="/" aria-label={`${BUSINESS_NAME} home`}>
              <Image
                src={horizontalLogo}
                alt={BUSINESS_NAME}
                className="h-10 w-auto object-contain brightness-0 invert"
                height={40}
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-pretty text-inverse-muted">
              Tier-1 Solar system installation across Lahore — powering homes,
              businesses &amp; agricultural farms with reliable clean energy.
            </p>

            {/* Trust Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-chip border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90">
                <ShieldCheck size={14} className="text-brand-on-ink" />
                {WARRANTY_PHRASE}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-chip border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90">
                <Zap size={14} className="text-accent" />
                Tier-1 Equipment
              </span>
            </div>

            {FOUNDING_YEAR ? (
              <p className="text-xs text-inverse-muted/80">
                Serving Lahore &amp; Punjab region since {FOUNDING_YEAR}.
              </p>
            ) : null}
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="space-y-4 lg:col-span-3">
            <Eyebrow onDark>Quick Links</Eyebrow>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-inverse-muted transition-colors duration-150 hover:text-white"
                  >
                    <ChevronRight
                      size={14}
                      className="text-brand-on-ink opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Business NAP (5 cols) */}
          <div className="space-y-4 lg:col-span-5">
            <Eyebrow onDark>Contact &amp; Location</Eyebrow>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-on-ink"
                  aria-hidden="true"
                />
                <address className="leading-relaxed not-italic">
                  <span className="block font-semibold text-white">
                    {BUSINESS_NAME}
                  </span>
                  {OFFICE_ADDRESS ? (
                    <span className="text-inverse-muted">{OFFICE_ADDRESS}, </span>
                  ) : null}
                  <span className="text-inverse-muted">Lahore, Punjab, Pakistan</span>
                </address>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-brand-on-ink"
                  aria-hidden="true"
                />
                <a
                  href={PHONE_TEL}
                  className="tnum font-medium text-white transition-colors duration-150 hover:text-brand-on-ink"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <WhatsappIcon size={18} className="shrink-0 text-brand-on-ink" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-on-ink transition-colors duration-150 hover:text-white"
                >
                  Chat on WhatsApp
                </a>
              </li>

              <li className="flex items-center gap-3 text-xs text-inverse-muted/80">
                <Clock size={16} className="shrink-0 text-brand-on-ink" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>

            {/* Service Areas Section */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Eyebrow onDark>Service Areas in Lahore</Eyebrow>
              <div className="flex flex-wrap gap-1.5">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="inline-block rounded-pill border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 transition-colors hover:border-brand-on-ink/40 hover:bg-brand-on-ink/10 hover:text-brand-on-ink"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-xs text-inverse-muted/80">
                &amp; surrounding areas across Lahore.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-inverse-muted/80 sm:flex-row md:px-10">
          <p>© {currentYear} {BUSINESS_NAME}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-medium text-inverse-muted transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:underline cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="text-brand-on-ink" />
          </button>
        </div>
      </div>
    </footer>
  );
}
