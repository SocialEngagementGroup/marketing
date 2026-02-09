import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextReveal } from '../../Common/ui/TextReveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      
      {/* Abstract Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-brick/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-[20%] left-[-20%] w-[700px] h-[700px] bg-orange-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-brand-beige rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="max-w-5xl flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block"
          >
             <span className="px-4 py-1.5 rounded-full border border-brand-brick/30 bg-brand-white text-brand-brick text-xs font-bold tracking-widest uppercase shadow-sm">
               Restaurant Marketing Agency
             </span>
          </motion.div>

          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-black tracking-tight leading-[1.1] flex flex-col items-center">
              <TextReveal className="justify-center">Marketing that fills</TextReveal>
              <div className="flex flex-wrap justify-center gap-x-4">
                 <TextReveal className="text-brand-brick justify-center" delay={0.4}>your tables</TextReveal>
                 <TextReveal className="justify-center" delay={0.6}>every day.</TextReveal>
              </div>
            </h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We help restaurants attract diners when they’re ready to eat, build a reputation that keeps them coming back, and run smart campaigns that turn online searches into booked tables.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              className="px-8 py-4 bg-brand-black text-white font-bold rounded-none hover:bg-brand-brick transition-all duration-300 shadow-xl hover:shadow-brand-brick/20"
              onClick={() => window.open('https://calendly.com/itseg/segmeet', '_blank')}
            >
              Schedule a Strategy Call
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
