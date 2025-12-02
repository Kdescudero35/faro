import { useDetail } from "../../hooks/useDetail";

import ProductInfo from "./components/ProductInfo";
import ProductGallery from "./components/ProductGallery";
import ProductActions from "./components/ProductActions";

import { SkeletonDetailPage } from "@/shared/components/Skeleton/SkeletonDetailPage";
import { ServiceUnavailable } from "@/shared/components/ServiceUnavailable";

const ItemDetailPage: React.FC = () => {
  const { error, product, loading, handleAddToCart } = useDetail();

  if (loading) {
    return <SkeletonDetailPage />;
  }

  if (error) {
    return <ServiceUnavailable />;
  }

  const mainImage = product?.pictures?.[0]?.url || product?.thumbnail;

  return (
    <div className="flex flex-col w-full h-auto min-h-screen bg-white">
      <div className="flex flex-col flex-1">
        <div className="px-4 py-8 sm:px-6 lg:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
              
              <div className="flex-1 flex flex-col gap-6 min-w-0">
                <ProductGallery product={product} mainImage={mainImage} />

                {product?.description?.plain_text &&
                  product.description.plain_text !==
                    "Sin descripción disponible." && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        Descripción
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {product.description.plain_text}
                      </p>
                    </div>
                  )}
              </div>

              <div className="flex-1 border border-gray-200 rounded-lg p-6 lg:p-8 h-fit min-w-0">
                <ProductInfo product={product} />
                <ProductActions handleAddToCart={handleAddToCart} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
