import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-28 pb-20 lg:pt-16 lg:pb-12">
      
      {/* Subtle Background & Forest Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#F0F4F2] to-white" />
        
        {/* Floating Background Particles */}
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, 40, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[5%] w-12 h-12 bg-[#064232]/5 rounded-full blur-xl hidden lg:block"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, -50, 0], rotate: [0, -60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-24 h-24 bg-[#064232]/5 rounded-full blur-2xl hidden lg:block"
        />
      </div>

      <div className="relative z-20 max-w-[1850px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Content */}
          <div className="text-center lg:text-left z-10 pt-8 lg:pt-0 lg:translate-y-4 lg:translate-x-32 flex flex-col items-center lg:items-start">

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-bold tracking-[0.3em] text-[#A3E635] uppercase mb-4 block">
                High-Performance Website Development
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-[#064232] leading-[1.1] tracking-tight mb-8">
                Built by People, <br />
                <span className="text-[#0A5D46]">Powered by AI</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-2xl font-medium font-outfit"
            >
              Need a professional website that actually represents your business? Building a high-impact website shouldn’t take months or cost a fortune. We combine human strategy with AI-powered execution to deliver websites that look great and turn visitors into real inquiries.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 w-full"
            >
              <button 
                className="group w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-5 bg-[#064232] text-white text-base lg:text-xl font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#042d22] hover:shadow-2xl hover:shadow-[#064232]/30 transition-all duration-300 shadow-xl"
                onClick={() => window.open('https://calendly.com/itseg/segmeet', '_blank')}
              >
                Start With Strategy
                <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visuals */}
          <div className="relative hidden lg:flex justify-center items-center h-[450px] sm:h-[500px] lg:h-[550px] lg:translate-x-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full h-full max-w-[1000px] flex items-center justify-center pt-8"
            >
              {/* Decorative Background Frame */}
              <div className="absolute inset-0 bg-[#064232]/5 rounded-[4rem] -rotate-3 scale-105 z-0" />
              <div className="absolute inset-0 border-2 border-[#064232]/10 rounded-[4rem] rotate-3 scale-[1.02] z-0" />

              {/* Main Photo Container */}
              <div className="relative z-10 w-full h-[100%] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                <img 
                  src="/assets/images/bg_mountains.jpg" 
                  alt="Professional Web Solutions" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064232]/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Decorative Accents */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#064232]/10 rounded-full blur-2xl z-0" />
              <div className="absolute top-[20%] -left-10 w-24 h-24 border border-[#064232]/20 rounded-full flex items-center justify-center z-0 animate-spin-slow">
                 <div className="w-1.5 h-1.5 bg-[#064232]/30 rounded-full" />
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
