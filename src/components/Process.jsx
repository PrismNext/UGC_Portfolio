import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';
import { processSteps } from '../data/portfolioData';

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 lg:py-32 bg-[#FCF9FA] border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-[11px] font-semibold tracking-[0.2em] uppercase text-pink-700">
            <Sparkles className="w-3 h-3 text-pink-500" />
            <span>WORKFLOW & TIMELINE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1E1B1E] font-normal uppercase tracking-tight">
            MY CONTENT PROCESS
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B636D] font-light">
            A seamless, stress-free production flow from initial product arrival to final ad delivery.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle horizontal connecting bar on desktop */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-14 left-12 right-12 h-[2px] bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 -z-0"
          />

          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative z-10 flex flex-col bg-white p-7 rounded-3xl border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-lg hover:shadow-pink-300/15"
            >
              {/* Step Number Circle */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 border border-pink-200 flex items-center justify-center font-serif italic text-lg text-pink-700 mb-6 shadow-xs font-semibold">
                {step.step}
              </div>

              {/* Step Title */}
              <h3 className="font-serif text-2xl text-[#1E1B1E] font-medium tracking-wide uppercase mb-1">
                {step.title}
              </h3>
              
              <span className="text-[11px] uppercase tracking-wider text-pink-600 font-semibold mb-3">
                {step.subtitle}
              </span>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-[#6B636D] leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Fast Turnaround Assurance Note */}
        <div className="mt-14 p-5 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 border border-pink-200 max-w-xl mx-auto text-center shadow-xs">
          <p className="text-xs text-pink-950 font-medium tracking-wide flex items-center justify-center gap-1.5">
            <Zap className="w-4 h-4 text-pink-500 fill-current" />
            <span>Typical turnaround: <span className="font-bold text-pink-600">3–5 business days</span> after product delivery. Includes 1 round of revisions.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
