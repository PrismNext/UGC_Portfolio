import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles } from 'lucide-react';
import { getCleanVideoUrl } from '../utils/mediaUtils';

export default function VideoModal({ project, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [showPlayIconBriefly, setShowPlayIconBriefly] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
    setShowPlayIconBriefly(true);
    setTimeout(() => setShowPlayIconBriefly(false), 600);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRestart = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      if (total) {
        setVideoProgress((current / total) * 100);
        setVideoDuration(total);
      }
    }
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current && videoDuration) {
      videoRef.current.currentTime = pos * videoDuration;
    }
  };

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Floating Close Button at top right */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl border border-white/15"
        aria-label="Close video player"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Focused 9:16 Video Player Card */}
      <div
        className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[9/16] max-h-[90vh] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-pink-200/30 bg-black flex flex-col justify-between"
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
      >
        {/* The Actual Video Element (or fallback thumbnail) */}
        {project.video ? (
          <video
            ref={videoRef}
            src={getCleanVideoUrl(project.video)}
            autoPlay
            playsInline
            loop
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            className="absolute inset-0 w-full h-full object-cover cursor-pointer select-none"
          />
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover select-none"
          />
        )}

        {/* Temporary Animated Play/Pause flash on tap */}
        {showPlayIconBriefly && (
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none animate-in zoom-in-50 fade-out duration-500">
            <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center shadow-2xl">
              {isPlaying ? <Play className="w-7 h-7 fill-current ml-1" /> : <Pause className="w-7 h-7" />}
            </div>
          </div>
        )}

        {/* Subtle Top Gradient with Controls */}
        <div className="relative z-20 p-4 sm:p-5 flex items-center justify-between bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-auto">
          {/* Category Chip */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-sm">
              {project.category}
            </span>
            {project.brand && (
              <span className="text-[11px] text-white/80 font-medium tracking-wide drop-shadow-sm">
                {project.brand}
              </span>
            )}
          </div>

          {/* Action buttons (Mute/Unmute & Restart) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRestart}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 backdrop-blur-md transition-all hover:scale-105 active:scale-95 border border-white/10"
              title="Restart video"
              aria-label="Restart video"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 backdrop-blur-md transition-all hover:scale-105 active:scale-95 border border-white/10"
              title={isMuted ? 'Unmute' : 'Mute'}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-pink-300" /> : <Volume2 className="w-4 h-4 text-white" />}
            </button>
          </div>
        </div>

        {/* Subtle Bottom Gradient with Title & Progress Bar */}
        <div className="relative z-20 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-auto space-y-3">
          {/* Title */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-snug drop-shadow-md">
              {project.title}
            </h3>
            {project.duration && (
              <p className="text-[11px] text-pink-200/90 font-medium tracking-wide mt-0.5">
                Full 9:16 Vertical UGC Video • {project.duration}
              </p>
            )}
          </div>

          {/* Progress Bar (Clickable scrubber) */}
          <div
            onClick={handleSeek}
            className="w-full h-1.5 rounded-full bg-white/25 cursor-pointer relative overflow-hidden group"
          >
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-100"
              style={{ width: `${videoProgress}%` }}
            />
          </div>

          {/* Tap hint */}
          <div className="flex items-center justify-between text-[10px] text-white/60 tracking-wider uppercase pt-1">
            <span>Tap video to {isPlaying ? 'pause' : 'play'}</span>
            <span className="text-pink-300 font-medium">9:16 4K UGC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
