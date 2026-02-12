import React from 'react';
import { Search, Star, BarChart3, MessageCircle, ArrowUpRight, FlaskRound as Flask } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Get Found by Patients Searching Now",
    subtitle: "Local SEO Mastery",
    description: "Patients are looking for a doctor, but your practice isn't showing up. Poor local SEO lets competitors capture appointments meant for you. We rank your practice for searches like 'primary care doctor near me' so the right patients find you.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Build Trust with Your Online Reputation",
    subtitle: "Reputation Management",
    description: "Potential patients hesitate when they don't see recent reviews or proof of quality care. We automate review collection and showcase patient testimonials that make new patients confident to book.",
    icon: <Star className="w-5 h-5" />,
  },
  {
    title: "Ads That Fill Your Appointment Calendar",
    subtitle: "High-Intent Ads",
    description: "Patients needing care now go to practices that appear first on Google. We run Google Search Ads and Local Service Ads to put your practice at the top when patients are ready to schedule.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Get Clarity with Real-Time Dashboards",
    subtitle: "Data Transparency",
    description: "Many practices spend on marketing without knowing what actually drives new patients. Our dashboards clearly show which campaigns bring appointment requests and which patients actually show up.",
    icon: <ArrowUpRight className="h-5 w-5" />,
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-brand-healist-charcoal relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] mx-4 my-8 sm:my-12">
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Header */}
            <motion.div 
                className="lg:col-span-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-1 rounded-full border border-gray-700 mb-6 font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest">
                  Marketing Services
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-[1.1]">
                    What We <br/>
                    Provide
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed max-w-sm">
                    Strategic patient acquisition systems designed to scale your medical practice and fill your appointment book.
                </p>
            </motion.div>

            {/* Services Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group relative bg-[#2A2A2A] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 hover:bg-[#333333] transition-all duration-500 flex flex-col justify-between min-h-[280px] sm:min-h-[340px] border border-transparent hover:border-white/10"
                    >
                        <div className="flex justify-between items-start">
                             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3A3A3A] flex items-center justify-center text-gray-300 transition-transform duration-500 group-hover:scale-110">
                                {service.icon}
                             </div>
                             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-healist-lime flex items-center justify-center -mr-1 -mt-1 sm:-mr-2 sm:-mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl group-hover:rotate-12">
                                <ArrowUpRight className="w-4 h-4 sm:w-[1.25rem] sm:h-[1.25rem] text-brand-healist-charcoal" />
                             </div>
                        </div>

                        <div className="mt-8 sm:mt-12">
                            <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                                {service.title}
                            </h4>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </div>

                        <div className="mt-auto pt-6 sm:pt-8 flex justify-end">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#3A3A3A] flex items-center justify-center text-brand-healist-lime opacity-80 group-hover:opacity-100 transition-all duration-500">
                                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
