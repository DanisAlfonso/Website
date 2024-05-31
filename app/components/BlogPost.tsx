// app/components/BlogPost.tsx
"use client";

import Link from 'next/link';

interface BlogPostProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ id, title, date, excerpt }) => {
  return (
    <div className="p-6 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
      <h3 className="text-2xl font-semibold mb-2">
        <Link href={`/blog/${id}`} className="text-primary hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{date}</p>
      <p className="text-lg text-gray-700 dark:text-dark-text">{excerpt}</p>
    </div>
  );
};

export default BlogPost;

