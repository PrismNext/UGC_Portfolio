import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Video, 
  Package, 
  Sun, 
  Coffee, 
  Smartphone, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { services } from '../data/portfolioData';

const cardStyles = {
  "ugc-ads": {
    bg: "bg-gradient-to-br from-pink-50/90 via-rose-50/40 to-white",
    border: "border-pink-200 hover:border-pink-400",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-md shadow-pink-400/30",
    numberColor: "text-pink-300 group-hover:text-pink-500",
    accent: "text-pink-600",
    icon: TrendingUp
  },
  "product-videos": {
    bg: "bg-gradient-to-br from-purple-50/90 via-indigo-50/40 to-white",
    border: "border-purple-200 hover:border-purple-400",
    iconBg: "bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-md shadow-purple-400/30",
    numberColor: "text-purple-300 group-hover:text-purple-500",
    accent: "text-purple-600",
    icon: Video
  },
  "unboxing-pr": {
    bg: "bg-gradient-to-br from-orange-50/90 via-rose-50/40 to-white",
    border: "border-orange-200 hover:border-orange-400",
    iconBg: "bg-gradient-to-br from-orange-400 to-rose-400 text-white shadow-md shadow-orange-400/30",
    numberColor: "text-orange-300 group-hover:text-orange-500",
    accent: "text-orange-600",
    icon: Package
  },
  "grwm": {
    bg: "bg-gradient-to-br from-rose-50/90 via-pink-50/40 to-white",
    border: "border-rose-200 hover:border-rose-400",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-md shadow-rose-400/30",
    numberColor: "text-rose-300 group-hover:text-rose-500",
    accent: "text-rose-600",
    icon: Sun
  },
  "lifestyle-content": {
    bg: "bg-gradient-to-br from-violet-50/90 via-purple-50/40 to-white",
    border: "border-violet-200 hover:border-violet-400",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-md shadow-violet-400/30",
    numberColor: "text-violet-300 group-hover:text-violet-500",
    accent: "text-violet-600",
    icon: Coffee
  },
  "social-media-content": {
    bg: "bg-gradient-to-br from-fuchsia-50/90 via-pink-50/40 to-white",
    border: "border-fuchsia-200 hover:border-fuchsia-400",
    iconBg: "bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white shadow-md shadow-fuchsia-400/30",
    numberColor: "text-fuchsia-300 group-hover:text-fuchsia-500",
    accent: "text-fuchsia-600",
    icon: Smartphone
  },
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-[#FCF9FA] via-purple-50/20 to-[#FCF9FA] border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-[11px] font-semibold tracking-[0.2em] uppercase text-pink-700">
            <Sparkles className="w-3 h-3 text-pink-500" />
            <span>SERVICES & DELIVERABLES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1E1B1E] font-normal uppercase tracking-tight">
            WHAT I CREATE
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B636D] font-light">
            Tailored, aesthetic short-form assets crafted to engage your target audience and elevate brand credibility.
          </p>
        </div>

        {/* 6 Elegant Pastel Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const style = cardStyles[service.id] || cardStyles["ugc-ads"];
            const IconComponent = style.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative p-8 sm:p-9 rounded-3xl ${style.bg} border-2 ${style.border} transition-all duration-300 hover:shadow-[0_16px_36px_rgba(236,72,153,0.12)] hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`font-serif italic text-3xl ${style.numberColor} transition-colors select-none`}>
                      {service.number}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl ${style.iconBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Core Description */}
                  <h3 className="font-serif text-2xl text-[#1E1B1E] font-medium mb-3 group-hover:text-pink-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-[#2D272E] leading-relaxed mb-4 font-normal">
                    “{service.description}”
                  </p>

                  {/* Extended Agency Context */}
                  <p className="font-sans text-xs text-[#6B636D] leading-relaxed">
                    {service.details}
                  </p>
                </div>

                {/* Bottom link in color */}
                <div className="pt-6 mt-6 border-t border-pink-100 flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
                  <span className={style.accent}>Collaborate on this</span>
                  <a
                    href="#contact"
                    className={`p-1.5 rounded-full ${style.accent} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`}
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
