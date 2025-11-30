interface ProductAttributesProps {
    product: any;
}

const ProductAttributes: React.FC<ProductAttributesProps> = ({ product }) => {
    if (!product.attributes || product.attributes.length === 0) return null;

    return (
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Características principales
            </h3>
            <div className="mt-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {product.attributes.map((attr: any) => (
                        <div
                            key={attr.id}
                            className="flex flex-col p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50"
                        >
                            <span className="text-xs font-medium uppercase text-slate-500 dark:text-slate-400">
                                {attr.name}
                            </span>
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">
                                {attr.value_name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductAttributes;
