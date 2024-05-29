"use client";

import React, { useState, useEffect } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('light');
  const [currentSection, setCurrentSection] = useState('projects');

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
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <html lang="en" className={`${inter.className} ${theme === 'dark' ? 'dark' : ''}`}>
      <body className="min-h-screen bg-gray-100 dark:bg-dark-background text-gray-900 dark:text-dark-text flex flex-col">
        <header className="flex justify-between items-center p-6 bg-gray-200 dark:bg-dark-surface shadow-md">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <nav className="flex space-x-4">
            <button onClick={() => setCurrentSection('projects')} className="text-lg font-medium hover:underline">Projects</button>
            <button onClick={() => setCurrentSection('music')} className="text-lg font-medium hover:underline">Music</button>
            <button onClick={() => setCurrentSection('architecture')} className="text-lg font-medium hover:underline">Architecture</button>
            <button onClick={() => setCurrentSection('photography')} className="text-lg font-medium hover:underline">Photography</button>
            <button onClick={() => setCurrentSection('blog')} className="text-lg font-medium hover:underline">Blog</button>
          </nav>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center p-2 rounded bg-gray-300 dark:bg-dark-surface text-gray-900 dark:text-dark-text hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            title={`Toggle to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-500" />
            )}
          </button>
        </header>
        <main className="container mx-auto px-4 py-8 flex-grow">
          {React.Children.map(children, (child) => 
            React.cloneElement(child as React.ReactElement, { currentSection })
          )}
        </main>
        <footer className="p-4 text-center bg-gray-200 dark:bg-dark-surface mt-auto">
          © 2024 My Portfolio
        </footer>
      </body>
    </html>
  );
}


