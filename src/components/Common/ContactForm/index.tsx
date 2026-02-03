import React, { useState } from 'react';
import { ArrowUpRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ContactFormProps {
  successRedirect?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ successRedirect }) => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://seg.app.n8n.cloud/webhook/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', business: '', message: '' });
        
        if (successRedirect) {
          navigate(successRedirect);
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen md:h-screen w-full flex items-center justify-center overflow-hidden relative bg-brand-black perspective-1000 py-16 md:py-0">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-[url('/assets/images/bg_contact.png')] bg-cover bg-center bg-no-repeat blur-xl transform scale-105"
        style={{ zIndex: 0 }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl h-full flex items-center justify-center">
        <div className="bg-black/60 md:bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-12 lg:p-16 shadow-2xl w-full z-50 pointer-events-auto relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

            {/* Left Panel: Contact Info */}
            <div className="space-y-6 md:space-y-8 py-2 md:py-4">
              <div className="space-y-4 md:space-y-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] tracking-tight">
                  Let’s create the <br />
                  next chapter of <br />
                  Your <span className="italic">Story</span>
                </h2>
                <div className="flex justify-center lg:justify-start">
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg font-light border-l-[3px] border-brand-brick/60 pl-4 md:pl-6 text-left">
                    Every story deserves to be seen, heard, and remembered. Let’s bring yours to life with clarity and purpose.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Panel: Form */}
            <div className="">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all font-light"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="business" className="text-sm font-medium text-gray-300 ml-1">Your Business*</label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      required
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all font-light"
                      placeholder="Company Name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all font-light"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">Mobile*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all font-light"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all resize-none font-light"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`w-full md:w-auto bg-brand-brick hover:bg-brand-brick/90 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-brand-brick/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${status === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}`}
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
