import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/Common/SEO';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

/**
 * Thank You Page - Optimized with Homepage Aesthetic
 * Features: Blurred bg_thankyou.jpg background, site Navbar, site Footer, Bebas Neue typography.
 */
const ThankYouCalPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-white selection:bg-brand-brick selection:text-white overflow-x-hidden">
      <SEO 
        title="Session Confirmed | Social Engagement Group" 
        description="You're in the inner circle. Your session is confirmed. Check your email for details." 
      />

      {/* Global Navbar - Customized for Thank You page */}
      <Header theme="light" showHomeButton={true} />

      {/* Main Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/bg_thankyou.jpg" 
            alt="Background" 
            className="w-full h-full object-cover object-top blur-[2px] scale-105"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          {/* Main Headline - Bold Professional Style */}
          <h1 className="font-outfit text-5xl md:text-6xl lg:text-[7rem] leading-[1.1] tracking-tight font-bold flex flex-col items-center text-center">
            <div className="reveal-text-container">
              <span className="reveal-text-item text-white" style={{ animationDelay: '0.1s' }}>
                You're in the
              </span>
            </div>
            <div className="reveal-text-container">
              <span 
                className="reveal-text-item text-white/90" 
                style={{ animationDelay: '0.2s' }}
              >
                Inner Circle
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <div className="reveal-text-container mt-12 max-w-2xl mx-auto">
            <p 
              className="reveal-text-item text-white/50 text-lg md:text-2xl font-outfit font-light leading-relaxed tracking-[0.05em]" 
              style={{ animationDelay: '0.3s' }}
            >
              Your session is confirmed. Check your email for the calendar invitation & link.
            </p>
          </div>
        </div>
      </section>

      {/* Site Footer - Accessible by scrolling */}
      <Footer />

      {/* Ensure Bebas Neue and Inter are available (already in index.html, but keeping for reference) */}
    </div>
  );
};

export default ThankYouCalPage;
