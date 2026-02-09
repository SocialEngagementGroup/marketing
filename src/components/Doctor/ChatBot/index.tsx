import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mocking GoogleGenAI since we might not have the package or key set up in the same way
// In a real scenario, we'd import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Seggy", the AI growth specialist for Social Engagement Group (SEG). 
SEG is a digital marketing agency specializing in patient acquisition systems for medical practices (Doctors, Dentists, Surgeons, etc.).

Your Goal:
1. Educate visitors about SEG's services (Local SEO, Paid Ads, Reputation Management).
2. Use the "Flame's Meta Ads" case study as proof of success (+377% impressions, $0.23 cost per engagement).
3. VITAL: Act as a lead generation agent. In a conversational way, try to get the user's Name, Phone Number, and Location.
4. If they seem interested, ask them to book a consultation at https://calendly.com.

Tone: Professional, knowledgeable, medical-focused, yet warm and conversational. Keep responses concise (under 3 sentences usually).
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi there! 👋 I'm Seggy. I help medical practices grow their patient base. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // Simulating AI response for now to ensure UI works
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I'd love to help you with that! Are you looking to increase your patient appointments specifically through Local SEO or Paid Ads?" 
      }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] bg-brand-brick text-white p-4 rounded-full shadow-2xl hover:shadow-brand-brick/50 transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-4 md:right-6 z-[60] w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden font-outfit"
          >
            {/* Header */}
            <div className="bg-brand-black p-4 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="bg-brand-brick/20 p-2 rounded-lg">
                  <Sparkles className="text-brand-brick h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">SEG Assistant</h3>
                  <span className="flex items-center gap-1.5 text-xs text-green-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-brand-black'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-gray-600" /> : <Bot size={16} className="text-white" />}
                  </div>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-brand-brick text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                    }`}
                  >
                     {/* Very simple markdown parser for links */}
                     {msg.text.split(/(https?:\/\/[^\s]+)/g).map((part, i) => 
                        part.match(/^https?:\/\//) ? (
                            <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline font-bold text-inherit">{part}</a>
                        ) : (
                            <span key={i}>{part}</span>
                        )
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-black flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about patient growth..."
                  className="w-full bg-gray-50 text-gray-800 text-sm rounded-xl py-3 pl-4 pr-12 border border-gray-200 focus:outline-none focus:border-brand-brick focus:ring-1 focus:ring-brand-brick transition-all"
                  disabled={isLoading}
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-brand-black text-white rounded-lg hover:bg-brand-brick transition-colors disabled:opacity-50 disabled:hover:bg-brand-black"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="text-center mt-2">
                 <p className="text-[10px] text-gray-400">AI growth assistant for SEG.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
