import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Sans } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BUSINESS_NAME, SITE_URL } from '@/lib/constants';
import './globals.css';

/**
 * Two families, both actually rendered. The previous setup shipped
 * Source Code Pro on every page load and never used it once — a wasted
 * font download on a page whose traffic is ~90% mobile.
 */
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['600', '700'],
});

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const TITLE = `Solar System Installation in Lahore | ${BUSINESS_NAME}`;
const DESCRIPTION =
  'On-grid, hybrid & off-grid solar in Lahore. 150+ installations, net metering handled for you, Canadian Solar & Longi panels. Free survey on WhatsApp.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: TITLE,
    description:
      'On-grid, hybrid & off-grid solar in Lahore. 150+ installations, net metering handled for you. Free survey on WhatsApp.',
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'On-grid, hybrid & off-grid solar in Lahore. Net metering handled. Free survey on WhatsApp.',
  },
  icons: {
    icon: '/favicon.jpeg',
    apple: '/favicon.jpeg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00202e',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${plex.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-canvas font-sans text-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-pill focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
