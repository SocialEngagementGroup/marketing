import React, { useState } from 'react';
import { ArrowUpRight, Loader2, CheckCircle2, AlertCircle, Calendar, Mail } from 'lucide-react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useNavigate } from 'react-router-dom';

interface ContactFormProps {
  successRedirect?: string;
  accent?: 'brick' | 'lime';
}

const ContactForm: React.FC<ContactFormProps> = ({ successRedirect, accent = 'brick' }) => {
  const navigate = useNavigate();
  
  // Muted brick color from website: #975554
  const brandingBrick = '#975554';
  
  const accentBorderClass = accent === 'lime' ? 'focus:border-brand-healist-lime/50' : 'focus:border-[#975554]/50';
  const accentButtonClass = accent === 'lime' 
    ? 'bg-brand-healist-lime text-brand-healist-charcoal hover:bg-white' 
    : 'bg-[#975554] text-white hover:bg-white hover:text-[#975554]';
  const accentShadowClass = accent === 'lime' ? 'shadow-brand-healist-lime/20' : 'shadow-[#975554]/20';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      setStatus('error');
      return;
    }

    try {
      const token = await executeRecaptcha('contact_form');
      
      const response = await fetch('/api/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: window.location.href,
          recaptchaToken: token
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', business: '', message: '' });
        
        if (successRedirect) {
          navigate(successRedirect);
        }
        
        // Reset status after 5 seconds to allow another submission
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen md:h-screen w-full flex items-center justify-center overflow-hidden relative bg-brand-black perspective-1000 py-20 md:py-0 font-sans">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-[url('/assets/images/bg_contact.png')] bg-cover bg-center bg-no-repeat blur-xl transform scale-105 opacity-60"
        style={{ zIndex: 0 }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }} />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl h-full flex items-center justify-center">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-12 lg:p-16 shadow-2xl w-full z-50 pointer-events-auto relative mt-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Panel: Contact Info */}
            <div className="space-y-10 py-2 md:py-4">
              <div className="text-center lg:text-left mb-8 lg:mb-12">
                <h2 className="!font-serif !font-normal !leading-[1.15] !tracking-tight text-4xl md:text-5xl lg:text-6xl text-white">
                  Let’s create the <br className="hidden md:block" />
                  next chapter of <br className="hidden md:block" />
                  Your <span className="italic">Story</span>
                </h2>
                
                <div className="flex justify-center lg:justify-start pt-6 md:pt-8">
                  <p className="leading-relaxed max-w-md font-light border-l-[3px] border-[#975554] pl-5 md:pl-7 text-base md:text-lg text-gray-300">
                    Every story deserves to be seen, heard, and remembered. Let’s bring yours to life with clarity and purpose.
                  </p>
                </div>
              </div>

              {/* Contact Cards - Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                {/* Book A Call Card */}
                <a
                  href="https://calendly.com/itseg/segmeet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/[0.03] border border-white/10 p-6 md:p-7 rounded-2xl flex flex-col items-start gap-5 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all shadow-lg relative"
                >
                  <div className="flex flex-col items-start gap-4">
                    <div className="text-white group-hover:scale-110 transition-transform">
                      <img src="/assets/images/icons/callicon.webp" alt="Call Icon" className="w-8 h-8 md:w-10 md:h-10 opacity-80 group-hover:opacity-100 transition-opacity object-contain" />
                    </div>
                    <h3 className="font-semibold text-white tracking-wide text-base md:text-lg">
                      Book A Call
                    </h3>
                  </div>
                  <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-white">
                    <img src="/assets/images/icons/arrow-up-right-1.webp" alt="Arrow Icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                  </div>
                </a>

                {/* Email Box */}
                <a
                  href="mailto:rahee@socialengagementgroup.com"
                  className="group bg-white/[0.03] border border-white/10 p-6 md:p-7 rounded-2xl flex flex-col items-start gap-5 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all shadow-lg relative"
                >
                  <div className="flex flex-col items-start gap-4">
                    <div className="text-white group-hover:scale-110 transition-transform">
                      <img src="/assets/images/icons/mailicon.webp" alt="Mail Icon" className="w-8 h-8 md:w-10 md:h-10 opacity-80 group-hover:opacity-100 transition-opacity object-contain" />
                    </div>
                    <h3 className="font-semibold text-white tracking-wide text-base md:text-lg">
                      Send Email
                    </h3>
                  </div>
                  <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-white">
                    <img src="/assets/images/icons/arrow-up-right-1.webp" alt="Arrow Icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                  </div>
                </a>
              </div>
            </div>

            {/* Right Panel: Form */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      minLength={3}
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none ${accentBorderClass} focus:bg-white/10 transition-all font-light`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="business" className="text-sm font-medium text-gray-400 ml-1">Your Business*</label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      required
                      minLength={2}
                      value={formData.business}
                      onChange={handleChange}
                      className={`w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none ${accentBorderClass} focus:bg-white/10 transition-all font-light`}
                      placeholder="Company Name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none ${accentBorderClass} focus:bg-white/10 transition-all font-light`}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-400 ml-1">Mobile*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none ${accentBorderClass} focus:bg-white/10 transition-all font-light`}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none ${accentBorderClass} focus:bg-white/10 transition-all resize-none font-light`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-xl border border-red-400/20">
                    <AlertCircle className="w-4 h-4" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`w-full md:w-auto ${accentButtonClass} font-bold py-4 px-10 rounded-full transition-all shadow-lg ${accentShadowClass} flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${status === 'success' ? 'bg-green-600 hover:bg-green-700 text-white shadow-green-600/20' : ''}`}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Sent</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
