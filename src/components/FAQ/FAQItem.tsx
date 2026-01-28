import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-black/10">
      <button 
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand-brick transition-colors focus:outline-none focus:text-brand-brick"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg md:text-xl font-medium pr-8">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 flex-shrink-0 text-brand-brick" /> : <Plus className="w-5 h-5 flex-shrink-0" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
