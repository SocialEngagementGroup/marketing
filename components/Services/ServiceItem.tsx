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
      <div className="py-8 flex items-start gap-6">
        <div className="flex-grow">
          <h3 className="text-2xl md:text-3xl font-serif mb-3 text-brand-black">
            {title}
          </h3>
          <p className="text-base leading-relaxed max-w-lg text-brand-black/60">
            {desc}
          </p>
        </div>
        
        {/* Arrow Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-brand-black/10 text-brand-black/30">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </Reveal>
  );
};

export default ServiceItem;
