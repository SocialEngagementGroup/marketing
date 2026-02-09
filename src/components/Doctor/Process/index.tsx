import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, BarChart2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Deep Dive Discovery",
    description: "We audit your digital footprint, analyze competitor gaps, and identify high-leverage opportunities.",
    icon: <Search className="w-6 h-6" />
  },
  {
    id: "02",
    title: "Strategic Blueprint",
    description: "We craft a bespoke roadmap. From content pillars to ad creative, every touchpoint is designed.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: "03",
    title: "Precision Launch",
    description: "Execution with zero friction. We deploy campaigns across Meta, Google, and organic channels.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: "04",
    title: "Relentless Optimization",
    description: "Launch is just day one. We analyze data daily to lower acquisition costs and increase quality.",
    icon: <BarChart2 className="w-6 h-6" />
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <motion.div 
                initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                className="max-w-2xl"
            >
                <span className="text-brand-brick font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                   <span className="w-8 h-[2px] bg-brand-brick"></span> The Blueprint
                </span>
                <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-brand-black">
                    From stranger <br/>
                    to <span className="text-brand-brick italic">loyal patient.</span>
                </h2>
            </motion.div>
             <motion.div 
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 md:mt-0"
            >
                <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed">
                   A proven system designed to remove the guesswork from medical practice growth. We don't hope for results; we engineer them.
                </p>
            </motion.div>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-brand-brick"
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
                        <div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200 -z-10"></div>
                        
                        <div className="bg-white relative p-8 h-full border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 ease-out rounded-none overflow-hidden">
                            
                            {/* Number Background Watermark */}
                            <span className="absolute -right-4 -top-8 text-[120px] font-bold text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-none select-none pointer-events-none">
                                {step.id}
                            </span>

                            {/* Icon Indicator */}
                            <div className="relative z-10 mb-6 flex items-center justify-between">
                                <div className="w-16 h-16 bg-brand-brick text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <CheckCircle2 className="w-6 h-6 text-gray-200 group-hover:text-brand-brick transition-colors" />
                            </div>

                            <h3 className="relative z-10 text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-brick transition-colors">
                                {step.title}
                            </h3>
                            <p className="relative z-10 text-gray-500 text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {/* Bottom colored bar */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-brick group-hover:w-full transition-all duration-500 ease-in-out"></div>
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
