import React from 'react';
import { Check, Users, Target, Shield, ArrowRight } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';

const benefits = [
  { icon: Target, text: 'What you do' },
  { icon: Users, text: 'Who you help' },
  { icon: Shield, text: 'Why they should trust you' },
  { icon: ArrowRight, text: 'What action to take next' },
];

const Solution: React.FC = () => {
  return (
    <section id="solution" className="relative py-32 overflow-hidden bg-brand-brick">
      {/* Background image decor */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <img
          src="https://images.unsplash.com/photo-1551288049-bbbda50d2671?q=80&w=2070&auto=format&fit=crop"
          alt="Data Background"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-brand-brick/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <Reveal delay={200}>
                <span className="text-[#F5E6D3] text-xs font-bold tracking-widest uppercase mb-4 block">
                Our Approach
                </span>
            </Reveal>
            <Reveal delay={400}>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white leading-tight mb-6 uppercase tracking-tight">
                Yes, We Use AI —{' '}
                <span className="text-brand-black italic font-serif normal-case tracking-normal">But Not the Way You Think</span>
                </h2>
            </Reveal>
            <Reveal delay={600}>
                <p className="text-xl text-white/90 mb-8 leading-relaxed font-bold uppercase tracking-wide">
                AI didn't replace our process. It improved it.
                </p>
                <p className="text-white/70 mb-10 leading-relaxed border-l-2 border-brand-black pl-6 font-medium">
                We don't start with templates or auto-generated pages. We start with people. 
                We take the time to understand your business, your services, and your goals. 
                Then we design your website around proven frameworks—so visitors immediately understand:
                </p>
            </Reveal>

            {/* Benefits list */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <Reveal key={benefit.text} delay={700 + index * 100}>
                    <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <Check className="w-5 h-5 text-[#F5E6D3]" />
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                        {benefit.text}
                    </span>
                    </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Glass panel */}
          <div className="relative">
            <Reveal delay={400}>
                <div className="glass-strong rounded-2xl p-8 lg:p-12 border border-white/10 relative z-10">
                <div className="flex items-center gap-5 mb-10">
                    <div className="w-14 h-14 rounded-xl bg-brand-black flex items-center justify-center shadow-xl">
                    <span className="text-white font-display text-2xl tracking-tighter">AI</span>
                    </div>
                    <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Human + AI</h3>
                    <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase mt-1.5 font-bold">The perfect combination</p>
                    </div>
                </div>

                <div className="space-y-8">
                    {[
                    { title: "Discovery", desc: "We learn about your business, goals, and audience" },
                    { title: "Strategy", desc: "Human-led planning with proven frameworks" },
                    { title: "AI-Assisted Design", desc: "Rapid prototyping and iteration with AI tools" },
                    { title: "Human Refinement", desc: "Expert review and polish for quality assurance" }
                    ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-5 group">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                        <span className="text-[#F5E6D3] text-sm font-bold font-serif">{idx + 1}</span>
                        </div>
                        <div>
                        <h4 className="text-white font-bold mb-1.5 uppercase text-sm tracking-widest">{step.title}</h4>
                        <p className="text-white/50 text-xs leading-relaxed font-medium">{step.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                    <div className="flex items-center justify-between">
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Expected Result</span>
                    <span className="text-[#F5E6D3] font-bold uppercase text-[10px] tracking-[0.2em]">Websites that convert</span>
                    </div>
                </div>
                </div>
            </Reveal>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-black/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-black/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
