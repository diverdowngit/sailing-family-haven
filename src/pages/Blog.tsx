import { useQuery } from "@tanstack/react-query";
import { type BlogPost, placeholderBlogPosts } from "@/lib/contentful";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState<string[]>([]);
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      return placeholderBlogPosts;
    },
  });

  const toggleReadMore = (postId: string) => {
    setExpandedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-red-500">Error loading blog posts. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-navy mb-8">Our Blog</h1>
      <div className="grid gap-8">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>
            ))
          : posts?.map((post) => (
              <article
                key={post.sys.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {post.fields.featuredImage && (
                  <img
                    src={post.fields.featuredImage.fields.file.url}
                    alt={post.fields.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-navy mb-2">
                    {post.fields.title}
                  </h2>
                  <time className="text-sm text-gray-500 mb-4 block">
                    {format(new Date(post.fields.publishDate), 'MMMM d, yyyy')}
                  </time>
                  <div className="text-gray-600 mb-4">
                    {expandedPosts.includes(post.sys.id)
                      ? post.fields.content
                      : `${post.fields.excerpt}...`}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-coral hover:text-coral/80"
                    onClick={() => toggleReadMore(post.sys.id)}
                  >
                    {expandedPosts.includes(post.sys.id) ? "Show Less" : "Read More"}
                  </Button>
                </div>
              </article>
            ))}
      </div>
    </div>
  );
};

export default Blog;