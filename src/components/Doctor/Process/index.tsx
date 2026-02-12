import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const points = [
    { label: "Universality", value: "Standardized growth systems for all medical specialties." },
    { label: "Conservation", value: "Preserving your unique practice voice and patient trust." },
    { label: "Variability", value: "Tailored strategies that adapt to your local market needs." }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-8">
               <div className="w-12 h-1 bg-brand-healist-lime mb-6" />
               <h3 className="text-3xl sm:text-4xl font-bold text-brand-healist-charcoal mb-4">DNA Barcoding</h3>
               <p className="text-sm sm:text-base text-gray-400 font-medium mb-10 sm:mb-12">
                 DNA barcoding is a method for identifying the specific growth levers of your practice based on short, standardized regions of your digital footprint.
               </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
               {points.map((point, index) => (
                 <div key={index} className="flex flex-col group">
                    <span className="text-brand-healist-lime text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 transition-transform group-hover:translate-x-1 duration-300 inline-block">{point.label}</span>
                    <p className="text-brand-healist-charcoal font-bold text-sm sm:text-base tracking-tight">{point.value}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
                alt="DNA Analysis Visual"
                className="w-full h-[300px] sm:h-[400px] lg:h-auto object-cover lg:object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Process;
