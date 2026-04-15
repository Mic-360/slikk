import type { Metadata } from 'next';
import { Inter_Tight, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';

const sans = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const display = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Slikk | Fashion delivered in 60 minutes',
  description:
    'India’s quickest fashion delivery. Curated labels, premium pieces, at your door within the hour.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        'h-full no-scrollbar antialiased font-sans',
        sans.variable,
        mono.variable,
        display.variable,
      )}
      suppressHydrationWarning
    >
      <body className='min-h-full flex flex-col bg-background text-foreground'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
