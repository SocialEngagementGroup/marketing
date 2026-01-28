
import React from 'react';
import Reveal from '../ui/Reveal';
import FeatureCard from './FeatureCard';
import { Search, ShieldCheck, LineChart, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      number: "01",
      icon: <Search className="w-6 h-6" />,
      title: "Show Up When It Matters Most",
      desc: "We make sure your firm appears where real intent exists, so when someone needs a personal injury lawyer, they find you.",
      stat: "Top 3",
      statLabel: "Google Rankings"
    },
    {
      number: "02", 
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Reinforce Trust at the Point of Decision",
      desc: "When potential clients compare firms, they look for signals of credibility. We make sure your online presence supports that decision.",
      stat: "5-Star",
      statLabel: "Review Strategy"
    },
    {
      number: "03",
      icon: <LineChart className="w-6 h-6" />,
      title: "See What's Driving Results",
      desc: "You'll have clear visibility into what's driving calls and where momentum is building, so you can double down on what's working and adjust what's not.",
      stat: "Real-Time",
      statLabel: "Performance Data"
    }
  ];

  return (
    <section id="how-we-work" className="py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-brick/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-brick/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Reveal>
            <span className="inline-block text-brand-brick font-bold tracking-[0.3em] uppercase text-xs mb-6 border border-brand-brick/30 px-4 py-2 rounded-full">
              Our Methodology
            </span>
          </Reveal>
          
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              How We Make This <span className="italic text-brand-brick">Work.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We replace guesswork with high-intent systems. Our methodology is built to put your firm in front of the right clients at the exact moment they need you.
            </p>
          </Reveal>
        </div>

        {/* 3 Cards Side by Side */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              delay={index * 150}
              number={feature.number}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              stat={feature.stat}
              statLabel={feature.statLabel}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;