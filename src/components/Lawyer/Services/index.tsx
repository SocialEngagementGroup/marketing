import React from 'react';
import { Users, Wrench, Target } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';
import ServiceItem from './ServiceItem';

const Services: React.FC = () => {
  const reasons = [
    {
      title: "Built Around Your Firm",
      desc: "Every law firm is different. We take the time to understand where your firm is today, what's already working, and where we can have the biggest impact for your firm. From there, we build a marketing approach that fits your goals.",
    },
    {
      title: "We Treat Your Firm Like<br class=\"md:hidden\" /> It's Our Own",
      desc: "We don't \"set it and forget it\". We actively manage, monitor, and refine your marketing so you can focus on running your practice, while we focus on making sure you keep getting leads.",
    },
    {
      title: "Focused on Outcomes<br class=\"md:hidden\" /> That Matter",
      desc: "Everything we do ties back to one thing: helping you grow the right way. More of the cases you want, fewer distractions, and a marketing effort you can actually trust.",
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-20 bg-brand-beige relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      <div className="absolute -left-20 top-40 w-96 h-96 bg-brand-brick/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-0 lg:gap-16 items-start">
          
          {/* Left Side - Title & Decorative Element */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <Reveal>
              <span className="text-brand-brick font-bold tracking-widest uppercase text-xs mb-6 block">
                Why Law Firms Choose Us
              </span>
            </Reveal>
            
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-black leading-tight mb-6 md:mb-8">
                A Partner You <br/>Can <span className="italic text-brand-brick">Trust.</span>
              </h2>
            </Reveal>




          </div>

          {/* Right Side - Services List */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-brand-black/10">
              {reasons.map((reason, index) => (
                <ServiceItem
                  key={index}
                  delay={index * 100}
                  title={reason.title}
                  desc={reason.desc}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
