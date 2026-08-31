'use client';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      date: '2024-01-15',
      excerpt: 'Learn how to build fast web applications with Next.js.',
      slug: 'getting-started-nextjs',
    },
    {
      id: 2,
      title: 'Web Development Best Practices',
      date: '2024-01-10',
      excerpt: 'Essential tips and tricks for modern web development.',
      slug: 'web-dev-best-practices',
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h1>Blog</h1>
        <p>Thoughts and insights on web development</p>
        
        <div className="blog-posts">
          {posts.map((post) => (
            <article key={post.id} className="blog-post">
              <h2>{post.title}</h2>
              <time>{new Date(post.date).toLocaleDateString()}</time>
              <p>{post.excerpt}</p>
              <a href={`/blog/${post.slug}`}>Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
