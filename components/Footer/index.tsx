import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <img 
                src="/logos/seg.png" 
                alt="Social Engagement Group" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-sans font-bold text-sm tracking-widest uppercase text-white">
                Social Engagement Group
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Defining the standard for legal digital marketing. We combine ethical strategies with aggressive growth tactics.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-brand-brick">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="https://www.socialengagementgroup.com/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="https://www.socialengagementgroup.com/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://www.socialengagementgroup.com/cookies" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="https://www.socialengagementgroup.com/legal-notice" className="hover:text-white transition-colors">Legal Notice</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-brand-brick">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/socialengagementgroup" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-brand-brick hover:border-brand-brick hover:text-white hover:scale-110 hover:shadow-[0_4px_20px_rgba(151,85,84,0.4)] transition-all duration-300"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/company/social-engagement-group" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-brand-brick hover:border-brand-brick hover:text-white hover:scale-110 hover:shadow-[0_4px_20px_rgba(151,85,84,0.4)] transition-all duration-300"><Linkedin className="w-4 h-4" /></a>
              <a href="https://www.facebook.com/seg.socialengagementgroup/" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-brand-brick hover:border-brand-brick hover:text-white hover:scale-110 hover:shadow-[0_4px_20px_rgba(151,85,84,0.4)] transition-all duration-300"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Social Engagement Group.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;