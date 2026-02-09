import React from 'react';
import { Search, Star, BarChart3, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Paid Advertising",
    subtitle: "Precision Targeting",
    description: "We don't just buy ads; we buy customers. Our campaigns utilize advanced audience modeling to turn searches into scheduled appointments.",
    icon: <BarChart3 className="h-8 w-8" />,
    stats: "3.5x ROI Avg."
  },
  {
    title: "Reputation Mgmt",
    subtitle: "Trust Automation",
    description: "Your reputation is your currency. We automate review collection and showcase testimonials to build immediate trust with new patients.",
    icon: <Star className="h-8 w-8" />,
    stats: "+40% Conversion"
  },
  {
    title: "Local SEO",
    subtitle: "Digital Dominance",
    description: "Dominate your local market. We optimize your entire digital footprint to ensure you rank #1 for high-intent 'near me' searches.",
    icon: <Search className="h-8 w-8" />,
    stats: "#1 Rankings"
  },
  {
    title: "Content Marketing",
    subtitle: "Storytelling",
    description: "Content that converts. We create authentic storytelling assets that encapsulate your brand's voice and mission.",
    icon: <MessageCircle className="h-8 w-8" />,
    stats: "High Engagement"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-black relative text-white overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-brick/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Header / Sidebar */}
            <motion.div 
                className="lg:col-span-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-brand-brick font-bold tracking-[0.2em] uppercase text-sm mb-6">Our Expertise</h2>
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-none">
                    Comprehensive <br/>
                    <span className="text-gray-500">Ecosystems.</span>
                </h3>
                <p className="text-lg text-gray-400 font-light mb-8 leading-relaxed">
                    Siloed marketing fails. We build interconnected systems where paid, organic, and reputation strategies feed into one another for exponential growth.
                </p>
                <div className="hidden lg:block w-full h-[1px] bg-white/10 mt-12"></div>
                <div className="hidden lg:flex items-center gap-4 mt-8">
                     <div className="h-2 w-2 rounded-full bg-brand-brick animate-pulse"></div>
                     <span className="text-xs uppercase tracking-widest text-gray-500">Accepting New Partners</span>
                </div>
            </motion.div>

            {/* Services Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50, rotateX: -15 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
                        className="group relative bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-brick/20 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-brick/40 transition-all duration-500"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-white/5 rounded-lg text-brand-brick group-hover:text-white group-hover:bg-brand-brick transition-all duration-300">
                                    {service.icon}
                                </div>
                                <ArrowUpRight className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </div>

                            <div className="mt-8">
                                <span className="text-brand-brick text-xs font-bold uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    {service.subtitle}
                                </span>
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-brick transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-4 mt-auto">
                                <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors">
                                    Impact: {service.stats}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
