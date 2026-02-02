import React, { useState } from 'react';
import { Home, Heart, Briefcase, Building2, Check } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';

const audiences = [
  {
    icon: Home,
    title: 'Home & Trade Services',
    description: 'Plumbers, electricians, HVAC, contractors, and home service professionals who need to build trust and generate local leads.',
    examples: ['Plumbing companies', 'HVAC services', 'Electrical contractors', 'Home renovation'],
    color: 'from-blue-500/10 to-transparent',
  },
  {
    icon: Heart,
    title: 'Medical & Wellness',
    description: 'Clinics, practices, and wellness professionals who need to establish credibility and make booking easy.',
    examples: ['Medical clinics', 'Dental practices', 'Wellness centers', 'Therapy services'],
    color: 'from-emerald-500/10 to-transparent',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Lawyers, accountants, consultants, and agencies who need to showcase expertise and attract high-value clients.',
    examples: ['Law firms', 'Accounting services', 'Business consultants', 'Marketing agencies'],
    color: 'from-purple-500/10 to-transparent',
  },
  {
    icon: Building2,
    title: 'B2B & Service-Based',
    description: 'B2B companies and service providers who need clear messaging that speaks to decision-makers.',
    examples: ['SaaS companies', 'Technology providers', 'Business services', 'Enterprise solutions'],
    color: 'from-orange-500/10 to-transparent',
  },
];

const TargetAudience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="targeting" className="relative py-32 overflow-hidden bg-brand-brick">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-brand-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal delay={200}>
            <span className="text-brand-black text-xs font-bold tracking-widest uppercase mb-4 block">
              Who We Serve
            </span>
          </Reveal>
          <Reveal delay={400}>
            <h2 className="text-4xl lg:text-5xl xl:text-[5rem] font-display text-white leading-[1.1] mb-6 uppercase tracking-tight">
              A Great Fit{' '}
              <span className="text-brand-black italic font-serif normal-case tracking-normal">For Your Business</span>
            </h2>
          </Reveal>
          <Reveal delay={600}>
            <p className="text-white/70 text-lg border-l-2 border-brand-black pl-6 inline-block font-medium">
              This approach works especially well for established businesses that rely on trust, clarity, and inbound leads.
            </p>
          </Reveal>
        </div>

        {/* Horizontal accordion */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto min-h-[500px]">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                activeIndex === index
                  ? 'lg:flex-[3.5] flex-auto'
                  : 'lg:flex-1 flex-auto'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${audience.color} transition-opacity duration-700 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-20'
                }`}
              />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 glass-strong rounded-2xl border border-white/5" />

              {/* Content */}
              <div className="relative p-8 h-full min-h-[250px] flex flex-col z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-10 transition-all duration-500 shadow-xl ${
                    activeIndex === index
                      ? 'bg-brand-black text-white'
                      : 'bg-white/10 text-white/50'
                  }`}
                >
                  <audience.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3
                  className={`font-display text-white transition-all duration-500 uppercase tracking-tight mb-8 ${
                    activeIndex === index
                      ? 'text-3xl opacity-100'
                      : 'text-lg opacity-40'
                  }`}
                >
                  {audience.title}
                </h3>

                {/* Expanded content */}
                <div
                  className={`flex-1 flex flex-col transition-all duration-700 ${
                    activeIndex === index
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 translate-y-8 invisible absolute h-0 w-0'
                  }`}
                >
                  <p className="text-white/70 mb-10 leading-relaxed text-sm font-medium">
                    {audience.description}
                  </p>

                  <div className="mt-auto">
                    <p className="text-[#F5E6D3] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Core Examples:</p>
                    <div className="flex flex-wrap gap-3">
                      {audience.examples.map((example) => (
                        <span
                          key={example}
                          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-black text-white text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-brand-black transition-all duration-300"
                        >
                          <Check className="w-3.5 h-3.5" />
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Border decoration */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 transition-all duration-700 pointer-events-none ${
                  activeIndex === index
                    ? 'border-brand-black/40 scale-[0.98]'
                    : 'border-white/5'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-20 text-center">
          <Reveal delay={1000}>
            <div className="inline-block glass rounded-full px-10 py-5 border border-white/5 group transition-all duration-500 hover:border-white/20">
                <p className="text-white/60 text-sm italic font-medium">
                If your website plays a role in generating inquiries or validating credibility,{' '}
                <span className="text-[#F5E6D3] font-bold not-italic uppercase tracking-widest ml-1">this is built for you.</span>
                </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
