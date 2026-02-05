/**
 * Jobs Data
 * 
 * Type definitions and job data for the Careers page.
 * Jobs are loaded from jobs.json for easy maintenance and versioning.
 */

import jobsJson from './jobs.json';

export type JobFilter = 'all' | 'open';

export type JobDepartment = 
  | 'all'
  | 'Development'
  | 'Design'
  | 'Marketing'
  | 'Operations';

export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

export interface Job {
  id: string;
  slug: string;
  title: string;
  summary: string;
  department: JobDepartment;
  type: JobType;
  location: string;
  experience: string;
  compensation: string;
  deadline: string;
  active: boolean;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
}

// Simplified filters: View All and Open Positions
export const jobFilters: { value: JobFilter; label: string }[] = [
  { value: 'all', label: 'View All' },
  { value: 'open', label: 'Open Positions' },
];

// Load all jobs from JSON
export const allJobs: Job[] = jobsJson as Job[];

// Load only active/open jobs
export const jobs: Job[] = allJobs.filter(job => job.active);

// Get a single job by slug
export const getJobBySlug = (slug: string): Job | undefined => {
  return jobs.find(job => job.slug === slug);
};
