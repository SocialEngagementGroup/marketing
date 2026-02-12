import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-28 pb-20 lg:pt-16 lg:pb-12">
      
      {/* Subtle Background & DNA Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#F9FBFA] to-white" />
        
        {/* Floating Background Particles */}
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, 40, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[5%] w-12 h-12 bg-brand-healist-lime/5 rounded-full blur-xl hidden lg:block"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, -50, 0], rotate: [0, -60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-24 h-24 bg-blue-500/5 rounded-full blur-2xl hidden lg:block"
        />
      </div>

      <div className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="text-center lg:text-left z-10 pt-8 lg:pt-0 lg:translate-y-4 flex flex-col items-center lg:items-start">

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-[#0A2647] leading-[1.1] tracking-tight mb-8">
                Marketing for <br />
                <span className="text-[#144272]">Medical Practices</span> <br />
                That Fills Your Calendar
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-2xl font-medium font-outfit"
            >
              We help healthcare providers attract the right patients and run targeted campaigns that turn searches into scheduled appointments.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 w-full"
            >
              <button 
                className="w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-5 bg-[#0A2647] text-white text-base lg:text-xl font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#081f3a] transition-all duration-300 shadow-xl"
                onClick={() => window.open('https://calendly.com/itseg/segmeet', '_blank')}
              >
                Schedule a Strategy Call
                <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visuals (Decoupled Architectural Flow) */}
          <div className="relative hidden lg:flex justify-center items-center h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden lg:translate-x-12">
            {/* Background Grid Layer - Static 3D foundation */}
            <div className="absolute inset-[-50%] z-0 opacity-[0.05] pointer-events-none">
              <div 
                className="w-full h-full" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(26, 32, 44, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 32, 44, 0.4) 1px, transparent 1px)', 
                  backgroundSize: '80px 80px' 
                }} 
              />
            </div>

            <div className="relative w-full h-full max-w-[600px] aspect-[4/5] scale-[0.8] sm:scale-100">
              {/* --- ADVANCED GEOMETRIC MODULES (Independent Flows) --- */}
              
              {/* Module 1: The "Engine" */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[35%] top-[25%] w-[200px] h-[200px] z-20"
              >
                <div className="w-full h-full bg-[#6366F1] rounded-2xl shadow-[0_20px_50px_rgba(99,102,241,0.3)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/40 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/60 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Module 2: Vertical Vector Pillar */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-[72%] top-[10%] w-[90px] h-[360px] bg-[#00A3E0] rounded-full p-4 shadow-xl border-4 border-white/10"
              >
                <div className="w-full h-full border-[2px] border-white/20 rounded-full flex flex-col justify-between items-center py-10">
                  <div className="w-2 h-[40px] rounded-full bg-white/40" />
                  <div className="w-6 h-6 rounded-full border-2 border-white/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
                  </div>
                  <div className="w-2 h-[80px] rounded-full bg-white/10" />
                </div>
              </motion.div>

              {/* Module 3: Digital Strip */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[10%] top-[40%] flex flex-col gap-3"
              >
                <div className="h-2 w-[140px] bg-[#E23744]/20 rounded-full" />
                <div className="w-[140px] h-[70px] bg-[#E23744] rounded-t-xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-2 left-2 w-8 h-1 bg-white/30 rounded-full" />
                </div>
                <div className="w-[140px] h-[70px] bg-[#F35F30] rounded-b-xl shadow-lg" />
              </motion.div>

              {/* Module 4: Circuitry Lines (Slower pulse) */}
              <motion.div 
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute left-[25%] top-[55%] w-[200px] h-[2px] bg-brand-healist-charcoal" />
                <div className="absolute left-[25%] top-[35%] w-[2px] h-[200px] bg-brand-healist-charcoal" />
                <div className="absolute left-[54%] top-[10%] w-[2px] h-[150px] bg-brand-healist-charcoal" />
                <div className="absolute left-[54%] top-[45%] w-[100px] h-[2px] bg-brand-healist-charcoal" />
              </motion.div>

              {/* Module 5: Solar Pill */}
              <motion.div 
                animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-[28%] top-[68%] w-[220px] h-[110px] bg-[#FDBA12] rounded-full border-8 border-white shadow-2xl flex p-1"
              >
                <div className="w-[60%] h-full bg-[#F35F30] rounded-l-full relative">
                  <div className="absolute inset-2 border-2 border-white/10 rounded-full" />
                </div>
                <div className="w-[40%] h-full flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white/50" />
                </div>
              </motion.div>

              {/* Module 6: Data Node Cluster */}
              <motion.div 
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-[0%] top-[15%] w-[140px] h-[140px] flex flex-wrap gap-2 p-4"
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-[#E23744]/10 border border-[#E23744]/30" />
                ))}
              </motion.div>

              {/* Module 7: Logic Gate */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute left-[58%] top-[62%] w-[160px] h-[160px] bg-[#6366F1]/5 border border-dashed border-[#6366F1]/40 rounded-3xl flex items-center justify-center"
              >
                <div className="w-[100px] h-[60px] bg-[#6366F1] rounded-tr-[40px] rounded-bl-[40px] shadow-lg flex items-center justify-center" />
              </motion.div>

              {/* Module 8: Dark Focal Diamond */}
              <motion.div 
                animate={{ rotate: [45, 50, 45] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[45%] top-[10%] w-[110px] h-[110px] bg-brand-healist-charcoal rounded-2xl rotate-45 flex items-center justify-center shadow-2xl"
              >
                <div className="w-full h-full border-4 border-white/10 rounded-2xl flex items-center justify-center">
                   <div className="w-4 h-4 bg-brand-healist-blue rounded-full shadow-[0_0_15px_rgba(3,52,110,0.8)]" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
