import { getBlogPost, getBlogPosts } from '../../lib/blog';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <section className="p-6 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
        <div className="text-lg text-gray-700 dark:text-dark-text" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </section>
    </div>
  );
}

