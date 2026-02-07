import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { Job } from '../../../data/jobsData';

interface JobCardProps {
  job: Job;
}

/**
 * JobCard Component
 * 
 * Clean row-based job listing with clickable title, deadline, and Apply link.
 * Removed remote/location tag - only shows on JD page.
 * Primary: brand-brick, Hover: black
 */
const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="group py-5 sm:py-6 border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Title and Apply row */}
        <div className="flex items-start justify-between gap-4">
          <Link 
            to={`/careers/${job.slug}`}
            className="block flex-1 min-w-0"
          >
            <h3 className="font-outfit text-lg sm:text-xl md:text-2xl font-bold text-brand-brick hover:text-gray-900 transition-colors duration-200 leading-snug">
              {job.title}
            </h3>
          </Link>
          
          {/* Apply CTA - Primary: brick, Hover: black */}
          <Link
            to={`/careers/${job.slug}`}
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-brand-brick font-bold text-sm hover:text-gray-900 transition-colors duration-200 group/btn"
          >
            Apply
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
        
        {/* Summary - larger text */}
        <p className="font-outfit text-gray-500 text-sm sm:text-base leading-relaxed">
          {job.summary}
        </p>
        
        {/* Tags - removed location/remote, only type and deadline */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-600">
            <Clock className="w-3.5 h-3.5" />
            {job.type}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-600">
            <Calendar className="w-3.5 h-3.5" />
            Apply by {job.deadline}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
