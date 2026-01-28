import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FAQItem from './FAQItem';



const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How do you decide what makes sense for our firm?",
      answer: "We start by understanding where your firm is today, what's already working, what isn't, and where the real opportunities are. From there, we prioritize the channels and tactics most likely to drive meaningful results for your practice, not a generic template."
    },
    {
      question: "Is this a one-size-fits-all marketing package?",
      answer: "No. Every firm has different goals, markets, and competitive pressures. Our role is to adapt the strategy to your specific practice area, location, and growth priorities."
    },
    {
      question: "How involved do we need to be?",
      answer: "We keep your involvement focused and efficient. We handle the day-to-day execution and optimization, while keeping you informed with clear reporting and regular check-ins, so marketing doesn't become a distraction."
    },
    {
      question: "How do you measure success?",
      answer: "We track what actually matters: visibility, inbound inquiries, and how those inquiries translate into real cases. You'll have clear insight into what's working and where adjustments are being made."
    },
    {
      question: "How quickly should we expect to see results?",
      answer: "Some channels, like paid search, can produce results quickly. Others, like organic visibility, build steadily over time. Our goal is to balance short-term momentum with long-term stability."
    }
  ];

  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
           <span className="text-brand-brick font-bold tracking-widest uppercase text-xs mb-4 block">Common Questions From Law Firms</span>
           <h2 className="text-4xl font-serif text-brand-black">Frequently Asked <span className="italic text-brand-brick">Questions</span></h2>
        </div>
        
        <div className="bg-white px-8 md:px-12 py-4 shadow-lg border-t-4 border-brand-brick">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;