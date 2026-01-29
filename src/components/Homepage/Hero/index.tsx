import React, { useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';

/**
 * Homepage Hero Section
 * Modernized with staggered text reveals and mouse parallax
 */
const HomepageHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mouse Parallax Effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate distance from center
      const moveX = (clientX - centerX) / centerY;
      const moveY = (clientY - centerY) / centerY;

      parallaxRefs.current.forEach((el, index) => {
        if (!el) return;
        // Different speeds for different elements based on index
        const speed = (index + 1) * 15; 
        const x = moveX * speed;
        const y = moveY * speed;
        
        el.style.transform = `translate(${x}px, ${y}px) rotate(${el.dataset.rotate || '0deg'})`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !parallaxRefs.current.includes(el)) {
      parallaxRefs.current.push(el);
    }
  };

  return (
    <section ref={containerRef} className="min-h-screen md:h-screen w-full flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-lime via-brand-lime/80 to-brand-lime/60 relative perspective-1000">
      
      {/* Background Outlined Letters (Parallax Layer 1 - Slow) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20">
        <div className="relative w-full h-full">
          <span 
            ref={addToRefs} 
            data-rotate="0deg"
            className="absolute top-[15%] left-[5%] text-[20vw] font-display text-white transition-transform duration-100 ease-out"
          >
            G
          </span>
          <span 
            ref={addToRefs}
            data-rotate="0deg" 
            className="absolute top-[10%] left-[40%] text-[18vw] font-display text-white transition-transform duration-100 ease-out"
          >
            C
          </span>
        </div>
      </div>

      {/* Floating 3D Elements (Parallax Layer 2 - Medium) - GLASSMORPHISM */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div 
          ref={addToRefs}
          data-rotate="-8deg"
          className="hidden md:block absolute top-[20%] left-[8%] w-24 h-32 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl transition-transform duration-300 ease-out"
          style={{ transform: 'rotate(-8deg)' }}
        />
        <div 
          ref={addToRefs}
          data-rotate="5deg"
          className="hidden md:block absolute top-[25%] left-[25%] w-16 h-24 bg-brand-purple/40 backdrop-blur-md border border-white/30 rounded-xl shadow-xl transition-transform duration-300 ease-out"
          style={{ transform: 'rotate(5deg)' }}
        />
        <div 
          ref={addToRefs}
          data-rotate="8deg"
          className="hidden md:block absolute top-[35%] right-[25%] w-28 h-36 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl transition-transform duration-300 ease-out"
          style={{ transform: 'rotate(8deg)' }}
        />
        
        {/* Lightning Bolts */}
        <div 
          ref={addToRefs}
          data-rotate="0deg"
          className="absolute top-[20%] right-[8%] transition-transform duration-300 ease-out"
        >
          <div className="relative animate-float">
            <Zap className="w-16 h-16 md:w-20 md:h-20 text-brand-purple fill-brand-purple" />
          </div>
        </div>
        <div 
          ref={addToRefs}
          data-rotate="0deg"
          className="absolute top-[45%] right-[15%] transition-transform duration-300 ease-out"
        >
          <div className="relative animate-float-delayed">
            <Zap className="w-10 h-10 md:w-14 md:h-14 text-brand-purple fill-brand-purple opacity-80" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl">
        {/* Main Headline - Staggered Reveal */}
        {/* Main Headline - Staggered Reveal */}
        <h1 className="font-display text-5xl md:text-[10vw] lg:text-[9vw] leading-[0.85] tracking-tight uppercase text-brand-black flex flex-col items-center text-center">
          <div className="reveal-text-container flex justify-center">
            <span className="reveal-text-item" style={{ animationDelay: '0.1s' }}>Your Wishes</span>
          </div>
          <div className="reveal-text-container flex items-center justify-center gap-2 md:gap-4">
            <span className="reveal-text-item" style={{ animationDelay: '0.2s' }}>Our Solutions</span>
            <span className="reveal-text-item inline-flex" style={{ animationDelay: '0.3s' }}>
              <Zap className="w-8 h-8 md:w-16 md:h-16 text-brand-purple fill-brand-purple animate-pulse" />
            </span>
          </div>
        </h1>

        {/* Subtitle - Staggered Reveal */}
        <div className="reveal-text-container mt-8 max-w-xl mx-auto">
          <p className="reveal-text-item text-brand-black/70 text-base md:text-lg leading-relaxed font-medium" style={{ animationDelay: '0.4s' }}>
            We transform your vision into digital reality. Full-service digital 
            marketing agency delivering strategy, design, and results.
          </p>
        </div>

        {/* CTA Buttons - Elastic Pop In */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <div className="reveal-text-item" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://calendly.com/itseg/segmeet"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-brand-purple hover:bg-brand-purple/90 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 rounded-full shadow-[0_10px_40px_-10px_rgba(139,92,246,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(139,92,246,0.6)] hover:-translate-y-1"
            >
              Get Your Quote
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          {/* Removed 'View Our Work' Button */}
        </div>

        {/* Stats Bar - Fade Up (Desktop Only) */}
        <div className="mt-20 hidden md:flex flex-wrap justify-center gap-16 text-center">
          {[
            { num: '150+', label: 'Projects' },
            { num: '98%', label: 'Satisfaction' },
            { num: '10+', label: 'Years Exp.' }
          ].map((stat, i) => (
            <div key={i} className="reveal-text-item" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-display text-brand-black">{stat.num}</div>
              <div className="text-xs text-brand-black/60 uppercase tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
