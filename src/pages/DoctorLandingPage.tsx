import React, { useEffect } from 'react';
import Header from '../components/Common/Header';
import Hero from '../components/Doctor/Hero';
import Marquee from '../components/Doctor/Marquee';
import LogoCloud from '../components/Doctor/LogoCloud';
import AboutMission from '../components/Doctor/AboutMission';
import Process from '../components/Doctor/Process';
import Services from '../components/Doctor/Services';
import WhyChooseUs from '../components/Doctor/WhyChooseUs';
import CaseStudy from '../components/Doctor/CaseStudy';
import Testimonials from '../components/Doctor/Testimonials';
import FAQ from '../components/Doctor/FAQ';
import CTA from '../components/Doctor/CTA';

import SEO from '../components/Common/SEO';
import Footer from '../components/Common/Footer';
import ContactForm from '../components/Common/ContactForm';

interface DoctorLandingPageProps {}

const DoctorLandingPage: React.FC<DoctorLandingPageProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-brick selection:text-white relative">


      <SEO
        title="Marketing for Doctors | Personal Branding & Digital Strategy"
        description="We build meaningful digital relationships. Our patient acquisition systems turn audiences into communities for medical practices."
      />
      <Header />
        <main>
          <Hero />
          <Marquee />
          <LogoCloud />
          <AboutMission />
          <Process />
          <Services />
          <WhyChooseUs />
          <CaseStudy />
          <Testimonials />
          <FAQ />
          <CTA />
          <ContactForm />
        </main>
        <Footer />
    </div>
  );
};

export default DoctorLandingPage;
