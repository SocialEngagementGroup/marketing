import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: 'Do I own my website if AI is involved?',
    answer: "Yes—100%. Even though we use AI as part of the process, your website is fully yours. You own the design, the content, and the final website. AI helps us move faster and prototype smarter—but it does not take ownership, control, or lock you into our platform.",
  },
  {
    question: 'Am I locked into your system or tools?',
    answer: "No. Your website is built using standard, widely supported technologies. You are free to host it, manage it, or update it however you choose. We do not trap you in proprietary systems or ongoing dependencies.",
  },
  {
    question: 'Can I make changes later?',
    answer: "Absolutely. You will be able to update content, add pages, modify layouts, and integrate new tools. We can help with updates if you want—but you are never forced to rely on us.",
  },
  {
    question: 'Is this just an AI-generated website?',
    answer: "No. AI assists with prototyping and speed, but humans lead the strategy and execution. Every site is reviewed, refined, and built intentionally. That is how we ensure your website is not just fast—but effective.",
  },
  {
    question: 'How long does the process take?',
    answer: 'Most projects are completed in 2-4 weeks, depending on complexity. This is significantly faster than traditional agencies (which often take 2-3 months) while maintaining high quality standards.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Next.js, TypeScript, and Tailwind CSS. This ensures your website is fast, secure, scalable, and easy to maintain.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we offer optional maintenance packages. However, you are never locked in—you can choose to manage the site yourself or work with another developer at any time.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="relative py-32 overflow-hidden bg-brand-brick">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-brand-black/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <Reveal delay={200}>
              <span className="text-brand-black text-xs font-bold tracking-widest uppercase mb-4 block">
                FAQ
              </span>
            </Reveal>
            <Reveal delay={400}>
              <h2 className="text-4xl lg:text-5xl xl:text-7xl font-display text-white leading-[1.1] mb-6 uppercase tracking-tight">
                Frequently Asked{' '}
                <span className="text-brand-black italic font-serif normal-case tracking-normal">Questions</span>
              </h2>
            </Reveal>
            <Reveal delay={600}>
                <p className="text-white/70 text-lg border-l-2 border-brand-black pl-6 inline-block font-medium">
                  Everything you need to know about our AI-powered web development process.
                </p>
            </Reveal>
          </div>

          {/* FAQ List */}
          <div className="glass-strong rounded-3xl p-1 lg:p-4 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-brand-black/5 pointer-events-none" />
            
            <div className="p-6 lg:p-8 space-y-2 relative z-10">
                {faqs.map((faq, index) => (
                <Reveal key={index} delay={400 + index * 50}>
                    <FAQItem 
                    question={faq.question} 
                    answer={faq.answer} 
                    initialOpen={index === 0}
                    />
                </Reveal>
                ))}
            </div>
          </div>

          {/* Still have questions */}
          <div className="mt-20 text-center">
            <Reveal delay={1000}>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Still have questions?</p>
              <button
                onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-4 text-brand-black hover:text-white transition-all bg-white/10 hover:bg-brand-black font-bold uppercase tracking-widest text-[10px] px-8 py-4 rounded-full border border-white/10 group"
              >
                Let's talk Strategy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
