'use client';

import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Casa do Fontão | Boutique Hotel in Douro Valley</title>
        <meta name="description" content="Surrender to serenity at Casa do Fontão, a luxurious boutique hotel nestled in the heart of Portugal's Douro Valley." />
        <link rel="icon" href="https://res.cloudinary.com/dskiy8y8c/image/upload/v1761944953/480664141_559532650434115_443295564809611346_n_b1krpa.jpg" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
