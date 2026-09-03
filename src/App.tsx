import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LawyerLandingPage, HomepageLandingPage, WebsiteGrowthEnginePage, ThankYouCalPage, NotFoundPage, DoctorLandingPage, RestaurantLandingPage } from './pages';

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
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    window.scrollTo(0, 0);
    
    // Robust reset for mobile/slow-loading pages
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepageLandingPage />} />
      <Route path="/marketing-for-law-firm" element={<LawyerLandingPage />} />
      <Route path="/marketing-for-doctors" element={<DoctorLandingPage />} />
      <Route path="/marketing-for-restaurants" element={<RestaurantLandingPage />} />
      <Route path="/marketing-for-website" element={<WebsiteGrowthEnginePage />} />
      {/* The page shipped at /website-solutions before the Growth Engine
          rebuild. Kept as a redirect so existing links and any indexed
          URLs land on the new page rather than the 404. */}
      <Route path="/website-solutions" element={<Navigate to="/marketing-for-website" replace />} />
      <Route path="/thank-you-cal" element={<ThankYouCalPage />} />
      <Route path="/marketing-for-law-firm/thank-you-cal" element={<ThankYouCalPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;