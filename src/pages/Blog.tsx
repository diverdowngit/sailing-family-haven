const Blog = () => {
  // This will be replaced with actual Contentful integration
  const posts = [
    {
      id: 1,
      title: "First Week at Sea",
      excerpt: "Our adventures begin as we set sail from the harbor...",
      date: "2024-02-20",
    },
    {
      id: 2,
      title: "Storm Survival Tips",
      excerpt: "What we learned from our first major storm at sea...",
      date: "2024-02-15",
    },
    {
      id: 3,
      title: "Island Paradise Found",
      excerpt: "Discovering hidden gems in the Pacific...",
      date: "2024-02-10",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-navy mb-8">Our Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-navy mb-2">{post.title}</h2>
              <time className="text-sm text-gray-500 mb-4 block">{post.date}</time>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-coral hover:text-coral/80">Read More</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;