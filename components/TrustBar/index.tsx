import React from 'react';
import { Scale, Building2, Stethoscope, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import Reveal from '../ui/Reveal';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-brand-beige border-y border-brand-black/10 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-brand-brick font-bold tracking-widest uppercase text-xs mb-4 block">Trusted by Clients Across Competitive Industries</span>
            <p className="text-lg text-brand-black/70 leading-relaxed">
              We work closely with law firms, applying systems built from experience across other high-competition industries including healthcare, hospitality, and retail—where visibility, trust, and conversion matter just as much.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-12">
            <div className="flex items-center gap-3 text-brand-black/50 hover:text-brand-brick transition-colors">
              <Scale className="w-6 h-6" />
              <span className="font-serif text-sm font-medium">Legal</span>
            </div>
            <div className="flex items-center gap-3 text-brand-black/50 hover:text-brand-brick transition-colors">
              <Stethoscope className="w-6 h-6" />
              <span className="font-serif text-sm font-medium">Healthcare</span>
            </div>
            <div className="flex items-center gap-3 text-brand-black/50 hover:text-brand-brick transition-colors">
              <Building2 className="w-6 h-6" />
              <span className="font-serif text-sm font-medium">Hospitality</span>
            </div>
            <div className="flex items-center gap-3 text-brand-black/50 hover:text-brand-brick transition-colors">
              <ShoppingBag className="w-6 h-6" />
              <span className="font-serif text-sm font-medium">Retail</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TrustBar;
