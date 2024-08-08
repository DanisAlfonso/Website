// app/layout.tsx
"use client";

import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gray-100 dark:bg-dark-background text-gray-900 dark:text-dark-text flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow mt-32 md:mt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

