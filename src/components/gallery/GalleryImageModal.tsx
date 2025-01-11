import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GalleryImage } from "@/lib/contentful/types";

interface GalleryImageModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export const GalleryImageModal = ({ image, onClose }: GalleryImageModalProps) => {
  if (!image) return null;
  
  const imageUrl = image.fields?.image?.fields?.file?.url;
  if (!imageUrl) return null;

  // Add quality parameters to Contentful URL for larger display
  const optimizedImageUrl = `${imageUrl}?w=1200&q=85&fm=webp`;

  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0">
        <div className="p-4">
          <h2 className="text-2xl font-bold">{image.fields.title}</h2>
        </div>
        <div className="relative w-full max-h-[80vh] overflow-hidden">
          <img
            src={`https:${optimizedImageUrl}`}
            alt={image.fields.title || 'Gallery image'}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
            width="1200"
            height="800"
          />
        </div>
        <div className="p-4">
          <p className="text-gray-600">
            {image.fields.title}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};