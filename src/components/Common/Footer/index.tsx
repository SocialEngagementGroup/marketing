import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-white/10 gap-8 md:gap-0">
          
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

          <div className="flex gap-4">
            <a href="https://www.instagram.com/socialengagementgroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-brick border border-brand-brick text-white hover:scale-110 transition-all duration-300"><Instagram className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/company/social-engagement-group" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-brick border border-brand-brick text-white hover:scale-110 transition-all duration-300"><Linkedin className="w-4 h-4" /></a>
            <a href="https://www.facebook.com/seg.socialengagementgroup/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-brick border border-brand-brick text-white hover:scale-110 transition-all duration-300"><Facebook className="w-4 h-4" /></a>
          </div>

          {/* Mobile Links - Stacked Vertical */}
          <div className="flex md:hidden flex-col items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
            <a href="https://www.socialengagementgroup.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms and Conditions</a>
            <a href="https://www.socialengagementgroup.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://www.socialengagementgroup.com/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cookies</a>
            <a href="https://www.socialengagementgroup.com/legal-notice" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Legal Notice</a>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest gap-4 md:gap-0">
          <p>All rights reserved &copy; {new Date().getFullYear()}</p>
          
          {/* Desktop Links - Row */}
          <div className="hidden md:flex gap-6">
            <a href="https://www.socialengagementgroup.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms and Conditions</a>
            <a href="https://www.socialengagementgroup.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://www.socialengagementgroup.com/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cookies</a>
            <a href="https://www.socialengagementgroup.com/legal-notice" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Legal Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;