import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CollaborationCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#FCF9FA] border-t border-pink-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="p-10 sm:p-14 md:p-16 rounded-[36px] bg-gradient-to-br from-pink-100/90 via-purple-50/80 to-pink-50/90 border-2 border-pink-200 text-center space-y-6 shadow-xl shadow-pink-300/20 relative overflow-hidden"
        >
          {/* Ambient light streak */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-80 h-80 rounded-full bg-pink-200/40 blur-[80px] pointer-events-none -z-0"
          />

          <span className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-pink-200 text-[11px] font-semibold tracking-[0.25em] uppercase text-pink-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>OPEN FOR PARTNERSHIPS</span>
          </span>

          <h2 className="relative z-10 font-serif text-3xl sm:text-5xl md:text-6xl text-[#1E1B1E] font-normal leading-tight uppercase">
            LET'S CREATE SOMETHING{' '}
            <span className="italic block font-serif bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent sm:inline">
              PEOPLE WANT
            </span>{' '}
            TO WATCH.
          </h2>

          <p className="relative z-10 font-sans text-base sm:text-lg text-[#6B636D] font-light max-w-2xl mx-auto leading-relaxed">
            Open to UGC collaborations, gifted campaigns, paid campaigns, product launches and long-term brand partnerships.
          </p>

          <div className="relative z-10 pt-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>START A COLLABORATION</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
