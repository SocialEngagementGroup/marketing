import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

interface FeatureCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, icon, title, desc, stat, statLabel, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/20 rounded-xl p-8 hover:border-white/40 hover:from-white/[0.12] transition-all duration-500 overflow-hidden flex flex-col">
        
        {/* Large Number - Top Right Only */}
        <div className="absolute -right-4 -top-6 text-[8rem] font-serif font-bold text-white/[0.05] group-hover:text-white/[0.1] transition-colors duration-500 select-none pointer-events-none leading-none">
          {number}
        </div>
        
        {/* Content */}
        <div className="flex-grow relative z-10">
          <h3 className="text-xl md:text-2xl font-serif text-white mb-4 transition-colors leading-tight" dangerouslySetInnerHTML={{ __html: title }}>
          </h3>
          <p className="text-white/60 leading-relaxed text-sm mb-6">
            {desc}
          </p>
        </div>
        
        {/* Stat Box with Icon */}
        <div className="relative z-10 mt-auto">
          <div className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 group-hover:border-white/40 group-hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-4">
              {/* Icon inside stat box */}
              <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-brick transition-all duration-300 flex-shrink-0">
                {icon}
              </div>
              <div className="flex-grow">
                <div className="text-xl md:text-2xl font-serif font-bold text-white">
                  {stat}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">
                  {statLabel}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </div>
        </div>
        
      </div>
    </Reveal>
  );
};

export default FeatureCard;
