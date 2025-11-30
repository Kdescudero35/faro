import { Star } from 'lucide-react';

interface ProductCardProps {
    product: any;
    onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    return (
        <div className="flex overflow-hidden flex-col bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 group hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20">
            <div className="overflow-hidden relative aspect-video">
                <img
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    src={product.thumbnail}
                    alt={product.title}
                />
            </div>


            <div className="flex flex-col flex-1 p-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.title}</h3>


                <div className="flex flex-col gap-1 mt-2">
                    {product.installments && (
                        <p className="text-sm text-green-600 dark:text-green-400">
                            {product.installments.quantity}x $
                            {product.installments.amount.toLocaleString("es-CO", { minimumFractionDigits: 0 })}
                        </p>
                    )}


                    <div className="flex flex-wrap gap-2 items-center">
                        {product.shipping?.free_shipping && (
                            <span className="inline-flex self-start px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded dark:bg-green-900/30 dark:text-green-400">
                                Envío gratis
                            </span>
                        )}
                        {product.condition && (
                            <span
                                className={`inline-flex self-start px-2 py-0.5 text-xs font-semibold rounded ${product.condition === "new"
                                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                    }`}
                            >
                                {product.condition === "new" ? "Nuevo" : "Usado"}
                            </span>
                        )}
                    </div>
                </div>


                {product.reviews && (
                    <div className="flex gap-2 items-center mt-2">
                        <div className="flex gap-0.5 items-center">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={14}
                                    className={`${index < Math.floor(product.reviews?.rating_average ?? 0)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300 dark:text-gray-600"
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            {product.reviews.rating_average.toFixed(1)}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                            ({product.reviews.total})
                        </span>
                    </div>
                )}


                <div className="flex flex-1 justify-between items-end mt-4">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        ${product.price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}
                    </p>
                    <button
                        onClick={onClick}
                        className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors text-primary bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:text-white dark:hover:bg-primary/30"
                    >
                        Ver Detalles
                    </button>
                </div>
            </div>
        </div>
    );
};