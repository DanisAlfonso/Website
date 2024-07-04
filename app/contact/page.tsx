"use client";

import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name === '',
      email: formData.email === '' || !/\S+@\S+\.\S+/.test(formData.email),
      message: formData.message === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setError('');
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="space-y-12 container mx-auto px-4 py-8">
      <section className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Get in Touch</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          I'd love to hear from you! Whether you have a question about my work, a project idea, or just want to say hi, feel free to get in touch.
        </p>
        {submitted ? (
          <div className="mt-4 text-center text-green-600 dark:text-green-400">
            Thank you for your message! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 block w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-dark-surface dark:text-gray-100`}
              />
              {errors.name && <p className="mt-2 text-sm text-red-600">Name is required.</p>}
              <FaUser className="absolute top-9 right-3 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-dark-surface dark:text-gray-100`}
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">Valid email is required.</p>}
              <FaEnvelope className="absolute top-9 right-3 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`mt-1 block w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-dark-surface dark:text-gray-100`}
                rows={5}
              />
              {errors.message && <p className="mt-2 text-sm text-red-600">Message is required.</p>}
            </div>
            {error && <p className="mt-2 text-sm text-red-600 text-center">{error}</p>}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
