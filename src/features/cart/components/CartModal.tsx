import { X, ShoppingBag } from "lucide-react";
import { CartItemCard } from "./CartItemCard";
import { useCart } from "../hooks/useCart";

import { Button } from "@/shared/components/Button";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const {
    items,
    clearCart,
    totalPrice,
    totalItems,
    removeFromCart,
    updateQuantity,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed right-0 top-0 h-screen w-full max-w-md bg-white z-50 flex flex-col shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShoppingBag size={24} className="text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Mi Carrito</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cerrar carrito"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-gray-300 mb-4" />
              <p className="text-gray-600 font-medium">Tu carrito está vacío</p>
              <p className="text-sm text-gray-500 mt-1">
                Agrega productos para empezar a comprar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onUpdateQuantity={(quantity) =>
                    updateQuantity(item.id, quantity)
                  }
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal ({totalItems} items):</span>
                <span>
                  $
                  {totalPrice.toLocaleString("es-CO", {
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between font-bold text-lg text-gray-900">
                  <span>Total:</span>
                  <span>
                    $
                    {totalPrice.toLocaleString("es-CO", {
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3">
                Proceder a Pago
              </Button>
              <Button
                onClick={clearCart}
                className="w-full border border-red-600 text-red-600 hover:bg-red-50 py-3"
              >
                Vaciar Carrito
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
