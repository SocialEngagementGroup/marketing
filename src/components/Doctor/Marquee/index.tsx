import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  const marqueeText = "STRATEGY • PATIENT ACQUISITION • DATA SCIENCE • MEDICAL GROWTH • REPUTATION MGMT • ";
  
  return (
    <div className="bg-brand-healist-charcoal py-6 overflow-hidden flex relative z-20">
      <motion.div 
        className="whitespace-nowrap flex"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-brand-healist-lime font-bold text-lg md:text-xl tracking-[0.2em] mx-6 uppercase">
            {marqueeText}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
