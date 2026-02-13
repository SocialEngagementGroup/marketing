import React, { useEffect } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import SEO from '../components/Common/SEO';

// Sections
import Hero from '../components/WebsiteSolutions/Hero';
import Problem from '../components/WebsiteSolutions/Problem';
import Process from '../components/WebsiteSolutions/Process';
import Features from '../components/WebsiteSolutions/Features';
import Insights from '../components/WebsiteSolutions/Insights';
import CTA from '../components/WebsiteSolutions/CTA';
import FAQ from '../components/WebsiteSolutions/FAQ';

const WebSolutionsLandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-brand-forest selection:bg-brand-forest selection:text-white">
      <SEO 
        title="Web Solutions | Professional Website Building | Social Engagement Group"
        description="Get a high-performance, conversion-focused website built with modern strategy and design. Professional web solutions for growth-oriented businesses."
      />
      
      <Header />
      
      <main>
        <Hero />
        <Problem />
        <Features />
        <Process />
        <Insights />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default WebSolutionsLandingPage;
