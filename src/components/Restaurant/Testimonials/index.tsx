import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Social Engagement Group helped us go from ‘quiet weekdays’ to steady bookings. Guests now find us easily and trust us before they even walk in.",
    author: "Mohammad Rifahtul Haque",
    role: "Owner, Flame Japanese Hibachi",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600&h=600",
    stats: "+70% Visibility"
  },
  {
    id: 2,
    quote: "The reservation system integration and the way they showcase our dishes online has transformed our dinner service.",
    author: "Sarah Jenkins",
    role: "GM, The Urban Bistro",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=150&h=150",
    stats: "Fully Booked"
  },
  {
    id: 3,
    quote: "Finally, marketing that actually brings people through the door. The dashboard shows us exactly how many covers we get.",
    author: "David Chen",
    role: "Owner, Golden Dragon",
    stats: "ROI Positive"
  }
];

const clientLogos = [
    "Flame Hibachi", "Urban Bistro", "Golden Dragon", "Bella Italia", "Taco Haven", "Burger Joint"
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
            >
                <span className="text-brand-brick font-bold text-sm tracking-widest uppercase mb-4 block">Client Love</span>
                <h2 className="text-5xl md:text-6xl font-bold text-brand-black tracking-tight leading-[0.9]">
                    Results that speak <br/>
                    <span className="text-gray-400">for themselves.</span>
                </h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:block"
            >
                <div className="flex gap-2">
                    {[1,2,3,4,5].map(i => (
                        <Star key={i} className="h-5 w-5 text-brand-brick fill-brand-brick" />
                    ))}
                </div>
                <p className="text-sm font-medium text-gray-500 mt-2 text-right">5-Star Agency Rating</p>
            </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            
            {/* Card 1: Featured Image Card (Spans 2 cols) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2 relative group rounded-3xl overflow-hidden min-h-[400px]"
            >
                <div className="absolute inset-0">
                    <img 
                        src={testimonials[0].image} 
                        alt="Restaurant Interior" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                </div>
                
                <div className="relative h-full p-8 md:p-12 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                        <div className="bg-brand-brick/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                            Featured Story
                        </div>
                        <Quote className="h-10 w-10 text-white/20" />
                    </div>
                    
                    <div>
                        <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                            "{testimonials[0].quote}"
                        </h3>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-lg font-bold">
                                MH
                            </div>
                            <div>
                                <p className="font-bold">{testimonials[0].author}</p>
                                <p className="text-white/60 text-sm">{testimonials[0].role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Card 2: Minimalist Card (Spans 1 col) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300"
            >
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                            <Star className="h-5 w-5 text-brand-brick fill-brand-brick" />
                        </div>
                        <span className="text-brand-brick font-bold text-sm bg-brand-brick/10 px-3 py-1 rounded-full">
                            {testimonials[1].stats}
                        </span>
                    </div>
                    <p className="text-brand-black text-lg leading-relaxed font-medium">
                        "{testimonials[1].quote}"
                    </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="font-bold text-brand-black">{testimonials[1].author}</p>
                    <p className="text-gray-500 text-sm">{testimonials[1].role}</p>
                </div>
            </motion.div>

            {/* Card 3: Brand Brick Card (Spans 1 col) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-brand-brick text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between group"
            >
                <Quote className="h-12 w-12 text-white/20 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xl md:text-2xl font-medium leading-tight mb-8">
                    "{testimonials[2].quote}"
                </p>
                <div className="flex items-center gap-3">
                     <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center font-bold">
                        DC
                     </div>
                     <div>
                        <p className="font-bold">{testimonials[2].author}</p>
                        <p className="text-white/70 text-sm">{testimonials[2].role}</p>
                     </div>
                </div>
            </motion.div>

            {/* Card 4: Partner Logos (Spans 2 cols) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:col-span-2 bg-brand-black rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden"
            >
                 {/* Background decoration */}
                 <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-brick/10 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-white font-bold text-xl">Trusted by Local Leaders</h3>
                        <ArrowUpRight className="text-gray-500 h-6 w-6" />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                        {clientLogos.map((logo, idx) => (
                            <div key={idx} className="flex items-center gap-3 group/logo cursor-default">
                                <div className="h-2 w-2 rounded-full bg-gray-700 group-hover/logo:bg-brand-brick transition-colors" />
                                <span className="text-gray-400 font-medium text-lg group-hover/logo:text-white transition-colors">
                                    {logo}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
