import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GalleryImage } from "@/lib/contentful/types";

interface GalleryImageModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export const GalleryImageModal = ({ image, onClose }: GalleryImageModalProps) => {
  const imageUrl = image?.fields?.image?.fields?.file?.url;
  if (!imageUrl) return null;

  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">{image.fields.title}</h2>
        <div className="relative aspect-video">
          <img
            src={imageUrl}
            alt={image.fields.title || 'Gallery image'}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="mt-4 text-gray-600">
          {image.fields.title}
        </p>
      </DialogContent>
    </Dialog>
  );
};