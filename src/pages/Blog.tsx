import { useQuery } from "@tanstack/react-query";
import { type BlogPost, fetchBlogPosts } from "@/lib/contentful";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 10;

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
  });

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-red-500">Error loading blog posts. Please try again later.</p>
      </div>
    );
  }

  const totalPosts = posts?.length || 0;
  const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = posts?.slice(startIndex, endIndex);

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
          : currentPosts?.map((post) => (
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
                    {post.fields.excerpt}...
                  </div>
                  <Button
                    variant="ghost"
                    className="text-coral hover:text-coral/80"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More
                  </Button>
                </div>
              </article>
            ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-[95vw] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedPost.fields.title}</DialogTitle>
                <time className="text-sm text-gray-500 mt-2">
                  {format(new Date(selectedPost.fields.publishDate), 'MMMM d, yyyy')}
                </time>
              </DialogHeader>
              {selectedPost.fields.featuredImage && (
                <img
                  src={selectedPost.fields.featuredImage.fields.file.url}
                  alt={selectedPost.fields.title}
                  className="w-full h-64 object-cover rounded-md my-4"
                />
              )}
              <div className="text-gray-600 whitespace-pre-wrap">
                {selectedPost.fields.content}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;