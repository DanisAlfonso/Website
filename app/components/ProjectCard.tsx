"use client";

import React, { useState, useEffect } from 'react';

interface ProjectCardProps {
  username: string;
  repository: string;
  description: string;
}

interface Project {
  name: string;
  description: string;
  html_url: string;
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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [username, repository]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!project) {
    return <div>No project found.</div>;
  }

  return (
    <div className="p-6 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:border-primary dark:hover:border-primary transition-all duration-200 ease-in-out hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-[0_4px_6px_-1px_rgba(0,112,243,0.1),0_2px_4px_-1px_rgba(0,112,243,0.06)]">
      <h3 className="text-2xl font-semibold">
        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;

