import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: '#resume' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Basic scroll spy
      const sections = ['home', 'work', 'resume'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActive(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/50' : ''
        }`}
      >
        {/* Logo */}
        <a href="#home" className="group relative w-9 h-9 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110">
          <div className="absolute inset-0 accent-gradient transition-transform duration-700 group-hover:rotate-180" />
          <div className="absolute inset-[1px] bg-bg rounded-full flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">JA</span>
          </div>
        </a>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-2" />

        {/* Links */}
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                active === link.label
                  ? 'text-text-primary bg-stroke/50'
                  : 'text-muted hover:text-text-primary hover:bg-stroke/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-2" />

        {/* Say Hi Button */}
        <a
          href="mailto:hello@michaelsmith.com"
          className="group relative ml-1 sm:ml-0 inline-flex items-center justify-center rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 transition-colors hover:text-text-primary text-text-primary/90"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute inset-0 bg-surface rounded-full backdrop-blur-md" />
          <span className="relative flex items-center gap-1 z-10">
            Say hi <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </div>
  );
};
