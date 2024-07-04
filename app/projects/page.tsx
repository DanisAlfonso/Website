// app/projects/page.tsx

"use client";

import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = {
  'Mobile and web development': [
    {
      username: 'DanisAlfonso',
      repository: 'MuscleMetrics',
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
  'Rust': [
    {
      username: 'DanisAlfonso',
      repository: 'Numerus',
      description: 'Numerus is an interactive notebook and command-line application designed for performing advanced matrix operations, developed using Rust. The application aims to provide users with a powerful tool for matrix computations, integrating both a graphical user interface (GUI) and a read-eval-print loop (REPL) mode.'
    },
  ],
  'Text Editors (Emacs and Neovim)': [
    {
      username: 'DanisAlfonso',
      repository: '.emacs.d',
      description: 'This Emacs configuration is designed to enhance the Emacs experience with various customizations and plugins aimed at improving productivity and functionality. It includes settings for key bindings, interface improvements, programming support, and more.',

    },
    {
      username: 'DanisAlfonso',
      repository: 'Neovim',
      description: 'This Neovim configuration is designed to enhance the Neovim editor with a variety of features, plugins, and custom settings, providing a modern and efficient editing experience. This configuration includes key remappings, visual enhancements, language server support, and plugin management, making it suitable for both general editing and development tasks.',

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

