import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import TrustBar from '../components/TrustBar';
import VideoSection from '../components/VideoSection';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

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
