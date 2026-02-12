import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "Advanced Dermatology",
  "Family Health Plus",
  "City Cardiology",
  "Metro Pediatrics",
  "Valley Dental Group",
  "Elite Orthopedics"
];

const LogoCloud: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-12"
        >
          JOIN OUR LIST OF SATISFIED HEALTHCARE PROVIDERS
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-24 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
            {partners.map((partner, index) => (
                <motion.div 
                  key={partner} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center p-2"
                >
                   <span className="text-lg md:text-xl font-bold text-brand-healist-charcoal tracking-tight">{partner}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
