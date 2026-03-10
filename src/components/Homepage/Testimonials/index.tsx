import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import { allTestimonials } from '../../../data/testimonials';
import { clients } from '../../../data/clientsData';

/**
 * Homepage Testimonials Section - Full Screen Slide
 */
const HomepageTestimonials: React.FC = () => {
  const testimonials = allTestimonials; // Showing all on homepage
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="md:h-screen w-full flex flex-col justify-center overflow-hidden bg-brand-purple relative pt-20 pb-20 md:py-0">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/10 rounded-full" />
      <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-white/10 rounded-full" />

      {/* Marquee Styles */}
      <style>
          {`
            @keyframes marquee {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
            .animate-marquee {
              display: flex;
              animation: marquee 80s linear infinite;
              width: max-content;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}
        </style>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center">
        <div className="text-center mb-6 md:mb-12">
          <span className="text-brand-lime font-bold tracking-widest uppercase text-xs mb-2 md:mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-7xl font-display text-white tracking-tight uppercase">
            Client Love
          </h2>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-10 relative h-[350px] md:min-h-[350px] flex flex-col justify-between">
            {/* SVG Quote Icon */}
            <div className="absolute -top-4 md:-top-6 left-6 text-white/40">
              <svg width="60" height="48" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-16 md:h-12">
                <path d="M5 45C5 60 15 70 28 70C38 70 45 62 45 52C45 42 38 35 28 35C25 35 22 36 20 37C20 25 28 15 40 12L38 5C20 10 5 25 5 45Z" fill="currentColor"/>
                <path d="M55 45C55 60 65 70 78 70C88 70 95 62 95 52C95 42 88 35 78 35C75 35 72 36 70 37C70 25 78 15 90 12L88 5C70 10 55 25 55 45Z" fill="currentColor"/>
              </svg>
            </div>

            <blockquote className="font-outfit text-lg md:text-2xl text-white leading-relaxed mb-6 mt-6 md:mt-8">
              {current.quote}
            </blockquote>

            <div className="flex items-center gap-4">
              {current.image ? (
                <img
                  src={current.image}
                  alt={current.author}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white/20"
                />
              ) : (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-lime flex items-center justify-center border-2 border-white/20 text-brand-purple font-bold text-sm md:text-base">
                  {current.author.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <div>
                <div className="font-outfit text-white font-bold text-sm md:text-base">{current.author}</div>
                <div className="font-outfit text-white/70 text-xs md:text-sm">
                  {current.role} {current.company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-4 md:mt-6 relative z-50">
            <button
              onClick={(e) => { e.stopPropagation(); prevTestimonial(); }}
              className="group text-white transition-all hover:-translate-x-1 cursor-pointer p-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8 opacity-70 group-hover:opacity-100" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                  className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    index === currentIndex ? 'bg-brand-lime w-8' : 'bg-white/20 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); nextTestimonial(); }}
              className="group text-white transition-all hover:translate-x-1 cursor-pointer p-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8 opacity-70 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>

      {/* Client Logos Marquee */}
      <div className="w-full mt-4 md:mt-6 relative z-10 max-w-[1240px] mx-auto">
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee w-fit items-center">
              {[1, 2].map((setIdx) => (
                <div
                  key={`logo-set-${setIdx}`}
                  className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16 flex-shrink-0"
                >
                  {clients.map((logo, index) => (
                    <div
                      key={`logo-${setIdx}-${index}`}
                      className="relative flex items-center justify-center"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[140px] object-contain opacity-75 brightness-0 invert hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Fade Gradients (Matching brand-purple) */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-purple to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-purple to-transparent z-10 pointer-events-none"></div>
          </div>
      </div>
    </section>
  );
};

export default HomepageTestimonials;
