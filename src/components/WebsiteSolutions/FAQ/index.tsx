import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "1. Do I own my website if AI is involved?",
    answer: "Yes—100%. While we use AI to prototype and move faster, the final product is yours. You own the design, the content, and the site itself."
  },
  {
    question: "2. Can I make changes later?",
    answer: "Absolutely. You’ll be able to update content, add pages, and modify layouts. While we’re always here to help, you’re never forced to rely on us for simple updates."
  },
  {
    question: "3. Is this just an AI-generated website?",
    answer: "No. Humans lead the strategy, messaging, and final execution. AI is the tool that helps us prototype and build with incredible speed, but every site is reviewed and refined by our expert team."
  },
  {
    question: "4. How long does it actually take to get a website live in 2025?",
    answer: "While traditional agencies often quote 3 to 6 months, our hybrid workflow (Human Strategy + AI Execution) allows us to launch high-performance sites in weeks, not months. We focus on getting you to market fast with a \"Phase 1\" site that looks incredible, then scaling features as you grow."
  },
  {
    question: "5. Why should I pay for a build when I can use a 'Free' AI website builder?",
    answer: "Free AI builders are great for hobbyists, but they often produce \"cookie-cutter\" sites with messy code that struggles to rank on Google. More importantly, they lack strategy. A tool can't tell your brand story or build a psychological conversion funnel—only people can. We use AI as a high-powered engine, but our strategists keep their hands on the steering wheel."
  },
  {
    question: "6. Will my website be mobile-friendly and fast?",
    answer: "Absolutely. In 2025, if your site isn’t \"mobile-first,\" it’s invisible. We build every site to be ultra-responsive and lightweight so it passes Google’s Core Web Vitals with flying colors. A fast site isn’t just a \"nice-to-have\"—it’s a requirement for ranking and keeping visitors from bouncing."
  },
  {
    question: "7. Do I have to provide all the photos and text myself?",
    answer: "We’ve found that \"waiting for content\" is the #1 reason web projects stall. While you are the expert on your business, we can help bridge the gap. We use AI-assisted copywriting and high-quality stock curation to get the momentum started, which you can then refine to ensure it sounds exactly like you."
  },
  {
    question: "8. What happens if I want to move my website to a different host later?",
    answer: "You aren't a hostage here. Because we build on standard, open frameworks, you are never \"locked in\" to our ecosystem. If you ever decide to move, you can take your entire site, content, and design with you. We believe in keeping clients because of our results, not because of a contract."
  },
  {
    question: "9. Will my new website help me rank on page one of Google?",
    answer: "We build every site with \"SEO-ready\" architecture—meaning clean code, proper header structures, and optimized metadata. While ranking #1 for a competitive term takes ongoing effort, we ensure your site’s foundation is exactly what Google wants to see the moment we flip the switch."
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
