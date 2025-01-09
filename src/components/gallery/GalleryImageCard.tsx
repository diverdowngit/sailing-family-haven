import { GalleryImage } from "@/lib/contentful/types";

interface GalleryImageCardProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

export const GalleryImageCard = ({ image, onClick }: GalleryImageCardProps) => {
  if (!image?.fields?.image) return null;

  return (
    <div
      key={image.sys.id}
      className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => onClick(image)}
    >
      <img
        src={image.fields.image.fields.file.url}
        alt={image.fields.title || 'Gallery image'}
        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
        <h3 className="text-white text-lg font-semibold text-center">
          {image.fields.title}
        </h3>
      </div>
    </div>
  );
};