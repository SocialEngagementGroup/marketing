import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-28 pb-20 lg:pt-16 lg:pb-12">
      
      {/* Subtle Background Blobs (Kept from original) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#F9EFEE]/50 to-white" />
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#A64942]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-[20%] left-[-20%] w-[700px] h-[700px] bg-[#B95D56]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#F9EFEE]/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-20 max-w-[1850px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Content */}
          <div className="text-center lg:text-left z-10 pt-8 lg:pt-0 lg:translate-y-4 lg:translate-x-12 xl:translate-x-32 flex flex-col items-center lg:items-start tracking-tight">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-brand-black leading-[1.1] tracking-tight mb-8">
                Marketing for <br className="hidden lg:block"/>
                <span className="text-[#A64942]">Restaurants</span> <br className="hidden lg:block"/>
                That Fills Your Tables <br className="hidden lg:block"/>
                Everyday
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl font-light font-outfit"
            >
              We help restaurants attract diners when they’re ready to eat, build a reputation that keeps them coming back, and run smart campaigns that turn online searches into booked tables so you can focus on what you do best: serving amazing food.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 w-full"
            >
              <button 
                className="group w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-5 bg-brand-black text-white text-base lg:text-xl font-bold rounded-none flex items-center justify-center gap-3 hover:bg-[#A64942] hover:shadow-2xl hover:shadow-[#A64942]/30 transition-all duration-300 shadow-xl"
                onClick={() => window.open('https://calendly.com/itseg/segmeet', '_blank')}
              >
                Schedule a Strategy Call
                <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visuals - Unique Photo Frame */}
          <div className="relative hidden lg:flex justify-center items-center h-[450px] sm:h-[500px] lg:h-[600px] lg:translate-x-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full h-full max-w-[900px] flex items-center justify-center pt-8"
            >
              {/* Outer Decorative offset border */}
              <div className="absolute inset-0 border-2 border-[#A64942]/20 rounded-tl-[8rem] rounded-br-[8rem] rotate-2 scale-[1.03] z-0" />
              <div className="absolute inset-0 bg-[#F9EFEE] rounded-tl-[8rem] rounded-br-[8rem] -rotate-2 scale-100 z-0" />

              {/* Main Photo Container Wrapper (Maintains border and shape) */}
              <div className="relative w-full h-full rounded-tl-[7rem] rounded-br-[7rem] shadow-2xl border-8 border-white p-0 bg-white z-10">
                {/* Inner Container for Overflows and Scale */}
                <div className="relative w-full h-full rounded-tl-[6.5rem] rounded-br-[6.5rem] overflow-hidden group [transform:translateZ(0)]">
                  <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                    alt="Elegant Restaurant Interior" 
                    className="w-full h-full object-cover transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#A64942]/40 to-transparent opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating Badge inside image */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-tl-2xl rounded-br-2xl border border-white/50 shadow-xl flex items-center gap-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 h-12 bg-[#A64942] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      5★
                    </div>
                    <div>
                      <p className="text-brand-black font-bold text-sm">More Bookings</p>
                      <p className="text-gray-500 text-xs">Consistent Growth</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#A64942]/10 rounded-full blur-3xl z-0" />
              <div className="absolute top-[15%] -left-12 w-28 h-28 border border-[#A64942]/20 rounded-full flex items-center justify-center z-0 animate-spin-slow">
                 <div className="w-2 h-2 bg-[#A64942]/40 rounded-full" />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
