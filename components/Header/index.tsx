import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Methodology', href: '#why-us' },
    { name: 'Solutions', href: '#services' },
    { name: 'Case Studies', href: '#testimonials' },
    { name: 'AI Audit', href: '#ai-audit' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-black/95 backdrop-blur-sm border-brand-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo className={`w-8 h-8 ${isScrolled || isMobileMenuOpen ? 'text-brand-white' : 'text-brand-black md:text-brand-black'}`} />
          <div className={`flex flex-col leading-none ${isScrolled || isMobileMenuOpen ? 'text-brand-white' : 'text-brand-black md:text-brand-black'}`}>
            <span className="font-sans font-bold text-sm tracking-widest uppercase">Social Engagement</span>
            <span className="font-sans text-[10px] tracking-[0.2em] opacity-80 uppercase">Group</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-xs font-bold uppercase tracking-widest transition-colors relative group ${
                isScrolled ? 'text-brand-white/80 hover:text-brand-brick' : 'text-brand-black hover:text-brand-brick'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-brick transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
              isScrolled 
                ? 'bg-brand-brick border-brand-brick text-white hover:bg-white hover:text-brand-black' 
                : 'bg-brand-black border-brand-black text-white hover:bg-brand-brick hover:border-brand-brick'
            }`}
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen 
            ? <X className="text-white w-8 h-8" /> 
            : <Menu className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-brand-black'}`} />
          }
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-brand-black z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-white hover:text-brand-brick text-2xl font-serif"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 bg-brand-brick text-white px-8 py-4 text-sm font-bold uppercase tracking-widest"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;