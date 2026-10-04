import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { trustHighlights, trustStatement } from '../data/portfolioData';

export default function TrustBar() {
  return (
    <section className="relative py-12 sm:py-16 border-y border-pink-100 bg-gradient-to-r from-pink-50/50 via-purple-50/40 to-pink-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal Editorial Keyword Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pb-8 text-center">
          {trustHighlights.map((item, idx) => (
            <React.Fragment key={item}>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-pink-950/80 hover:text-pink-600 transition-colors">
                {item}
              </span>
              {idx !== trustHighlights.length - 1 && (
                <span className="text-pink-300 select-none text-xs sm:text-sm">✦</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Short Editorial Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#1E1B1E] leading-relaxed font-normal">
            “{trustStatement}”
          </p>
        </motion.div>

      </div>
    </section>
  );
}
