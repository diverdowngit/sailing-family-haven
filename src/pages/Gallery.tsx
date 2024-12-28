import { useQuery } from "@tanstack/react-query";
import { type GalleryImage, placeholderGalleryImages } from "@/lib/contentful";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { data: images, isLoading, error } = useQuery({
    queryKey: ["gallery-images"],
    queryFn: async () => {
      return placeholderGalleryImages;
    },
  });

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-red-500">Error loading gallery images. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-navy mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square">
                <Skeleton className="w-full h-full rounded-lg" />
              </div>
            ))
          : images?.map((image) => (
              <div
                key={image.sys.id}
                className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {image.fields.image && (
                  <>
                    <img
                      src={image.fields.image.fields.file.url}
                      alt={image.fields.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <h3 className="text-white text-lg font-semibold text-center">
                        {image.fields.title}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[75vw] max-h-[75vh]">
          {selectedImage?.fields.image && (
            <div className="relative">
              <img
                src={selectedImage.fields.image.fields.file.url}
                alt={selectedImage.fields.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <h2 className="text-white text-xl font-semibold text-center">
                  {selectedImage.fields.title}
                </h2>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;