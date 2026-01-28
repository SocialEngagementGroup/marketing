import React from 'react';
import Reveal from '../ui/Reveal';
import { TrendingUp, Phone, CircleDollarSign } from 'lucide-react';
import CountUp from '../ui/CountUp';

const CaseStudies: React.FC = () => {
  return (
    <section id="testimonials" className="py-48 bg-brand-brick text-white relative overflow-hidden">
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
                  <h4 className="text-white/70 font-bold uppercase tracking-widest text-xs mb-2">The Situation</h4>
                  <p className="text-white/60 leading-relaxed">
                    An established personal injury firm operating in a competitive market, where larger competitors were outspending them on ads. Despite having a solid digital foundation, rising ad costs made it harder to consistently show up when potential clients were searching.
                  </p>
                </div>
                <div>
                  <h4 className="text-white/70 font-bold uppercase tracking-widest text-xs mb-2">What We Did</h4>
                  <p className="text-white/60 leading-relaxed">
                    Instead of trying to outspend competitors, we expanded visibility beyond paid search—reinforcing the firm's digital footprint, improving organic coverage across key locations, and supporting it with focused, continuously optimized ad campaigns.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6 lg:-mt-24">

            
            <div className="grid md:grid-cols-3 gap-6">
              <Reveal delay={350} className="h-full">
                <div className="bg-black/20 p-8 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-500 text-center h-full flex flex-col justify-center relative overflow-hidden group min-h-[300px]">
                  {/* Background Icon */}
                  <div className="absolute -right-6 -bottom-6 opacity-5 transform rotate-[-15deg] group-hover:scale-110 transition-transform duration-500">
                    <TrendingUp size={160} className="text-[#F5E6D3]" />
                  </div>
                  
                  

                  <div className="text-5xl font-bold text-[#F5E6D3] font-serif mb-4 relative z-10">
                    <CountUp end={137} suffix="+" />
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed relative z-10">Leads in<br/>one month</div>
                </div>
              </Reveal>
              
              <Reveal delay={400} className="h-full">
                <div className="bg-black/20 p-8 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-500 text-center h-full flex flex-col justify-center relative overflow-hidden group min-h-[300px]">
                  {/* Background Icon */}
                  <div className="absolute -right-6 -bottom-6 opacity-5 transform rotate-[-15deg] group-hover:scale-110 transition-transform duration-500">
                    <Phone size={160} className="text-[#F5E6D3]" />
                  </div>



                  <div className="text-5xl font-bold text-[#F5E6D3] font-serif mb-4 relative z-10">
                    <CountUp end={300} suffix="%" />
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed relative z-10">Increase in<br/>monthly phone calls</div>
                </div>
              </Reveal>
              
              <Reveal delay={450} className="h-full">
                <div className="bg-black/20 p-8 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-500 text-center h-full flex flex-col justify-center relative overflow-hidden group min-h-[300px]">
                  {/* Background Icon */}
                  <div className="absolute -right-6 -bottom-6 opacity-5 transform rotate-[-15deg] group-hover:scale-110 transition-transform duration-500">
                    <CircleDollarSign size={160} className="text-[#F5E6D3]" />
                  </div>



                  <div className="text-5xl font-bold text-[#F5E6D3] font-serif mb-4 relative z-10">
                    <CountUp end={30.60} prefix="$" decimals={2} />
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed relative z-10">Average Cost<br/>Per Call</div>
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