import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-canvas text-slate font-sans selection:bg-brand-green/25 selection:text-ink antialiased overflow-x-hidden">
      {/* Top Header */}
      <Navbar />

      {/* Main Page Layout Wrapper */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footnote and contact parameters */}
      <Footer />

      {/* Floating Interactive Widget */}
      <WhatsAppButton />
    </div>
  );
};
