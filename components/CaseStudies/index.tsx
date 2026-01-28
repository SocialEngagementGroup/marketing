import React from 'react';
import Reveal from '../ui/Reveal';

const CaseStudies: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-brand-brick text-white relative overflow-hidden">
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
                <span className="text-[#F5E6D3] italic">Michael F. Campopiano</span>
              </h3>
            </Reveal>
            
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

          <div className="space-y-6">
            <Reveal delay={300}>
              <h4 className="text-white font-serif text-2xl mb-8">The Impact</h4>
            </Reveal>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Reveal delay={350}>
                <div className="bg-brand-white/5 p-8 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-500 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-brand-brick/50 flex items-center justify-center mb-6 mx-auto bg-brand-brick/10">
                    <svg className="w-8 h-8 text-brand-brick" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-brand-brick font-serif mb-4">137</div>
                  <div className="text-gray-300 text-sm leading-relaxed">Leads in<br/>one month</div>
                </div>
              </Reveal>
              
              <Reveal delay={400}>
                <div className="bg-brand-white/5 p-8 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-500 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-brand-brick/50 flex items-center justify-center mb-6 mx-auto bg-brand-brick/10">
                    <svg className="w-8 h-8 text-brand-brick" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-brand-brick font-serif mb-4">300%</div>
                  <div className="text-gray-300 text-sm leading-relaxed">Increase in<br/>monthly phone<br/>calls</div>
                </div>
              </Reveal>
              
              <Reveal delay={450}>
                <div className="bg-brand-white/5 p-8 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-500 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-brand-brick/50 flex items-center justify-center mb-6 mx-auto bg-brand-brick/10">
                    <svg className="w-8 h-8 text-brand-brick" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-brand-brick font-serif mb-4">$30.60</div>
                  <div className="text-gray-300 text-sm leading-relaxed">Average Cost<br/>Per Call</div>
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