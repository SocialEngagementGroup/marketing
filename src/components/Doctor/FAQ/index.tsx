import React, { useState } from 'react';
import { Plus, Minus, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How will you help patients find our practice on Google?",
    answer: "We optimize your website and Google Business Profile to rank for local, high-intent searches like 'doctor near me' and specialty-specific queries."
  },
  {
    question: "Do you only build websites?",
    answer: "No. We build the website and manage SEO, paid ads, and reputation building to consistently bring in new patients."
  },
  {
    question: "Can you help us get more patient reviews?",
    answer: "Yes. We automate review requests after appointments and help you showcase positive feedback across platforms."
  },
  {
    question: "How do you track what's working?",
    answer: "With real-time dashboards that show which campaigns generate appointment requests and which patients convert to actual visits."
  },
  {
    question: "How are you different from other marketing agencies?",
    answer: "We focus on qualified patient acquisition and measurable outcomes, not just clicks or impressions."
  },
  {
    question: "Is this customized for my specialty and location?",
    answer: "Yes. Strategy, keywords, and ads are tailored to your specific practice area, location, and ideal patient demographics."
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
                <h3 className="text-4xl md:text-5xl font-bold text-[#144272] mb-0 lg:mb-6 leading-tight font-outfit">
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
                className={`rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-[#EBF4F8]' : 'bg-[#F5F9FB]'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
                >
                  <span className={`text-xl font-bold transition-colors font-outfit ${openIndex === index ? 'text-brand-healist-charcoal' : 'text-gray-600'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <Plus className={`h-5 w-5 ${openIndex === index ? 'text-brand-healist-charcoal' : 'text-gray-400'}`} />
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
