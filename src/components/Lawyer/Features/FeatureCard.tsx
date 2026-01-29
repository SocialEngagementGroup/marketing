import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "../../Common/ui/Reveal";

interface FeatureCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  icon,
  title,
  desc,
  stat,
  statLabel,
  delay = 0,
}) => {
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full bg-gradient-to-b from-black/20 to-black/40 border border-white/10 rounded-xl p-8 transition-all duration-500 overflow-hidden flex flex-col">
        {/* Large Number - Top Right Only */}
        <div className="absolute -right-4 -top-6 text-[8rem] font-serif font-bold text-white/[0.05] transition-colors duration-500 select-none pointer-events-none leading-none">
          {number}
        </div>

        {/* Content */}
        <div className="flex-grow relative z-10">
          <h3
            className="text-xl md:text-2xl font-serif text-white mb-4 transition-colors leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
          <p className="text-white/80 leading-relaxed text-base mb-6">{desc}</p>
        </div>
      </div>
    </Reveal>
  );
};

export default FeatureCard;
