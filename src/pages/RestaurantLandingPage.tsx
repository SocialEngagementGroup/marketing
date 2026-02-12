import React, { useEffect } from 'react';
import Header from '../components/Common/Header';
import Hero from '../components/Restaurant/Hero';
import Marquee from '../components/Restaurant/Marquee';
import LogoCloud from '../components/Restaurant/LogoCloud';
import AboutMission from '../components/Restaurant/AboutMission';
import Process from '../components/Restaurant/Process';
import Services from '../components/Restaurant/Services';
import WhyChooseUs from '../components/Restaurant/WhyChooseUs';
import CaseStudy from '../components/Restaurant/CaseStudy';
import Testimonials from '../components/Restaurant/Testimonials';
import FAQ from '../components/Restaurant/FAQ';
import CTA from '../components/Restaurant/CTA';

import SEO from '../components/Common/SEO';
import Footer from '../components/Common/Footer';
import ContactForm from '../components/Common/ContactForm';

interface RestaurantLandingPageProps {}

const RestaurantLandingPage: React.FC<RestaurantLandingPageProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-brick selection:text-white relative">


      <SEO
        title="Marketing for Restaurants | Reservation Growth & Digital Strategy"
        description="Fill your tables every day. Our guest-generating engine turns hungry searchers into loyal regulars for your restaurant."
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
          <ContactForm accent="lime" />
        </main>
        <Footer accent="lime" />
    </div>
  );
};

export default RestaurantLandingPage;
