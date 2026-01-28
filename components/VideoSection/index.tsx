import React from 'react';
import Reveal from '../ui/Reveal';

const VideoSection: React.FC = () => {
  return (
    <section className="bg-brand-beige py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-brand-brick font-bold tracking-widest uppercase text-xs mb-3 block">Watch Our Story</span>
             <h2 className="text-6xl font-serif text-brand-black mb-6">
              How We <span className="italic text-brand-brick">Transform</span> Firms
            </h2>
            <p className="text-brand-black/70 max-w-2xl mx-auto">
              Take a closer look at our approach and the results we deliver for our clients.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-brand-black/5 group hover:shadow-brand-brick/20 hover:scale-[1.02] transition-all duration-500">
            {/* Google Drive Video Embed */}
            <iframe 
              src="https://drive.google.com/file/d/1Hm3t6r3dOMm4SmiGFHFwGqPluPSInoom/preview" 
              className="absolute inset-0 w-full h-full scale-[1.01]"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Social Engagement Group Video"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default VideoSection;
