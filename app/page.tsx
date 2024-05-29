export default function HomePage({ currentSection }) {
  return (
    <div className="space-y-12">
      {currentSection === 'projects' && (
        <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Software Development Projects</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Details about software development projects...</p>
        </section>
      )}

      {currentSection === 'music' && (
        <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Music Composition</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Details about music compositions...</p>
        </section>
      )}

      {currentSection === 'architecture' && (
        <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Architecture</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Details about architecture projects...</p>
        </section>
      )}

      {currentSection === 'photography' && (
        <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Photography</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Details about photography...</p>
        </section>
      )}

      {currentSection === 'blog' && (
        <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Latest blog posts...</p>
        </section>
      )}
    </div>
  );
}

