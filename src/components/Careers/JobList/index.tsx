import React from 'react';
import { Job } from '../../../data/jobsData';
import JobCard from '../JobCard';

interface JobListProps {
  jobs: Job[];
}

/**
 * JobList Component
 * 
 * Container for job cards with empty state handling.
 */
const JobList: React.FC<JobListProps> = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="font-outfit text-lg text-brand-black/50">
          No positions available in this category at the moment.
        </p>
        <p className="font-outfit text-sm text-brand-black/40 mt-2">
          Check back soon or browse other categories.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
