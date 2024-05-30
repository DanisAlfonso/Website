"use client";

import React, { useState, useEffect } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('light');
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gray-100 dark:bg-dark-background text-gray-900 dark:text-dark-text flex flex-col">
        <header className="fixed top-0 left-0 right-0 backdrop-blur-lg shadow-md z-50 bg-opacity-50 dark:bg-opacity-50 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              DNR
            </Link>
            <nav className="flex space-x-4">
              {[
                { name: 'Projects', href: '/projects' },
                { name: 'Music', href: '/music' },
                { name: 'Architecture', href: '/architecture' },
                { name: 'Photography', href: '/photography' },
                { name: 'Blog', href: '/blog' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium hover:text-primary transition-colors ${
                    pathname === item.href ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors"
                title={`Toggle to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-6 w-6 text-yellow-500" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-blue-500" />
                )}
              </button>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 flex-grow mt-20 md:mt-24">
          {children}
        </main>
        <footer className="p-4 text-center bg-gray-200 dark:bg-dark-surface mt-auto">
          © 2024 DNR
        </footer>
      </body>
    </html>
  );
}

