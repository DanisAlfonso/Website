import BlogPost from '../components/BlogPost';
import { getBlogPosts } from '../lib/blog';

export default function BlogPage() {
  const blogPosts = getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} id={post.id} title={post.title} date={post.date} excerpt={post.excerpt} />
          ))}
        </div>
      </section>
    </div>
  );
}

