import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'Aref-Black.png',
  'Capiton-Black.png',
  'FJH-Black.png',
  'GT-Black.png',
  'Gravy-Stack-Black.png',
  'Infuse-Black.png',
  'MFC-Black.png',
  'NIPA-Black.png',
  'Rastegar-Black.png',
  'SC-Black.png',
  'SMF-Black.png',
  'Sporcle-Black.png',
];

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-8 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#064232] mb-6 leading-tight font-outfit"
          >
            Digital Partners & Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto mb-8 font-medium font-outfit"
          >
            We've helped businesses across various industries establish high-performance digital presence. Join our list of satisfied clients and transform your brand today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-[#064232] mx-auto rounded-full" 
          />
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
            }
            @media (min-width: 1024px) {
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            }
          `}
        </style>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative mt-8 lg:mt-16 overflow-hidden"
        >
          <div className="flex animate-marquee w-fit">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-4 md:px-8">
                <img
                  src={`/assets/logos/clients/${logo}`}
                  alt="Client Logo"
                  className="h-10 md:h-12 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustBar;
