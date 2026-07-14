import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed top-0 left-0 w-full z-45 flex flex-col">
      {/* Main Top Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${scrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-hairline py-3 shadow-[0_1px_2px_rgba(0,30,43,0.04)]'
          : 'bg-canvas border-b border-hairline py-4'
        }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group font-sans">
            <div className="w-10 h-10 rounded-full bg-brand-green-soft flex items-center justify-center text-brand-green-dark border border-brand-green-soft group-hover:bg-brand-green/20 transition-colors">
              <Sun className="w-5.5 h-5.5 text-brand-green-dark" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-ink tracking-tight text-lg leading-none uppercase">
                Solar Solutions
              </span>
              <span className="text-[10px] text-brand-green-dark font-bold tracking-widest leading-none mt-1">
                PAKISTAN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-colors ${isActive(link.path)
                    ? 'text-brand-green-dark font-bold'
                    : 'text-slate hover:text-ink font-medium'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ink hover:text-brand-green-dark transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-canvas border-b border-hairline shadow-lg py-6 px-6 space-y-4 animate-fade-in-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold py-2 transition-colors ${isActive(link.path)
                      ? 'text-brand-green-dark pl-2 border-l-2 border-brand-green-dark font-bold'
                      : 'text-slate hover:text-ink'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
