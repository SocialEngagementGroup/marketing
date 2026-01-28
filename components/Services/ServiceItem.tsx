import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

interface ServiceItemProps {
  title: string;
  desc: string;
  delay?: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, desc, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <div className="group py-8 flex items-start gap-6 cursor-pointer transition-all duration-300 hover:pl-4">
        <div className="flex-grow">
          <h3 className="text-2xl md:text-3xl font-serif mb-3 transition-colors text-brand-black/70 group-hover:text-brand-black">
            {title}
          </h3>
          <p className="text-base leading-relaxed transition-colors max-w-lg text-brand-black/50 group-hover:text-brand-black/70">
            {desc}
          </p>
        </div>
        
        {/* Arrow Button */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-brand-black/20 text-brand-black/40 group-hover:border-brand-brick group-hover:text-brand-brick">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </Reveal>
  );
};

export default ServiceItem;
