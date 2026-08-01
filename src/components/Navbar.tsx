'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, BUSINESS_NAME } from '@/lib/constants';
import { WhatsappIcon } from '@/components/ui';
import horizontalLogo from '@/assets/Bhatti Solar System Logo/Horizontal.svg';

/** Single page, so nav links are in-page anchors. */
const navLinks = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'System sizes', href: '#sizes' },
  { name: 'Net metering', href: '#net-metering' },
  { name: 'Projects', href: '#projects' },
  { name: 'FAQ', href: '#faq' },
];

/* Fired well past the fold edge rather than at the first pixel: a 1px
   threshold flips back and forth on trackpad rubber-banding, which reads as
   a flicker. 80px is past any accidental scroll. */
const SOLID_AT = 80;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  /* The bar is only allowed to go transparent where a dark hero is actually
     sitting behind it. Anywhere else — the 404, anything added later — white
     type on a white page would simply vanish. */
  const overHero = usePathname() === '/';

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setIsScrolled(window.scrollY > SOLID_AT);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  /* The open mobile menu always forces the solid bar. Left transparent, the
     dropped links would land on top of the hero photograph. */
  const solid = !overHero || isScrolled || isOpen;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow] duration-200 ease-out ${
        solid
          ? 'bg-canvas/92 shadow-bar backdrop-blur-md'
          : 'bg-transparent shadow-none'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:px-10"
      >
        {/* Two passes of the same file, cross-faded: the full-colour lockup for
            the solid bar, and a knocked-out white one for the hero. Toggling
            the filter on a single node would snap while the bar behind it is
            still fading. Same src both times, so it is one download. */}
        <Link
          href="/"
          className="relative flex shrink-0 items-center"
          aria-label={`${BUSINESS_NAME} home`}
        >
          <Image
            src={horizontalLogo}
            alt={BUSINESS_NAME}
            className={`h-9 w-auto object-contain transition-opacity duration-200 ease-out md:h-10 ${
              solid ? 'opacity-100' : 'opacity-0'
            }`}
            height={40}
            priority
          />
          <Image
            src={horizontalLogo}
            alt=""
            aria-hidden="true"
            className={`absolute inset-y-0 left-0 h-9 w-auto object-contain object-left brightness-0 invert transition-opacity duration-200 ease-out md:h-10 ${
              solid ? 'opacity-0' : 'opacity-100'
            }`}
            height={40}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  solid
                    ? 'text-body hover:text-ink'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Call + WhatsApp stay visible at every breakpoint. */}
        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            aria-label={`Call ${BUSINESS_NAME}`}
            className={`flex h-11 w-11 items-center justify-center rounded-pill border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
              solid
                ? 'border-line-strong text-ink hover:border-ink hover:bg-canvas-tint focus-visible:outline-brand'
                : 'border-white/35 text-white hover:border-white/60 hover:bg-white/10 focus-visible:outline-white'
            }`}
          >
            <Phone size={17} aria-hidden="true" />
          </a>

          {/* Amber carries itself against the hero photograph and against the
              white bar alike, so the one solid CTA in the header never has to
              change colour as you scroll. */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 rounded-pill bg-accent px-4 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-accent-hover active:bg-accent-press focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-5"
          >
            <WhatsappIcon size={16} />
            <span className="hidden sm:inline">Free survey</span>
            <span className="sm:hidden">Chat</span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className={`flex h-11 w-11 items-center justify-center rounded-pill transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden ${
              solid
                ? 'text-ink focus-visible:outline-brand'
                : 'text-white focus-visible:outline-white'
            }`}
          >
            {isOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <ul
          id="mobile-nav"
          className="border-t border-line bg-canvas px-6 py-2 lg:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-line last:border-b-0">
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3.5 text-base font-medium text-ink transition-colors hover:text-brand-ink"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
