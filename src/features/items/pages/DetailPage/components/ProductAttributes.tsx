import { Tag } from "lucide-react";
import type { Product } from "@/features/items/types";

interface ProductAttributesProps {
    product: Product | null | undefined;
}

const ProductAttributes: React.FC<ProductAttributesProps> = ({ product }) => {
    if (!product?.attributes || product.attributes.length === 0) return null;

    return (
        <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4">
                <Tag size={20} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                    Características principales
                </h3>
            </div>
            
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.attributes.map((attr) => (
                    <div
                        key={attr.id}
                        className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium uppercase text-gray-500 mb-1">
                                {attr.name}
                            </p>
                            <p className="text-sm font-semibold text-gray-900 break-words">
                                {attr.value_name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductAttributes;
