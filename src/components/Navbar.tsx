'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';
import horizontalLogo from '@/assets/horizontal-logo.jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const navBg = scrolled
    ? 'bg-canvas/95 backdrop-blur-md border-b border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)]'
    : 'bg-canvas border-b border-hairline';

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full flex-col">
      <nav className={`w-full py-3 transition-all duration-200 ${navBg}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 md:px-12">
          <Link href="/" className="group flex shrink-0 items-center" aria-label="Bhatti Solar System home">
            <Image
              src={horizontalLogo}
              alt="Bhatti Solar System"
              className="h-9 w-auto object-contain mix-blend-multiply md:h-11"
              height={44}
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-150 ${
                  isActive(link.path)
                    ? 'text-brand-green-dark'
                    : 'text-slate hover:text-ink'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-green px-[22px] py-2.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-brand-green-hover"
            >
              Get a Free Quote
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-ink transition-colors hover:text-brand-green-dark md:hidden"
            aria-label="Toggle Menu"
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full border-t border-hairline bg-canvas px-6 py-5 shadow-[0_4px_12px_rgba(0,30,43,0.08)] md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`rounded-md px-3 py-3 text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-surface-feature text-brand-green-dark'
                      : 'text-slate hover:bg-surface-soft hover:text-ink'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-full bg-brand-green px-[22px] py-2.5 text-center text-sm font-semibold text-ink"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
