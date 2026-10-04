import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import VideoCard from './VideoCard';
import { projects, categories } from '../data/portfolioData';

export default function FeaturedWork({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen for optimal initial video count
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter projects by category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // On mobile: show 2 videos initially to avoid long scrolling fatigue
  // On tablet/desktop: show 3 videos (1 clean row) initially
  const initialLimit = isMobile ? 2 : 3;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, initialLimit);
  const hasMore = filteredProjects.length > initialLimit;
  const remainingCount = filteredProjects.length - initialLimit;

  // Handle category switch
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  // Toggle view more / less with smooth scroll positioning
  const handleToggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 bg-[#FCF9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div className="space-y-2.5 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-pink-700">
              <Sparkles className="w-3 h-3 text-pink-500" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1E1B1E] font-normal uppercase tracking-tight">
              SELECTED WORK
            </h2>
            <p className="font-sans text-xs sm:text-base text-[#6B636D] font-light">
              Scroll-stopping content created for modern beauty, skincare and lifestyle brands.
            </p>
          </div>

          {/* Notice for Brands */}
          <div className="inline-flex items-center gap-2 text-xs text-pink-900 bg-white px-3.5 py-1.5 rounded-full border border-pink-200 shadow-xs self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
            <span className="text-[11px] sm:text-xs">Tap any card to watch full 9:16 video</span>
          </div>
        </div>

        {/* Filter Pills with Baby Pink & Lavender styling */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-8 sm:mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white shadow-md shadow-pink-500/25 scale-102'
                    : 'bg-white/80 border border-pink-200/80 text-pink-950/80 hover:bg-pink-50 hover:text-pink-700 hover:border-pink-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Editorial 9:16 Video Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
        >
          <AnimatePresence>
            {visibleProjects.map((project, idx) => (
              <VideoCard
                key={project.id}
                project={project}
                index={idx}
                onSelect={onSelectProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Toggle Button for Mobile & Desktop */}
        {hasMore && (
          <div className="flex justify-center mt-10 sm:mt-14">
            <button
              type="button"
              onClick={handleToggleShowAll}
              className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-white border-2 border-pink-200 hover:border-pink-500 text-pink-950 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase shadow-sm hover:shadow-xl hover:shadow-pink-500/15 hover:bg-pink-50/70 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>
                {showAll
                  ? 'Show Less Videos'
                  : `View More Videos (${remainingCount} More)`}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-pink-500 transition-transform duration-300 ${
                  showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'
                }`}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
