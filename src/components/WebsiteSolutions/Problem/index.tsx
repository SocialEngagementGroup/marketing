import React from 'react';
import { AlertCircle, MessageSquare, LayoutGrid, TrendingDown, ArrowRight } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';

const reasons = [
  {
    icon: AlertCircle,
    title: "They look fine. But they don't work.",
    description: "A pretty website that doesn't convert is just expensive digital art.",
    link: "#"
  },
  {
    icon: MessageSquare,
    title: "Messaging is unclear",
    description: "Visitors can't figure out what you do in the first 5 seconds of landing.",
    link: "#"
  },
  {
    icon: LayoutGrid,
    title: "Structure doesn't guide visitors",
    description: "No clear path from landing to conversion, leaving users lost and confused.",
    link: "#"
  },
  {
    icon: TrendingDown,
    title: "Pages don't convert",
    description: "Low form fills, few calls, and minimal engagement despite having traffic.",
    link: "#"
  },
];

const Problem: React.FC = () => {
  return (
    <section id="why-choose-us" className="relative py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <Reveal delay={200}>
            <span className="text-brand-forest/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
              THE PROBLEM
            </span>
          </Reveal>
          <Reveal delay={400}>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-forest leading-tight tracking-tight">
              The problem with most websites
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 max-w-5xl mx-auto relative">
            {/* Center cross decoration from image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-16 h-[2px] bg-gray-100" />
                <div className="h-16 w-[2px] bg-gray-100 -mt-8 mx-auto" />
            </div>

            {reasons.map((reason, index) => (
                <Reveal key={index} delay={300 + index * 100}>
                    <div className="flex flex-col items-center text-center group text-left">
                        <div className="w-14 h-14 rounded-xl bg-brand-forest/5 flex items-center justify-center mb-6 group-hover:bg-brand-forest/10 transition-colors">
                            <reason.icon className="w-6 h-6 text-brand-forest" />
                        </div>
                        <h3 className="text-lg font-bold text-brand-forest mb-3 uppercase tracking-tight">
                            {reason.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                            {reason.description}
                        </p>
                        <a 
                            href={reason.link} 
                            className="text-[10px] font-bold text-brand-forest uppercase tracking-widest border-b-2 border-transparent hover:border-brand-forest transition-all pb-1 flex items-center gap-2 group-hover:gap-3"
                        >
                            Read More
                            <ArrowRight className="w-3 h-3" />
                        </a>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
