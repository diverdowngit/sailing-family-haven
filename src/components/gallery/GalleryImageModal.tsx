import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { GalleryImage } from "@/lib/contentful/types";

interface GalleryImageModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export const GalleryImageModal = ({ image, onClose }: GalleryImageModalProps) => {
  if (!image?.fields) return null;

  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh]">
        <DialogTitle className="sr-only">
          {image.fields.title || 'Gallery Image'}
        </DialogTitle>
        {image.fields.image && (
          <div className="relative">
            <img
              src={image.fields.image.fields.file.url}
              alt={image.fields.title || 'Gallery image'}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h2 className="text-white text-xl font-semibold text-center">
                {image.fields.title}
              </h2>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};