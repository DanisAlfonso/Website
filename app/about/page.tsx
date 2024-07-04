// app/about/page.tsx

"use client";

import React from 'react';

export default function AboutPage() {
  return (
    <div className="space-y-12 container mx-auto px-4 py-8">
      <section className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Hi, I'm Danis Ramírez. I was born in 1989 and have always had a deep interest in philosophical musings, history, and science. Over the years, I have worked on various projects in different fields, ranging from web and mobile app development to photography and music.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          I am passionate about creating solutions that make a difference and constantly learning new things to improve my skills and knowledge. On this website, you can explore some of my work, including my projects, photography, and music.
        </p>
      </section>
    </div>
  );
}

