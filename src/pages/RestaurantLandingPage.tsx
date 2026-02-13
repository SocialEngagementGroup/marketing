import React, { useEffect } from 'react';
import Header from '../components/Common/Header';
import Hero from '../components/Restaurant/Hero';
import Marquee from '../components/Restaurant/Marquee';
import AboutMission from '../components/Restaurant/AboutMission';
import Process from '../components/Restaurant/Process';
import Services from '../components/Restaurant/Services';
import WhyChooseUs from '../components/Restaurant/WhyChooseUs';
import CaseStudy from '../components/Restaurant/CaseStudy';
import VideoSection from '../components/Restaurant/VideoSection';
import Testimonials from '../components/Restaurant/Testimonials';
import FAQ from '../components/Restaurant/FAQ';
import CTA from '../components/Restaurant/CTA';

import ScrollProgress from '../components/Common/ScrollProgress';
import SEO from '../components/Common/SEO';
import Footer from '../components/Common/Footer';
import ContactForm from '../components/Common/ContactForm';

interface RestaurantLandingPageProps {}

const RestaurantLandingPage: React.FC<RestaurantLandingPageProps> = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#A64942] selection:text-white relative">
      <ScrollProgress color="bg-white" />
      <div className="grain-overlay opacity-[0.03]" />
      <SEO
        title="Marketing for Restaurants | Reservation Growth & Digital Strategy"
        description="Fill your tables every day. Our guest-generating engine turns hungry searchers into loyal regulars for your restaurant."
      />
      <Header />
      <main>
          <Hero />
          <AboutMission />
          <WhyChooseUs />
          <CaseStudy />
          <VideoSection />
          <Testimonials />
          <Marquee />
          <CTA />
          <FAQ />
          <ContactForm successRedirect="/thank-you-marketing-for-restaurants" accent="brick" />
        </main>
        <Footer accent="brick" />
    </div>
  );
};

export default RestaurantLandingPage;
