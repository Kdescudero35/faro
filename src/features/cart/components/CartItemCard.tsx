import { Minus, Plus, Trash2 } from "lucide-react";

import type { CartItem } from "../types";

interface CartItemCardProps {
    item: CartItem;
    onRemove: () => void;
    onUpdateQuantity: (quantity: number) => void;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
    item,
    onRemove,
    onUpdateQuantity,
}) => {

    const subtotal = (item.price * (item.quantity || 1)).toLocaleString("es-CO", {
        minimumFractionDigits: 0,
    });

    return (
        <div className="flex gap-4 py-4 border-b border-gray-200 last:border-b-0">
            
            <div className="shrink-0">
                <img
                    src={item?.pictures?.[0]?.url ?? ""}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-2">
                        {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        ${item.price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onUpdateQuantity(Math.max(1, (item.quantity || 1) - 1))}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                        aria-label="Disminuir cantidad"
                    >
                        <Minus size={16} className="text-gray-600" />
                    </button>
                    <span className="w-8 text-center font-semibold text-gray-900">
                        {item.quantity || 1}
                    </span>
                    <button
                        onClick={() => onUpdateQuantity((item.quantity || 1) + 1)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                        aria-label="Aumentar cantidad"
                    >
                        <Plus size={16} className="text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-end justify-between">
                <button
                    onClick={onRemove}
                    className="p-2 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Eliminar del carrito"
                >
                    <Trash2 size={18} className="text-red-600" />
                </button>
                <p className="font-bold text-gray-900">
                    ${subtotal}
                </p>
            </div>
        </div>
    );
};
