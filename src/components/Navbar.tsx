import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import horizontalLogo from '../assets/horizontal-logo.jpeg';

const WHATSAPP_URL =
  'https://wa.me/923044854300?text=' +
  encodeURIComponent(
    'As-salamu alaykum, I am visiting the Bhatti Solar System website and would like to request a free solar quote for my home/business in Lahore.'
  );

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const navBg = scrolled
    ? 'bg-canvas/95 backdrop-blur-md border-b border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)]'
    : 'bg-canvas border-b border-hairline';

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col">
      <nav className={`w-full transition-all duration-200 py-3 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0 group" aria-label="Bhatti Solar System home">
            <img
              src={horizontalLogo}
              alt="Bhatti Solar System"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
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
              className="bg-brand-green text-ink text-sm font-semibold py-2.5 px-[22px] rounded-full transition-colors duration-150 hover:bg-brand-green-hover"
            >
              Get a Free Quote
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ink hover:text-brand-green-dark transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-canvas border-t border-hairline shadow-[0_4px_12px_rgba(0,30,43,0.08)] py-5 px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-3 px-3 rounded-md transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-green-dark bg-surface-feature'
                      : 'text-slate hover:text-ink hover:bg-surface-soft'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-3 bg-brand-green text-ink text-sm font-semibold py-2.5 px-[22px] rounded-full text-center"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
