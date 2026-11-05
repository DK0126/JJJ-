import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export type NavSectionId = 'home' | 'about' | 'services' | 'gallery';

interface NavbarProps {
  activeSection: NavSectionId;
  onNavigate: (section: NavSectionId) => void;
  onTriggerQuote: () => void;
}

const NAV_ITEMS: { id: NavSectionId; label: string; href: string }[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onTriggerQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: NavSectionId
  ) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#081226]/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3'
          : 'bg-gradient-to-b from-slate-950/85 via-slate-900/65 to-slate-900/30 backdrop-blur-[2px] border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo Area (Left) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="JJJ Packers and Movers Chennai and Guduvancheri Home"
          className="group flex flex-col items-start shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
        >
          <div className="flex items-center leading-none">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white">
              J<span className="text-orange-500">JJ</span>
            </span>
            {/* Triple Chevron Arrows next to JJJ */}
            <svg
              className="w-9 h-7 sm:w-11 sm:h-8 ml-1 text-orange-500 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 48 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 4L16 16L4 28"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 4L29 16L17 28"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 4L42 16L30 28"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-85"
              />
            </svg>
          </div>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.12em] text-white uppercase mt-0.5 whitespace-nowrap">
            PACKERS AND MOVERS
          </span>
          <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.14em] text-slate-300 uppercase whitespace-nowrap">
            SAFE • SWIFT • STRESS-FREE MOVING
          </span>
        </a>

        {/* Zone 2: Navigation Links (Center) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-10"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative py-1.5 text-sm lg:text-base font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded ${
                  isActive ? 'text-white font-semibold' : 'text-slate-200 hover:text-white'
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2.5px] after:bg-orange-500 after:transition-all after:duration-200 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: CTA Button (Right) + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onTriggerQuote}
            className="hidden md:inline-flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs lg:text-sm tracking-wide uppercase px-5 lg:px-6 py-3 rounded-md shadow-lg shadow-orange-600/25 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            GET A FREE QUOTE
          </button>

          {/* Hamburger Button for Small Screens */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden bg-[#0A162C]/98 backdrop-blur-lg border-b border-slate-800 px-4 pt-3 pb-5 shadow-2xl"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-800/80 text-white border-b-2 border-orange-500'
                      : 'text-slate-200 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onTriggerQuote();
              }}
              className="w-full py-3 px-4 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm uppercase tracking-wide rounded-md shadow-md transition-transform active:scale-98"
            >
              GET A FREE QUOTE
            </button>
            <a
              href="tel:+919840082100"
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-200 hover:text-orange-400 transition-colors tabular-nums"
            >
              <PhoneCall className="w-4 h-4 text-orange-500" />
              <span>Call Us Now: +91 98400 82100</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
