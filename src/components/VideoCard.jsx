import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, ArrowUpRight } from 'lucide-react';
import { getCleanVideoUrl } from '../utils/mediaUtils';

export default function VideoCard({ project, onSelect, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const cleanVideoSrc = getCleanVideoUrl(project.video);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !videoError) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      try {
        videoRef.current.currentTime = 0.1;
      } catch {}
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group relative cursor-pointer flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      aria-label={`View UGC video: ${project.title} - ${project.category}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      {/* 9:16 Card Container with pastel beauty border and colorful glow */}
      <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-pink-50/50 border-2 border-pink-100 shadow-sm transition-all duration-500 group-hover:border-pink-300 group-hover:shadow-[0_20px_45px_rgba(236,72,153,0.2)] group-hover:-translate-y-2">
        
        {/* Fallback image ONLY if video failed to load or has no video */}
        {(videoError || !project.video) && project.thumbnail && (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover select-none"
            loading="lazy"
          />
        )}

        {/* Video Element: displays its own first frame as the thumbnail without poster interference */}
        {cleanVideoSrc && !videoError && (
          <video
            ref={videoRef}
            src={`${cleanVideoSrc}#t=0.1`}
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
          />
        )}

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/25 opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase px-3 py-1 rounded-full bg-white/95 text-pink-900 backdrop-blur-md shadow-sm border border-pink-100">
            {project.category}
          </span>
          {project.duration && (
            <span className="text-[10px] font-sans font-semibold px-2.5 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-sm">
              {project.duration}
            </span>
          )}
        </div>

        {/* Center Play Button Overlay with vibrant pink icon */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-white/95 text-pink-600 backdrop-blur-md flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-115 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:text-white group-active:scale-95">
            <Play className="w-5 h-5 fill-current ml-0.5 transition-colors" />
          </div>
        </div>

        {/* Bottom Card Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 text-white flex flex-col justify-end pointer-events-none">
          {project.brand && (
            <div className="text-[11px] uppercase tracking-[0.18em] text-pink-200 font-bold mb-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-pink-400" />
              <span>{project.brand}</span>
            </div>
          )}
          <h3 className="font-serif text-lg sm:text-xl font-normal text-white leading-snug drop-shadow-sm group-hover:text-pink-100 transition-colors">
            {project.title}
          </h3>

          {/* Quick metric pill */}
          {project.results && (
            <div className="mt-2.5 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px] text-pink-100">
              <span className="truncate font-medium">{project.results}</span>
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity text-pink-300" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
