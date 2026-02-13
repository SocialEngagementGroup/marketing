import React from 'react';
import { Search, Star, UtensilsCrossed, BarChart3, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Be Discovered Now",
    subtitle: "Local SEO",
    description: "When someone searches 'best Italian restaurant near me', you need to be first. We rank you for high-intent searches so hungry diners find you exactly when they're ready to eat.",
    icon: <Search className="h-8 w-8" />,
    stats: "#1 Rankings"
  },
  {
    title: "Build Reputation",
    subtitle: "Social Proof",
    description: "Potential diners scroll past restaurants without recent reviews or mouthwatering photos. We automate review collections and create content that makes new diners eager to book.",
    icon: <Star className="h-8 w-8" />,
    stats: "+55% Trust"
  },
  {
    title: "Fill Reservation Books",
    subtitle: "Paid Ads",
    description: "We run Google Search Ads, Local Service Ads, and Instagram campaigns that put your restaurant front and center, capturing reservations meant for your competitors.",
    icon: <UtensilsCrossed className="h-8 w-8" />,
    stats: "High Bookings"
  },
  {
    title: "Track What Works",
    subtitle: "Analytics",
    description: "No more guessing. We provide clear dashboards showing which platforms drive reservations, what posts get engagement, and which promotions actually fill tables.",
    icon: <BarChart3 className="h-8 w-8" />,
    stats: "Clear ROI"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white relative text-brand-black overflow-hidden">
      
      {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#A64942]/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#B95D56]/5 to-transparent pointer-events-none" />

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
                <h2 className="text-[#A64942] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">What We Provide</h2>
                <h3 className="text-5xl md:text-6xl font-bold text-brand-black mb-8 leading-none">
                    Complete <br/>
                    <span className="text-gray-400">Dining Engine.</span>
                </h3>
                <p className="text-lg text-gray-500 font-light mb-8 leading-relaxed">
                    Siloed marketing fails. We build interconnected systems where SEO, reviews, and ads work together to turn hungry searchers into loyal regulars.
                </p>
                <div className="hidden lg:block w-full h-[1px] bg-gray-100 mt-12"></div>
                <div className="hidden lg:flex items-center gap-4 mt-8">
                     <div className="w-12 h-12 rounded-2xl bg-[#A64942]/10 flex items-center justify-center text-[#A64942] mb-8">
</div>
                     <span className="text-xs uppercase tracking-widest text-gray-400">Accepting New Partners</span>
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
                        className="p-8 pb-12 rounded-[2.5rem] bg-[#F9EFEE] border border-gray-100 hover:border-[#A64942]/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A64942]/5 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#A64942]/10 transition-all duration-500"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                            <div className="flex justify-between items-start">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#A64942] mb-8 group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <ArrowUpRight className="text-gray-400 group-hover:text-brand-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </div>

                            <div className="mt-8">
                                <div className="text-xs font-bold tracking-widest text-[#B95D56] uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {service.subtitle}
                                </div>
                                <h4 className="text-2xl font-bold text-[#A64942] font-outfit mb-4 leading-tight">{service.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>

                            <div className="border-t border-gray-100 pt-4 mt-auto">
                                <span className="text-xs font-mono text-gray-400 group-hover:text-brand-black transition-colors">
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
