import React from 'react';
import Reveal from '../../Common/ui/Reveal';
import { TrendingUp, Phone, CircleDollarSign } from 'lucide-react';
import CountUp from '../../Common/ui/CountUp';

const CaseStudies: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-48 bg-brand-brick text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-brick/5 -skew-x-12 translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
             <h2 className="font-bold uppercase tracking-widest text-sm text-white/50">Featured Case Study</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-16">
            The Law Offices of <br/>
            <span className="text-[#F5E6D3] italic">Michael F. Campopiano</span>
          </h3>
        </Reveal>

        {/* MFC Law Case Study - Top Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6 self-center">
            <Reveal delay={200}>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#F5E6D3] font-bold uppercase tracking-widest text-sm mb-2">The Situation</h4>
                  <p className="text-lg text-white/60 leading-relaxed">
                    An established personal injury firm operating in a competitive market, where larger competitors were outspending them on ads. Despite having a solid digital foundation, rising ad costs made it harder to consistently show up when clients were searching.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#F5E6D3] font-bold uppercase tracking-widest text-sm mb-2">What We Did</h4>
                  <p className="text-lg text-white/60 leading-relaxed">
                    Instead of trying to outspend competitors, we expanded visibility beyond paid search, reinforcing the firm's digital footprint, improving organic coverage across key locations, and supporting it with focused, continuously optimized ad campaigns.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6 lg:-mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal delay={350}>
                <div className="bg-black/20 p-8 lg:p-12 border border-white/10 rounded-[2.5rem] hover:border-white/20 transition-all duration-500 text-left lg:text-center relative overflow-hidden group flex flex-col lg:justify-center lg:min-h-[300px]">
                  {/* Background Icon */}
                  <div className="absolute -right-6 -bottom-6 opacity-10 lg:opacity-5 transform rotate-[-15deg] group-hover:scale-110 transition-transform duration-500">
                    <TrendingUp className="text-[#F5E6D3] w-[160px] h-[160px]" />
                  </div>
                  
                  <div className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#F5E6D3] font-serif relative z-10 order-1 lg:order-1">
                    <CountUp end={137} suffix="+" />
                  </div>
                  <div className="text-gray-300 text-xs font-bold uppercase tracking-widest mt-2 lg:mt-4 lg:mb-0 relative z-10 font-outfit order-2 lg:order-2">Leads in one month</div>
                </div>
              </Reveal>
              
              <Reveal delay={400}>
                <div className="bg-black/20 p-8 lg:p-12 border border-white/10 rounded-[2.5rem] hover:border-white/20 transition-all duration-500 text-left lg:text-center relative overflow-hidden group flex flex-col lg:justify-center lg:min-h-[300px]">
                  <div className="absolute -right-6 -bottom-6 opacity-10 lg:opacity-5 transform rotate-[-15deg] group-hover:scale-110 transition-transform duration-500">
                    <Phone className="text-[#F5E6D3] w-[160px] h-[160px]" />
                  </div>

                  <div className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#F5E6D3] font-serif relative z-10 order-1 lg:order-1">
                    <CountUp end={300} suffix="%" />
                  </div>
                  <div className="text-gray-300 text-xs font-bold uppercase tracking-widest mt-2 lg:mt-4 lg:mb-0 relative z-10 font-outfit order-2 lg:order-2">Increase in monthly calls</div>
                </div>
              </Reveal>
              
              <Reveal delay={450}>
                <div className="bg-black/20 p-8 lg:p-12 border border-white/10 rounded-[2.5rem] hover:border-white/20 transition-all duration-500 text-left lg:text-center relative overflow-hidden group flex flex-col lg:justify-center lg:min-h-[300px]">
                  <div className="absolute -right-6 -bottom-6 opacity-10 lg:opacity-5 transform rotate-[-15deg] group-hover:scale-110 transition-transform duration-500">
                    <CircleDollarSign className="text-[#F5E6D3] w-[160px] h-[160px]" />
                  </div>

                  <div className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#F5E6D3] font-serif relative z-10 order-1 lg:order-1">
                    <CountUp end={30.60} prefix="$" decimals={2} />
                  </div>
                  <div className="text-gray-300 text-xs font-bold uppercase tracking-widest mt-2 lg:mt-4 lg:mb-0 relative z-10 font-outfit order-2 lg:order-2">Average Cost Per Call</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;