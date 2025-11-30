import { useDetail } from "../../hooks/useDetail";

import ProductInfo from "./components/ProductInfo";
import ProductGallery from "./components/ProductGallery";
import ProductActions from "./components/ProductActions";
import ProductAttributes from "./components/ProductAttributes";

import { SkeletonDetailPage } from "@/shared/components/Skeleton/SkeletonDetailPage";

const ItemDetailPage: React.FC = () => {
    const { product, loading } = useDetail();

    if (loading) {
        return <SkeletonDetailPage />;
    }

    if (!product) {
        return <div className="flex justify-center items-center h-screen">Product not found</div>;
    }

    const mainImage = product.pictures?.[0]?.url || product.thumbnail;

    return (
        <>
            <div className="flex overflow-x-hidden relative flex-col w-full h-auto min-h-screen group/design-root">
                <div className="flex flex-col h-full layout-container grow">
                    <div className="px-4 py-8 sm:px-6 lg:px-8 md:py-12">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
                                <ProductGallery product={product} mainImage={mainImage} />
                                <div className="flex flex-col gap-6">
                                    <ProductInfo product={product} />
                                    <ProductActions />
                                    <ProductAttributes product={product} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetailPage;
