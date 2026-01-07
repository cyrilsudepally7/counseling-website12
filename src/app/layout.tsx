import type { Metadata, Viewport } from 'next';
import { SEO_DEFAULTS, PRACTICE_INFO } from '@/lib/constants';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider, FixedLanguageToggle } from '@/components/LanguageProvider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SEO_DEFAULTS.siteUrl),
  title: {
    default: SEO_DEFAULTS.defaultTitle,
    template: SEO_DEFAULTS.titleTemplate,
  },
  description: SEO_DEFAULTS.defaultDescription,
  keywords: [
    'counseling',
    'therapy',
    'therapist',
    'mental health',
    'individual counseling',
    'play therapy',
    'family counseling',
    PRACTICE_INFO.location.city,
    PRACTICE_INFO.location.state,
  ],
  authors: [{ name: PRACTICE_INFO.therapist.name }],
  creator: PRACTICE_INFO.name,
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: SEO_DEFAULTS.locale,
    url: SEO_DEFAULTS.siteUrl,
    siteName: SEO_DEFAULTS.siteName,
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f06280',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <FixedLanguageToggle />
        </LanguageProvider>
      </body>
    </html>
  );
}
