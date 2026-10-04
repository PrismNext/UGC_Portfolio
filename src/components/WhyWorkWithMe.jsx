import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { whyWorkWithMe } from '../data/portfolioData';

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#FCF9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-[11px] font-semibold tracking-[0.2em] uppercase text-pink-700">
              <Sparkles className="w-3 h-3 text-pink-500" />
              <span>THE CREATIVE ADVANTAGE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-[#1E1B1E] font-normal uppercase">
              AUTHENTIC CONTENT.{' '}
              <span className="italic block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                INTENTIONAL
              </span>{' '}
              STORYTELLING.
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-pink-400 to-purple-400 my-6 rounded-full"></div>
            <p className="font-sans text-sm sm:text-base text-[#6B636D] leading-relaxed font-light max-w-md">
              Modern consumers ignore polished studio commercials. They crave genuine, lived-in experiences that feel like advice from a trusted friend holding their favorite beauty essential.
            </p>
          </div>

          {/* Right Column: 4 Editorial Asymmetric Benefits */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {whyWorkWithMe.map((benefit, idx) => (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 sm:p-10 rounded-3xl border-2 transition-all duration-300 hover:shadow-lg ${
                  idx % 2 === 0
                    ? 'bg-gradient-to-br from-pink-50/70 to-white border-pink-200 hover:border-pink-300 ml-0 lg:mr-8 hover:shadow-pink-300/20'
                    : 'bg-gradient-to-br from-purple-50/70 to-white border-purple-200 hover:border-purple-300 ml-0 lg:ml-8 hover:shadow-purple-300/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
                  {/* Big Editorial Number */}
                  <span className={`font-serif italic text-4xl sm:text-5xl font-normal select-none ${
                    idx % 2 === 0 ? 'text-pink-300' : 'text-purple-300'
                  }`}>
                    {benefit.number}
                  </span>
                  
                  <div className="space-y-2 flex-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1E1B1E] font-medium">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#6B636D] font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
