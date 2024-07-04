"use client";

import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Import the FaXTwitter icon
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useTheme from './hooks/useTheme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gray-100 dark:bg-dark-background text-gray-900 dark:text-dark-text flex flex-col">
        <header className="fixed top-0 left-0 right-0 backdrop-blur-lg shadow-md z-50 bg-opacity-50 dark:bg-opacity-50 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              DNR
            </Link>
            <nav className="flex space-x-4 items-center">
              {[
                { name: 'Projects', href: '/projects' },
                { name: 'Music', href: '/music' },
                { name: 'Photography', href: '/photography' },
                { name: 'Blog', href: '/blog' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium hover:text-primary transition-colors ${pathname === item.href ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="ml-4 flex items-center space-x-2 bg-gray-100 dark:bg-dark-surface p-1 rounded-full theme-switcher">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`p-2 rounded-full ${theme === 'light' ? 'active' : ''}`}
                  title="Light mode"
                >
                  <SunIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`p-2 rounded-full ${theme === 'dark' ? 'active' : ''}`}
                  title="Dark mode"
                >
                  <MoonIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={() => handleThemeChange('system')}
                  className={`p-2 rounded-full ${theme === 'system' ? 'active' : ''}`}
                  title="System mode"
                >
                  <ComputerDesktopIcon className="h-6 w-6" />
                </button>
              </div>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 flex-grow mt-20 md:mt-24">
          {children}
        </main>
        <footer className="bg-gray-200 dark:bg-dark-surface py-8 mt-auto border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-700 dark:text-gray-300">© 2024 DNR. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/AlfonsoDanis" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a href="https://github.com/DanisAlfonso" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
