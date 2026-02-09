import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "Flame Japanese Hibachi",
  "The Golden Fork",
  "Metro Bistro",
  "Ocean View Dining",
  "Urban Kitchen"
];

const LogoCloud: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10"
        >
          Partnering with Remarkable Venues
        </motion.p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner, index) => (
                <motion.div 
                  key={partner} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                   <span className="text-xl md:text-2xl font-bold text-gray-700">{partner}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
