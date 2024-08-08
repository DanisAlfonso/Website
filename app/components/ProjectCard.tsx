"use client";

import React, { useState, useEffect } from 'react';
import { FaStar, FaCodeBranch } from 'react-icons/fa';

interface ProjectCardProps {
  username: string;
  repository: string;
  description: string;
}

interface Project {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ username, repository, description }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repository}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProject(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [username, repository]);

  if (loading) {
    return (
      <div className="p-6 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
        <div className="text-red-500">Error: {error}</div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="p-6 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
        <div>No project found.</div>
      </div>
    );
  }

  return (
    <div className="project-card p-6 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-lg shadow-md transition-all duration-200 ease-in-out">
      <h3 className="text-2xl font-semibold mb-2">
        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          {project.name}
        </a>
      </h3>
      <p className="mb-2">{description}</p>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        <div className="flex items-center">
          <FaStar className="mr-1" /> {project.stargazers_count}
          <FaCodeBranch className="ml-4 mr-1" /> {project.forks_count}
        </div>
        <div>Last updated: {new Date(project.updated_at).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default ProjectCard;

