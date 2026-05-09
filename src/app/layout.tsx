import type { Metadata } from 'next';
import { Providers } from './providers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Jeremy Lesniewski - Music Production, Recording & Sound Design | Berlin',
  description:
    'Berlin-based music production, recording sessions, mixing, mastering, custom band projects, and sound design tools by Jeremy Lesniewski.',
  keywords: [
    'music production',
    'recording studio',
    'recording session',
    'mixing',
    'mastering',
    'sound design',
    'custom bands',
    'VST tools',
    'Berlin',
  ],
  authors: [{ name: 'Jeremy Lesniewski' }],
  metadataBase: new URL('https://jeremylesniewski.github.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jeremylesniewski.github.io',
    title: 'Jeremy Lesniewski - Music Production & Recording',
    description:
      'Berlin-based production, recording, mixing, mastering, custom projects, and sound design tools.',
    siteName: 'Jeremy Lesniewski',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white font-sans">
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
