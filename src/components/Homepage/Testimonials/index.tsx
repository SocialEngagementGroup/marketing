import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with the Social Engagement Group allowed me to focus on my business instead of worrying about marketing. Their team truly understands what law firms need to grow their online presence.",
    author: "Michael F. Campopiano",
    role: "CEO at",
    company: "The MFC Law",
    image: "/testimonial/law1.png",
  },
  {
    id: 2,
    quote: "Social Engagement Group built our website from the ground up and gave us a real online presence. We finally started showing up in search and the results speak for themselves.",
    author: "Sharif Aref",
    role: "Owner at",
    company: "Aref Law Firm",
    image: "/testimonial/law2.png",
  },
  {
    id: 3,
    quote: "SEG helped bring our vision to life. They took the time to listen to what we wanted & turned our ideas into a brand we’re proud of. We got brand guidelines, logo, menus & social media content. Highly recommend working with them.",
    author: "Zakia Sumi",
    role: "CEO at",
    company: "The Munch Yard",
    image: "/testimonial/restaurant1.png",
  },
];


/**
 * Homepage Testimonials Section - Full Screen Slide
 */
const HomepageTestimonials: React.FC = () => {
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
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
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

            <blockquote className="text-lg md:text-2xl text-white leading-relaxed mb-6 mt-6 md:mt-8">
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
                <div className="text-white font-bold text-sm md:text-base">{current.author}</div>
                <div className="text-white/70 text-xs md:text-sm">
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
      <div className="w-full mt-4 md:mt-6 relative z-10">
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee w-fit">
              {/* First Set of Logos */}
              <div className="flex items-center gap-8 md:gap-16 px-8 md:px-12 flex-shrink-0">
                {[
                  'Aref-Black.png',
                  'Capiton-Black.png',
                  'FJH-Black.png',
                  'GT-Black.png',
                  'Gravy-Stack-Black.png',
                  'Infuse-Black.png',
                  'MFC-Black.png',
                  'NIPA-Black.png',
                  'Rastegar-Black.png',
                  'SC-Black.png',
                  'SMF-Black.png',
                  'Sporcle-Black.png',
                ].map((logo, index) => (
                  <img
                    key={`logo-1-${index}`}
                    src={`/logos/clients/${logo}`}
                    alt="Client Logo"
                    className="h-10 md:h-12 w-auto object-contain opacity-60 brightness-0 invert hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </div>

              {/* Second Set of Logos (Duplicate for infinite scroll) */}
              <div className="flex items-center gap-8 md:gap-16 px-8 md:px-12 flex-shrink-0">
                {[
                  'Aref-Black.png',
                  'Capiton-Black.png',
                  'FJH-Black.png',
                  'GT-Black.png',
                  'Gravy-Stack-Black.png',
                  'Infuse-Black.png',
                  'MFC-Black.png',
                  'NIPA-Black.png',
                  'Rastegar-Black.png',
                  'SC-Black.png',
                  'SMF-Black.png',
                  'Sporcle-Black.png',
                ].map((logo, index) => (
                  <img
                    key={`logo-2-${index}`}
                    src={`/logos/clients/${logo}`}
                    alt="Client Logo"
                    className="h-10 md:h-12 w-auto object-contain opacity-60 brightness-0 invert hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </div>
            </div>
            
            {/* Fade Gradients (Matching brand-purple) */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-purple to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-purple to-transparent z-10"></div>
          </div>
      </div>
    </section>
  );
};

export default HomepageTestimonials;
