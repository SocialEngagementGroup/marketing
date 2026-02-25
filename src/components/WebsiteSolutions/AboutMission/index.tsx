import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: "01",
    title: "Static VS Strategic",
    description: "Most business websites are static digital brochures. They lack clear messaging and confuse visitors. We build sites that serve as primary revenue drivers.",
  },
  {
    number: "02",
    title: "Psychological Frameworks",
    description: "We use proven frameworks like the Hero's Journey so visitors immediately understand what you do, who you help, why they should trust you, and exactly what action to take next.",
  },
  {
    number: "03",
    title: "People-First Design",
    description: "We don't start with templates. We take the time to understand your unique value and design a site that actually reflects your business's credibility.",
  },
  {
    number: "04",
    title: "AI-Powered Speed",
    description: "AI allows us to iterate rapidly and curate layouts in days, not weeks. We use it to improve our creative process, not replace it.",
  }
];

const AboutMission: React.FC = () => {
  return (
    <section id="mission" className="py-20 md:py-40 bg-[#064232] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-[#A3E635] uppercase mb-4 block"
          >
            Human Strategy Meets AI Speed
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight font-outfit"
          >
            The Problem With Most Websites <br className="hidden lg:block" />
            <span className="text-white/60">They look fine, but they don’t work.</span>
          </motion.h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr">
           {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 flex flex-col gap-8 group lg:hover:bg-white/10 transition-all duration-500 relative overflow-hidden h-full"
              >
                {/* Background Number */}
                <div className="absolute top-[-1rem] -right-8 text-[12rem] font-bold text-white/[0.04] leading-none pointer-events-none lg:group-hover:text-white/[0.07] transition-all duration-500 font-outfit">
                  {pillar.number}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-[1.2] tracking-tight min-h-[4rem] flex items-end">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-gray-300/80 leading-relaxed lg:group-hover:text-gray-200 transition-colors duration-300 font-outfit">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#A3E635]/0 lg:group-hover:w-full lg:group-hover:bg-[#A3E635]/40 transition-all duration-700" style={{ width: '0%' }} />
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
