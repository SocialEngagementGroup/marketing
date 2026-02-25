import React from 'react';
import { motion } from 'framer-motion';
import { Home, Stethoscope, Briefcase, Utensils } from 'lucide-react';

const audiences = [
  {
    title: "Home & Trade Services",
    description: "Contractors, HVAC specialists, and plumbers who need to build trust and capture local leads instantly.",
    icon: <Home className="w-8 h-8 text-[#A3E635]" />,
  },
  {
    title: "Medical & Wellness",
    description: "Practices and clinics where credibility and a professional digital presence are essential for patient growth.",
    icon: <Stethoscope className="w-8 h-8 text-[#A3E635]" />,
  },
  {
    title: "Professional Services",
    description: "Firms and B2B service-based businesses looking to establish authority and generate high-quality inquiries.",
    icon: <Briefcase className="w-8 h-8 text-[#A3E635]" />,
  },
  {
    title: "Restaurant & Hospitality",
    description: "Establishments looking to showcase their menu, manage reservations, and build a loyal local following.",
    icon: <Utensils className="w-8 h-8 text-[#A3E635]" />,
  }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#064232] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-[#A3E635] uppercase mb-4 block"
          >
            Digital Partnerships
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-outfit"
          >
            Who We Build For
          </motion.h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium font-outfit">
            Our process is specifically designed for businesses where credibility and lead generation are essential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-outfit">{item.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed font-outfit group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
