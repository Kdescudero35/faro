import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/features/items/types";

interface ProductGalleryProps {
    product: Product | null | undefined;
    mainImage: string | undefined;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product, mainImage }) => {
    const [selectedImage, setSelectedImage] = useState(mainImage);
    const [currentIndex, setCurrentIndex] = useState(0);

    const allImages = product?.pictures ?? [];
    const displayImages = allImages.length > 0 ? allImages : [];

    const handlePrevImage = () => {
        const newIndex = currentIndex === 0 ? displayImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(displayImages[newIndex]?.url);
    };

    const handleNextImage = () => {
        const newIndex = currentIndex === displayImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(displayImages[newIndex]?.url);
    };

    const handleThumbnailClick = (index: number, url: string) => {
        setCurrentIndex(index);
        setSelectedImage(url);
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Imagen principal con controles */}
            <div className="relative">
                <div
                    className="w-full bg-white bg-center bg-no-repeat bg-contain rounded-xl shadow-md aspect-square flex items-center justify-center"
                    data-alt={product?.title}
                    style={{ backgroundImage: `url("${selectedImage}")`, minHeight: "400px" }}
                >
                    {!selectedImage && (
                        <p className="text-gray-400">Imagen no disponible</p>
                    )}
                </div>

                {/* Botones de navegación */}
                {displayImages.length > 1 && (
                    <>
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all z-10"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft size={24} className="text-gray-800" />
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all z-10"
                            aria-label="Siguiente imagen"
                        >
                            <ChevronRight size={24} className="text-gray-800" />
                        </button>
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {currentIndex + 1} / {displayImages.length}
                        </div>
                    </>
                )}
            </div>

            {/* Galería de miniaturas */}
            {displayImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                    {displayImages.slice(0, 4).map((pic, index) => (
                        <button
                            key={pic.id}
                            onClick={() => handleThumbnailClick(index, pic.url)}
                            className={`w-full bg-white bg-center bg-no-repeat bg-contain rounded-lg transition-all aspect-square ring-2 cursor-pointer hover:ring-blue-500 ${
                                index === currentIndex
                                    ? "ring-blue-500 shadow-md"
                                    : "ring-gray-300"
                            }`}
                            style={{ backgroundImage: `url("${pic.url}")` }}
                            aria-label={`Ver imagen ${index + 1}`}
                        />
                    ))}
                    {displayImages.length > 4 && (
                        <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center text-xs font-medium text-gray-600">
                            +{displayImages.length - 4} más
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductGallery;
