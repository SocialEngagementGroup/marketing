import React from 'react';

import Reveal from '../../Common/ui/Reveal';

interface ServiceItemProps {
  title: string;
  desc: string;
  delay?: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, desc, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <div className="py-4 md:py-8 flex items-start gap-6">
        <div className="flex-grow">
          <h3 
            className="text-2xl md:text-3xl font-serif mb-3 text-brand-brick"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-base leading-relaxed text-brand-black/60">
            {desc}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default ServiceItem;
