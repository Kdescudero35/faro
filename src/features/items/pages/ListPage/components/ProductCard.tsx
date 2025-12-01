import { Star, Truck } from "lucide-react";

interface ProductCardProps {
  product: any;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
}) => {
  return (
    <div
      className="flex overflow-hidden flex-row bg-white rounded-none border border-gray-200 border-b border-t-0 border-l-0 border-r-0 shadow-none transition-all duration-300 group hover:shadow-none py-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="overflow-hidden relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40">
        <img
          className="object-cover w-full h-full"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="flex flex-col flex-1 px-4">
        <div className="mb-2">
          <span className="inline-flex px-2 py-1 text-xs font-bold bg-black text-white rounded-sm">
            {product.seller?.name || "APPLE"}
          </span>
        </div>

        <h3 className="text-sm font-normal text-gray-900 line-clamp-2">
          {product.title}
        </h3>

        {product.reviews && (
          <div className="flex gap-2 items-center mt-2">
            <div className="flex gap-0.5 items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={12}
                  className={`${
                    index < Math.floor(product.reviews?.rating_average ?? 0)
                      ? "fill-blue-500 text-blue-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-gray-600">
              {product.reviews.rating_average.toFixed(1)}
            </span>
            <span className="text-xs text-gray-400">
              ({product.reviews.total})
            </span>
          </div>
        )}

        <div className="mt-2">
          {product.original_price && product.original_price > product.price && (
            <p className="text-xs text-gray-400 line-through">
              $
              {product.original_price.toLocaleString("es-CO", {
                minimumFractionDigits: 0,
              })}
            </p>
          )}

          <p className="text-lg font-bold text-gray-900">
            $
            {product.price.toLocaleString("es-CO", {
              minimumFractionDigits: 0,
            })}
          </p>

          {product.original_price && product.original_price > product.price && (
            <p className="text-xs text-green-600 font-bold">
              {Math.round(
                ((product.original_price - product.price) /
                  product.original_price) *
                  100
              )}
              % OFF
            </p>
          )}
        </div>

        {product.installments && (
          <p className="text-xs text-gray-500 mt-1">
            Mismo precio en {product.installments.quantity} cuotas de $
            {product.installments.amount.toLocaleString("es-CO", {
              minimumFractionDigits: 0,
            })}
          </p>
        )}

        <div className="flex flex-wrap gap-2 items-center mt-2">
          {product.shipping?.free_shipping && (
            <div className="flex gap-2 items-center mt-2 text-sm font-bold text-green-600">
              <Truck size={16} />
              <span>Envío gratis</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
