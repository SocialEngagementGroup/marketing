import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';

const insights = [
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    title: 'How AI is Changing Web Dev',
    description: 'Explore the latest trends in AI-driven development and how it impacts your business.',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
    title: 'The Future of Digital Strategy',
    description: 'Learn why a clean, modern presence is more important than ever in 2026.',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    title: 'SEO Best Practices for Next.js',
    description: 'Discover how to optimize your Next.js site for maximum visibility and performance.',
    link: '#'
  },
];

const Insights: React.FC = () => {
  return (
    <section id="insights" className="relative py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal delay={200}>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-forest leading-tight tracking-tight">
              Insights & Updates
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {insights.map((item, index) => (
            <Reveal key={index} delay={300 + index * 100}>
                <div className="flex flex-col group">
                    <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <h3 className="text-sm font-bold text-brand-forest mb-3 uppercase tracking-tight">
                        {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6">
                        {item.description}
                    </p>
                    <a 
                        href={item.link} 
                        className="text-[10px] font-bold text-brand-forest uppercase tracking-widest border border-gray-100 hover:bg-brand-forest hover:text-white transition-all py-3 px-6 rounded-full inline-block text-center w-fit shadow-sm"
                    >
                        Read More
                    </a>
                </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 text-center">
            <Reveal delay={1000}>
                <button className="text-[10px] font-bold text-brand-forest uppercase tracking-widest hover:text-blue-500 transition-colors">
                    View all posts
                </button>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Insights;
