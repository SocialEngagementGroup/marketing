import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-28 pb-20 lg:pt-16 lg:pb-12">
      
      {/* Clean Background */}
      <div className="absolute inset-0 z-0 bg-white" />

      <div className="relative z-20 max-w-[1850px] mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="text-sm md:text-base font-bold tracking-widest text-[#064232] uppercase mb-4 block">
            Built by People, Powered by AI
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-[#064232] leading-[1.1] tracking-tight mb-8">
            Building Website That’s Fast <br className="hidden lg:block"/>
            <span className="text-[#064232]">Without Cutting Corners</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl font-medium font-outfit"
        >
          Need a professional website that actually represents your business? Building a high-impact website shouldn’t take months or cost a fortune. We combine human strategy with AI-powered execution to deliver websites that look great and turn visitors into real inquiries.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-5 w-full"
        >
          <button 
            className="group w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-5 bg-[#064232] text-white text-base lg:text-xl font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-white hover:text-[#064232] transition-all duration-300 shadow-xl border-2 border-[#064232]"
            onClick={() => window.open('https://calendly.com/itseg/segmeet', '_blank')}
          >
            Start With Strategy
            <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
