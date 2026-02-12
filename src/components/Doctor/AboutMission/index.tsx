import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Zap, Landmark } from 'lucide-react';

const pillars = [
  {
    number: "01",
    title: "Get Found by Patients Searching Now",
    description: "Patients are looking for a doctor, but your practice isn't showing up. Poor local SEO lets competitors capture appointments meant for you. We rank your practice for searches like 'primary care doctor near me' and 'pediatrician accepting new patients' so the right patients find you at the right moment.",
  },
  {
    number: "02",
    title: "Build Trust with Your Online Reputation",
    description: "Potential patients hesitate when they don't see recent reviews or proof of quality care. A weak online presence makes even exceptional practices look questionable. We automate review collection and showcase patient testimonials that make new patients confident to book.",
  },
  {
    number: "03",
    title: "Ads That Fill Your Appointment Calendar",
    description: "Patients needing care now go to practices that appear first on Google. Competitors with stronger ad presence take appointments meant for you. We run Google Search Ads and Local Service Ads to put your practice at the top when patients are ready to schedule.",
  },
  {
    number: "04",
    title: "Get Clarity with Real-Time Dashboards",
    description: "Many practices spend on marketing without knowing what actually drives new patients. Hidden data leads to wasted budget and missed opportunities. Our dashboards clearly show which campaigns bring appointment requests and which patients actually show up.",
  }
];

const AboutMission: React.FC = () => {
  return (
    <section id="mission" className="py-20 md:py-40 bg-[#0A2647] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4 block"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-outfit"
          >
            What We Provide
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
                  <p className="text-sm sm:text-base font-medium text-gray-400 leading-relaxed lg:group-hover:text-gray-300 transition-colors duration-300 font-outfit">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="absolute bottom-0 left-0 h-1 bg-cyan-400/0 lg:group-hover:w-full lg:group-hover:bg-cyan-400/40 transition-all duration-700" style={{ width: '0%' }} />
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
