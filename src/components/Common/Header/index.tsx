import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  theme?: 'light' | 'dark';
  showHomeButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ theme = 'dark', showHomeButton = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[1200] transition-all duration-500 border-b ${
          isScrolled
            ? "bg-brand-black/95 backdrop-blur-sm border-brand-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/assets/logos/logo.svg"
              alt="Social Engagement Group"
              style={{ 
                filter: `url(#clean-logo-filter) brightness(0) ${isScrolled || isMobileMenuOpen || theme === 'light' ? 'invert(1)' : ''}`
              }}
              className="w-10 h-10 transition-all duration-500 transform group-hover:scale-110"
            />
            <span
              className={`font-sans font-bold text-sm tracking-widest uppercase transition-all duration-500 ${
                isScrolled || isMobileMenuOpen || theme === 'light'
                  ? "text-white" 
                  : "text-brand-black"
              }`}
            >
              Social Engagement Group
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            {showHomeButton ? (
              <a
                href="/"
                className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  isScrolled
                    ? "bg-brand-brick border-brand-brick text-white hover:bg-white hover:text-brand-black"
                    : theme === 'dark'
                      ? "bg-brand-black border-brand-black text-white hover:bg-brand-brick hover:border-brand-brick"
                      : "bg-white border-white text-brand-black hover:bg-transparent hover:text-white"
                }`}
              >
                Back to Home
              </a>
            ) : (
              <a
                href="https://calendly.com/itseg/segmeet"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  isScrolled
                    ? "bg-brand-brick border-brand-brick text-white hover:bg-white hover:text-brand-black"
                    : theme === 'dark'
                      ? "bg-brand-black border-brand-black text-white hover:bg-brand-brick hover:border-brand-brick"
                      : "bg-white border-white text-brand-black hover:bg-transparent hover:text-white"
                }`}
              >
                Book Consultation
              </a>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-[101] relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-white w-8 h-8" />
            ) : (
              <Menu
                className={`w-8 h-8 transition-colors duration-500 ${
                  isScrolled || theme === 'light' ? "text-white" : "text-brand-black"
                }`}
              />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-brand-black z-[90] transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-8 text-center">
          {showHomeButton ? (
            <a
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-brick text-white px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Back to Home
            </a>
          ) : (
            <a
              href="https://calendly.com/itseg/segmeet"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-brick text-white px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Book Consultation
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
