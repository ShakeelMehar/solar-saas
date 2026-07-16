import type { Metadata } from 'next';
import { Manrope, Source_Code_Pro } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: 'Bhatti Solar System | Solar Installation in Lahore',
  description:
    'Bhatti Solar System — smart solar installation for homes and businesses across Lahore. Free site survey, LESCO net metering, panels, inverters, and batteries.',
  icons: {
    icon: '/favicon.jpeg',
    apple: '/favicon.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceCodePro.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-canvas font-sans text-slate antialiased selection:bg-brand-green/25 selection:text-ink">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
