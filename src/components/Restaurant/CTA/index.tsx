import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden bg-[#A64942]">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} 
      />

      {/* Background Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden">
        <h2 className="text-[20rem] font-black text-white/[0.03] leading-none translate-y-1/4 translate-x-[10%] font-outfit uppercase">
          Fill
        </h2>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold tracking-[0.3em] text-white/80 uppercase mb-6 block">
            Ready to get started?
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-outfit">
            Let's Fill Your <br />
            Reservation Book
          </h2>

          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Your restaurant's flavors deserve to be seen and tasted. Let us build a system that keeps your tables full with the guests who will love your hospitality.
          </p>

          <div className="flex justify-center">
            <button 
              onClick={() => window.open('https://calendly.com/itseg/segmeet', '_blank')}
              className="bg-white text-[#A64942] px-10 py-5 rounded-xl font-bold flex items-center gap-3 hover:bg-[#B95D56] hover:text-white hover:ring-1 hover:ring-white/30 transition-all duration-300 shadow-2xl group/btn text-lg"
            >
              Schedule a Strategy Call
              <ArrowUpRight className="w-6 h-6 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
