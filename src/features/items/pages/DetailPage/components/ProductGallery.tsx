interface ProductGalleryProps {
    product: any;
    mainImage: string | undefined;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product, mainImage }) => {
    return (
        <div className="flex flex-col gap-4">
            <div
                className="w-full bg-white bg-center bg-no-repeat bg-contain rounded-xl shadow-sm aspect-square"
                data-alt={product.title}
                style={{ backgroundImage: `url("${mainImage}")` }}
            ></div>

            {product.pictures && product.pictures.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                    {product.pictures.slice(0, 4).map((pic: any) => (
                        <div
                            key={pic.id}
                            className="w-full bg-white bg-center bg-no-repeat bg-contain rounded-lg ring-1 cursor-pointer ring-slate-200 aspect-square hover:ring-primary"
                            data-alt={product.title}
                            style={{ backgroundImage: `url("${pic.url}")` }}
                        ></div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductGallery;
