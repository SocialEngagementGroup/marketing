import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, Clock, Briefcase, Calendar, Check } from 'lucide-react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import SEO from '../components/Common/SEO';
import { getJobBySlug } from '../data/jobsData';

/**
 * JobDetailPage Component
 * 
 * Full job description page with clean, minimal design.
 * Larger fonts for better readability.
 * Primary: brand-brick, Hover: black
 */
const JobDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the job by slug
  const job = slug ? getJobBySlug(slug) : undefined;

  return (
    <>
      <SEO 
        title={job ? `${job.title} | Careers | Social Engagement Group` : 'Job Not Found | Social Engagement Group'}
        description={job?.aboutRole || 'View job details and apply to join our team.'}
      />
      <Header theme="dark" showHomeButton />
      
      <main className="min-h-screen bg-[#F5F5F3] relative overflow-hidden">
        {/* Gradient blob accents */}
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
        
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl pt-24 sm:pt-32 pb-16 sm:pb-24 relative z-10">
          {/* Back Link */}
          <Link 
            to="/careers"
            className="inline-flex items-center gap-2 text-brand-brick hover:text-gray-900 transition-colors mb-6 sm:mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-sans text-sm font-medium">Back to all positions</span>
          </Link>
          
          {job ? (
            <div>
              {/* Job Header */}
              <div className="mb-8 sm:mb-10">
                <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5 sm:mb-6">
                  {job.title}
                </h1>
                
                {/* Job Meta Pills */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-600">
                    <Globe className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-600">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-600">
                    <Briefcase className="w-3.5 h-3.5" />
                    {job.experience}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-600">
                    <Calendar className="w-3.5 h-3.5" />
                    Apply by {job.deadline}
                  </span>
                </div>
              </div>
              
              {/* Job Content */}
              <div className="space-y-10 sm:space-y-12">
                {/* About the Role */}
                <section>
                  <h2 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    About the Role
                  </h2>
                  <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                    {job.aboutRole}
                  </p>
                </section>
                
                {/* What You'll Do */}
                <section>
                  <h2 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    What You'll Do
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-brand-brick" />
                        <span className="font-sans text-base sm:text-lg text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                {/* What We're Looking For */}
                <section>
                  <h2 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    What We're Looking For
                  </h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-brand-brick" />
                        <span className="font-sans text-base sm:text-lg text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                {/* What We Offer */}
                <section>
                  <h2 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    What We Offer
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                      <span className="font-sans text-base sm:text-lg text-gray-600">
                        <strong className="text-gray-900">Remote-first culture:</strong> Work from anywhere with flexible hours
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                      <span className="font-sans text-base sm:text-lg text-gray-600">
                        <strong className="text-gray-900">Competitive compensation:</strong> {job.compensation}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                      <span className="font-sans text-base sm:text-lg text-gray-600">
                        <strong className="text-gray-900">Growth opportunities:</strong> Learn and grow with a fast-paced team
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                      <span className="font-sans text-base sm:text-lg text-gray-600">
                        <strong className="text-gray-900">Collaborative environment:</strong> Flat hierarchy with open communication
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                      <span className="font-sans text-base sm:text-lg text-gray-600">
                        <strong className="text-gray-900">Meaningful work:</strong> Make real impact on client success
                      </span>
                    </li>
                  </ul>
                </section>
                
                {/* Apply CTA */}
                <section className="pt-6 border-t border-gray-200">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      Interested in this role?
                    </h3>
                    <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed">
                      Send your resume and portfolio (if applicable) to{' '}
                      <a 
                        href={`mailto:communication@socialengagementgroup.com?subject=Application: ${job.title}`}
                        className="text-brand-brick font-semibold hover:text-gray-900 hover:underline transition-colors break-all"
                      >
                        communication@socialengagementgroup.com
                      </a>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <h1 className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Position Not Found
              </h1>
              <p className="font-sans text-base sm:text-lg text-gray-500 mb-6 sm:mb-8">
                The job you're looking for doesn't exist or has been filled.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-brick text-white font-medium text-base rounded-full hover:bg-gray-900 transition-all duration-200"
              >
                View All Positions
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default JobDetailPage;
