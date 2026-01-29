import React from 'react';
import { Zap } from 'lucide-react';

/**
 * Homepage Hero Section
 * Clean, minimal design with lime gradient background
 */
const HomepageHero: React.FC = () => {
  return (
    <section 
      className="h-[95vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden relative"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(144, 103, 198, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 100% 100%, rgba(144, 103, 198, 0.1) 0%, transparent 40%),
          radial-gradient(ellipse 70% 50% at 0% 100%, rgba(255, 255, 255, 0.2) 0%, transparent 40%),
          radial-gradient(ellipse 100% 100% at 50% 50%, #8fc476 0%, #a8d98a 40%, #BEEB9F 100%)
        `
      }}
    >

      {/* Colorful Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Purple circles */}
        <div 
          className="absolute top-[15%] left-[10%] w-4 h-4 md:w-6 md:h-6 rounded-full bg-brand-purple animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute top-[25%] right-[15%] w-3 h-3 md:w-5 md:h-5 rounded-full bg-brand-purple/70 animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute bottom-[30%] left-[8%] w-5 h-5 md:w-8 md:h-8 rounded-full bg-brand-purple/50 animate-float"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Orange/Yellow accents */}
        <div 
          className="absolute top-[20%] right-[8%] w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-400 animate-float"
          style={{ animationDelay: '0.5s' }}
        />
        <div 
          className="absolute bottom-[35%] right-[12%] w-4 h-4 md:w-6 md:h-6 rounded-full bg-amber-400/80 animate-float"
          style={{ animationDelay: '1.5s' }}
        />
        
        {/* Cyan/Teal accents */}
        <div 
          className="absolute top-[35%] left-[15%] w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400 animate-float"
          style={{ animationDelay: '0.8s' }}
        />
        <div 
          className="absolute bottom-[25%] right-[20%] w-3 h-3 md:w-5 md:h-5 rounded-full bg-teal-400/70 animate-float"
          style={{ animationDelay: '2.5s' }}
        />
        
        {/* White/cream accents */}
        <div 
          className="absolute top-[30%] right-[25%] w-2 h-2 md:w-3 md:h-3 rounded-full bg-white animate-float"
          style={{ animationDelay: '1.2s' }}
        />
        <div 
          className="absolute bottom-[40%] left-[20%] w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/80 animate-float"
          style={{ animationDelay: '0.3s' }}
        />
        
        {/* Pink accent */}
        <div 
          className="absolute top-[40%] right-[10%] w-2 h-2 md:w-4 md:h-4 rounded-full bg-pink-400/70 animate-float"
          style={{ animationDelay: '1.8s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        
        {/* Main Headline */}
        <h1 className="font-display text-4xl md:text-7xl lg:text-[6.5rem] leading-[1] tracking-tight uppercase flex flex-col items-center text-center">
          <div className="reveal-text-container">
            <span className="reveal-text-item text-brand-black" style={{ animationDelay: '0.1s' }}>
              Where Human Creativity
            </span>
          </div>
          <div className="reveal-text-container">
            <span 
              className="reveal-text-item text-white" 
              style={{ animationDelay: '0.2s' }}
            >
              Meets AI-Powered Growth
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <div className="reveal-text-container mt-8 max-w-2xl mx-auto">
          <p 
            className="reveal-text-item text-brand-black/70 text-base md:text-lg leading-relaxed" 
            style={{ animationDelay: '0.3s' }}
          >
            We tell your story across every digital touchpoint, blending creativity and automation so your business grows & converts.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <div className="reveal-text-item" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://calendly.com/itseg/segmeet"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-brand-black hover:bg-brand-black/90 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Start Growing
              <Zap className="w-4 h-4 fill-white" />
            </a>
          </div>
        </div>

      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-display text-xs md:text-sm tracking-[0.3em] text-white/60 uppercase">
          Explore
        </span>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/40 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-1.5 md:w-1.5 md:h-2 bg-white/60 rounded-full animate-scroll-dot" />
        </div>
      </div>

    </section>
  );
};

export default HomepageHero;
