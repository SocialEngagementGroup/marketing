import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How will you help guests find us on Google?",
    answer: "We optimize your website and Google Business Profile to rank for local, high-intent searches like 'restaurant near me,' 'best brunch,' and cuisine-specific keywords, ensuring you're visible when hunger strikes."
  },
  {
    question: "Do you only build websites?",
    answer: "No. While we build high-converting websites, we implement a full strategy: local SEO, paid ads, social proof automation, and analytics to drive consistent tables."
  },
  {
    question: "Can you help us get more reviews?",
    answer: "Yes. We automate review requests and help you showcase them across key platforms to build trust and social proof, encouraging more diners to choose you."
  },
  {
    question: "How do you track what’s working?",
    answer: "We provide transparent dashboards showing calls, bookings, direction clicks, and which campaigns drive real guest actions, so you never have to guess."
  },
  {
    question: "How are you different from other agencies?",
    answer: "We focus on measurable guest acquisition, not vanity metrics. Our goal is filled tables, consistent bookings, and ROI you can see in your register."
  },
  {
    question: "Is it tailored to our cuisine and location?",
    answer: "Absolutely. Keywords, ads, offers, and positioning are built around your specific restaurant type (e.g., Italian, Hibachi, Brunch) and your local competitive landscape."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
