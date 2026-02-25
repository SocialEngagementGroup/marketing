import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: "01",
    title: "Be Discovered by Diners Searching Now",
    description: "When someone searches for a restaurant, you need to be the first name they see. With poor local SEO, your restaurant stays invisible while competitors fill their tables with customers meant for you. We rank you for searches like \"best Italian restaurant near me\" and \"brunch spots open now\" so hungry diners find you exactly when they're ready to eat.",
  },
  {
    number: "02",
    title: "Build a Reputation That Brings Customers Back",
    description: "Potential diners scroll past restaurants without recent reviews or mouthwatering photos. A weak online presence makes even the best cuisine look unappealing. We automate review collections and create engaging social content that showcases your dishes, ambiance, and happy customers, making new diners eager to book a table.",
  },
  {
    number: "03",
    title: "Run Ads That Fill Your Reservation Book",
    description: "Hungry customers looking for a place to eat right now go to restaurants that appear first on Google and social media. Your competitors may have stronger ad presence and capture reservations meant for you. We run Google Search Ads, Local Service Ads, and Instagram campaigns that put your restaurant front and center when diners are ready to make a reservation.",
  },
  {
    number: "04",
    title: "Know Exactly What's Driving Reservations",
    description: "Many restaurants waste marketing dollars without understanding what actually brings in customers. We provide clear dashboards that show which platforms drive reservations, what posts get engagement, and which promotions fill tables. No more guessing. Just smart marketing that keeps your dining room buzzing.",
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
