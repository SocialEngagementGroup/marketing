import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Shield } from 'lucide-react';

const testimonials = [
  {
    quote: "Social Engagement Group has been exceptional at marketing our practice. Their strategic approach and consistent execution have helped us attract more patients.",
    author: "Dr. Junior King",
    role: "North Island Podiatry Associates",
    image: "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    quote: "We've seen a 40% increase in new patient inquiries since working with the team. Their understanding of medical compliance and patient needs is unmatched.",
    author: "Dr. Sarah Chen",
    role: "Metro Pediatrics",
    image: "https://images.unsplash.com/photo-1581056344415-3abb4c5d6331?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    quote: "Finally, an agency that understands the difference between clicks and actual patients. The ROI tracking dashboards give us complete peace of mind.",
    author: "James Wilson",
    role: "Practice Manager, City Cardiology",
    image: "https://images.unsplash.com/photo-1590611380053-1bfbb2612b70?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const clientLogos = [
    { name: "Medical Board", initial: "MB" },
    { name: "HealthFirst", initial: "HF" },
    { name: "MediCare Plus", initial: "MP" },
    { name: "DocGroup", initial: "DG" },
    { name: "PharmaCare", initial: "PC" },
    { name: "City Hospital", initial: "CH" }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipe = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
        if (newDirection === 1) {
            return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
        }
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
        swipe(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-brand-brick font-bold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Shield className="h-4 w-4" /> Social Proof
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight leading-none">
                    Trusted by industry <br/> leaders.
                </h2>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="hidden md:flex gap-4"
            >
                <button 
                    onClick={() => swipe(-1)}
                    className="p-4 rounded-full border border-gray-200 text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                    onClick={() => swipe(1)}
                    className="p-4 rounded-full border border-gray-200 text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </motion.div>
        </div>

        {/* Client Logos Row - High Contrast Pop */}
        <div className="mb-24">
            <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 opacity-80">
                {clientLogos.map((logo, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                        className="flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
                    >
                         <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-bold text-lg group-hover:bg-brand-brick group-hover:text-white transition-colors">
                            {logo.initial}
                         </div>
                         <span className="font-bold text-gray-200 text-xl group-hover:text-brand-black transition-colors">{logo.name}</span>
                    </motion.div>
                ))}
            </div>
             <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-12"></div>
        </div>

        {/* Testimonial Slider */}
        <div className="relative h-[500px] md:h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 200, damping: 25 },
                        opacity: { duration: 0.4 }
                    }}
                    className="absolute w-full"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-5 relative">
                             <div className="absolute inset-0 bg-brand-brick/5 rotate-6 rounded-3xl transform translate-x-4 translate-y-4"></div>
                             <div className="relative h-[300px] w-full rounded-3xl overflow-hidden shadow-2xl">
                                <img 
                                    src={testimonials[currentIndex].image} 
                                    alt={testimonials[currentIndex].author} 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                                        <p className="text-white/70 text-sm">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="md:col-span-7">
                            <Quote className="text-brand-brick h-16 w-16 mb-6 opacity-20" />
                            <h3 className="text-2xl md:text-3xl font-light text-brand-black leading-tight mb-8">
                                "{testimonials[currentIndex].quote}"
                            </h3>
                            <div className="flex gap-2">
                                {[...Array(testimonials.length)].map((_, i) => (
                                  <div key={i} className={`h-2 w-2 rounded-full ${i === currentIndex ? 'bg-brand-brick' : 'bg-gray-200'}`}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Mobile Controls */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
            <button 
                onClick={() => swipe(-1)}
                className="p-3 rounded-full bg-white border border-gray-100 shadow-md text-brand-black"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
                onClick={() => swipe(1)}
                className="p-3 rounded-full bg-white border border-gray-100 shadow-md text-brand-black"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
