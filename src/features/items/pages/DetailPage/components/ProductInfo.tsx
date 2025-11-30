import { Star, StarHalf } from "lucide-react";

interface ProductInfoProps {
    product: any;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    return (
        <div>
            <p className="text-sm font-semibold tracking-wide uppercase text-primary">
                {product.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                {product.sold_quantity ?? 0} vendidos
            </p>
            <h1 className="mt-1 text-3xl font-extrabold md:text-4xl text-slate-900 dark:text-white">
                {product.title}
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
                    {product.reviews?.rating_average ?? 0} (
                    {product.reviews?.total ?? 0} Reviews)
                </p>
            </div>

            <p className="mt-4 leading-relaxed whitespace-pre-line text-slate-600 dark:text-slate-300">
                {product.description?.plain_text || "Sin descripción disponible."}
            </p>

            <p className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
                ${product.price.toLocaleString("es-AR")}
            </p>

            {product.warranty && (
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {product.warranty}
                </p>
            )}
        </div>
    );
};

export default ProductInfo;
