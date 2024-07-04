"use client";

import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const projects = [
  {
    title: 'Gym Tracker',
    description: 'A comprehensive gym tracking app to monitor workouts, progress, and more.',
    githubUrl: 'https://github.com/DanisAlfonso/gym_tracker',
  },
  {
    title: 'NeoNotes',
    description: 'A modern flashcard and note-taking application with rich text editing and organization features.',
    githubUrl: 'https://github.com/DanisAlfonso/NeoNotes',
  },
];

export default function HomePage({ currentSection }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('/api/blog/posts');
        if (response.ok) {
          const posts = await response.json();
          console.log('Fetched blog posts:', posts); // Debugging log
          setBlogPosts(posts.slice(0, 2)); // Get the latest 2 blog posts
        } else {
          console.error('Failed to fetch blog posts: Response not OK');
        }
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      }
    }

    fetchBlogPosts();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  return (
    <div className="space-y-12">
      <section className="hero-section p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to My Website</h1>
        <p className="text-lg text-center">
          My name is Danis Ramírez. I was born in 1989 and have always had a deep interest in philosophical musings, history, and science.
        </p>
        <div className="flex justify-center mt-4">
          <Link href="/projects" className="px-4 py-2 bg-white text-primary rounded-lg shadow hover:bg-gray-200 transition-colors">
            Explore My Work
          </Link>
        </div>
      </section>

      {selectedProject ? (
        <section className="project-details p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
          <p className="text-lg text-gray-700 dark:text-dark-text">{selectedProject.description}</p>
          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
            <FaGithub className="mr-2 inline-block" />
            View on GitHub
          </a>
          <button onClick={handleBackClick} className="mt-4 p-2 bg-gray-300 dark:bg-dark-surface rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors">
            Back to Projects
          </button>
        </section>
      ) : (
        <>
          <section id="projects" className="projects-section p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-4 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="project-card card p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => handleProjectClick(project)}>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">{project.description}</p>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
                    <FaGithub className="mr-2 inline-block" />
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/projects" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
                View All Projects
              </Link>
            </div>
          </section>

          <section className="blog-section p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-4 text-center">Latest Blog Posts</h2>
            <div className="space-y-6">
              {blogPosts.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400">No blog posts available.</p>
              ) : (
                blogPosts.map((post, index) => (
                  <div key={index} className="blog-post p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                      <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-4 inline-block">Read More</Link>
                  </div>
                ))
              )}
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/blog" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
                View All Blog Posts
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
