import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

export default function About() {
  const highlights = [
    "100% Faceless POV & Aesthetic Hands",
    "Natural Daylight & Macro 4K Footage",
    "Tailored Hooks Tested for Retention",
    "Clean Sound & Vibrant Beauty Props",
  ];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-[#FCF9FA] via-pink-50/20 to-[#FCF9FA] border-t border-pink-100 relative overflow-hidden">
      {/* Ambient pink/purple glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-pink-100/40 blur-[100px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Aesthetic Faceless Creator Studio Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(236,72,153,0.12)] border-2 border-pink-200 bg-pink-50 aspect-[4/3]">
              <img
                src="/media/about_studio.jpg"
                alt="Aesthetic faceless UGC creator workspace and filming setup"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-md shadow-sm">
                  Creator Studio Setup
                </span>
                <span className="text-[11px] font-sans font-medium tracking-wider text-pink-100">
                  Faceless Visual POV
                </span>
              </div>
            </div>

            {/* Decorative Corner Offset Element */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-3xl border-2 border-pink-300/40 -z-10 pointer-events-none hidden sm:block"
            />
          </motion.div>

          {/* Right Column: Editorial Bio & Brand Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-[11px] font-semibold tracking-[0.2em] uppercase text-pink-700">
                <Sparkles className="w-3 h-3 text-pink-500" />
                <span>BEHIND THE LENS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1E1B1E] font-normal uppercase tracking-tight">
                HI, I'M GEETANJALI.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#6B636D] font-light leading-relaxed">
              <p>
                I'm a faceless UGC creator focused on creating clean, natural and engaging short-form content for brands.
              </p>
              <p className="font-normal text-[#1E1B1E]">
                My goal is simple — make products look good without making the content feel like a traditional advertisement.
              </p>
              <p className="text-sm sm:text-base text-[#6B636D]">
                Whether it's the dewy glass skin texture of a Dot & Key serum, a satisfying swatch for MARS, or the daily glow routine for Hyphen, I create vibrant, scroll-stopping stories that captivate viewers and turn followers into buyers.
              </p>
            </div>

            {/* Key Creator Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-[#2D272E] font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-pink-600 border-b-2 border-pink-400 pb-1 hover:text-pink-800 hover:border-pink-600 transition-colors"
              >
                <span>Discuss a campaign for your brand</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
