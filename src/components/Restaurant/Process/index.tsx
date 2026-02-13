import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, BarChart2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Menu & Vibe Audit",
    description: "We analyze your digital presence, menu appeal, and competitor gaps to identify how to make you the #1 choice in your area.",
    icon: <Search className="w-6 h-6" />
  },
  {
    id: "02",
    title: "Strategic Blueprint",
    description: "We craft a roadmap for reservations. From optimizing your Google profile to designing crave-worthy ad creatives.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: "03",
    title: "Launch Campaigns",
    description: "Execution with zero friction. We deploy ads on Google, Instagram, and Facebook to capture hungry diners instantly.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: "04",
    title: "Fill Tables & Optimize",
    description: "Launch is just day one. We analyze reservation data daily to lower cost-per-booking and increase table turnover.",
    icon: <BarChart2 className="w-6 h-6" />
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-32 bg-[#C2410C] relative overflow-hidden text-white">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <motion.div 
                initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                className="max-w-2xl"
            >
                <span className="text-xs font-bold tracking-[0.3em] text-white/80 uppercase mb-4 block">
                   <span className="w-8 h-[2px] bg-white/40"></span> The Blueprint
                </span>
                <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white">
                    From hungry searcher <br/>
                    to <span className="text-[#EA580C] italic">loyal regular.</span>
                </h2>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 md:mt-0"
            >
                <p className="text-white/60 max-w-sm text-lg font-light leading-relaxed">
                   A proven system designed to remove the guesswork from restaurant growth. We don't hope for bookings; we engineer them.
                </p>
            </motion.div>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-[#EA580C]"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100, scale: 0.8, filter: "blur(20px)" }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            delay: index * 0.2, 
                            duration: 0.8, 
                            type: "spring",
                            bounce: 0.4 
                        }}
                        className="relative group pt-12 md:pt-0"
                    >
                        {/* Vertical Line for Mobile */}
                        <div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] bg-white/10 -z-10"></div>
                        
                        <div className="bg-[#8E3E38] relative p-8 h-full border border-white/5 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 ease-out rounded-none overflow-hidden">
                            
                            {/* Number Background Watermark */}
                            <span className="absolute -right-4 -top-8 text-[120px] font-bold text-white opacity-0 group-hover:opacity-5 transition-opacity duration-500 leading-none select-none pointer-events-none">
                                {step.id}
                            </span>

                            {/* Icon Indicator */}
                            <div className="relative z-10 mb-6 flex items-center justify-between">
                                <div className="w-16 h-16 bg-[#EA580C] text-[#8E3E38] flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <CheckCircle2 className="w-6 h-6 text-white/20 group-hover:text-[#EA580C] transition-colors" />
                            </div>

                            <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-[#EA580C] transition-colors">
                                {step.title}
                            </h3>
                            <p className="relative z-10 text-white/60 text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {/* Bottom colored bar */}
                             <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#EA580C] group-hover:w-full transition-all duration-500 ease-in-out"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
