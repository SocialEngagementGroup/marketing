import React from 'react';
import Header from '../components/Common/Header';
import Hero from '../components/Lawyer/Hero';
import Features from '../components/Lawyer/Features';
import Services from '../components/Lawyer/Services';
import CaseStudies from '../components/Lawyer/CaseStudies';
import Testimonials from '../components/Lawyer/Testimonials';
import TrustBar from '../components/Lawyer/TrustBar';
import VideoSection from '../components/Lawyer/VideoSection';
import Contact from '../components/Lawyer/Contact';
import ContactForm from '../components/Lawyer/ContactForm';
import FAQ from '../components/Lawyer/FAQ';
import Footer from '../components/Common/Footer';
import SEO from '../components/Common/SEO';

/**
 * Lawyer Landing Page
 * Marketing landing page targeting law firms for digital marketing services.
 * 
 * Sections:
 * 1. Hero - Main value proposition
 * 2. Features - "How We Make This Work" methodology
 * 3. Services - "Why Firms Choose Us" value propositions  
 * 4. CaseStudies - Featured case study + testimonials
 * 5. TrustBar - Industries we serve
 * 6. VideoSection - Featured video content
 * 7. Contact - Final CTA with Calendly
 * 8. FAQ - Common questions
 */
const LawyerLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      <SEO 
        title="Legal Marketing Experts | Grow Your Law Practice with SEG"
        description="Premier digital marketing for attorneys and law firms across the USA. Specialized strategies to build your brand authority and dominate your local market. Schedule a consultation."
      />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* How We Make This Work */}
        <Features />
        
        {/* Why Firms Choose Us */}
        <Services />
        
        {/* Featured Case Study */}
        <CaseStudies />

        {/* Video Section */}
        <VideoSection />
        
        {/* Client Testimonials */}
        <Testimonials />

        {/* Trusted Industries */}
        <TrustBar />
        
        {/* Final CTA */}
        <Contact />
        
        {/* FAQ */}
        <FAQ />

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default LawyerLandingPage;
