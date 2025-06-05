
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProviderClient from '@/components/layout/theme-provider-client';
import React from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Devfolio - Henry's Personal Developer Portfolio",
  description: "Henry's modern and sleek personal developer portfolio built with Next.js and Tailwind CSS.",
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'typescript', 'tailwindcss'],
  other: {
    'custom-sample-tag': 'This is a sample value for a custom meta tag. You can replace this!',
    // You can add more custom meta tags here, for example:
    // 'another-tag': 'another value',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProviderClient>
          {children}
        </ThemeProviderClient>
      </body>
    </html>
  );
}
