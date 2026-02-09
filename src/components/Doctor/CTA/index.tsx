import React, { useRef } from 'react';
import { Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CTA: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax Setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.2]);

  return (
    <section ref={containerRef} className="py-32 bg-[#132333] relative overflow-hidden flex items-center justify-center min-h-[60vh] border-t border-white/5">
        {/* Parallax Background Texture */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-[-50%] w-[200%] h-[200%] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
      />
      
      {/* Decorative Gradient Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full pointer-events-none"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <span className="text-white/80 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Take the next step</span>
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
          Ready to transform <br/> your brand?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Let's build a system that keeps your schedule full and your audience engaged.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => window.open('https://calendly.com/itseg/segmeet', '_blank')}
            className="px-8 py-4 bg-white text-brand-brick font-bold rounded-none hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Schedule a Strategy Call
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
