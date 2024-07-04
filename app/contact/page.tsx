"use client";

import React from 'react';

export default function ContactPage() {
  return (
    <div className="space-y-12 container mx-auto px-4 py-8">
      <section className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Get in Touch</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          I'd love to hear from you! Whether you have a question about my work, a project idea, or just want to say hi, feel free to get in touch.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="mailto:danis.ramirez.hn@gmail.com" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}
