import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LawyerLandingPage, HomepageLandingPage, WebSolutionsLandingPage, ThankYouCalPage, NotFoundPage, CareersPage, JobDetailPage, DoctorLandingPage, RestaurantLandingPage } from './pages';

/**
 * App Component
 * 
 * Main application entry point.
 * Uses react-router-dom for navigation.
 */
const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepageLandingPage />} />
      <Route path="/marketing-for-law-firm" element={<LawyerLandingPage />} />
      {/* <Route path="/marketing-for-doctors" element={<DoctorLandingPage />} />
      <Route path="/marketing-for-restaurants" element={<RestaurantLandingPage />} /> */}
      {/* <Route path="/website-solutions" element={<WebSolutionsLandingPage />} /> */}
      <Route path="/thank-you-cal" element={<ThankYouCalPage />} />
      <Route path="/marketing-for-law-firm/thank-you-cal" element={<ThankYouCalPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/careers/:slug" element={<JobDetailPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;