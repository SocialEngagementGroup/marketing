import React from 'react';
import { ChefHat, TrendingUp, Target, LayoutTemplate, Goal } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="values" className="py-32 bg-brand-black text-white relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    translateY: [0, -50, 0],
                    translateX: [0, 50, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-brick/10 rounded-full blur-[120px]" 
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.1, 1],
                    translateY: [0, 50, 0],
                    translateX: [0, -30, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[120px]" 
            />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
            >
                <span className="text-brand-brick font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us?</span>
                <h2 className="text-5xl md:text-6xl font-bold leading-none tracking-tight">
                    Built for <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-brick to-orange-400">restaurants.</span>
                </h2>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 md:mt-0"
            >
                <p className="text-gray-400 max-w-sm text-lg font-light border-l border-gray-700 pl-6">
                    More than a website, we build a guest-generating engine designed to fill tables.
                </p>
            </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            
            {/* Card 1: Guest Engine - Large */}
            <motion.div 
                variants={cardVariants}
                className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors duration-300 group relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                    <Target className="h-64 w-64 text-white" />
                </div>
                <div className="relative z-10">
                    <div className="h-12 w-12 bg-brand-brick/20 rounded-xl flex items-center justify-center mb-6 text-brand-brick">
                        <LayoutTemplate className="h-6 w-6" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Guest-Generating Engine</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                        This is not a “pretty website” project. It’s a structured system combining local SEO, ads, social proof, and conversion-focused design to consistently bring in guests who are ready to dine.
                    </p>
                </div>
            </motion.div>

            {/* Card 2: Built for Restaurants */}
            <motion.div 
                variants={cardVariants}
                className="bg-brand-brick text-white border border-transparent rounded-3xl p-10 hover:bg-brand-brick/90 transition-colors duration-300 relative overflow-hidden"
            >
                 <div className="absolute -bottom-10 -right-10 p-10 opacity-20 transform rotate-12">
                    <ChefHat className="h-48 w-48 text-white" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                         <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 text-white">
                            <ChefHat className="h-6 w-6" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Built for Restaurants</h3>
                        <p className="text-white/80 text-lg leading-relaxed">
                            We know what matters: menu clarity, visuals, and fast booking. Every element reduces hesitation.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Card 3: Growth Goal */}
             <motion.div 
                variants={cardVariants}
                className="md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors duration-300"
            >
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="h-16 w-16 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0">
                        <Goal className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Your Growth Is the Goal</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We focus on outcomes: more booked tables, more calls, more repeat guests. You get measurable progress you can actually track, not just vanity metrics.
                        </p>
                    </div>
                </div>
            </motion.div>
            
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
