import React from 'react';
import { Timer, DollarSign, Layout, TrendingUp } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';

const benefits = [
  {
    icon: Timer,
    title: 'Faster Turnaround',
    description: 'What takes traditional agencies months, we deliver in weeks. AI acceleration without sacrificing quality.',
  },
  {
    icon: DollarSign,
    title: 'Lower Cost',
    description: 'Efficient processes mean lower overhead. You get agency-quality work at a fraction of the price.',
  },
  {
    icon: Layout,
    title: 'Stronger Structure',
    description: 'Proven frameworks and human strategy ensure your site guides visitors toward conversion.',
  },
  {
    icon: TrendingUp,
    title: 'Better Conversion',
    description: 'Every element is designed with purpose. More leads, more calls, more business.',
  },
];

const WhyWorks: React.FC = () => {
  return (
    <section id="why-works" className="relative py-32 overflow-hidden bg-brand-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-brick/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal delay={200}>
            <span className="text-brand-brick text-xs font-bold tracking-widest uppercase mb-4 block">
              The Difference
            </span>
          </Reveal>
          <Reveal delay={400}>
            <h2 className="text-4xl lg:text-5xl xl:text-7xl font-display text-white leading-[1.1] mb-6 uppercase tracking-tight">
              Why This Approach{' '}
              <span className="text-[#F5E6D3] italic font-serif normal-case tracking-normal">Works Better</span>
            </h2>
          </Reveal>
          <Reveal delay={600}>
            <p className="text-white/60 text-lg border-l-2 border-brand-brick pl-6 inline-block font-medium">
              AI alone can generate pages. Humans alone take too long. By combining both, you get the best of both worlds.
            </p>
          </Reveal>
        </div>

        {/* Benefits grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left column */}
          <div className="space-y-10">
            {benefits.slice(0, 2).map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 100 + 400}>
                <div className="glass-strong rounded-2xl p-10 border border-white/5 group hover:border-brand-brick/30 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row items-start gap-8">
                    <div className="w-16 h-16 rounded-xl bg-brand-brick/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-brick transition-all duration-500 shadow-xl">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-brand-brick transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed text-sm font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-10 lg:mt-20">
            {benefits.slice(2).map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 100 + 600}>
                <div className="glass-strong rounded-2xl p-10 border border-white/5 group hover:border-brand-brick/30 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row items-start gap-8">
                    <div className="w-16 h-16 rounded-xl bg-brand-brick/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-brick transition-all duration-500 shadow-xl">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-brand-brick transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed text-sm font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-32 text-center pb-12">
          <Reveal delay={1000}>
            <div className="inline-flex items-center gap-4 glass rounded-full px-10 py-5 border border-white/5 mb-10">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-brick animate-pulse" />
                <span className="text-white/80 text-[10px] uppercase font-bold tracking-[0.3em]">
                This isn't a template site. And it's not an experiment.
                </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-display text-white uppercase tracking-tight max-w-4xl mx-auto leading-tight">
                It's a <span className="text-brand-brick italic font-serif normal-case tracking-normal">repeatable way</span> to build websites that support real business growth.
            </h3>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyWorks;
