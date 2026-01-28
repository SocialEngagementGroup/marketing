import React, { useState } from 'react';
import { ArrowUpRight, Phone, Mail, Loader2, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
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
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-[url('/Rectangle1.png')] bg-cover bg-center bg-no-repeat blur-xl transform scale-105"
        style={{ zIndex: 0 }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Panel: Contact Info */}
            <div className="space-y-8 md:space-y-12 py-4">
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-white leading-[1.1] tracking-tight">
                  Let’s create <br className="hidden lg:block" />
                  the next chapter of <br className="hidden lg:block" />
                  your <span className="italic">Story</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg font-light border-l-2 border-brand-brick/30 pl-6">
                  Every story deserves to be seen, heard, and remembered. Let’s bring yours to life with clarity and purpose.
                </p>
              </div>
            </div>

            {/* Right Panel: Form */}
            <div className="">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all font-light"
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
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all font-light"
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
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all font-light"
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
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all font-light"
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
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all resize-none font-light"
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
                    className={`bg-brand-brick hover:bg-brand-brick/90 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-brand-brick/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${status === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}`}
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
