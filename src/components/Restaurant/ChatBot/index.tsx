import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([
    { role: 'model', text: "Hi there! 👋 I'm Seggy. I help restaurants fill their tables and build loyal regulars. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I'd love to help you with that! Are you looking to increase your reservations specifically through Local SEO or Meta Ads?" 
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
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#A64942] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 group border-2 border-white/20"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-4 md:right-6 z-[60] w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden font-outfit"
          >
            <div className="bg-brand-black p-4 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="bg-[#A64942]/20 p-2 rounded-lg">
                  <Sparkles className="text-[#EA580C] h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">SEG Assistant</h3>
                  <span className="flex items-center gap-1.5 text-xs text-red-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Online
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-brand-black'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-gray-600" /> : <Bot size={16} className="text-white" />}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#A64942] text-white rounded-tr-none' : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'}`}>
                     {msg.text.split(/(https?:\/\/[^\s]+)/g).map((part: string, i: number) => part.match(/^https?:\/\//) ? <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline font-bold text-inherit">{part}</a> : <span key={i}>{part}</span>)}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-black flex items-center justify-center flex-shrink-0"><Bot size={16} className="text-white" /></div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about restaurant growth..."
                   className="w-full bg-gray-50 text-gray-800 text-sm rounded-xl py-3 pl-4 pr-12 border border-gray-200 focus:outline-none focus:border-[#A64942] focus:ring-1 focus:ring-[#A64942] transition-all"
                  disabled={isLoading}
                />
                 <button onClick={handleSend} disabled={isLoading || !input.trim()} className="absolute right-2 p-2 bg-brand-black text-white rounded-lg hover:bg-[#A64942] transition-colors disabled:opacity-50"><Send size={16} /></button>
              </div>
              <div className="text-center mt-2 font-outfit"><p className="text-[10px] text-gray-400">AI growth assistant for SEG.</p></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
