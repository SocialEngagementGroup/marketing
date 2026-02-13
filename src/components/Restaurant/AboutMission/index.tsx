import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: "01",
    title: "Be Seen When Hunger Strikes",
    description: "Hungry guests are looking for their next meal, but your restaurant isn't showing up. Poor local SEO lets competitors capture bookings meant for you. We rank your restaurant for searches like 'best brunch near me' and 'date night spots' so the right diners find you first.",
  },
  {
    number: "02",
    title: "Turn Searchers into Loyal Regulars",
    description: "Potential guests hesitate when they don't see recent reviews or high-quality photos of your dishes. A weak online presence makes even five-star food look questionable. We automate review collection and showcase guest testimonials that make new diners confident to book.",
  },
  {
    number: "03",
    title: "Ads That Fill Your Reservation Book",
    description: "Diners looking for immediate options go to the restaurants that appear first on Google. Competitors with stronger ad presence take covers meant for you. We run targeted Google Search and Meta Ads to put your menu at the top when guests are ready to eat.",
  },
  {
    number: "04",
    title: "Data Over Guesswork",
    description: "Many restaurant owners spend on marketing without knowing what actually drives new covers. Hidden data leads to wasted budget and missed opportunities. Our dashboards clearly show which campaigns bring reservation requests and which guests actually walk through your doors.",
  }
];

const AboutMission: React.FC = () => {
  return (
    <section id="mission" className="py-20 md:py-40 bg-[#A64942] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-white/80 uppercase mb-4 block"
          >
            How We Grow Your Revenue
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-outfit"
          >
            Our Growth Engine
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
                  <p className="text-sm sm:text-base font-medium text-white/80 leading-relaxed font-outfit">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#A64942]/0 lg:group-hover:w-full lg:group-hover:bg-[#A64942]/40 transition-all duration-700" style={{ width: '0%' }} />
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
