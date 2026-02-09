import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Zap, Users, Sparkles } from 'lucide-react';

const AboutMission: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pillars = [
    {
      id: "01",
      title: "Genuine Connections",
      description: "We move beyond vanity metrics to create deep connections between brands and audiences through authentic storytelling that resonates.",
      icon: <Heart className="w-6 h-6" />,
      action: "Our Philosophy"
    },
    {
      id: "02",
      title: "Impactful Strategy",
      description: "Delivering data-backed organic and paid strategies across all social platforms to ensure your message reaches the right eyes at the right time.",
      icon: <Zap className="w-6 h-6" />,
      action: "Our Process"
    },
    {
      id: "03",
      title: "Long-term Loyalty",
      description: "Fostering retention through consistency, creativity, and trust. We turn one-time visitors into lifetime advocates for your brand.",
      icon: <Users className="w-6 h-6" />,
      action: "See Results"
    }
  ];

  return (
    <section id="mission" className="bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-brand-beige/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-brand-brick/5 rounded-full blur-[80px]" />
      </div>

      {/* Hero Mission Statement */}
      <div className="py-24 md:py-32 border-b border-gray-100 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                  >
                      <div className="flex items-center gap-2 mb-6">
                        <Sparkles className="text-brand-brick w-5 h-5" />
                        <span className="text-sm font-bold tracking-widest uppercase text-brand-brick">Our Mission</span>
                      </div>
                      <h2 className="text-5xl md:text-7xl font-bold text-brand-black leading-[1.1] tracking-tight">
                          We build meaningful <br/>
                          <span className="relative inline-block">
                            <span className="relative z-10 text-brand-brick">digital relationships.</span>
                            <motion.span 
                               initial={{ width: 0 }}
                               whileInView={{ width: '100%' }}
                               transition={{ delay: 0.5, duration: 0.8 }}
                               className="absolute bottom-2 left-0 h-3 bg-brand-beige/50 -z-0"
                            />
                          </span>
                      </h2>
                  </motion.div>
                  
                  <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="pt-4"
                  >
                      <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-8">
                          Social Engagement Group exists to believe in the power of authentic storytelling, strategic content, and a human-first approach. 
                      </p>
                      <p className="text-lg text-gray-400 font-light leading-relaxed">
                          Our vision is to transform audiences into communities. In a world of noise, we help your brand find its true voice and speak directly to the people who matter most.
                      </p>
                  </motion.div>
              </div>
          </div>
      </div>

      {/* The 3 Pillars - Interactive Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                  <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="group relative bg-white border border-gray-100 p-8 md:p-10 rounded-2xl hover:shadow-2xl hover:shadow-brand-black/5 transition-all duration-500 ease-out cursor-default"
                  >
                      {/* Hover Gradient Border Effect */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-brick/10 rounded-2xl transition-colors duration-500 pointer-events-none" />
                      
                      <div className="flex justify-between items-start mb-8">
                          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-black group-hover:bg-brand-brick group-hover:text-white transition-colors duration-500">
                              {pillar.icon}
                          </div>
                          <span className="text-4xl font-bold text-gray-100 group-hover:text-brand-brick/10 transition-colors duration-500">
                              {pillar.id}
                          </span>
                      </div>

                      <h3 className="text-2xl font-bold text-brand-black mb-4 group-hover:translate-x-1 transition-transform duration-300">
                          {pillar.title}
                      </h3>
                      
                      <p className="text-gray-500 leading-relaxed mb-8 group-hover:text-gray-600 transition-colors duration-300">
                          {pillar.description}
                      </p>


                  </motion.div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default AboutMission;
