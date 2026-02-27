import React, { useEffect } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import SEO from '../components/Common/SEO';
import ScrollProgress from '../components/Common/ScrollProgress';
import ContactForm from '../components/Common/ContactForm';

// Sections
import Hero from '../components/WebsiteSolutions/Hero';
import AboutMission from '../components/WebsiteSolutions/AboutMission';
import WhyChooseUs from '../components/WebsiteSolutions/WhyChooseUs';
import TargetAudience from '../components/WebsiteSolutions/TargetAudience';
import VideoSection from '../components/WebsiteSolutions/VideoSection';
import Testimonials from '../components/WebsiteSolutions/Testimonials';
import TrustBar from '../components/WebsiteSolutions/TrustBar';
import CTA from '../components/WebsiteSolutions/CTA';
import FAQ from '../components/WebsiteSolutions/FAQ';

const WebSolutionsLandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-brand-forest selection:bg-brand-forest selection:text-white relative">
      <ScrollProgress color="bg-white" />
      <div className="grain-overlay opacity-[0.03]" />
      
      <SEO 
        title="Web Solutions | Professional Website Building | Social Engagement Group"
        description="Get a high-performance, conversion-focused website built with modern strategy and design. Professional web solutions for growth-oriented businesses."
      />
      
      <Header theme="dark" accent="forest" />
      
      <main>
        <Hero />
        <AboutMission />
        <WhyChooseUs />
        <TargetAudience />
        <VideoSection />
        <Testimonials />
        <TrustBar />
        <CTA />
        <FAQ />
        <ContactForm accent="navy" />
      </main>
      
      <Footer />
    </div>
  );
};

export default WebSolutionsLandingPage;
