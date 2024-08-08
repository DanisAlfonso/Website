// app/components/Footer.tsx
"use client";

import React from 'react';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-dark-surface py-8 mt-auto border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center text-gray-700 dark:text-gray-300">© 2024 DNR. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/DanisAlfonso" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://x.com/AlfonsoDanis" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            <FaXTwitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com/danny.ramirez.a" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com/@DanisAlfonsoR" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            <FaYoutube className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

