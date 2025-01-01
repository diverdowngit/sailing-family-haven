import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "@/lib/contentful/api";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContentfulCredentials } from "@/components/ContentfulCredentials";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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

  const hasCredentials = localStorage.getItem('CONTENTFUL_SPACE_ID') && 
                        localStorage.getItem('CONTENTFUL_ACCESS_TOKEN');

  if (!hasCredentials) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-navy mb-8">Setup Contentful</h1>
        <ContentfulCredentials />
      </div>
    );
  }

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

  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const paginatedPosts = posts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-navy mb-8">Blog</h1>
      <div className="space-y-4">
        {paginatedPosts.map((post) => (
          <div key={post.sys.id} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">{post.fields.title}</h2>
            <p className="text-gray-600">{format(new Date(post.fields.publishDate), 'MMMM d, yyyy')}</p>
            <div>{documentToReactComponents(post.fields.content)}</div>
            <Button onClick={() => setSelectedPost(post)}>Read More</Button>
          </div>
        ))}
      </div>
      <Pagination>
        <PaginationPrevious onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </PaginationItem>
        ))}
        <PaginationNext onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
      </Pagination>
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent>
          <DialogTitle>{selectedPost?.fields.title}</DialogTitle>
          <div>{documentToReactComponents(selectedPost?.fields.content)}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
