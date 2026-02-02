import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, Clock, Target, Globe, MousePointer2, ShoppingBag } from 'lucide-react';
import Reveal from '../../Common/ui/Reveal';

type ProductTab = 'website' | 'landing' | 'ecommerce';

const PRODUCTS = {
  website: {
    title: "Custom Business Website",
    shortDesc: "A strategic, high-performing website designed to clearly communicate your services, build trust, and generate inbound inquiries.",
    includes: [
      "Conversion-focused page structure",
      "Clear messaging tailored to your audience",
      "Mobile-first, fast-loading design",
      "Service pages built for clarity and trust",
      "Lead capture forms and contact flows",
      "Analytics and tracking setup"
    ],
    bestFor: "Established businesses that rely on credibility, visibility, and consistent inbound leads.",
    timeline: "2–4 Weeks",
    cta: "Start With Strategy",
    icon: <Globe className="w-5 h-5" />
  },
  landing: {
    title: "High-Converting Landing Page",
    shortDesc: "A single-purpose page built to turn traffic into action. Perfect for ads, campaigns, or focused offers.",
    includes: [
      "One clear conversion goal",
      "Persuasive headline and supporting copy",
      "Optimized layout for paid traffic",
      "Strong call-to-action placement",
      "Fast load speed and mobile optimization",
      "A/B-ready structure"
    ],
    bestFor: "Ad campaigns, promotions, lead magnets, or validating new offers quickly.",
    timeline: "7–10 Days",
    cta: "Build a Landing Page",
    icon: <MousePointer2 className="w-5 h-5" />
  },
  ecommerce: {
    title: "Ecommerce Website",
    shortDesc: "A scalable online store designed to showcase products, simplify checkout, and support long-term growth.",
    includes: [
      "Custom storefront design",
      "Product and collection setup",
      "Secure checkout and payment integration",
      "Mobile-optimized shopping experience",
      "Performance and speed optimization",
      "Analytics and conversion tracking"
    ],
    bestFor: "Brands selling physical or digital products that want a polished, reliable ecommerce presence.",
    timeline: "3–5 Weeks",
    cta: "Plan My Store",
    icon: <ShoppingBag className="w-5 h-5" />
  }
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<ProductTab>('website');
  
  const activeProduct = PRODUCTS[activeTab];

  return (
    <section ref={containerRef} className="relative min-h-[180vh] md:min-h-[160vh] flex flex-col items-center pt-32 pb-48 overflow-hidden bg-white">
      {/* Background Image Container - Covering the top portion */}
      <div 
        className="absolute inset-x-0 top-0 h-[100vh] md:h-[120vh] z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
        }}
      >
        <img 
          src="/assets/images/bg_mountains.jpg" 
          alt="Emerald Mountain Landscape" 
          className="w-full h-full object-cover object-center blur-[1px]"
        />
        
        {/* Soft overlay to blend smoothly with white background */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white via-white/50 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center mb-0">
        {/* Top Heading Group - Pushing everything lower */}
        <div className="max-w-5xl mt-24 md:mt-40 mb-32 md:mb-48">
          <Reveal delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-outfit font-bold text-[#064232] leading-[1.1] mb-8 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] text-center">
              Website Building That's Fast<br className="hidden md:block" />
              Without Cutting Corners
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-white font-semibold max-w-2xl mx-auto text-lg md:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] text-center leading-relaxed opacity-100">
              Built by People. Powered by AI. One platform for every digital solution you need.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Strategy Card - Positioned deep in the white space area */}
      <div className="w-full max-w-5xl relative z-30 px-6">
          <Reveal delay={600}>
                <div className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
                    {/* Tab Navigation */}
                    <div className="flex flex-col md:flex-row items-center border-b border-gray-100">
                        {(['website', 'landing', 'ecommerce'] as ProductTab[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 w-full md:w-auto px-8 py-6 text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-3 border-b-2 md:border-b-0 md:border-r last:border-r-0 border-gray-100
                                    ${activeTab === tab ? 'bg-[#064232] text-white' : 'bg-gray-50/50 text-[#064232]/40 hover:text-[#064232] hover:bg-gray-50'}`}
                            >
                                {PRODUCTS[tab].icon}
                                {tab === 'website' ? 'Website' : tab === 'landing' ? 'Landing Page' : 'Ecommerce'}
                            </button>
                        ))}
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Left Side: Description & Features */}
                            <div className="lg:col-span-12 text-left">
                                <h3 className="text-3xl md:text-4xl font-outfit font-bold text-[#064232] mb-4">
                                    {activeProduct.title}
                                </h3>
                                <p className="text-[#064232]/70 text-lg md:text-xl font-medium mb-10 max-w-4xl leading-relaxed">
                                    {activeProduct.shortDesc}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                                    {activeProduct.includes.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#064232] mt-1 shrink-0" />
                                            <span className="text-[#064232]/80 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row: Stats & CTA */}
                        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 pt-10 border-t border-gray-100">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-[#064232]/40 uppercase text-xs font-bold tracking-widest">
                                    <Target className="w-4 h-4" />
                                    Best For
                                </div>
                                <p className="text-sm font-semibold text-[#064232]/80">
                                    {activeProduct.bestFor}
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-[#064232]/40 uppercase text-xs font-bold tracking-widest">
                                    <Clock className="w-4 h-4" />
                                    Timeline
                                </div>
                                <p className="text-sm font-semibold text-[#064232]/80">
                                    {activeProduct.timeline}
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <button className="w-full md:w-auto bg-[#064232] text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-[1.02] transform">
                                    {activeProduct.cta}
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
      </div>
    </section>
  );
};

export default Hero;
