import React from 'react';
import { motion } from 'framer-motion';

// Using text placeholders as logos since we don't have the actual SVG assets.
const partners = [
  "Advanced Dermatology",
  "Family Health Plus",
  "City Cardiology",
  "Metro Pediatrics",
  "Valley Dental Group"
];

const LogoCloud: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-12"
        >
          Trusted by Top Medical Practices
        </motion.p>
        
        <div className="flex flex-col items-center gap-12">
            {/* First Row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {partners.slice(0, 4).map((partner, index) => (
                    <motion.div 
                      key={partner} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center justify-center"
                    >
                       <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">{partner}</span>
                    </motion.div>
                ))}
            </div>
            
            {/* Second Row */}
            <div className="flex flex-wrap justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                   <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">{partners[4]}</span>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
