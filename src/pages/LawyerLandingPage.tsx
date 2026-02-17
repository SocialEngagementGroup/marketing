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
import ScrollProgress from '../components/Common/ScrollProgress';

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
    <div className="min-h-screen flex flex-col font-outfit text-slate-900">
      <SEO 
        title="Legal Marketing Experts | Grow Your Law Practice with SEG"
        description="Dominate your local market with specialized digital marketing for law firms. We help attorneys build brand authority and generate consistent call volume."
        ogTitle="Legal Marketing Experts | Social Engagement Group"
        ogDescription="Specialized digital marketing strategies for law firms. Build authority and automate your growth."
        ogImage="/assets/images/lawyer-meta.jpg"
        ogType="website"
        schema={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Social Engagement Group",
          "description": "Premier digital marketing agency for law firms and attorneys.",
          "url": "https://digital.socialengagementgroup.com/marketing-for-law-firm",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "serviceType": "Legal Marketing",
          "areaServed": "USA"
        }}
      />
      <ScrollProgress color="bg-brand-beige" />
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
