import { useState } from "react";
import type { Product } from "@/features/items/types";

interface ProductGalleryProps {
  product: Product | null | undefined;
  mainImage: string | undefined;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  product,
  mainImage,
}) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = product?.pictures ?? [];
  const displayImages = allImages.length > 0 ? allImages : [];

  const handleThumbnailClick = (index: number, url: string) => {
    setCurrentIndex(index);
    setSelectedImage(url);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {displayImages.length > 1 && (
        <div className="flex md:flex-col gap-2 order-last md:order-first overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
          {displayImages.slice(0, 8).map((pic, index) => (
            <button
              key={pic.id}
              onClick={() => handleThumbnailClick(index, pic.url)}
              className={`w-16 h-16 md:w-20 md:h-20 bg-center bg-no-repeat bg-contain rounded-lg transition-all ring-2 cursor-pointer hover:ring-blue-500 shrink-0 ${
                index === currentIndex
                  ? "ring-blue-500 shadow-md"
                  : "ring-gray-300"
              }`}
              style={{ backgroundImage: `url("${pic.url}")` }}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
          {displayImages.length > 8 && (
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">
              +{displayImages.length - 8}
            </div>
          )}
        </div>
      )}

      <div className="relative flex-1 order-first md:order-last flex flex-col items-center justify-center">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt={product?.title || "Imagen del producto"}
            className="w-full h-auto rounded-xl max-h-96 md:max-h-[500px] object-contain bg-gray-50"
          />
        ) : (
          <div className="w-full h-96 md:h-[500px] bg-gray-50 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">Imagen no disponible</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
