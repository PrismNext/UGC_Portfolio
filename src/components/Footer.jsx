import React from 'react';
import { ArrowUp } from 'lucide-react';
import { creatorConfig } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 sm:py-20 bg-gradient-to-b from-[#FCF9FA] to-pink-50/30 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-pink-100">
          
          {/* Brand Identity */}
          <div className="space-y-1">
            <a href="#" className="font-serif text-3xl tracking-[0.2em] font-medium text-[#1E1B1E] hover:text-pink-600 transition-colors">
              GEET
            </a>
            <p className="text-xs uppercase tracking-[0.2em] text-pink-700/80 font-sans font-semibold">
              {creatorConfig.role}
            </p>
          </div>

          {/* Direct Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.16em] font-medium text-[#6B636D]">
            <a
              href={creatorConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-colors"
            >
              Instagram
            </a>
            <a
              href={`mailto:${creatorConfig.emailPlaceholder}`}
              className="hover:text-pink-600 transition-colors"
            >
              Email
            </a>
            <a
              href="#work"
              className="hover:text-pink-600 transition-colors"
            >
              Selected Work
            </a>
            <a
              href="#services"
              className="hover:text-pink-600 transition-colors"
            >
              Services
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#6B636D] hover:text-pink-600 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-pink-200 flex items-center justify-center group-hover:border-pink-500 group-hover:bg-pink-50 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-pink-500" />
            </div>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pink-900/60">
          <p>© 2026 Geet. All rights reserved.</p>
          <p className="font-light">High-Conversion Faceless Short-Form Content for Modern Beauty & Lifestyle Brands.</p>
        </div>

      </div>
    </footer>
  );
}
