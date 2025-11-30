import { useState } from "react";
import { Minus, Plus, ShoppingBag, HeartPlus } from "lucide-react";

const ProductActions: React.FC = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity((q) => q + 1);
    const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

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
                    className="w-12 text-center bg-transparent border-0 text-slate-900 dark:text-white focus:ring-0"
                    type="text"
                    value={quantity}
                    readOnly
                />
                <button
                    className="p-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    onClick={handleIncrement}
                >
                    <Plus size={18} />
                </button>
            </div>

            <button className="flex flex-1 gap-2 justify-center items-center px-6 py-3 w-full text-base font-bold text-white rounded-lg transition-colors bg-primary hover:bg-primary/90">
                <ShoppingBag size={18} />
                Comprar ahora
            </button>

            <button className="p-3 bg-white rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary">
                <HeartPlus size={18} />
            </button>
        </div>
    );
};

export default ProductActions;
