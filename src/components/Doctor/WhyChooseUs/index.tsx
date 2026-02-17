import React from 'react';
import { Target, Heart, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      number: "01",
      title: "We Find New Patients",
      description: "We use ads and search results to bring real people to your clinic. We focus on getting you appointments, not clicks.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Built For Your Practice",
      description: "We know patients want doctors they can trust. Our strategy makes your clinic the top choice for everyone in your area.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Growing Your Medical Business",
      description: "We work hard to keep your calendar full of the right patients. Your success is the only result that matters here.",
      icon: <TrendingUp className="w-6 h-6" />,
    }
  ];

  return (
    <section id="values" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-8 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-[#0A2647] uppercase mb-4 block"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#0A2647] mb-6 leading-tight font-outfit"
          >
            Why Choose Us?
          </motion.h2>
          <div className="w-20 h-1 bg-[#144272] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-10 rounded-[2.5rem] border border-gray-100 bg-[#F9FBFA] transition-all duration-500 group lg:hover:shadow-2xl lg:hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
            >
              {/* Background Number */}
              <div className="absolute top-[-1rem] -right-8 text-[12rem] font-bold text-[#0A2647]/5 leading-none pointer-events-none lg:group-hover:text-[#0A2647]/10 transition-all duration-500 font-outfit"
>
                {card.number}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white shadow-sm text-[#0A2647] lg:group-hover:scale-110 transition-transform duration-500"
>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4 tracking-tight font-outfit leading-tight">{card.title}</h3>
                <p className="text-lg md:text-base font-medium text-gray-500 leading-relaxed font-outfit">{card.description}</p>
              </div>

              {/* Subtle bottom indicator */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#0A2647]/0 lg:group-hover:w-full lg:group-hover:bg-[#0A2647]/20 transition-all duration-700" style={{ width: '0%' }}
 />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
