import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-green/20 selection:text-brand-blue-medium antialiased overflow-x-hidden">
      {/* Top Header */}
      <Navbar />

      {/* Main Page Layout Wrapper */}
      <main className="flex-grow pt-28">
        <Outlet />
      </main>

      {/* Footnote and contact parameters */}
      <Footer />

      {/* Floating Interactive Widget */}
      <WhatsAppButton />
    </div>
  );
};
