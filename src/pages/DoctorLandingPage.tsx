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
import { pageSeo, serviceSchema } from '../data/seo';

interface DoctorLandingPageProps {}

const DoctorLandingPage: React.FC<DoctorLandingPageProps> = () => {
  return (
    <div className="min-h-screen bg-white text-brand-healist-charcoal font-sans selection:bg-brand-healist-blue selection:text-white relative">
      <ScrollProgress color="bg-white" />
      <div className="grain-overlay opacity-[0.03]" />
      <SEO
        title={pageSeo.doctors.title}
        description={pageSeo.doctors.description}
        canonicalPath={pageSeo.doctors.path}
        schema={serviceSchema({
          name: 'Medical Practice Marketing Services',
          description: pageSeo.doctors.description,
          path: pageSeo.doctors.path,
          serviceType: 'Healthcare Marketing',
        })}
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
