import React from 'react';
import { JobFilter, jobFilters } from '../../../data/jobsData';

interface JobFiltersProps {
  activeFilter: JobFilter;
  onFilterChange: (filter: JobFilter) => void;
}

/**
 * JobFilters Component
 * 
 * Simple filter: View All and Open Positions
 * Primary: brand-brick, Hover: black
 */
const JobFilters: React.FC<JobFiltersProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
      <div className="flex gap-2 flex-wrap">
        {jobFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`
              px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium 
              transition-all duration-200
              ${
                activeFilter === filter.value
                  ? 'bg-brand-brick text-white shadow-sm hover:bg-gray-900'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900'
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobFilters;
