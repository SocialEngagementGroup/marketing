import React from 'react';
import { JobDepartment, jobDepartments } from '../../../data/jobsData';

interface JobFiltersProps {
  activeFilter: JobDepartment;
  onFilterChange: (filter: JobDepartment) => void;
}

/**
 * JobFilters Component
 * 
 * Rounded pill-style filter buttons for job departments.
 * Responsive horizontal scroll on mobile.
 * Primary: brand-brick, Hover: black
 */
const JobFilters: React.FC<JobFiltersProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
      {/* Scrollable container on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
        {jobDepartments.map((dept) => (
          <button
            key={dept.value}
            onClick={() => onFilterChange(dept.value)}
            className={`
              flex-shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium 
              transition-all duration-200 whitespace-nowrap
              ${
                activeFilter === dept.value
                  ? 'bg-brand-brick text-white shadow-sm hover:bg-gray-900'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900'
              }
            `}
          >
            {dept.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobFilters;
