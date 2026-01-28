import React from 'react';
import Reveal from '../ui/Reveal';

const CaseStudies: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-brick/5 -skew-x-12 translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
             <div className="h-px bg-white/20 w-12"></div>
             <h2 className="font-bold uppercase tracking-widest text-sm text-white/50">Featured Case Study</h2>
          </div>
        </Reveal>

        {/* MFC Law Case Study - Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <Reveal delay={100}>
              <h3 className="text-4xl md:text-5xl font-serif leading-tight">
                The Law Offices of <br/>
                <span className="text-brand-brick italic">Michael F. Campopiano</span>
              </h3>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="space-y-6">
                <div>
                  <h4 className="text-brand-brick font-bold uppercase tracking-widest text-xs mb-2">The Situation</h4>
                  <p className="text-gray-400 leading-relaxed">
                    An established personal injury firm operating in a competitive market, where larger competitors were outspending them on ads. Despite having a solid digital foundation, rising ad costs made it harder to consistently show up when potential clients were searching.
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-brick font-bold uppercase tracking-widest text-xs mb-2">What We Did</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Instead of trying to outspend competitors, we expanded visibility beyond paid search—reinforcing the firm's digital footprint, improving organic coverage across key locations, and supporting it with focused, continuously optimized ad campaigns.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="bg-brand-white/5 p-8 border border-white/10 rounded-sm hover:bg-brand-white/10 transition-colors duration-500">
               <h4 className="text-white font-serif text-2xl mb-8 border-b border-white/10 pb-4">The Impact</h4>
               <ul className="space-y-6">
                 <li className="flex items-start gap-4">
                   <span className="text-3xl font-bold text-brand-brick font-serif">137</span>
                   <span className="text-gray-300 mt-1">Leads in one month</span>
                 </li>
                 <li className="flex items-start gap-4">
                   <span className="text-3xl font-bold text-brand-brick font-serif">300%</span>
                   <span className="text-gray-300 mt-1">Increase in monthly phone calls in one month</span>
                 </li>
                 <li className="flex items-start gap-4">
                   <span className="text-3xl font-bold text-brand-brick font-serif">$30.60</span>
                   <span className="text-gray-300 mt-1">Average Cost Per Call</span>
                 </li>
               </ul>
            </div>
          </Reveal>
        </div>



      </div>
    </section>
  );
};

export default CaseStudies;