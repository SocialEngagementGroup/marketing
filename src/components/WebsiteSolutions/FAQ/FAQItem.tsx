import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  initialOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className="border-b border-white/5 last:border-none">
      <button 
        className="w-full py-8 flex justify-between items-center text-left transition-all focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-white font-bold uppercase tracking-tight text-lg md:text-xl pr-8 group-hover:text-brand-black transition-colors duration-300 font-display">{question}</span>
        <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'border-brand-black bg-brand-black text-white shadow-xl rotate-180' : 'border-white/10 bg-white/5 text-white/40 group-hover:border-brand-black/40 group-hover:bg-brand-black/20 group-hover:text-brand-black'}`}>
            {isOpen ? <Minus className="w-4 h-4 flex-shrink-0" /> : <Plus className="w-4 h-4 flex-shrink-0" />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-brand-black/20 rounded-2xl p-6 border border-white/5">
            <p className="text-white/60 leading-relaxed text-sm font-medium">
            {answer}
            </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
