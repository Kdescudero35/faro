import { Minus, Plus, ShoppingBag } from "lucide-react";
interface ProductActionsProps {
    quantity: number;
    handleAddToCart: () => void;
    handleIncrement: () => void;
    handleDecrement: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ handleAddToCart, quantity, handleIncrement, handleDecrement }) => {
    return (
        <div className="flex flex-col gap-4 items-center mt-4 sm:flex-row">
            <div className="flex items-center rounded-lg border border-slate-300 dark:border-slate-700">
                <button
                    className="p-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    onClick={handleDecrement}
                >
                    <Minus size={18} />
                </button>
                <input
                    type="text"
                    readOnly
                    value={quantity}
                    className="w-12 text-center bg-transparent border-0 text-slate-900 dark:text-white focus:ring-0"
                />
                <button
                    className="p-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    onClick={handleIncrement}
                >
                    <Plus size={18} />
                </button>
            </div>

            <button
                onClick={handleAddToCart}
                className="flex flex-1 gap-2 justify-center items-center px-6 py-3 w-full text-base font-bold text-white rounded-lg transition-colors bg-primary hover:bg-primary/90">
                <ShoppingBag size={18} />
                Comprar ahora
            </button>
        </div>
    );
};

export default ProductActions;
