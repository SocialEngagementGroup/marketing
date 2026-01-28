import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Reveal from '../ui/Reveal';

const VideoSection: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePlayClick = () => {
    setShowOverlay(false);
  };

  return (
    <section className="bg-brand-beige py-20 border-t border-brand-black/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-brand-brick font-bold tracking-widest uppercase text-xs mb-3 block">Watch Our Story</span>
             <h2 className="text-3xl md:text-5xl font-serif text-brand-black mb-6">
              See How We <span className="italic text-brand-brick">Transform</span> Firms
            </h2>
            <p className="text-brand-black/70 max-w-2xl mx-auto">
              Take a closer look at our approach and the results we deliver for our clients.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-brand-black/10 bg-brand-black/5 group hover:shadow-brand-brick/20 hover:scale-[1.02] transition-all duration-500 cursor-pointer">
            {/* Google Drive Video Embed */}
            <iframe 
              src="https://drive.google.com/file/d/1Hm3t6r3dOMm4SmiGFHFwGqPluPSInoom/preview" 
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Social Engagement Group Video"
            ></iframe>

            {/* Custom Play Button Overlay */}
            <div 
              onClick={handlePlayClick}
              className={`absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 flex items-center justify-center z-10 backdrop-blur-[2px] transition-all duration-500 hover:from-black/30 hover:to-black/50 ${
                !showOverlay ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <div className="relative">
                {/* Pulsing ring effect */}
                <div className="absolute inset-0 bg-brand-brick rounded-full animate-ping opacity-20"></div>
                
                {/* Main play button */}
                <div className="relative bg-brand-brick hover:bg-brand-brick/90 rounded-full p-8 shadow-2xl shadow-brand-brick/50 transform transition-all duration-300 hover:scale-110 group-hover:shadow-brand-brick/70">
                  <Play className="w-12 h-12 md:w-16 md:h-16 text-white fill-white" />
                </div>
                
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-brand-brick/30 rounded-full blur-xl"></div>
              </div>
              
              {/* Click to play text */}
              <p className="absolute bottom-8 text-white font-medium tracking-wide text-sm md:text-base animate-pulse">
                Click to Play
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default VideoSection;
