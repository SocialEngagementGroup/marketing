import React from 'react';
import { Layout, Palette, Zap } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';

const steps = [
  {
    icon: Layout,
    title: 'Curate Layouts',
    description: 'We analyze your industry and competitors to identify the most effective layout patterns for your specific business type.',
  },
  {
    icon: Palette,
    title: 'Prototype Design',
    description: 'Using AI-assisted tools, we rapidly generate multiple design concepts—each fully customizable to your brand.',
  },
  {
    icon: Zap,
    title: 'Quality Delivery',
    description: 'The final result is polished by human experts to ensure it meets the highest standards of design and functionality.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-32 overflow-hidden bg-white">
      {/* Background image decor similar to reference */}
      <div className="absolute inset-0 z-0 text-left">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 text-left">
          <Reveal delay={200}>
            <span className="text-brand-forest/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
              OUR PROCESS
            </span>
          </Reveal>
          <Reveal delay={400}>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-forest leading-tight tracking-tight">
              From strategy to design in 3 steps
            </h2>
          </Reveal>
          <Reveal delay={600}>
            <p className="text-gray-500 text-sm mt-4">
              Our process is designed to move quickly without losing quality.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Reveal key={index} delay={300 + index * 100}>
                <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col items-start group hover:shadow-xl transition-all duration-500 text-left">
                    <div className="w-16 h-16 rounded-2xl bg-brand-forest/5 flex items-center justify-center mb-10 group-hover:bg-brand-forest transition-colors duration-500">
                        <step.icon className="w-7 h-7 text-brand-forest group-hover:text-white transition-colors duration-500" />
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                        <span className="text-brand-forest/20 font-bold text-sm uppercase tracking-widest mb-2 italic">
                            / 0{index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-brand-forest mb-4">
                            {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            {step.description}
                        </p>
                    </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
