import React from 'react';
import Reveal from '../../Common/ui/Reveal';
import { clients } from '../../../data/clientsData';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-brand-beige border-y border-brand-black/10 py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-black mb-6 leading-tight">
              Trusted by Clients <br /> <span className="italic text-brand-brick">Across Competitive Industries</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-black/80 leading-relaxed">
              We work closely with law firms, applying systems built from experience across other high-competition industries including healthcare, hospitality, retail, where visibility, trust & conversion matters.
            </p>
          </div>
        </Reveal>

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

        <Reveal delay={200}>
          <div className="mt-16 overflow-hidden relative max-w-[1240px] mx-auto">
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
                        className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[140px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Fade Gradients */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-beige to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-beige to-transparent z-10"></div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TrustBar;
