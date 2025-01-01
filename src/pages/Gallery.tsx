import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ContentfulCredentials } from "@/components/ContentfulCredentials";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { fetchGalleryImages } from "@/lib/contentful/api";
import type { GalleryImage } from "@/lib/contentful/types";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryImageModal } from "@/components/gallery/GalleryImageModal";

const ITEMS_PER_PAGE = 12;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const { data: images, isLoading } = useQuery({
    queryKey: ['gallery-images'],
    queryFn: fetchGalleryImages,
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

  const totalImages = images?.length || 0;
  const totalPages = Math.ceil(totalImages / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentImages = images?.slice(startIndex, endIndex);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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