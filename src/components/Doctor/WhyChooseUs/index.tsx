import React from 'react';
import { Target, Heart, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
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
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" 
            />
            <motion.div 
                 animate={{ 
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]"
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
                <span className="text-brand-brick font-bold tracking-widest uppercase text-sm mb-4 block">Our DNA</span>
                <h2 className="text-5xl md:text-6xl font-bold leading-none tracking-tight">
                    Values that drive <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-brick to-orange-400">every decision.</span>
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
                    More than a set of rules—it's a shared vision. Bold, curious, and unapologetically human.
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
            
            {/* Card 1: Bold & Curious - Large */}
            <motion.div 
                variants={cardVariants}
                className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors duration-300 group relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                    <Target className="h-64 w-64 text-white" />
                </div>
                <div className="relative z-10">
                    <div className="h-12 w-12 bg-brand-brick/20 rounded-xl flex items-center justify-center mb-6 text-brand-brick">
                        <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Bold & Curious</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                        We aren't afraid to stand out. In a crowded digital space, safety is risky. Our design and strategy reflect the soul of your brand: bold enough to be seen, curious enough to innovate.
                    </p>
                </div>
            </motion.div>

            {/* Card 2: Human First */}
            <motion.div 
                variants={cardVariants}
                className="bg-brand-brick text-white border border-transparent rounded-3xl p-10 hover:bg-brand-brick/90 transition-colors duration-300 relative overflow-hidden"
            >
                 <div className="absolute -bottom-10 -right-10 p-10 opacity-20 transform rotate-12">
                    <Heart className="h-48 w-48 text-white" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                         <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 text-white">
                            <Heart className="h-6 w-6" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Human First</h3>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Design is intention made visible. We focus on genuine connections over vanity metrics.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Card 3: Consistent Growth */}
             <motion.div 
                variants={cardVariants}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors duration-300"
            >
                <div className="h-12 w-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                    <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Consistent Growth</h3>
                <p className="text-gray-400 leading-relaxed">
                    Consistency transforms branding into identity. We deliver scalable systems.
                </p>
            </motion.div>

             {/* Card 4: Integrity */}
             <motion.div 
                variants={cardVariants}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors duration-300"
            >
                <div className="h-12 w-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 text-green-400">
                    <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Total Integrity</h3>
                <p className="text-gray-400 leading-relaxed">
                    Transparent reporting and honest communication. No hidden fees, no fluff.
                </p>
            </motion.div>

             {/* Card 5: Innovation */}
             <motion.div 
                variants={cardVariants}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors duration-300"
            >
                <div className="h-12 w-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                    <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Active Innovation</h3>
                <p className="text-gray-400 leading-relaxed">
                    We stay ahead of platform changes so you don't have to.
                </p>
            </motion.div>
            
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
