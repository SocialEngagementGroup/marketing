import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import Reveal from '../ui/Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-brand-brick relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <span className="absolute -bottom-20 -right-20 text-[15vw] font-serif font-bold text-black">GROW</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Reveal>
            <span className="text-white/60 font-bold tracking-widest uppercase text-xs mb-6 block">Ready to Get Started?</span>
          </Reveal>
          
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Let's Build a System <br/>You Can <span className="italic">Rely On</span>
            </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
              If your firm is ready for consistent visibility and a clearer path to new cases, we'll help you build a marketing system you can trust—so you can focus on running your practice.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <a 
              href="https://calendly.com/itseg/segmeet" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-black hover:bg-brand-beige px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 group shadow-2xl"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-8 text-white/50 text-sm">
              No commitment. Just a conversation about your goals.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;