"use client";

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  return (
    <div className="space-y-12">
      {selectedProject ? (
        <section className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
          <p className="text-lg text-gray-700 dark:text-dark-text">{selectedProject.description}</p>
          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
            <FaGithub className="mr-2 inline-block" />
            View on GitHub
          </a>
          <button onClick={handleBackClick} className="mt-4 p-2 bg-gray-300 dark:bg-dark-surface rounded hover:bg-gray-400 dark:hover:bg-gray-600">
            Back to Projects
          </button>
        </section>
      ) : (
        <>
          {currentSection === 'projects' && (
            <section className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4">Software Development Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="card p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => handleProjectClick(project)}>
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-lg text-gray-700 dark:text-dark-text">{project.description}</p>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
                      <FaGithub className="mr-2 inline-block" />
                      View on GitHub
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentSection === 'music' && (
            <section className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4">Music Composition</h2>
              <p className="text-lg text-gray-700 dark:text-dark-text">Details about music compositions...</p>
            </section>
          )}

          {currentSection === 'architecture' && (
            <section className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4">Architecture</h2>
              <p className="text-lg text-gray-700 dark:text-dark-text">Details about architecture projects...</p>
            </section>
          )}

          {currentSection === 'photography' && (
            <section className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4">Photography</h2>
              <p className="text-lg text-gray-700 dark:text-dark-text">Details about photography...</p>
            </section>
          )}

          {currentSection === 'blog' && (
            <section className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4">Blog</h2>
              <p className="text-lg text-gray-700 dark:text-dark-text">Latest blog posts...</p>
            </section>
          )}
        </>
      )}
    </div>
  );
}

