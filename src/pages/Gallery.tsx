import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getGalleryImages } from "@/lib/contentful/api";
import type { GalleryImage } from "@/lib/contentful/types";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryImageModal } from "@/components/gallery/GalleryImageModal";

const ITEMS_PER_PAGE = 12;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const { data: images, isLoading } = useQuery({
    queryKey: ['gallery-images'],
    queryFn: getGalleryImages,
  });

  useEffect(() => {
    // Update canonical URL when page changes
    const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (link) {
      link.href = window.location.href;
    }
  }, [currentPage]);

  const totalImages = images?.length || 0;
  const totalPages = Math.ceil(totalImages / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentImages = images?.slice(startIndex, endIndex);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>Photo Gallery - Let's Sail Andiamo</title>
        <meta name="description" content="Browse through our collection of sailing photos and adventures at sea." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Photo Gallery - Let's Sail Andiamo" />
        <meta property="og:description" content="Browse through our collection of sailing photos and adventures at sea." />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="text-4xl font-bold text-navy mb-8">Photo Gallery</h1>
      
      <GalleryGrid
        images={currentImages}
        isLoading={isLoading}
        onImageClick={setSelectedImage}
      />

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

      <GalleryImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Gallery;