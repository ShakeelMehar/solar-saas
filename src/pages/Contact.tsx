import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, FileText } from 'lucide-react';

export const Contact = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formEmail) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormName('');
        setFormEmail('');
        setFormMessage('');
      }, 5000);
    }
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12 text-left">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-[11px] font-bold tracking-widest text-brand-green-dark font-mono uppercase">Consultation</span>
        <h1 className="text-3xl md:text-4xl font-medium text-ink tracking-tight uppercase">REQUEST A QUOTE</h1>
        <p className="text-sm text-slate">Contact our technical department directly for customized solar system metrics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-canvas p-8 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)] space-y-6">
            <h2 className="text-lg font-bold text-ink uppercase tracking-wide">Corporate Desk</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-green-dark mt-0.5" />
                <div>
                  <h4 className="font-bold text-ink">Headquarters</h4>
                  <p className="text-slate">Lahore Address Section, Lahore, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand-green-dark mt-0.5" />
                <div>
                  <h4 className="font-bold text-ink">Call Us</h4>
                  <p className="text-slate"><a href="tel:+92123456789" className="hover:text-brand-green-dark font-medium">+92 123 456 789</a></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-green-dark mt-0.5" />
                <div>
                  <h4 className="font-bold text-ink">Email Address</h4>
                  <p className="text-slate"><a href="mailto:email@example.com" className="hover:text-brand-green-dark font-medium">email@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        <div className="lg:col-span-7 bg-canvas p-8 rounded-lg border border-hairline shadow-[0_1px_2px_rgba(0,30,43,0.04)]">
          {formSubmitted ? (
            <div className="bg-surface-feature border border-brand-green-soft text-ink rounded-lg p-6 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-brand-green-dark mx-auto animate-bounce" />
              <h4 className="font-bold text-ink">Request Received Successfully!</h4>
              <p className="text-xs text-slate leading-relaxed max-w-sm mx-auto">
                Thank you for choosing Solar Solutions Pakistan. A consultant will review your coordinates and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-steel uppercase tracking-wider block">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Suhail Ahmad" 
                    className="w-full bg-canvas text-ink border border-hairline-strong rounded-md px-4 py-3 text-sm focus:outline-none focus:border-2 focus:border-brand-green-dark focus:ring-0 transition-all font-sans"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-steel uppercase tracking-wider block">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. suhail@example.com" 
                    className="w-full bg-canvas text-ink border border-hairline-strong rounded-md px-4 py-3 text-sm focus:outline-none focus:border-2 focus:border-brand-green-dark focus:ring-0 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-steel uppercase tracking-wider block">Detailed Inquiry Message</label>
                <textarea 
                  rows={6}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Enter details about your roof space, current average bill, or system size preference..." 
                  className="w-full bg-canvas text-ink border border-hairline-strong rounded-md px-4 py-3 text-sm focus:outline-none focus:border-2 focus:border-brand-green-dark focus:ring-0 transition-all resize-none font-sans"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-green hover:bg-brand-green-hover text-brand-teal-deep py-3.5 px-6 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm shadow-none"
              >
                <FileText size={18} />
                SUBMIT INQUIRY REQUEST
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
