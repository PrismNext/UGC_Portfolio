import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Play, Sparkles, Heart } from 'lucide-react';
import { creatorConfig } from '../data/portfolioData';
import { getCleanVideoUrl } from '../utils/mediaUtils';

export default function Hero({ onSelectProject }) {
  // Collage preview cards
  const heroCards = [
    {
      id: "unboxing-experience",
      title: "MARS Cosmetics Unboxing",
      category: "Lifestyle",
      image: "/media/unboxing_ugc.jpg",
      video: "/media/mars lipstick unboxing.mp4",
      rotation: "-rotate-4 hover:-rotate-1",
      offset: "translate-y-4 md:translate-y-8",
      zIndex: "z-10",
      tagColor: "bg-purple-100 text-purple-700"
    },
    {
      id: "dot-and-key-sunscreen",
      title: "Dot & Key Sunscreen",
      category: "Skincare",
      image: "/media/dot_and_key_sunscreen.jpg",
      video: "/media/Dot&Key Moisturizer .mp4",
      rotation: "rotate-2 hover:rotate-0",
      offset: "-translate-y-2 md:-translate-y-4",
      zIndex: "z-20",
      featured: true,
      tagColor: "bg-pink-100 text-pink-700"
    },
    {
      id: "sunscreen-demo",
      title: "Daily Sunscreen POV",
      category: "Skincare",
      image: "/media/lifestyle_ugc.jpg",
      video: "/media/hyppen.mp4",
      rotation: "rotate-5 hover:rotate-2",
      offset: "translate-y-8 md:translate-y-12",
      zIndex: "z-10",
      tagColor: "bg-rose-100 text-rose-700"
    }
  ];

  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden flex items-center bg-[#FCF9FA]">
      {/* Radiant ambient baby pink & lavender glowing orbs */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-1/4 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-pink-200/50 via-purple-200/40 to-pink-100/30 blur-[130px] pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-purple-200/50 via-pink-100/40 to-rose-200/30 blur-[120px] pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-amber-100/30 blur-[100px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Editorial Headline & Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200 shadow-sm backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-600"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-pink-900 flex items-center gap-1.5">
                <span>{creatorConfig.availability}</span>
                <Sparkles className="w-3 h-3 text-pink-500 inline" />
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-[2.75rem] leading-[1.08] sm:text-6xl md:text-7xl lg:text-[4.75rem] tracking-[-0.01em] text-[#1E1B1E] font-normal uppercase">
              CONTENT THAT FEELS{' '}
              <span className="italic font-normal block font-serif bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent sm:inline">
                REAL.
              </span>{' '}
              <span className="block text-[#1E1B1E]">NOT LIKE AN AD.</span>
            </h1>

            {/* Sub-copy */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#6B636D] font-light max-w-xl leading-relaxed">
              Faceless UGC creator creating natural, scroll-stopping content for modern brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/90 text-pink-950 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase border border-pink-200 hover:border-pink-400 hover:bg-pink-50/50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-pink-600" />
              </a>
            </div>

            {/* Trust micro-metrics in soft baby pink / lavender glow */}
            <div className="pt-4 border-t border-pink-100 max-w-lg grid grid-cols-3 gap-4">
              <div className="p-3 rounded-2xl bg-white/60 border border-pink-100/60 shadow-xs">
                <span className="block font-serif text-2xl sm:text-3xl text-pink-600 font-medium">9:16</span>
                <span className="text-[10px] sm:text-[11px] text-[#6B636D] tracking-wider uppercase font-sans font-medium">Vertical 4K</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/60 border border-purple-100/60 shadow-xs">
                <span className="block font-serif text-2xl sm:text-3xl text-purple-600 font-medium">3–5d</span>
                <span className="text-[10px] sm:text-[11px] text-[#6B636D] tracking-wider uppercase font-sans font-medium">Turnaround</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/60 border border-rose-100/60 shadow-xs">
                <span className="block font-serif text-2xl sm:text-3xl text-rose-600 font-medium">100%</span>
                <span className="text-[10px] sm:text-[11px] text-[#6B636D] tracking-wider uppercase font-sans font-medium">Faceless POV</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Collage of Vertical UGC Content Cards */}
          <div className="lg:col-span-5 xl:col-span-5 relative mt-6 lg:mt-0">
            {/* Collage Container */}
            <div className="relative w-full max-w-[420px] mx-auto h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center">

              {heroCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + idx * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`absolute w-[210px] sm:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 shadow-[0_20px_45px_rgba(236,72,153,0.15)] border-2 border-white/80 ${card.rotation} ${card.offset} ${card.zIndex}`}
                  style={{
                    left: idx === 0 ? '5%' : idx === 1 ? '22%' : '42%',
                    top: idx === 0 ? '10%' : idx === 1 ? '5%' : '18%',
                  }}
                  onClick={() => onSelectProject && onSelectProject(card.id)}
                >
                  {/* Subtle float motion wrapper */}
                  <motion.div
                    animate={{
                      y: idx === 1 ? [-4, 4, -4] : [4, -4, 4],
                    }}
                    transition={{
                      duration: 5 + idx,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-full h-full group"
                  >
                    {/* Video Frame as Thumbnail without poster blocking */}
                    {card.video ? (
                      <video
                        src={`${getCleanVideoUrl(card.video)}#t=0.1`}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                      />
                    ) : (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                        loading="eager"
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className={`text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm ${card.tagColor}`}>
                        {card.category}
                      </span>
                      {card.featured && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-sm">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>UGC</span>
                        </span>
                      )}
                    </div>

                    {/* Center Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-75 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-pink-600 shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[10px] uppercase tracking-wider text-pink-200 font-sans font-medium mb-0.5">
                        {card.stats}
                      </div>
                      <h4 className="font-serif text-sm sm:text-base font-normal leading-snug line-clamp-1 drop-shadow-sm">
                        {card.title}
                      </h4>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Editorial Sticker in Cute Baby Pink / Lavender */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-2 -right-2 sm:right-2 z-30 bg-white/95 border border-pink-200 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 backdrop-blur-md"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse"></div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-pink-950">Brands Trust</p>
                  <p className="text-[9px] text-pink-600/80 font-medium">Beauty & Lifestyle Creator</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
