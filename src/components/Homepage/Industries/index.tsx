import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Industry {
  id: number;
  title: string;
  industry: string;
  description: string;
  image: string;
  route: string;
  position?: string;
  status: 'live' | 'coming-soon';
}

const industries: Industry[] = [
  {
    id: 1,
    title: 'Lawyers',
    industry: 'Legal Services',
    description: 'Professional marketing for law firms and legal practices',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    route: '/marketing-for-law-firm',
    status: 'live',
  },
  {
    id: 2,
    title: 'Doctors',
    industry: 'Healthcare',
    description: 'Modern marketing for clinics and healthcare providers',
    image: 'https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?w=800&q=80',
    route: '/marketing-for-doctors',
    status: 'live',
  },
  {
    id: 3,
    title: 'Restaurants',
    industry: 'Food & Dining',
    description: 'Strategic marketing to fill tables and build reputation',
    image: 'https://images.unsplash.com/photo-1554679665-f5537f187268?w=800&q=80',
    route: '/marketing-for-restaurants',
    position: 'object-bottom',
    status: 'coming-soon',
  },
  {
    id: 4,
    title: 'Web Solution',
    industry: 'Digital Services',
    description: "AI-powered website building that's fast and effective",
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
    route: '/website-solutions',
    status: 'coming-soon',
  },
];

/**
 * Homepage Industries Section
 * Modernized with Staggered Cascading Reveal
 */
const HomepagePortfolio: React.FC = () => {
  return (
    <section className="md:h-screen w-full flex items-center justify-center overflow-hidden bg-brand-brick relative perspective-1000 pt-20 pb-20 md:py-0">
      {/* Background Decorative Element (Inspired by Case Study skew) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-6 md:mb-12 reveal-text-container">
          <span className="text-[#F5E6D3] font-bold tracking-widest uppercase text-xs mb-4 block reveal-text-item" style={{ animationDelay: '0.1s' }}>
            Specialized Solutions
          </span>
          <h2 className="text-4xl md:text-7xl font-display text-white tracking-tight uppercase reveal-text-item" style={{ animationDelay: '0.2s' }}>
            Industries We Work With
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {industries.map((item, index) => {
            const isLive = item.status === 'live';
            if (isLive) {
              return (
                <div 
                  key={item.id} 
                  className="reveal-text-item" 
                  style={{ animationDelay: `${0.4 + index * 0.15}s` }}
                >
                  <Link
                    to={item.route}
                    className="group relative block overflow-hidden rounded-xl bg-black/20 border border-white/5 aspect-[3/4] cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-white/20"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-110 ${item.position || 'object-center'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    

                    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end md:translate-y-2 transition-transform duration-500 ease-out-expo">
                      <span className="hidden md:block text-[#F5E6D3] text-[10px] uppercase tracking-widest font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {item.industry}
                      </span>
                      <h3 className="text-xl font-outfit font-bold text-white tracking-tight flex items-center gap-2 h-7 whitespace-nowrap">
                        {item.title}
                        <ArrowRight className="w-4 h-4 text-[#F5E6D3]" />
                      </h3>
                      
                      <div className="hidden md:block min-h-[40px] mt-2">
                        <p className="font-outfit text-white/60 text-sm leading-relaxed line-clamp-2">
                           {item.description}
                        </p>
                      </div>
                      
                      <div className="hidden md:grid transition-[grid-template-rows] duration-500 ease-out-expo mt-2 grid-rows-[0fr] group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <span className="inline-flex items-center gap-2 text-[#F5E6D3] text-xs font-bold uppercase tracking-wider">
                            View <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }

            return (
              <div 
                key={item.id} 
                className="reveal-text-item" 
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                <div className="group relative block overflow-hidden rounded-xl bg-black/20 border border-white/5 aspect-[3/4] cursor-default transition-all duration-500 hover:shadow-2xl hover:border-white/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out-expo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm px-4 h-8 rounded-full border border-white/10 flex items-center">
                    <span className="text-[10px] text-white/80 uppercase tracking-wider font-bold">Coming Soon</span>
                  </div>

                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-outfit font-bold text-white tracking-tight flex items-center gap-2 h-7 whitespace-nowrap">
                      {item.title}
                    </h3>
                    <div className="hidden md:block min-h-[40px] mt-2">
                      <p className="font-outfit text-white/60 text-sm leading-relaxed line-clamp-2">
                         {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-6 md:mt-12 reveal-text-item" style={{ animationDelay: '1s' }}>
          <a 
            href="https://calendly.com/itseg/segmeet"
            target="_blank"
            rel="noopener noreferrer" 
            className="group inline-flex items-center gap-2 text-white/50 hover:text-[#F5E6D3] transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Don't See Your Industry? Contact Us
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomepagePortfolio;
