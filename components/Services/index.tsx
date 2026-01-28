import React from 'react';
import { Users, Wrench, Target, ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import ServiceItem from './ServiceItem';

const Services: React.FC = () => {
  const reasons = [
    {
      title: "Built Around Your Firm",
      desc: "Every law firm is different. We take the time to understand where your firm is today, what's already working, and where we can have the biggest impact for your firm. From there, we build a marketing approach that fits your goals—not a one-size-fits-all package.",
    },
    {
      title: "We Treat Your Firm Like It's Our Own",
      desc: "We don't \"set it and forget it\". We actively manage, monitor, and refine your marketing so you can focus on running your practice, while we focus on making sure you keep getting leads.",
    },
    {
      title: "Focused on Outcomes That Matter",
      desc: "Everything we do ties back to one thing: helping you grow the right way. More of the cases you want, fewer distractions, and a marketing effort you can actually trust.",
    }
  ];

  return (
    <section id="why-us" className="py-32 bg-brand-beige relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-white/30 backdrop-blur-3xl -skew-x-12 translate-x-32 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side - Title & Decorative Element */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <span className="text-brand-brick font-bold tracking-widest uppercase text-xs mb-6 block">
                Why Law Firms Choose Us
              </span>
            </Reveal>
            
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-black leading-tight mb-8">
                A Partner You <br/>Can <span className="italic text-brand-brick">Trust.</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-3 text-brand-black font-bold uppercase tracking-widest text-xs border-b border-brand-black/30 pb-2 hover:border-brand-brick hover:text-brand-brick transition-colors"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Reveal>

            {/* Decorative Circle */}
            <Reveal delay={300}>
              <div className="mt-16 hidden lg:block">
                <div className="w-48 h-48 bg-brand-beige border-2 border-brand-black/10 rounded-full relative overflow-hidden group hover:border-brand-brick/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-brick/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side - Services List */}
          <div className="lg:col-span-7">
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
