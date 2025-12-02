interface ProductActionsProps {
  handleAddToCart: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ handleAddToCart }) => (
  <div className="space-y-4 pb-6">
    <button
      onClick={handleAddToCart}
      className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-base"
    >
      Comprar ahora
    </button>

    <button
      onClick={handleAddToCart}
      className="w-full py-3 px-6 bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-base"
    >
      Agregar al carrito
    </button>
  </div>
);

export default ProductActions;
