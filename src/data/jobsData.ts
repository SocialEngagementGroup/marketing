/**
 * Jobs Data
 * 
 * Type definitions and job data for the Careers page.
 * Jobs are loaded from jobs.json for easy maintenance and versioning.
 */

import jobsJson from './jobs.json';

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

export const jobDepartments: { value: JobDepartment; label: string }[] = [
  { value: 'all', label: 'View All' },
  { value: 'Development', label: 'Development' },
  { value: 'Design', label: 'Design' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Operations', label: 'Operations' },
];

// Load and filter active jobs from JSON
export const jobs: Job[] = (jobsJson as Job[]).filter(job => job.active);

// Get a single job by slug
export const getJobBySlug = (slug: string): Job | undefined => {
  return jobs.find(job => job.slug === slug);
};

// Legacy exports for backwards compatibility
export type JobCategory = JobDepartment;
export const jobCategories = jobDepartments;
