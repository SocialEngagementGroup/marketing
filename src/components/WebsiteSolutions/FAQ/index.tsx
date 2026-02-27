import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Do I own my website and content?",
    answer: "Yes, 100%. Even though we use AI to prototype and move faster, you own the final design, the content, and the site itself from day one."
  },
  {
    question: "Am I locked into your system or tools?",
    answer: "No. Your website is built using standard, widely supported technologies. You are free to host, manage, or move your site whenever you choose without being held \"hostage\" by a proprietary platform."
  },
  {
    question: "How is this different from a \"Free\" AI website builder?",
    answer: "Free builders often produce \"cookie-cutter\" sites with messy code that struggles to rank. Our approach uses humans to lead the strategy and messaging, using AI only as a high-powered engine to build a custom, high-performance funnel."
  },
  {
    question: "How long does it take to get my website live?",
    answer: "While traditional agencies often take 3 to 6 months, our hybrid workflow allows us to launch high-performance \"Phase 1\" sites in weeks, helping you get to market faster."
  },
  {
    question: "Will my website be mobile-friendly and help me rank on Google?",
    answer: "Absolutely. Every site is built with a \"mobile-first\" philosophy and \"SEO-ready\" architecture including optimized metadata and fast loading speeds—to ensure your foundation is ready for search engine success."
  },
  {
    question: "Do I have to provide all the content and photos?",
    answer: "We know waiting for content is the top reason projects stall. We use AI-assisted copywriting and high-quality stock curation to get the momentum started, which you can then refine to match your brand voice."
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
                <h3 className="text-4xl md:text-5xl font-bold text-[#064232] mb-0 lg:mb-6 leading-tight font-outfit">
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
                className={`rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-[#F0F4F2]' : 'bg-[#F9FBFA]'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
                >
                  <span className={`text-xl font-bold transition-colors font-outfit ${openIndex === index ? 'text-[#064232]' : 'text-gray-600'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <Plus className={`h-5 w-5 ${openIndex === index ? 'text-[#064232]' : 'text-gray-400'}`} />
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
