import React from 'react';
import { ArrowRight, Code, Globe, Laptop, Smartphone, Search, Database, Cpu } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';

const CTA: React.FC = () => {
  const floatingIcons = [
    { icon: Code, x: '10%', y: '20%' },
    { icon: Globe, x: '80%', y: '15%' },
    { icon: Laptop, x: '15%', y: '70%' },
    { icon: Smartphone, x: '85%', y: '75%' },
    { icon: Search, x: '50%', y: '10%' },
    { icon: Database, x: '30%', y: '85%' },
    { icon: Cpu, x: '70%', y: '85%' },
  ];

  return (
    <section id="cta" className="relative py-32 overflow-hidden bg-brand-forest min-h-[70vh] flex items-center">
      {/* Background with mountain theme */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
          alt="Mountain background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-forest/60" />
      </div>

      {/* Floating Icons arrangement */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {floatingIcons.map((item, idx) => (
            <div 
                key={idx} 
                className="absolute w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float text-left"
                style={{ 
                    left: item.x, 
                    top: item.y,
                    animationDelay: `${idx * 0.5}s`,
                    animationDuration: `${5 + idx}s`
                }}
            >
                <item.icon className="w-5 h-5 text-white/40" />
            </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Reveal delay={200}>
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-white leading-tight mb-8">
              Ready to <span className="text-white/40 italic">build a</span> <br />
              better digital presence?
            </h2>
          </Reveal>

          <Reveal delay={400}>
            <button className="bg-white text-brand-forest px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all flex items-center gap-4 group shadow-2xl">
              Book Your Strategy Session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
