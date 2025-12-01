import { Minus, Plus, ShoppingCart } from "lucide-react";

interface ProductActionsProps {
    quantity: number;
    handleAddToCart: () => void;
    handleIncrement: () => void;
    handleDecrement: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ 
    handleAddToCart, 
    quantity, 
    handleIncrement, 
    handleDecrement 
}) => {
    return (
        <div className="space-y-3">
            {/* Selector de cantidad */}
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Cantidad:</span>
                <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                    <button
                        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                        onClick={handleDecrement}
                        aria-label="Disminuir cantidad"
                    >
                        <Minus size={18} />
                    </button>
                    <input
                        type="text"
                        readOnly
                        value={quantity}
                        className="w-12 text-center bg-transparent border-0 text-gray-900 font-semibold focus:ring-0"
                    />
                    <button
                        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                        onClick={handleIncrement}
                        aria-label="Aumentar cantidad"
                    >
                        <Plus size={18} />
                    </button>
                </div>
            </div>

            {/* Botón Comprar ahora - Principal */}
            <button
                onClick={handleAddToCart}
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
            >
                <ShoppingCart size={22} />
                Comprar ahora
            </button>

            {/* Botón Agregar al carrito - Secundario */}
            <button
                onClick={handleAddToCart}
                className="w-full py-3 px-6 border-2 border-blue-600 hover:bg-blue-50 text-blue-600 font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ProductActions;
