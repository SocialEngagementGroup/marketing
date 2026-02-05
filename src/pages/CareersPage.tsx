import React, { useState, useMemo } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import SEO from '../components/Common/SEO';
import CareersHero from '../components/Careers/CareersHero';
import JobFilters from '../components/Careers/JobFilters';
import JobList from '../components/Careers/JobList';
import { jobs, JobDepartment } from '../data/jobsData';

/**
 * CareersPage Component
 * 
 * Full careers listing page with clean, minimal design.
 * Jobs are loaded from jobs.json and filtered by department.
 * Seamless hero-to-content transition with unified background.
 * Fully responsive for mobile devices.
 */
const CareersPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<JobDepartment>('all');

  const filteredJobs = useMemo(() => {
    if (activeFilter === 'all') {
      return jobs;
    }
    return jobs.filter((job) => job.department === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <SEO 
        title="Careers | Social Engagement Group"
        description="Join our team and be part of our mission. Explore open positions in development, design, marketing, and more."
      />
      <Header theme="dark" showHomeButton />
      
      <main className="min-h-screen bg-[#F5F5F3] relative overflow-hidden">
        {/* Unified gradient blob accents - spans both hero and content */}
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
        
        {/* Jobs Section - seamless continuation */}
        <section className="pb-16 sm:pb-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            {/* Filters */}
            <JobFilters 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter} 
            />
            
            {/* Job Listings */}
            <JobList jobs={filteredJobs} />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CareersPage;
