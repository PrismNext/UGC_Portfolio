import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FCF9FA]/90 backdrop-blur-md border-b border-pink-100/80 py-3.5 shadow-[0_4px_25px_rgba(236,72,153,0.06)]'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Geet Portfolio Home"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-medium text-[#1E1B1E] group-hover:text-pink-600 transition-colors duration-200">
              GEET
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 group-hover:scale-125 transition-transform"></span>
            <span className="hidden md:inline-block text-[10px] tracking-[0.25em] uppercase text-pink-700/70 font-sans font-semibold pl-1">
              UGC CREATOR
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-[13px] tracking-[0.16em] uppercase text-[#6B636D] hover:text-pink-600 transition-colors duration-200 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-200 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-102 active:scale-98"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm"
            >
              Collab
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#1E1B1E] hover:bg-pink-50 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-pink-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCF9FA]/95 backdrop-blur-xl border-b border-pink-100 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pb-4 border-b border-pink-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-[0.16em] uppercase text-[#2D272E] hover:text-pink-600 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-[0.14em] uppercase bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white shadow-md shadow-pink-500/20"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
