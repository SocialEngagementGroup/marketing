import React from 'react';
import { LawyerLandingPage } from './pages';

/**
 * App Component
 * 
 * Main application entry point.
 * Currently renders the Lawyer Landing Page.
 * 
 * For multiple pages, this can be extended with routing:
 * - react-router-dom for client-side routing
 * - Or separate entry points for different landing pages
 */
const App: React.FC = () => {
  // Currently showing the Lawyer Landing Page
  // In the future, this could be replaced with a router
  return <LawyerLandingPage />;
};

export default App;