import { Skeleton } from "@/components/ui/skeleton";
import { GalleryImage } from "@/lib/contentful/types";
import { GalleryImageCard } from "./GalleryImageCard";

interface GalleryGridProps {
  images: GalleryImage[] | undefined;
  isLoading: boolean;
  onImageClick: (image: GalleryImage) => void;
}

export const GalleryGrid = ({ images, isLoading, onImageClick }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {isLoading
        ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square">
              <Skeleton className="w-full h-full rounded-lg" />
            </div>
          ))
        : images?.map((image) => (
            <GalleryImageCard
              key={image.sys.id}
              image={image}
              onClick={onImageClick}
            />
          ))}
    </div>
  );
};