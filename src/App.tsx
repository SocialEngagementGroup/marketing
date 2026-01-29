import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LawyerLandingPage, HomepageLandingPage } from './pages';

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
      <Route path="/lawyer" element={<LawyerLandingPage />} />
    </Routes>
  );
};

export default App;