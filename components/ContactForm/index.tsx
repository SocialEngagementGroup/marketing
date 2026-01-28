import React, { useState } from 'react';
import { ArrowUpRight, Phone, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

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
    <section className="relative py-12 overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-[url('/Rectangle1.png')] bg-cover bg-center bg-no-repeat blur-xl transform scale-105"
        style={{ zIndex: 0 }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">


          {/* Right Panel: Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-serif text-white">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. We'll be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-brand-brick hover:text-brand-brick/80 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-medium text-gray-400 ml-1 uppercase tracking-wider">Your Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-medium text-gray-400 ml-1 uppercase tracking-wider">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-medium text-gray-400 ml-1 uppercase tracking-wider">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="business" className="text-xs font-medium text-gray-400 ml-1 uppercase tracking-wider">Your Business*</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all"
                    placeholder="Company Ltd."
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-medium text-gray-400 ml-1 uppercase tracking-wider">How can we help?*</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-brick/50 focus:bg-white/10 transition-all resize-none"
                    placeholder="Tell us about your goals..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-brick hover:bg-brand-brick/90 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-brand-brick/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider mt-4"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>SUBMIT</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
