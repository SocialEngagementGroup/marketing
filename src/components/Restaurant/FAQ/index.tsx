import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How will you help guests find us on Google?",
    answer: "We optimize your website and Google Business Profile to rank for local, high-intent searches like “restaurant near me,” “best brunch,” and cuisine-specific keywords."
  },
  {
    question: "Do you only build websites?",
    answer: "Yes, We build both websites and implement the full strategy: local SEO, paid ads, social proof, and tracking."
  },
  {
    question: "Can you help us get more reviews?",
    answer: "Yes. We automate review requests and help you showcase them across key platforms to build trust."
  },
  {
    question: "How do you track what’s working?",
    answer: "We provide dashboards showing calls, bookings, direction clicks, and which campaigns drive real guest actions."
  },
  {
    question: "How are you different from other agencies?",
    answer: "We focus on measurable guest acquisition, not vanity metrics. The goal is filled tables and consistent bookings."
  },
  {
    question: "Is it tailored to our cuisine and location?",
    answer: "Yes. Keywords, ads, offers, and positioning are built around your restaurant type and local area."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-6 lg:gap-20 items-center">
          
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32 text-center lg:text-left">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#A64942] mb-8 leading-tight font-outfit text-center lg:text-left">
                  Frequently <br className="hidden lg:block" />Asked Questions
                </h3>
            </motion.div>
          </div>

          {/* Right: Modern Accordion */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-[#F9EFEE]' : 'bg-[#F9EFEE]/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
                >
                  <span className={`text-xl font-bold transition-colors duration-300 font-outfit ${openIndex === index ? 'text-[#8E3E38]' : 'text-gray-600'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <Plus className={`h-5 w-5 ${openIndex === index ? 'text-[#8E3E38]' : 'text-gray-400'}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-500 text-lg font-medium leading-relaxed font-outfit">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
