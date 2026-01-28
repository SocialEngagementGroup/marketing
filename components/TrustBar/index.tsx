import React from 'react';
import Reveal from '../ui/Reveal';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-brand-beige border-y border-brand-black/10 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-black mb-6 leading-tight">
              Trusted by Clients <br /> <span className="italic text-brand-brick">Across Competitive Industries</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-black/80 leading-relaxed">
              We work closely with law firms, applying systems built from experience across other high-competition industries including healthcare, hospitality, and retail—where visibility, trust, and conversion matter just as much.
            </p>
          </div>
        </Reveal>

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

        <Reveal delay={200}>
          <div className="mt-16 overflow-hidden relative">
            <div className="flex animate-marquee w-fit">
              {/* First Set of Logos */}
              <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12 flex-shrink-0">
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
                    className="h-10 md:h-12 w-auto object-contain opacity-90 grayscale-0"
                  />
                ))}
              </div>

              {/* Second Set of Logos (Duplicate for infinite scroll) */}
              <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12 flex-shrink-0">
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
                    className="h-10 md:h-12 w-auto object-contain opacity-90 grayscale-0"
                  />
                ))}
              </div>
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
