import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What makes Social Engagement Group different?",
    answer: "We are a full-service 360-degree agency focusing on authentic connections. We combine data-driven paid strategies with organic storytelling to build not just audiences, but communities."
  },
  {
    question: "Do you specialize in Medical Marketing?",
    answer: "Yes, while our principles apply broadly, we have deep expertise in building patient acquisition systems for medical practices, ensuring compliance and high-intent targeting."
  },
  {
    question: "How do you measure success?",
    answer: "We focus on tangible ROI. We track impressions, engagement cost, click-through rates, and most importantly, the number of qualified appointments generated for your practice."
  },
  {
    question: "What is your onboarding process?",
    answer: "We start with a deep dive into your brand's mission and audience. We then build a tailored strategy, set up tracking, and launch campaigns that align with your growth goals."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[#132333] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
            <span className="text-brand-brick font-bold text-sm tracking-widest uppercase mb-4 block">FAQ</span>
            <h2 className="text-4xl font-bold text-brand-black">Frequently Asked Questions</h2>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border-b border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
              >
                <span className="font-semibold text-brand-black text-xl">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-6 w-6 text-brand-brick flex-shrink-0" />
                ) : (
                  <Plus className="h-6 w-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
