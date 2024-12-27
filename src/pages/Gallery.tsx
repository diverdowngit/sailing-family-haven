import { useQuery } from "@tanstack/react-query";
import { contentfulClient, type GalleryImage } from "@/lib/contentful";
import { Skeleton } from "@/components/ui/skeleton";

const Gallery = () => {
  const { data: images, isLoading, error } = useQuery({
    queryKey: ["gallery-images"],
    queryFn: async () => {
      const response = await contentfulClient.getEntries<GalleryImage>({
        content_type: "gallery",
      });
      return response.items as GalleryImage[];
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
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {image.fields.image && (
                  <img
                    src={`https:${image.fields.image.fields.file.url}`}
                    alt={image.fields.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Gallery;