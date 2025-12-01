import { Star, MapPin, Truck, Shield, CheckCircle, AlertCircle, Zap, Heart } from "lucide-react";

import type { Product } from "@/features/items/types";

interface ProductInfoProps {
    product: Product | null | undefined;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    if (!product) return null;

    const isAvailable = (product.available_quantity ?? 0) > 0;
    const hasDiscount = product.original_price && product.original_price > 0 && product.original_price > product.price;
    const discountPercentage = hasDiscount && product.original_price
        ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
        : 0;
    
    const isLowStock = (product.available_quantity ?? 0) > 0 && (product.available_quantity ?? 0) <= 5;

    return (
        <div className="bg-white rounded-lg p-0">
            <div className="flex justify-between items-start mb-3">
                <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                        {product.condition === "new" ? "Nuevo" : "Usado"} • +{product.sold_quantity ?? 0} vendidos
                    </p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Heart size={24} className="text-gray-400 hover:text-red-500 transition-colors" />
                </button>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {product.title}
            </h1>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            size={20}
                            className={`${
                                index < Math.floor(product.reviews?.rating_average ?? 0)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                            }`}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-base font-bold text-gray-900">
                        {product.reviews?.rating_average ?? 0}
                    </p>
                    <p className="text-sm text-gray-600">
                        ({product.reviews?.total ?? 0})
                    </p>
                </div>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-end gap-3 mb-2">
                    {hasDiscount && product.original_price && (
                        <p className="text-sm text-gray-500 line-through">
                            $ {product.original_price.toLocaleString("es-AR", { minimumFractionDigits: 0 })}
                        </p>
                    )}
                </div>
                <div className="flex items-baseline gap-4">
                    <p className="text-5xl font-bold text-gray-900">
                        $ {product.price.toLocaleString("es-AR", { minimumFractionDigits: 0 })}
                    </p>
                    {hasDiscount && (
                        <span className="px-3 py-1 text-lg font-bold text-white bg-red-500 rounded-full">
                            {discountPercentage}% OFF
                        </span>
                    )}
                </div>
            </div>

            {product.installments && product.installments.rate === 0 && (
                <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-sm text-gray-700 mb-1">Mismo precio en {product.installments.quantity} cuotas de</p>
                    <p className="text-2xl font-bold text-green-600">
                        $ {product.installments.amount.toLocaleString("es-AR", { minimumFractionDigits: 0 })}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Sin interés</p>
                </div>
            )}

            {product.shipping?.free_shipping && (
                <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex gap-3 items-start">
                        <Truck size={20} className="text-green-600 shrink-0 mt-1" />
                        <div className="flex-1">
                            <p className="text-base font-bold text-green-600">
                                Llega gratis hoy
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                Solo en CABA y zonas de GBA
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Comprando dentro de las próximas 24 horas
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                Más formas de entrega
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className={`mb-6 pb-6 border-b border-gray-200 flex gap-3 items-start`}>
                {isAvailable ? (
                    <CheckCircle size={20} className={isLowStock ? "text-yellow-600" : "text-green-600"} />
                ) : (
                    <AlertCircle size={20} className="text-red-600" />
                )}
                <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">
                        {isAvailable ? "Stock disponible" : "No disponible"}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        Cantidad: {isAvailable ? product.available_quantity : 0} unidad{isAvailable && product.available_quantity !== 1 ? "es" : ""}
                        {isLowStock && " ¡Últimas unidades!"}
                    </p>
                </div>
            </div>

            {product.warranty && (
                <div className="mb-6 pb-6 border-b border-gray-200 flex gap-3 items-start">
                    <Shield size={20} className="text-blue-600 shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-blue-600">{product.warranty}</p>
                    </div>
                </div>
            )}

            {product.seller_address && (
                <div className="mb-6 pb-6 border-b border-gray-200 flex gap-3 items-start">
                    <MapPin size={20} className="text-gray-600 shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                            Vende desde {product.seller_address.city?.name}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                            {product.seller_address.state?.name}
                        </p>
                    </div>
                </div>
            )}

            {product.description?.plain_text && product.description.plain_text !== "Sin descripción disponible." && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Zap size={18} className="text-blue-600" />
                        Descripción
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {product.description.plain_text}
                    </p>
                </div>
            )}

            {product.permalink && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <a 
                        href={product.permalink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >
                        Ver en Mercado Libre →
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProductInfo;
