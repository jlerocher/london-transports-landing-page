import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'London Transit Connect - Modern City Transport Solutions',
  description: 'Experience seamless city travel with London Transit Connect. Real-time tracking, easy booking, and premium fleet services.',
  keywords: ['London transport', 'city transit', 'bus booking', 'fleet services', 'London bus'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Navbar />
          <main className="flex min-h-screen flex-col">{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}