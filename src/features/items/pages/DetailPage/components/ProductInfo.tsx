import { Star, Heart } from "lucide-react";

import type { Product } from "@/features/items/types";

interface ProductInfoProps {
  product: Product | null | undefined;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  if (!product) return null;

  const isAvailable = (product.available_quantity ?? 0) > 0;
  const hasDiscount =
    product.original_price &&
    product.original_price > 0 &&
    product.original_price > product.price;
  const discountPercentage =
    hasDiscount && product.original_price
      ? Math.round(
          ((product.original_price - product.price) / product.original_price) *
            100
        )
      : 0;

  const isLowStock =
    (product.available_quantity ?? 0) > 0 &&
    (product.available_quantity ?? 0) <= 5;

  return (
    <div className="bg-white rounded-lg p-0">
      <div className="flex justify-between items-center mb-3">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium tracking-wide uppercase text-gray-500">
            {product.condition === "new" ? "Nuevo" : "Usado"} | +
            {product.sold_quantity ?? 0} vendidos
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Heart
              size={24}
              className="text-gray-400 hover:text-red-500 transition-colors"
            />
          </button>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
        {product.title}
      </h1>

      <div className="flex items-center gap-3">
        <p className="text-sm font-bold text-gray-900">
          {product.reviews?.rating_average ?? 0}
        </p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={15}
              className={`${
                index < Math.floor(product.reviews?.rating_average ?? 0)
                  ? "fill-blue-500 text-blue-500"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-600">
            ({product.reviews?.total ?? 0})
          </p>
        </div>
      </div>

      <div className="mb-4 pb-2">
        <div className="flex items-end gap-3">
          {hasDiscount && product.original_price && (
            <p className="text-sm text-gray-400 line-through">
              ${" "}
              {product.original_price.toLocaleString("es-CO", {
                minimumFractionDigits: 0,
              })}
            </p>
          )}
        </div>

        <div className="flex items-end gap-4 mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-gray-900">$</span>
            <span className="text-2xl font-black text-gray-900">
              {Math.floor(product.price).toLocaleString("es-CO")}
            </span>
            <span className="text-base font-bold text-gray-900 pb-1">
              {Math.round((product.price % 1) * 100)
                .toString()
                .padStart(2, "0")}
            </span>
          </div>

          {hasDiscount && (
            <div>
              <span className="text-2xl text-green-600">
                {discountPercentage}%
              </span>
              <span className="text-base text-green-600 leading-tight">
                OFF
              </span>
            </div>
          )}
        </div>

        {product.installments && product.installments.rate === 0 && (
          <div className="pb-6">
            <p className="text-sm text-green-600">
              Mismo precio en {product.installments.quantity} cuotas de
            </p>
            <p className="text-lg font-bold text-green-600">
              ${" "}
              {product.installments.amount.toLocaleString("es-CO", {
                minimumFractionDigits: 2,
              })}
            </p>
            {product.original_price && (
              <p className="text-xs text-gray-500 mt-2">
                Precio sin impuestos nacionales: ${" "}
                {(product.original_price * 0.65).toLocaleString("es-CO", {
                  minimumFractionDigits: 0,
                })}
              </p>
            )}
            <a
              href="#"
              className="text-sm font-light text-blue-600 hover:text-blue-800 mt-2 inline-block"
            >
              Ver los medios de pago
            </a>
          </div>
        )}

        {product.shipping?.free_shipping && (
          <div className="mb-6">
            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <p className="text-base font-medium text-green-600">
                  Llega gratis hoy
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Solo en CABA y zonas de GBA
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Comprando dentro de las próximas 5 h 27 min
                </p>
                <a
                  href="#"
                  className="text-sm font-light text-blue-600 hover:text-blue-800 mt-2 inline-block"
                >
                  Más formas de entrega
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="mb-2 pb-6">
          <div className="flex gap-3 items-start">
            <div className="flex-1">
              <p className="text-base font-bold text-green-600">
                Retiro gratis{"  "}
                <span className="font-medium text-gray-600">
                  a partir del jueves en correos y otros puntos
                </span>
              </p>
              <a
                href="#"
                className="text-sm font-light text-blue-600 hover:text-blue-800 mt-2 inline-block"
              >
                Ver en el mapa
              </a>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-700">
          <div className="flex-1">
            <p className="text-base font-semibold text-gray-900">
              {isAvailable ? "Stock disponible" : "No disponible"}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Cantidad:{" "}
              <span className="font-bold text-gray-900">
                {isAvailable ? product.available_quantity : 0}
              </span>{" "}
              <span className="font-bold text-gray-900">
                unidad
                {isAvailable && product.available_quantity !== 1 ? "es" : ""}
                {isLowStock && " ¡Últimas unidades!"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
