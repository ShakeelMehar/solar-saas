import React, { useState } from 'react';
import { X } from 'lucide-react';

const WhatsappIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '92123456789'; // Representative phone number
  const message = encodeURIComponent('As-salamu alaykum, I am visiting your website and would like to request a free solar quote for my home/business.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Mini Interactive Window */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right">
          {/* Header */}
          <div className="bg-brand-teal-deep text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center font-bold text-brand-teal-deep relative">
                S
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-brand-green border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Solar Solutions Support</h4>
                <p className="text-xs text-on-dark-muted">Typically replies instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 text-sm space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-slate-100 text-slate-700">
              <p className="font-medium text-xs text-brand-green mb-1">Solar Consultant</p>
              As-salamu alaykum! How can we help you save on your electricity bills today?
            </div>
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-slate-100 text-slate-700">
              Select an option below to start your inquiry on WhatsApp.
            </div>
          </div>

          {/* Footer with Button */}
          <div className="p-3 bg-white border-t border-slate-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-2.5 px-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              <WhatsappIcon size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center relative cursor-pointer group"
        aria-label="Contact via WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        
        {isOpen ? (
          <X size={24} className="transition-transform duration-300" />
        ) : (
          <WhatsappIcon size={24} className="transition-transform duration-300 group-hover:scale-110" />
        )}
        
        {/* Tooltip visible on hover */}
        {!isOpen && (
          <span className="absolute right-16 bg-brand-teal-deep text-white text-xs font-semibold py-1.5 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap pointer-events-none">
            Get WhatsApp Quote
          </span>
        )}
      </button>
    </div>
  );
};
