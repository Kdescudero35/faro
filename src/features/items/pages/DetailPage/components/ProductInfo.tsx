import { Star, StarHalf, MapPin, Truck, CreditCard } from "lucide-react";

import type { Product } from "@/features/items/types";

interface ProductInfoProps {
    product: Product | null | undefined;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    return (
        <div>
            <p className="text-sm font-semibold tracking-wide uppercase text-primary">
                {product?.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                {product?.sold_quantity ?? 0} vendidos
            </p>
            <h1 className="mt-1 text-3xl font-extrabold md:text-4xl text-slate-900 dark:text-white">
                {product?.title}
            </h1>

            <div className="flex gap-2 items-center mt-3">
                <div className="flex items-center text-amber-400">
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <StarHalf size={18} fill="currentColor" />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    {product?.reviews?.rating_average ?? 0} (
                    {product?.reviews?.total ?? 0} Reseñas)
                </p>
            </div>

            <p className="mt-4 leading-relaxed whitespace-pre-line text-slate-600 dark:text-slate-300">
                {product?.description?.plain_text || "Sin descripción disponible."}
            </p>

            <p className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
                ${product?.price.toLocaleString("es-AR")}
            </p>

            {product?.installments && (
                <div className="flex gap-2 items-center mt-2 text-sm text-slate-600 dark:text-slate-300">
                    <CreditCard size={16} />
                    <span>
                        en {product.installments.quantity}x $ {product.installments.amount.toLocaleString("es-AR")}
                    </span>
                </div>
            )}

            {product?.shipping?.free_shipping && (
                <div className="flex gap-2 items-center mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                    <Truck size={16} />
                    <span>Envío gratis</span>
                </div>
            )}


            <div className="flex gap-2 items-center mt-4 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={16} />
                <span>
                    {product?.seller_address?.city.name}, {product?.seller_address?.state.name}
                </span>
            </div>


            {product?.warranty && (
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    {product.warranty}
                </p>
            )}
        </div>
    );
};

export default ProductInfo;
