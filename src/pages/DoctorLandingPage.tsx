import React, { useEffect } from 'react';
import Header from '../components/Common/Header';
import Hero from '../components/Doctor/Hero';
import AboutMission from '../components/Doctor/AboutMission';
import WhyChooseUs from '../components/Doctor/WhyChooseUs';
import CaseStudy from '../components/Doctor/CaseStudy';
import VideoSection from '../components/Doctor/VideoSection';
import Testimonials from '../components/Doctor/Testimonials';
import TrustBar from '../components/Doctor/TrustBar';
import FAQ from '../components/Doctor/FAQ';
import CTA from '../components/Doctor/CTA';

import ScrollProgress from '../components/Common/ScrollProgress';

import SEO from '../components/Common/SEO';
import Footer from '../components/Common/Footer';
import ContactForm from '../components/Common/ContactForm';

interface DoctorLandingPageProps {}

const DoctorLandingPage: React.FC<DoctorLandingPageProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-healist-charcoal font-sans selection:bg-brand-healist-blue selection:text-white relative">
      <ScrollProgress color="bg-white" />
      <div className="grain-overlay opacity-[0.03]" />
      <SEO
        title="Marketing for Medical Practices That Fills Your Appointment Calendar"
        description="We help healthcare providers attract the right patients, build trust with a strong online reputation, and run targeted campaigns that turn searches into scheduled appointments."
      />
      <Header accent="brick" />
        <main>
          <Hero />
          <AboutMission />
          <WhyChooseUs />
          <CaseStudy />
          <VideoSection />
          <Testimonials />
          <TrustBar />
          <CTA />
          <FAQ />
          <ContactForm accent="brick" />

        </main>
        <Footer />
    </div>
  );
};

export default DoctorLandingPage;
