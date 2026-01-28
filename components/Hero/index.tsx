import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-beige">
      {/* Background Typography Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <span className="text-[15vw] leading-none font-serif font-bold text-outline-dark opacity-30 select-none block uppercase">
          Precision
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            
            <Reveal delay={200}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-brand-black">
                Marketing for Law Firms Built for <span className="italic text-brand-brick">Consistent</span> Call Volume
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-lg text-brand-black/70 max-w-lg leading-relaxed border-l-2 border-brand-brick pl-6">
                We help law firms generate inbound calls by understanding your practice and building around what actually matters, so you can focus on your cases, not chasing leads.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://calendly.com/itseg/segmeet" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-brick hover:bg-brand-black text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Schedule a Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Content - Arch Image */}
          <div className="lg:col-span-6 relative h-[600px] hidden lg:block">
             <Reveal delay={400} className="h-full w-full">
               <div className="absolute top-0 right-0 w-4/5 h-full bg-brand-black arch-mask overflow-hidden shadow-2xl group [mask-image:radial-gradient(white,black)]">
                  <img 
                    src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
                    alt="Modern Law Office Architecture" 
                    className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute bottom-0 left-0 p-8 bg-brand-brick/90 backdrop-blur-sm text-white max-w-xs transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-serif text-2xl italic mb-2">"Volume & Quality"</p>
                    <p className="text-xs tracking-widest uppercase opacity-80">Predictable inbound calls for your specific practice areas.</p>
                  </div>
               </div>
               
               {/* Decorative element */}
               <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-brand-brick rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="w-2 h-2 bg-brand-black rounded-full"></div>
               </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;