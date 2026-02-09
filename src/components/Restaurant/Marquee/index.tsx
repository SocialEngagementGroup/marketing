import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  const marqueeText = "HOSPITALITY • TASTE • RESERVATIONS • GROWTH • DINING • EXPERIENCE • REPUTATION • ";
  
  return (
    <div className="bg-brand-brick py-4 overflow-hidden border-y border-brand-brick flex relative z-20">
      <motion.div 
        className="whitespace-nowrap flex"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-white font-bold text-lg md:text-2xl tracking-[0.2em] mx-4 uppercase">
            {marqueeText}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
