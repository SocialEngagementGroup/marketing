import React, { useState, useMemo } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import SEO from '../components/Common/SEO';
import CareersHero from '../components/Careers/CareersHero';
import JobFilters from '../components/Careers/JobFilters';
import JobList from '../components/Careers/JobList';
import { allJobs, jobs, JobFilter } from '../data/jobsData';

/**
 * CareersPage Component
 * 
 * Full careers listing page with clean, minimal design.
 * Simple filters: View All and Open Positions.
 * Shows "no jobs" message if no positions available.
 */
const CareersPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<JobFilter>('all');

  const filteredJobs = useMemo(() => {
    if (activeFilter === 'open') {
      // Only jobs with deadline in the future are "open"
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset to start of day
      return allJobs.filter(job => {
        if (!job.deadline || job.deadline.trim() === '') return false;
        const deadlineDate = new Date(job.deadline);
        return deadlineDate >= today;
      });
    }
    return allJobs; // All jobs
  }, [activeFilter]);

  return (
    <>
      <SEO 
        title="Careers | Social Engagement Group"
        description="Join our team and be part of our mission. Explore open positions in development, design, marketing, and more."
      />
      <Header theme="dark" showHomeButton />
      
      <main className="min-h-screen bg-[#F5F5F3] relative overflow-hidden">
        {/* Unified gradient blob accents */}
        <div 
          className="absolute -right-20 top-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 180, 150, 0.4) 0%, rgba(255, 200, 180, 0.2) 30%, rgba(255, 220, 200, 0.1) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="absolute right-10 sm:right-20 top-40 sm:top-60 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 150, 180, 0.3) 0%, rgba(255, 180, 200, 0.15) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Hero Section */}
        <CareersHero />
        
        {/* Jobs Section */}
        <section className="pb-16 sm:pb-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            {/* Filters */}
            <JobFilters 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter} 
            />
            
            {/* Job Listings or No Jobs Message */}
            {filteredJobs.length > 0 ? (
              <JobList jobs={filteredJobs} />
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-brick/10 mb-6">
                  <svg className="w-8 h-8 text-brand-brick" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-sans text-2xl font-bold text-gray-900 mb-3">
                  No open positions
                </h3>
                <p className="font-sans text-lg text-gray-500 max-w-md mx-auto">
                  We don't have any open positions at the moment, but check back soon for new opportunities!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CareersPage;
