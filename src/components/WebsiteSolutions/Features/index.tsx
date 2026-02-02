import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';

const solutions = [
  {
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5?q=80&w=2070&auto=format&fit=crop',
    title: 'Custom Websites',
    from: 'SEO',
    to: 'VIS',
    price: '$2,500'
  },
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop',
    title: 'E-commerce Stores',
    from: 'UI',
    to: 'UX',
    price: '$4,500'
  },
  {
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
    title: 'SaaS Platforms',
    from: 'DEV',
    to: 'APP',
    price: '$8,000'
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden bg-brand-beige-light/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal delay={200}>
            <span className="text-brand-forest/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
              OUR SOLUTIONS
            </span>
          </Reveal>
          <Reveal delay={400}>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-forest leading-tight tracking-tight">
              Popular solutions right now
            </h2>
          </Reveal>
          <Reveal delay={600}>
            <p className="text-gray-500 text-sm mt-4">
              Explore our most requested website solutions and digital products.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((item, index) => (
            <Reveal key={index} delay={300 + index * 100}>
                <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
                            <span className="text-xs font-bold text-brand-forest">from {item.price}</span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex flex-col">
                                <span className="text-xl font-display text-brand-forest">{item.from}</span>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Found.</span>
                            </div>
                            <div className="flex-grow mx-4 relative flex items-center">
                                <div className="h-[1px] w-full bg-gray-200" />
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-300" />
                                <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-300" />
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-xl font-display text-brand-forest">{item.to}</span>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Visual</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col mb-6">
                            <h4 className="text-lg font-bold text-brand-forest mb-2">{item.title}</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">High-performance digital presence tailored for growth.</p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-center">
                            <button className="text-[10px] font-bold text-brand-forest uppercase tracking-[0.2em] hover:text-blue-500 transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Reveal delay={1000}>
            <button className="inline-flex items-center gap-4 text-brand-forest hover:text-white transition-all bg-white hover:bg-brand-forest font-bold uppercase tracking-widest text-[10px] px-8 py-4 rounded-full border border-gray-100 shadow-sm">
              Explore All
              <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Features;
