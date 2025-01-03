import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "@/lib/contentful/api";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { BlogPost } from "@/lib/contentful/types";

const ITEMS_PER_PAGE = 10;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Skeleton className="h-10 w-1/2 mb-4" />
        <Skeleton className="h-10 w-full mb-4" />
        <Skeleton className="h-10 w-full mb-4" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Error loading posts</h1>
      </div>
    );
  }

  const totalPages = Math.ceil((posts?.length || 0) / ITEMS_PER_PAGE);
  const paginatedPosts = posts?.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-navy mb-8">Blog</h1>
      <div className="space-y-8">
        {paginatedPosts.map((post) => (
          <div key={post.sys.id} className="border rounded-lg p-6 shadow-sm">
            {post.fields.featuredImage && (
              <img
                src={post.fields.featuredImage.fields.file.url}
                alt={post.fields.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">{post.fields.title}</h2>
            <p className="text-gray-600 mb-2">{format(new Date(post.fields.publishDate), 'MMMM d, yyyy')}</p>
            <div className="prose max-w-none mb-4">{documentToReactComponents(post.fields.content)}</div>
            <Button onClick={() => setSelectedPost(post)}>Read More</Button>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationPrevious 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
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
            <PaginationNext
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationContent>
        </Pagination>
      )}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="w-[95vw] max-h-[95vh] overflow-y-auto p-6">
          {selectedPost && (
            <>
              <DialogTitle className="text-2xl font-bold mb-4">{selectedPost.fields.title}</DialogTitle>
              {selectedPost.fields.featuredImage && (
                <img
                  src={selectedPost.fields.featuredImage.fields.file.url}
                  alt={selectedPost.fields.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg mb-6"
                />
              )}
              <div className="prose prose-lg max-w-none">
                {documentToReactComponents(selectedPost.fields.content)}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}