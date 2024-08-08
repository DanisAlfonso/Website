
// app/components/Header.tsx
"use client";

import React, { useState } from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useTheme from '../hooks/useTheme';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-lg shadow-md z-50 bg-opacity-50 dark:bg-opacity-50 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          DNR
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4 items-center">
            {[
              { name: 'Projects', href: '/projects' },
              { name: 'Music', href: '/music' },
              { name: 'Photos', href: '/photography' },
              { name: 'Blog', href: '/blog' },
              { name: 'About', href: '/about' },  // Moved About link here
              { name: 'Contact', href: '/contact' },
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
          </nav>
          <div className="flex items-center space-x-2 bg-gray-100 dark:bg-dark-surface p-1 rounded-full theme-switcher hidden md:flex">
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
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleMenu}
          >
            {menuOpen ? <XMarkIcon className="block h-6 w-6 text-gray-700 dark:text-gray-300" /> : <Bars3Icon className="block h-6 w-6 text-gray-700 dark:text-gray-300" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-700">
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {[
              { name: 'Projects', href: '/projects' },
              { name: 'Music', href: '/music' },
              { name: 'Photography', href: '/photography' },
              { name: 'Blog', href: '/blog' },
              { name: 'About', href: '/about' },  // Moved About link here
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 p-1 rounded-full theme-switcher">
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
      )}
    </header>
  );
}
