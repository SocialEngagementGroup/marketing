import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ArrowDownRight } from 'lucide-react';
import { allTestimonials } from '../../../data/testimonials';

const testimonials = allTestimonials;

const AUTO_PLAY_INTERVAL = 5000;
const PAUSE_AFTER_CLICK = 8000;

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pausedUntilRef = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleManualNav = useCallback((direction: 'next' | 'prev') => {
    pausedUntilRef.current = Date.now() + PAUSE_AFTER_CLICK;
    direction === 'next' ? next() : prev();
  }, [next, prev]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (Date.now() >= pausedUntilRef.current) {
        next();
      }
    }, AUTO_PLAY_INTERVAL);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-[#0A2647] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-[1fr,2fr] gap-8 lg:gap-20 items-center">
          
          {/* Left Column: Intro & Nav */}
          <div className="lg:sticky lg:top-32 relative lg:-translate-y-8">
            <div className="relative">
              <Quote className="absolute -top-24 -left-8 w-64 h-64 lg:w-[32rem] lg:h-[32rem] lg:top-1/2 lg:-translate-y-1/2 lg:-left-20 text-white/[0.03] lg:text-white/[0.04] pointer-events-none" />
              <h3 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-8 lg:mb-12 font-outfit leading-tight lg:max-w-sm">
                What our clients <br /> are saying
              </h3>
            </div>
            
            {/* Navigation - Desktop (Shown on LG+) */}
            <div className="hidden lg:flex items-center gap-6">
              <button 
                onClick={() => handleManualNav('prev')}
                className="text-white/40 lg:hover:text-white transition-colors"
                aria-label="Previous"
              >
                <ArrowDownRight className="w-8 h-8 rotate-[135deg]" />
              </button>
              
              <div className="flex-grow max-w-[160px] h-[2px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={false}
                  animate={{ left: `${(currentIndex / (testimonials.length - 1)) * 100}%` }}
                  className="absolute top-0 w-1/3 h-full bg-white"
                  style={{ transform: 'translateX(-50%)' }}
                />
              </div>

              <button 
                onClick={() => handleManualNav('next')}
                className="text-white/40 lg:hover:text-white transition-colors"
                aria-label="Next"
              >
                <ArrowDownRight className="w-8 h-8 -rotate-45" />
              </button>
            </div>
          </div>

          {/* Right Column: Static Card Shell with Transitioning Content */}
          <div className="relative">
            {/* The Static Card Shell */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 relative min-h-[420px] sm:min-h-[400px] md:min-h-[330px] flex flex-col">
              
              <div className="p-8 md:p-12 flex-grow overflow-hidden relative flex flex-col">
                {/* Transitioning Quote Section */}
                <div className="min-h-[220px] sm:min-h-[200px] md:min-h-[150px] mb-0 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                       <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed font-outfit">
                         "{current.quote}"
                       </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Fixed Author Info Section (Updates instantly but stays in position) */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-md border-2 border-white">
                    <img src={current.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0A2647] font-outfit">{current.author}</h4>
                    <p className="text-[#144272] text-sm font-semibold font-outfit">
                      {current.role} {current.company}
                    </p>
                    {current.time && (
                      <p className="text-gray-400 text-xs font-medium font-outfit mt-0.5">{current.time}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bubble Tail (Static) */}
              <div className="absolute -bottom-4 left-10 w-8 h-8 bg-white border-r border-b border-gray-100 rotate-45" />
            </div>

            {/* Navigation - Mobile (Shown on LG-) */}
            <div className="flex lg:hidden items-center gap-6 mt-12 justify-center">
              <button 
                onClick={() => handleManualNav('prev')}
                className="text-white/40 lg:hover:text-white transition-colors"
                aria-label="Previous"
              >
                <ArrowDownRight className="w-8 h-8 rotate-[135deg]" />
              </button>
              
              <div className="flex-grow max-w-[160px] h-[2px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={false}
                  animate={{ left: `${(currentIndex / (testimonials.length - 1)) * 100}%` }}
                  className="absolute top-0 w-1/3 h-full bg-white"
                  style={{ transform: 'translateX(-50%)' }}
                />
              </div>

              <button 
                onClick={() => handleManualNav('next')}
                className="text-white/40 lg:hover:text-white transition-colors"
                aria-label="Next"
              >
                <ArrowDownRight className="w-8 h-8 -rotate-45" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
