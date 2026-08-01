import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
import {
  BUSINESS_NAME,
  WHATSAPP_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  OFFICE_ADDRESS,
  FOUNDING_YEAR,
  SERVICE_AREAS,
} from '@/lib/constants';
import { WhatsappIcon, Eyebrow } from '@/components/ui';
import horizontalLogo from '@/assets/Bhatti Solar System Logo/Horizontal.svg';

/**
 * NAP block. Name, address and phone here must match the LocalBusiness schema
 * and the Google Business Profile character for character — they all read from
 * the same constants for exactly that reason.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-canvas-tint text-body">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,4fr)_minmax(0,5fr)] lg:gap-16">
        <div>
          <Link href="/" aria-label={`${BUSINESS_NAME} home`}>
            <Image
              src={horizontalLogo}
              alt={BUSINESS_NAME}
              className="h-11 w-auto object-contain"
              height={44}
            />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-pretty text-body">
            Solar system installation across Lahore — homes, businesses &amp;
            farms.
          </p>
          {FOUNDING_YEAR ? (
            <p className="mt-3 text-sm text-muted">
              Serving Lahore since {FOUNDING_YEAR}.
            </p>
          ) : null}
        </div>

        <div>
          <Eyebrow>Contact</Eyebrow>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-accent-ink"
                aria-hidden="true"
              />
              <address className="leading-relaxed not-italic">
                <span className="block font-semibold text-ink">
                  {BUSINESS_NAME}
                </span>
                {OFFICE_ADDRESS ? <span>{OFFICE_ADDRESS}, </span> : null}
                Lahore, Punjab, Pakistan
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Phone
                size={17}
                className="shrink-0 text-accent-ink"
                aria-hidden="true"
              />
              <a
                href={PHONE_TEL}
                className="tnum font-medium text-ink transition-colors hover:text-accent-ink"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <WhatsappIcon size={17} className="shrink-0 text-accent-ink" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent-ink transition-colors hover:text-ink"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <Eyebrow>Service areas</Eyebrow>
          <p className="mt-5 text-sm leading-list text-pretty text-body">
            {SERVICE_AREAS.join(' · ')} · and surrounding areas across Lahore.
          </p>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <p className="mx-auto max-w-6xl px-6 text-xs text-muted md:px-10">
          © {currentYear} {BUSINESS_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
