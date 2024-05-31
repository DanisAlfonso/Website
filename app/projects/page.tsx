"use client";

import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = {
  'Mobile and web development': [
    {
      username: 'DanisAlfonso',
      repository: 'GymTracker',
      description: 'A comprehensive gym tracking app to monitor workouts, progress, and more.',
    },
    {
      username: 'DanisAlfonso',
      repository: 'NeoNotes',
      description: 'A modern flashcard and note-taking application with rich text editing and organization features.',
    },
    {
      username: 'DanisAlfonso',
      repository: 'Website',
      description: 'A web development project description.',
    },
  ],
  'C++': [
    {
      username: 'DanisAlfonso',
      repository: 'NumLib',
      description: 'NumLib is a C++ project aimed at providing a toolkit for numeric computation.',
    },
  ],
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12 container mx-auto px-4 py-8">
      {Object.entries(projects).map(([category, projectList]) => (
        <section key={category} className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 border border-gray-300 dark:border-gray-700">
          <h2 className="text-3xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectList.map((project, index) => (
              <ProjectCard
                key={index}
                username={project.username}
                repository={project.repository}
                description={project.description}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
