import React, { useState } from 'react';
import { Plus, Minus, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most practices begin seeing measurable increases in patient inquiries within 60–90 days. SEO results deepen over 4–6 months as local authority builds. Paid ads can drive bookings within the first few weeks. We set realistic expectations upfront so there are no surprises."
  },
  {
    question: "Do you work with all medical specialties?",
    answer: "Yes — we've worked with primary care, podiatry, dermatology, orthopedics, pain management, cosmetic medicine, dental, and more. Each specialty has unique patient search behavior, which is why we start with a deep-dive strategy session rather than a generic playbook."
  },
  {
    question: "Is there a minimum contract length?",
    answer: "We typically work on an initial 6-month engagement to allow enough time to build, test, and optimise campaigns properly. After that, partnerships continue month-to-month. We're not interested in locking you in — we're interested in earning the right to keep working with you."
  },
  {
    question: "How is this different from a general marketing agency?",
    answer: "General agencies apply the same frameworks across every industry. We work exclusively with service businesses in competitive local markets and understand patient decision-making, HIPAA-compliant marketing, and healthcare-specific SEO. The difference shows up in the results."
  },
  {
    question: "Will my practice compete with another client?",
    answer: "We honor geographic and specialty exclusivity in most cases. If we already have a client in the same specialty and market, we'll tell you upfront during the strategy call — before any agreement is made."
  },
  {
    question: "What does the strategy call involve?",
    answer: "It's a focused 30-minute conversation. We'll review your current online presence, identify the biggest gaps, and walk through exactly what a growth strategy would look like for your practice. No hard sell — just a clear picture of what's possible and whether we're the right fit."
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
